<template>
  <section class="relative bg-clean-white px-4 md:px-16 py-20 rounded-b-2xl ">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full md:max-w-[90%] items-start">
        <!-- Left Section -->
        <div class="space-y-6 h-full  flex flex-col justify-center items-start">
          <!-- Icon -->
          <div class="w-full flex items-center justify-center">
            <div class="w-20 h-20 flex items-center justify-center">
            <img src="/common/triangle.svg" alt="EU Flag" class="w-20 h-20" />
          </div>
          </div>

          <!-- Main Heading -->
          <h2 class="text-h3 text-midnight-blue text-left whitespace-pre-line">
            {{ $t('about.heading') }}
          </h2>

          <!-- Sub-text -->
          <p class="copytext text-midnight-blue max-w-xl">
            {{ $t('about.subtext') }}
          </p>

          <!-- Call to Action Button -->
          <AppButton
            :text="$t('about.cta')"
            @click="handleButtonClick"
          />
        </div>

        <!-- Right Section -->
        <div class="space-y-4 h-full flex md:justify-center items-center">
          <nav class="flex flex-col gap-4">
            <NuxtLink
              v-for="link in navigationLinks"
              :key="link.to"
              :to="link.to"
              class="nav-link group inline-flex items-center gap-3 text-lg md:text-2xl leading-relaxed text-midnight-blue hover:text-lemon active:text-midnight-blue transition-colors duration-300 ease-in-out font-bold underline"
            >
              <!-- Icon container: bulletright default, downarrow on hover/active, smooth crossfade -->
              <span class="relative flex-shrink-0 w-6 h-6 flex items-center justify-center text-inherit">
                <span class="absolute inset-0 flex items-center justify-center nav-icon-default transition-opacity duration-300 ease-in-out" aria-hidden="true">
                  <svg width="27" height="36" viewBox="0 0 27 36" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-4 h-5">
                    <path d="M24 16.7L1.5 32.7V2.69995L24 16.7Z" stroke="currentColor" stroke-width="3"/>
                  </svg>
                </span>
                <span class="absolute inset-0 flex items-center justify-center nav-icon-hover opacity-0 pointer-events-none transition-opacity duration-300 ease-in-out" aria-hidden="true">
                  <img src="/common/yellowupperarrow.svg" alt="" class="w-5 h-5 rotate-180" aria-hidden="true" />
                </span>
              </span>
              <span class="underline">{{ link.text }}</span>
            </NuxtLink>
          </nav>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'

const { t } = useI18n()
const localePath = useLocalePath()

const navigationLinks = computed(() => [
  { text: t('about.link1'), to: localePath('/aufgabe') },
  { text: t('about.link2'), to: localePath('/governance') },
  { text: t('about.link3'), to: localePath('/alliance') },
  { text: t('about.link4'), to: localePath('/digital-autonomy') },
])

const handleButtonClick = () => {
  const contactSection = document.getElementById('contact-section')
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>

<style scoped>
.nav-link:hover .nav-icon-default,
.nav-link:active .nav-icon-default {
  opacity: 0;
  pointer-events: none;
}
.nav-link:hover .nav-icon-hover,
.nav-link:active .nav-icon-hover {
  opacity: 1;
  pointer-events: auto;
}
</style>
