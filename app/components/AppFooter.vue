<template>
  <footer class="bg-clean-white py-5 lg:py-10 px-4 rounded-2xl border-t border-gray-200 relative z-10 mx-2">
    <div class="container mx-auto">
      <div class="relative flex items-center justify-between lg:py-10">
        <!-- Left: EU Logo with texts -->
        <div class="hidden md:flex items-center justify-center gap-3">
          <img src="/common/euflag.svg" alt="EU Flag" class="w-12 h-12" />
          <p class="text-[10px] text-midnight-blue">
            {{ $t('footer.euBannerLine1') }}
            <br>{{ $t('footer.euBannerLine2') }}
            <br>{{ $t('footer.euBannerLine3') }}
          </p>
        </div>

        <!-- Center: BryteArk Logo -->
        <div class="lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 flex flex-col items-center mb-8 py-10">
          <img src="/common/mainLogo.svg" alt="BryteArk Logo" class="h-16 md:h-28" />
        </div>

        <!-- Right: shared HeaderRightSection (fingerprint + full-screen menu) -->
        <div class="flex justify-end">
          <HeaderRightSection
            :is-menu-open="isMenuOpen"
            :pages="pages"
            @toggle-menu="toggleMenu"
            @close-menu="isMenuOpen = false"
          />
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const isMenuOpen = ref(false)

const { t } = useI18n()
const localePath = useLocalePath()

const pages = computed(() => [
  { name: t('nav.home'), path: localePath('/') },
  { name: t('nav.alliance'), path: localePath('/alliance') },
  { name: t('nav.aufgabe'), path: localePath('/aufgabe') },
  { name: t('nav.digitalAutonomy'), path: localePath('/digital-autonomy') },
  { name: t('nav.governance'), path: localePath('/governance') },
])

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const handleEsc = (e) => {
  if (e.key === 'Escape') isMenuOpen.value = false
}

onMounted(() => document.addEventListener('keydown', handleEsc))
onBeforeUnmount(() => document.removeEventListener('keydown', handleEsc))
</script>
