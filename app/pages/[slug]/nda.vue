<template>
  <div class="min-h-screen bg-midnight-blue flex flex-col">

    <!-- Background image with overlay -->
    <div
      class="flex-1 bg-cover bg-top bg-no-repeat relative"
      :style="{ backgroundImage: `url('/common/lady.png')` }"
    >
      <!-- White overlay for readability -->
      <div class="absolute inset-0 bg-clean-white/85 backdrop-blur-[1px]" />

      <AppHeader />

      <div class="relative z-10 flex items-center justify-center min-h-screen px-4 pt-32">
        <div class="w-full container">

          <!-- NDA Card -->
          <div class="bg-midnight-blue opacity-70 rounded-[24px] p-8 md:p-12 shadow-2xl">

            <!-- BryteGate Logo -->
            <div class="flex justify-center mb-6">
              <img src="/common/brytegate.svg" alt="BryteGate" class="max-w-[160px]" />
            </div>

            <!-- Fingerprint Icon -->
            <div class="flex justify-center mb-6">
              <img src="/white-icons/fingerprint1.svg" alt="fingerprint" class="w-10 h-10" />
            </div>

            <!-- Loading state -->
            <div v-if="pending" class="text-center py-8">
              <p class="text-clean-white/90 text-sm">{{ $t('corporate.nda.loading') }}</p>
            </div>

            <!-- Error state -->
            <div v-else-if="fetchError" class="text-center py-8">
              <p class="text-clean-white/90 text-sm">{{ $t('corporate.error.generic') }}</p>
            </div>

            <!-- NDA Content -->
            <template v-else-if="corporateData">
              <!-- Personalised greeting -->
              <h2 class="text-clean-white text-2xl font-bold text-center mb-4 leading-snug">
                {{ $t('corporate.nda.greeting', { name: corporateData.client_name }) }}
              </h2>

              <!-- Description -->
              <p class="text-clean-white/90 text-sm text-center leading-relaxed mb-2">
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

              <p class="text-clean-white/80 text-sm text-center leading-relaxed mb-8">
                {{ $t('corporate.nda.confirmText') }}
              </p>

              <!-- Divider -->
              <div class="border-t border-clean-white/10 mb-8" />

              <!-- NDA Declaration Text -->
              <div class="bg-midnight-blue/60 border border-clean-white/10 rounded-[12px] p-5 mb-8 max-h-48 overflow-y-auto">
                <p class="text-clean-white/60 text-xs leading-relaxed">
                  {{ $t('corporate.nda.declarationText') }}
                </p>
              </div>

              <!-- Checkbox -->
              <label class="flex items-start gap-3 mb-8 cursor-pointer group">
                <div
                  class="mt-0.5 w-5 h-5 rounded border-2 flex-shrink-0 flex items-center justify-center transition-colors"
                  :class="accepted ? 'border-lemon bg-lemon' : 'border-clean-white/40 bg-transparent group-hover:border-clean-white/90'"
                  @click="accepted = !accepted"
                >
                  <svg v-if="accepted" xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 text-midnight-blue" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                </div>
                <span class="text-clean-white/90 text-xs leading-relaxed">
                  {{ $t('corporate.nda.checkboxLabel') }}
                </span>
              </label>

              <!-- Accept Button -->
              <button
                :disabled="!accepted || submitting"
                @click="handleAccept"
                class="w-full py-4 rounded-[12px] font-bold text-sm transition-all"
                :class="accepted && !submitting
                  ? 'bg-lemon text-midnight-blue hover:bg-lemon/90 active:scale-[0.98]'
                  : 'bg-clean-white/10 text-clean-white/40 cursor-not-allowed'"
              >
                <span v-if="submitting">{{ $t('corporate.nda.submitting') }}</span>
                <span v-else>{{ $t('corporate.nda.acceptButton') }}</span>
              </button>

              <!-- Error message -->
              <p v-if="submitError" class="mt-4 text-red-400 text-xs text-center">
                {{ submitError }}
              </p>

              <!-- Connection status -->
              <div class="mt-6 text-center space-y-1">
                <p class="text-clean-white/60 text-[11px]">{{ $t('corporate.card.statusLine1') }}</p>
                <p class="text-clean-white/60 text-[11px]">{{ $t('corporate.card.statusLine2') }}</p>
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
