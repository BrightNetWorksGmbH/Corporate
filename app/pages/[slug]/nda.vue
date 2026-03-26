<template>
  <!--
    Layout strategy:
    - Outermost div: background image + white wash overlay (position: relative)
    - All content sits inside a z-10 flex column that fills the full viewport
    - AppHeader is a natural flow element at the top
    - The card area uses flex-1 to fill the remaining height and centers the card
    - The card has a SOLID bg — opacity is NOT used on the wrapper so text is
      always fully opaque regardless of the background behind the card
  -->
  <div
    class="relative min-h-screen bg-cover bg-top bg-no-repeat"
    :style="{ backgroundImage: `url('/common/lady.png')` }"
  >
    <!-- White wash overlay — makes background soft so dark card pops -->
    <div class="absolute inset-0 bg-clean-white/82 pointer-events-none" />

    <!-- Content column sits above the overlay -->
    <div class="relative z-10 flex flex-col min-h-screen ">

      <AppHeader />

      <!-- Card area: flex-1 so it fills exactly the space below the header -->
      <div class="flex-1 flex items-center justify-center px-4 pt-36">
        <div class="w-full container">

          <!-- ── NDA Card ──
               bg-midnight-blue is SOLID — no opacity class on this element.
               Using border to visually separate from background on dark screens.  -->
          <div class="bg-midnight-blue rounded-[28px] p-8 md:px-12 md:py-10 shadow-2xl border border-white/5">

            <!-- BryteGate Logo -->
            <div class="flex justify-center mb-5">
              <img src="/common/brytegate.svg" alt="BryteGate" class="max-w-[150px]" />
            </div>

            <!-- Fingerprint Icon -->
            <div class="flex justify-center mb-6">
              <img src="/white-icons/fingerprint1.svg" alt="fingerprint" class="w-9 h-9" />
            </div>

            <!-- ── Loading ── -->
            <div v-if="pending" class="text-center py-10">
              <div class="inline-block w-5 h-5 border-2 border-clean-white/30 border-t-clean-white rounded-full animate-spin mb-3" />
              <p class="text-clean-white/60 text-sm">{{ $t('corporate.nda.loading') }}</p>
            </div>

            <!-- ── Fetch error ── -->
            <div v-else-if="fetchError" class="text-center py-10 space-y-2">
              <p class="text-clean-white text-base font-semibold">{{ $t('corporate.error.unavailable') }}</p>
              <p class="text-clean-white/50 text-xs">{{ $t('corporate.error.generic') }}</p>
            </div>

            <!-- ── NDA Content ── -->
            <template v-else-if="corporateData">

              <!-- Personalised greeting -->
              <h2 class="text-clean-white text-2xl font-bold text-center mb-3 leading-snug">
                {{ $t('corporate.nda.greeting', { name: corporateData.client_name }) }}
              </h2>

              <!-- Instance description -->
              <p class="text-clean-white/75 text-sm text-center leading-relaxed mb-1">
                <span v-if="corporateData.client_company">
                  {{ $t('corporate.nda.descriptionWithCompany', {
                    name: corporateData.client_name,
                    company: corporateData.client_company,
                  }) }}
                </span>
                <span v-else>
                  {{ $t('corporate.nda.descriptionNoCompany', { name: corporateData.client_name }) }}
                </span>
              </p>

              <p class="text-clean-white/60 text-sm text-center leading-relaxed mb-5">
                {{ $t('corporate.nda.confirmText') }}
              </p>

              <!-- Divider -->
              <div class="border-t border-clean-white/10 mb-6" />

              <!-- NDA Declaration text (scrollable) -->
              <div class="bg-white/5 border border-clean-white/10 rounded-[14px] p-5 mb-7 max-h-44 overflow-y-auto scrollbar-thin">
                <p class="text-clean-white/55 text-xs leading-[1.8]">
                  {{ $t('corporate.nda.declarationText') }}
                </p>
              </div>

              <!-- Checkbox -->
              <label class="flex items-start gap-3 mb-5 cursor-pointer group select-none">
                <button
                  type="button"
                  role="checkbox"
                  :aria-checked="accepted"
                  class="mt-0.5 w-5 h-5 rounded border-2 flex-shrink-0 flex items-center justify-center transition-all focus-visible:ring-2 focus-visible:ring-lemon/50"
                  :class="accepted
                    ? 'border-lemon bg-lemon'
                    : 'border-clean-white/35 bg-transparent group-hover:border-clean-white/70'"
                  @click="accepted = !accepted"
                >
                  <svg
                    v-if="accepted"
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-3 h-3 text-midnight-blue"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                </button>
                <span class="text-clean-white/80 text-xs leading-relaxed">
                  {{ $t('corporate.nda.checkboxLabel') }}
                </span>
              </label>

              <!-- Accept Button -->
              <button
                :disabled="!accepted || submitting"
                @click="handleAccept"
                class="w-full py-[14px] rounded-[12px] font-bold text-sm transition-all duration-200"
                :class="accepted && !submitting
                  ? 'bg-lemon text-midnight-blue hover:bg-lemon/90 active:scale-[0.98] shadow-lg shadow-lemon/10'
                  : 'bg-clean-white/8 text-clean-white/35 cursor-not-allowed'"
              >
                <span v-if="submitting" class="flex items-center justify-center gap-2">
                  <span class="inline-block w-3.5 h-3.5 border-2 border-midnight-blue/40 border-t-midnight-blue rounded-full animate-spin" />
                  {{ $t('corporate.nda.submitting') }}
                </span>
                <span v-else>{{ $t('corporate.nda.acceptButton') }}</span>
              </button>

              <!-- Inline submit error -->
              <p v-if="submitError" class="mt-4 text-red-400 text-xs text-center">
                {{ submitError }}
              </p>

              <!-- Footer status lines -->
              <div class="mt-7 pt-6 border-t border-clean-white/8 text-center space-y-1">
                <p class="text-clean-white/35 text-[11px]">{{ $t('corporate.card.statusLine1') }}</p>
                <p class="text-clean-white/35 text-[11px]">{{ $t('corporate.card.statusLine2') }}</p>
              </div>

            </template>

          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import type { CorporateInstanceData } from '~/stores/corporate'

