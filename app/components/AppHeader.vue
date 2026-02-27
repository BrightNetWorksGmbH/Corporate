<template>
  <header class="container absolute top-0 left-0 right-0 z-50 w-full ">
    <div class="py-4 ">
      <div class="flex items-center justify-between">
        <!-- Left: EU Logo with texts -->
        <div class="hidden md:flex items-center justify-center gap-3">
          <img src="/common/euflag.svg" alt="EU Flag" class="w-12 h-12" />
          <p class="text-[10px] font-semibold text-blueish-gray">
            Connection established via BryteGate.
            <br> Welcome to the Future of Resilient European Data.
            <br>No Personal Data Was Transferred or Saved Yet.
          </p>
        </div>

        <!-- Center: BryteArk Logo -->
        <div class="flex flex-col items-center">
          <img src="/common/mainLogo.svg" alt="BryteArk Logo" class="h-16 md:h-24" />
        </div>

        <!-- Right: Fingerprint and Menu -->
        <div class="relative flex flex-row items-center gap-4">
          <img src="/common/finterprintmark.svg" alt="Menu" class="w-12 h-12" />
          <div class="flex flex-row items-center gap-1 cursor-pointer" @click.stop="toggleMenu">
            <img
              :src="isMenuOpen ? '/common/pressedMenu.svg' : '/common/menuDark.svg'"
              alt="Menu"
              class="w-12 h-12 hover:bg-lemon rounded-full"
            />
            <p
              class="right-0 top-1/2 transform rotate-180 text-xs font-semibold writing-vertical-rl text-midnight-blue">
              MENU
            </p>
          </div>

          <!-- Menu Dropdown -->
          <Transition name="menu-fade">
            <div v-if="isMenuOpen"
              class="absolute top-full right-0 mt-2 w-56 bg-midnight-blue rounded-xl shadow-2xl border border-midnight-blue overflow-hidden z-[100]">
              <!-- Close button: top-right corner -->
              <button
                type="button"
                aria-label="Close menu"
                class="close-menu-btn group absolute top-2 right-2 z-10 p-1 rounded transition-opacity duration-200 focus:outline-none  focus:ring-offset-midnight-blue"
                @click.stop="isMenuOpen = false"
              >
                <span class="relative block w-6 h-6">
                  <img src="/common/closewhite.svg" alt="" class="w-6 h-6 close-icon-default transition-opacity duration-200 group-hover:opacity-0" aria-hidden="true" />
                  <img src="/common/closedyellow.svg" alt="" class="w-6 h-6 close-icon-hover absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100" aria-hidden="true" />
                </span>
              </button>
              <nav class="py-2 pt-10">
                <NuxtLink v-for="page in pages" :key="page.path" :to="page.path"
                  class="group flex items-center gap-3 px-5 py-3 text-sm font-semibold text-clean-white hover:text-lemon transition-colors duration-300 ease-in-out"
                  @click="isMenuOpen = false">
                  <!-- Default: white bullet (right-pointing triangle), fades out on hover -->
                  <span class="relative flex-shrink-0 w-6 h-6 flex items-center justify-center">
                    <span class="absolute inset-0 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-300 ease-in-out" aria-hidden="true">
                      <img src="/white-icons/bullet.svg" alt="" class="w-4 h-5" aria-hidden="true" />
                    </span>
                    <span class="absolute inset-0 flex items-center justify-center text-lemon opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-300 ease-in-out" aria-hidden="true">
                      <img src="/common/yellowupperarrow.svg" alt="" class="w-5 h-5 rotate-180" aria-hidden="true" />
                    </span>
                  </span>
                  {{ page.name }}
                </NuxtLink>
              </nav>
            </div>
          </Transition>
        </div>
      </div>
    </div>

    <!-- Backdrop to close menu when clicking outside -->
    <div v-if="isMenuOpen" class="fixed inset-0 z-[99]" @click="isMenuOpen = false"></div>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const isMenuOpen = ref(false)

const pages = [
  { name: 'Home', path: '/' },
  { name: 'Alliance', path: '/alliance' },
  { name: 'Aufgabe', path: '/aufgabe' },
  { name: 'Digital Autonomy', path: '/digital-autonomy' },
  { name: 'Governance', path: '/governance' },
]

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const handleEsc = (e) => {
  if (e.key === 'Escape') isMenuOpen.value = false
}

onMounted(() => document.addEventListener('keydown', handleEsc))
onBeforeUnmount(() => document.removeEventListener('keydown', handleEsc))
</script>

<style scoped>
.writing-vertical-rl {
  writing-mode: vertical-rl;
  text-orientation: mixed;
}

.menu-fade-enter-active,
.menu-fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.menu-fade-enter-from,
.menu-fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

.close-icon-hover {
  pointer-events: none;
}
</style>
