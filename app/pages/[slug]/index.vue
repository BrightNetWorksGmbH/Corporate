<template>
  <div class="relative min-h-screen bg-midnight-blue pb-4">

    <!-- Error / Expired / Revoked state -->
    <div v-if="fetchError" class="min-h-screen bg-midnight-blue flex flex-col items-center justify-center px-6 text-center">
      <img src="/common/brytegate.svg" alt="BryteGate" class="max-w-[160px] mb-8 opacity-70" />
      <h2 class="text-clean-white text-2xl font-bold mb-4">{{ errorTitle }}</h2>
      <p class="text-clean-white/60 text-sm max-w-sm leading-relaxed">{{ errorMessage }}</p>
    </div>

    <!-- Corporate Instance Content -->
    <template v-else-if="corporateData">
      <div
        class="bg-cover bg-top min-h-[150vh] bg-no-repeat bg-clean-white"
        :style="{ backgroundImage: `url('/common/lady.png')` }"
      >
        <AppHeader />

        <!-- ── Hero / Landing Section ── -->
        <section class="w-full relative z-10 min-h-[100vh] mb-5 px-4 pt-24 flex flex-col items-center">
          <div class="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-end min-h-[80vh]">

            <!-- Left: Logo + Personalised Welcome -->
            <div class="space-y-6 h-full flex flex-col justify-center items-start">

              <!-- Client logo if available -->
              <div v-if="corporateData.client_logo_url" class="mb-2">
                <img
                  :src="corporateData.client_logo_url"
                  :alt="corporateData.client_company || corporateData.client_name"
                  class="max-h-20 max-w-[200px] object-contain"
                />
              </div>

              <!-- Personalised headline -->
              <h3 class="h3-headline text-midnight-blue leading-[1.4]">
                {{ $t('corporate.landing.greeting', { name: corporateData.client_name }) }}
              </h3>

              <!-- Personalised description -->
              <p class="text-start text-midnight-blue max-w-2xl leading-[2.1]">
                <span v-if="corporateData.client_company">
                  {{ $t('corporate.landing.descriptionWithCompany', {
                    name: corporateData.client_name,
                    company: corporateData.client_company,
                  }) }}
                </span>
                <span v-else>
                  {{ $t('corporate.landing.descriptionNoCompany', { name: corporateData.client_name }) }}
                </span>
              </p>

              <!-- Down arrow -->
              <div class="mt-6 flex justify-center w-full relative">
                <img src="/common/downarrow.png" alt="down arrow icon" class="w-28 h-24" />
              </div>
            </div>

            <!-- Right: Personalised intro text + BryteGate Card -->
            <div class="flex flex-col justify-end gap-6 py-4 h-full lg:col-span-1">
              <!-- <div class="space-y-3">
                <p class="text-midnight-blue font-bold text-lg leading-snug">
                  {{ $t('corporate.landing.rightGreeting', { name: corporateData.client_name }) }}
                </p>
                <p class="text-midnight-blue text-sm leading-relaxed max-w-sm">
                  <span v-if="corporateData.client_company">
                    {{ $t('corporate.landing.rightDescriptionWithCompany', {
                      name: corporateData.client_name,
                      company: corporateData.client_company,
                    }) }}
                  </span>
                  <span v-else>
                    {{ $t('corporate.landing.rightDescriptionNoCompany', { name: corporateData.client_name }) }}
                  </span>
                  <br />
                  {{ $t('corporate.landing.rightConfirm') }}
                  <br />
                  <span class="font-semibold">{{ $t('corporate.landing.rightNice') }}</span>
                </p>
              </div> -->
              <div class="flex justify-center lg:justify-end">
                <BryteGateCard
                  :corporate-mode="true"
                  :client-name="corporateData.client_name"
                  :manager-name="corporateData.manager?.name ?? ''"
                />
              </div>
            </div>

          </div>
        </section>

        <!-- Statistics Section (unchanged BryteArk content) -->
        <StatisticsSection />
      </div>

      <!-- ── Corporate Data Viewer ── -->
      <CorporateDataViewer
        :personal-files="store.personalDetailFiles"
        :downloadable-files="store.downloadableFiles"
      />

      <!-- Remaining BryteArk sections -->
      <AboutSection />
      <MissionSection />
      <div id="contact-section" class="relative z-10 -mt-10">
        <ContactSection />
      </div>
      <AppFooter />
    </template>

    <!-- Loading skeleton -->
    <div v-else class="min-h-screen bg-clean-white flex items-center justify-center">
      <div class="flex flex-col items-center gap-4">
        <img src="/common/brytegate.svg" alt="BryteGate" class="max-w-[140px] animate-pulse" />
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { useCorporateStore } from '~/stores/corporate'
import type { CorporateInstanceData } from '~/stores/corporate'

// NDA gate is enforced by the global middleware corporate-session.global.ts

const route = useRoute()
const config = useRuntimeConfig()
const { t } = useI18n()
const store = useCorporateStore()

const slug = computed(() => route.params.slug as string)

// ── Fetch corporate instance ──────────────────────────────────────────────────
const { data: instanceResponse, error: fetchError } = await useFetch<{
  success: boolean
  data: CorporateInstanceData
}>(() => `${config.public.backendUrl}/api/v1/corporate/instance/${slug.value}`, {
  key: `corporate-instance-${slug.value}`,
})

const corporateData = computed(() => instanceResponse.value?.data ?? null)
// console.log("corporateData", corporateData.value)

// Keep store in sync (for components that read from store)
watchEffect(() => {
  if (corporateData.value) {
    store.setInstance(corporateData.value)
  }
})

// ── Error helpers ─────────────────────────────────────────────────────────────
const errorTitle = computed(() => {
  if (!fetchError.value) return ''
  const status = (fetchError.value as any)?.statusCode
  if (status === 404) return t('corporate.error.notFound')
  return t('corporate.error.unavailable')
})

const errorMessage = computed(() => {
  if (!fetchError.value) return ''
  const code = (fetchError.value as any)?.data?.code
  if (code === 'CORPORATE_REVOKED') return t('corporate.error.revoked')
  if (code === 'CORPORATE_EXPIRED') return t('corporate.error.expired')
  if (code === 'CORPORATE_DISABLED') return t('corporate.error.disabled')
  return t('corporate.error.generic')
})

// ── Page meta ─────────────────────────────────────────────────────────────────
useHead({
  title: computed(() =>
    corporateData.value
      ? `${corporateData.value.client_name} — BryteArk`
      : 'BryteArk Corporate',
  ),
})
</script>