const route = useRoute()
const router = useRouter()
const config = useRuntimeConfig()
const { t } = useI18n()

const slug = computed(() => route.params.slug as string)

// ── Fetch minimal corporate instance data for the NDA page ────────────────────
const { data: instanceResponse, pending, error: fetchError } = await useFetch<{
  success: boolean
  data: CorporateInstanceData
}>(() => `${config.public.backendUrl}/api/v1/corporate/instance/${slug.value}`, {
  key: `corporate-nda-${slug.value}`,
})

const corporateData = computed(() => instanceResponse.value?.data ?? null)

// ── If NDA is already accepted, redirect to homepage ─────────────────────────
watchEffect(() => {
  if (corporateData.value?.nda_accepted) {
    // Clear the NDA route and go to homepage
    const ndaCookie = useCookie(`corp_nda_${slug.value}`, { maxAge: 60 * 60 * 24 * 30 })
    ndaCookie.value = '1'
    const basePath = route.path.replace(/\/nda$/, '')
    router.replace(basePath)
  }
})

// ── Accept NDA ────────────────────────────────────────────────────────────────
const accepted = ref(false)
const submitting = ref(false)
const submitError = ref<string | null>(null)

async function handleAccept() {
  if (!accepted.value || submitting.value || !corporateData.value) return

  submitting.value = true
  submitError.value = null

  try {
    await $fetch(`${config.public.backendUrl}/api/v1/corporate/accept-nda`, {
      method: 'POST',
      body: { corporate_instance_id: corporateData.value._id },
    })

    // Mark accepted in cookie so the middleware skips the API call going forward
    const ndaCookie = useCookie(`corp_nda_${slug.value}`, { maxAge: 60 * 60 * 24 * 30 })
    ndaCookie.value = '1'

    // Navigate to the corporate homepage
    const homePath = route.path.replace(/\/nda$/, '')
    await router.push(homePath)
  } catch (err: any) {
    submitError.value = err?.data?.message ?? t('corporate.nda.submitError')
  } finally {
    submitting.value = false
  }
}

// ── Page meta ─────────────────────────────────────────────────────────────────
useHead({
  title: computed(() =>
    corporateData.value
      ? `${t('corporate.nda.pageTitle')} — ${corporateData.value.client_name}`
      : 'BryteArk Corporate',
  ),
})
</script>
