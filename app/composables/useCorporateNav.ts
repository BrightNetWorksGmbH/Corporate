/**
 * useCorporateNav
 *
 * Provides slug-aware, locale-aware navigation paths for AppHeader and AppFooter.
 *
 * When the user is inside a corporate instance page (route.params.slug is set),
 * every navigation link is prefixed with the slug:
 *   Home     → /{slug}
 *   Alliance → /{slug}/alliance
 *   Aufgabe  → /{slug}/aufgabe
 *   …
 *
 * When on a public BryteArk page (no slug in route), links fall back to the
 * regular root paths:
 *   Home     → /
 *   Alliance → /alliance
 *   …
 *
 * In both cases, localePath() prepends the locale prefix for non-default
 * locales (e.g. /en/{slug}/alliance for English).
 *
 * The switchLocalePath() call in HeaderRightSection is NOT touched because
 * @nuxtjs/i18n automatically resolves it from the current route — it already
 * works correctly for all [slug]/* pages.
 */
export const useCorporateNav = () => {
  const route = useRoute()
  const localePath = useLocalePath()
  const { t } = useI18n()

  /** Slug from the current route, or undefined on public pages. */
  const slug = computed(() => route.params.slug as string | undefined)

  /**
   * Build a locale-prefixed path.
   *
   * @param page  Sub-page name without leading slash, e.g. 'alliance'.
   *              Pass an empty string '' for the homepage.
   */
  function buildPath(page: string): string {
    if (slug.value) {
      // Corporate context: prefix every page with the slug.
      const raw = page ? `/${slug.value}/${page}` : `/${slug.value}`
      return localePath(raw)
    }
    // Public context: standard root-level paths.
    return localePath(page ? `/${page}` : '/')
  }

  /**
   * Ready-to-use pages array — matches the shape expected by HeaderRightSection.
   * Reactive: updates when the locale or the slug changes.
   */
  const pages = computed(() => [
    { name: t('nav.home'),          path: buildPath('') },
    { name: t('nav.alliance'),      path: buildPath('alliance') },
    { name: t('nav.aufgabe'),       path: buildPath('aufgabe') },
    { name: t('nav.digitalAutonomy'), path: buildPath('digital-autonomy') },
    { name: t('nav.governance'),    path: buildPath('governance') },
  ])

  return { slug, pages, buildPath }
}
