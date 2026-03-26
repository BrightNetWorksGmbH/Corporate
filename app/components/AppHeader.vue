<template>
  <!-- Full header: in flow, scrolls away when scrolling down -->
  <header class="container absolute top-0 left-0 right-0 z-50 w-full ">
    <div class="py-4 relative">
      <div class="grid grid-cols-2 md:grid-cols-[1fr_auto_1fr] items-center gap-4 ">
        <!-- Left: EU Logo with texts -->
        <div class="hidden md:flex items-center justify-start gap-3">
          <img src="/common/euflag.svg" alt="EU Flag" class="w-12 h-12" />
          <p class="text-[10px]  text-midnight-blue">
            {{ $t('header.euBannerLine1') }}
            <br>{{ $t('header.euBannerLine2') }}
            <br>{{ $t('header.euBannerLine3') }}
          </p>
        </div>

        <!-- Center: BryteArk Logo - truly centered between left and right -->
        <div class="flex flex-col items-center justify-center">
          <img src="/common/mainLogo.svg" alt="BryteArk Logo" class="h-16 md:h-28 mb-8" />
        </div>

        <!-- Right: Fingerprint and Menu -->
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
  </header>

  <!-- Sticky minimal bar: only when scrolling UP, shows only right section -->
  <Transition name="minimal-bar">
    <header
      v-if="showMinimalBar"
      class="fixed top-0 left-0 right-0 z-[70] w-full  backdrop-blur-sm border-b border-midnight-blue/10 shadow-sm"
      aria-label="Minimal navigation"
    >
      <div class="container py-3 flex items-center justify-end">
        <HeaderRightSection
          :is-menu-open="isMenuOpen"
          :pages="pages"
          @toggle-menu="toggleMenu"
          @close-menu="isMenuOpen = false"
        />
      </div>
    </header>
  </Transition>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const isMenuOpen = ref(false)
const showMinimalBar = ref(false)

const SCROLL_THRESHOLD = 120
let lastScrollY = 0
let ticking = false

const { pages } = useCorporateNav()

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const handleEsc = (e) => {
  if (e.key === 'Escape') isMenuOpen.value = false
}

function updateMinimalBar() {
  const scrollY = window.scrollY ?? window.pageYOffset
  // Show minimal bar only when scrolling UP and past threshold; hide at top or when scrolling down
  if (scrollY <= SCROLL_THRESHOLD) {
    showMinimalBar.value = false
  } else if (scrollY < lastScrollY) {
    showMinimalBar.value = true
  } else {
    showMinimalBar.value = false
  }
  lastScrollY = scrollY
  ticking = false
}

function onScroll() {
  if (!ticking) {
    requestAnimationFrame(updateMinimalBar)
    ticking = true
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleEsc)
  lastScrollY = window.scrollY ?? window.pageYOffset
  window.addEventListener('scroll', onScroll, { passive: true })
})

onBeforeUnmount(() => {
  document.removeEventListener('keydown', handleEsc)
  window.removeEventListener('scroll', onScroll)
})
</script>

<style scoped>
.minimal-bar-enter-active,
.minimal-bar-leave-active {
  transition: transform 0.25s ease-out, opacity 0.25s ease-out;
}

.minimal-bar-enter-from,
.minimal-bar-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}
</style>
