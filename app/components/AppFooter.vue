<template>
  <footer class="bg-clean-white py-5 lg:py-10 px-4 rounded-2xl border-t border-gray-200 relative z-10 mx-2">
    <div class="container mx-auto">
      <div class="relative flex items-center justify-between lg:py-10">
        <!-- Left: EU Logo with texts -->
        <div class="hidden md:flex items-center justify-center gap-3 ">
          <img src="/common/euflag.svg" alt="EU Flag" class="w-12 h-12" />
          <p class="text-[10px]  text-midnight-blue">
            {{ $t('footer.euBannerLine1') }}
            <br>{{ $t('footer.euBannerLine2') }}
            <br>{{ $t('footer.euBannerLine3') }}
          </p>
        </div>

        <!-- Center: BryteArk Logo -->
        <div class="lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 flex flex-col items-center mb-8  py-10">
          <img src="/common/mainLogo.svg" alt="BryteArk Logo" class="h-16 md:h-28" />
        </div>

        <!-- Right: Fingerprint and Menu -->
        <div class="relative flex flex-row items-center gap-4 ">
          <img src="/common/finterprintmark.svg" alt="Menu" class="w-12 h-12" />
          <div class="flex flex-row items-center gap-1 cursor-pointer" @click.stop="toggleMenu">
            <img src="/common/menuDark.svg" alt="Menu" class="w-12 h-12" />
            <p
              class="text-midnight right-0 top-1/2 transform rotate-180 text-xs font-semibold writing-vertical-rl text-midnight-blue">
              {{ $t('footer.menu') }}
            </p>
          </div>

          <!-- Menu Dropdown (opens upward for footer) -->
          <Transition name="menu-fade">
            <div v-if="isMenuOpen" class="absolute bottom-full right-0 mb-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-[100]">
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
  transform: translateY(8px);
}
</style>
