/**
 * corporate-session.global.ts
 *
 * Global middleware — runs on EVERY navigation.
 *
 * Responsibilities:
 *   1. When the user lands on a /{slug} route, record the active slug in a
 *      session cookie so subsequent navigations to BryteArk pages (/alliance,
 *      /aufgabe, etc.) can still be gated by the NDA check.
 *   2. If the NDA for the active slug has not been accepted, redirect to
 *      /{slug}/nda — regardless of which page the user is trying to reach.
 *   3. Once the NDA cookie is set (after acceptance), every check is instant
 *      (cookie read only, no API call).
 *
 * Cookie semantics:
 *   corp_session_slug          — session cookie (no maxAge → cleared on browser
 *                                close). Tracks which corporate instance is active.
 *   corp_nda_{slug}            — persistent 30-day cookie. Set to '1' once NDA
 *                                is accepted. Used as a fast-path cache.
 */
export default defineNuxtRouteMiddleware(async (to) => {
  // ── 1. Identify the active slug ──────────────────────────────────────────
  const slugParam = to.params.slug as string | undefined

  // Session cookie — no maxAge means it's cleared when the browser closes.
  const sessionCookie = useCookie<string>('corp_session_slug', { sameSite: 'lax' })

  // When navigating to a [slug] route, update (or initialise) the session.
  if (slugParam) {
    sessionCookie.value = slugParam
  }

  const activeSlug = slugParam || sessionCookie.value
  if (!activeSlug) return // No corporate context in this session — allow freely.

  // ── 2. Never redirect away from the NDA page itself ──────────────────────
  if (to.path.endsWith('/nda')) return

  // ── 3. Fast path: NDA already accepted (cookie) ──────────────────────────
  const ndaCookie = useCookie<string>(`corp_nda_${activeSlug}`, {
    maxAge: 60 * 60 * 24 * 30, // 30 days
    sameSite: 'lax',
  })
  if (ndaCookie.value === '1') return

  // ── 4. Cold path: verify with backend ────────────────────────────────────
  const config = useRuntimeConfig()
  try {
    const response = await $fetch<{ success: boolean; data: { nda_accepted: boolean } }>(
      `${config.public.backendUrl}/api/v1/corporate/instance/${activeSlug}`,
    )
    if (response?.data?.nda_accepted) {
      ndaCookie.value = '1'
      return
    }
  } catch {
    // Instance not found / revoked / error.
    // If the user is NOT on a slug page, don't block them (the session might be
    // stale from a now-deleted instance).  Let the /{slug} page render the error.
    if (!slugParam) {
      sessionCookie.value = '' // clear stale session
      return
    }
    // On a /{slug} page let the page handle the error state.
    return
  }

  // ── 5. NDA not accepted — redirect to the NDA page ───────────────────────
  if (slugParam) {
    // Already on a /{slug}/... route: append /nda to the current path.
    const basePath = to.path.replace(/\/$/, '')
    return navigateTo(`${basePath}/nda`, { replace: true })
  }

  // On a BryteArk page (/alliance, /aufgabe, etc.):
  // Determine the locale prefix from the current URL so the redirect is
  // locale-aware (e.g. /en/alliance → /en/{slug}/nda).
  const localePrefix = to.path.startsWith('/en') ? '/en' : ''
  return navigateTo(`${localePrefix}/${activeSlug}/nda`, { replace: true })
})
