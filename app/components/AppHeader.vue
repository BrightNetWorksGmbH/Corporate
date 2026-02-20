<template>
  <header class="absolute top-0 left-0 right-0 z-50 w-full">
    <div class="container mx-auto px-4 py-4">
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
          <img src="/common/bryteArkDark.svg" alt="BryteArk Logo" class="h-24" />
        </div>

        <!-- Right: Fingerprint and Menu -->
        <div class="relative flex flex-row items-center gap-4">
          <div class="flex flex-row items-center gap-1 cursor-pointer bg-white" @click.stop="toggleMenu">
            <img src="/common/menuDark.svg" alt="Menu" class="w-10 h-10" />
            <p
              class="text-midnight right-0 top-1/2 transform rotate-180 text-xs font-semibold writing-vertical-rl text-midnight-blue">
              MENU
            </p>
          </div>

          <!-- Menu Dropdown -->
          <Transition name="menu-fade">
            <div v-if="isMenuOpen" class="absolute top-full right-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-[100]">
              <nav class="py-2">
                <NuxtLink
                  v-for="page in pages"
                  :key="page.path"
                  :to="page.path"
                  class="flex items-center gap-3 px-5 py-3 text-sm font-semibold text-midnight-blue hover:bg-gray-50 hover:text-lemon transition-colors"
                  @click="isMenuOpen = false"
                >
                  <span class="w-1.5 h-1.5 rounded-full bg-midnight-blue flex-shrink-0"></span>
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
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.menu-fade-enter-from,
.menu-fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
