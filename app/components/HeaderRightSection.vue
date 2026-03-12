<template>
  <div class="relative flex flex-row items-center gap-4">
    <img src="/common/finterprintmark.svg" alt="" class="w-12 h-12" aria-hidden="true" />
    <div class="flex flex-row items-center gap-1 cursor-pointer" @click.stop="$emit('toggle-menu')">
      <img
        :src="isMenuOpen ? '/common/pressedMenu.svg' : '/common/menuDark.svg'"
        alt="Menu"
        class="w-12 h-12 hover:bg-lemon rounded-full"
      />
      <p
        class="right-0 top-1/2 transform rotate-180 text-xs font-semibold writing-vertical-rl text-midnight-blue"
      >
        {{ $t('header.menu') }}
      </p>
    </div>

    <!-- Full-width screen menu overlay -->
    <Transition name="menu-fade">
      <div
        v-if="isMenuOpen"
        class="fixed inset-0 z-[90] w-full h-[90vh] bg-midnight-blue overflow-y-auto overscroll-contain"
      >
        <!-- Language switcher: fixed top-left -->
        <div class="fixed top-6 left-6 z-[95]">
          <!-- <p class="text-xs font-bold text-midnight-blue/80 uppercase tracking-wider mb-2">{{ $t('language.label') }}</p> -->
          <div class="relative">
            <button
              type="button"
              class="flex items-center justify-between gap-2 px-4 py-2.5 text-sm font-bold text-clean-white    transition-colors border-b border-clean-white/20 min-w-[120px]"
              :aria-expanded="langDropdownOpen"
              aria-haspopup="listbox"
              aria-label="Select language"
              @click.stop="langDropdownOpen = !langDropdownOpen"
            >
              <span>{{ currentLocaleName }}</span>
              <span class="transition-transform duration-200 text-clean-white" :class="{ 'rotate-180': !langDropdownOpen }"><img src="/white-icons/vector.svg" alt="Down Arrow" class="w-4 h-4" /></span>
            </button>
            <Transition name="lang-dropdown">
              <ul
                v-if="langDropdownOpen"
                class="absolute top-full left-0 mt-1 py-1 bg-clean-white border border-midnight-blue/20 rounded-lg shadow-xl z-[110] min-w-[140px]"
                role="listbox"
              >
                <li>
                  <NuxtLink
                    :to="switchLocalePath('de')"
                    class="flex items-center gap-2 px-4 py-2.5 text-sm font-bold transition-colors block"
                    :class="locale === 'de' ? 'text-lemon bg-midnight-blue/10' : 'text-midnight-blue hover:text-lemon hover:bg-midnight-blue/5'"
                    role="option"
                    @click="langDropdownOpen = false; $emit('close-menu')"
                  >
                    {{ $t('language.de') }}
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    :to="switchLocalePath('en')"
                    class="flex items-center gap-2 px-4 py-2.5 text-sm font-bold transition-colors "
                    :class="locale === 'en' ? 'text-lemon bg-midnight-blue/10' : 'text-midnight-blue hover:text-lemon hover:bg-midnight-blue/5'"
                    role="option"
                    @click="langDropdownOpen = false; $emit('close-menu')"
                  >
                    {{ $t('language.en') }}
                  </NuxtLink>
                </li>
              </ul>
            </Transition>
          </div>
        </div>

        <!-- Close button: fixed top-right -->
        <button
          type="button"
          aria-label="Close menu"
          class="close-menu-btn group fixed top-6 right-6 z-[95] p-1 rounded transition-opacity duration-200 focus:outline-none focus:ring-2 focus:ring-lemon focus:ring-offset-2 focus:ring-offset-clean-white"
          @click.stop="$emit('close-menu')"
        >
          <span class="relative block w-8 h-8">
            <img
              src="/common/closedyellow.svg"
              alt=""
              class="w-8 h-8 close-icon-default transition-opacity duration-200 group-hover:opacity-70"
              aria-hidden="true"
            />
          </span>
        </button>
        <nav class="container mx-auto px-6 py-24 pt-20 space-y-0 max-w-2xl text-center">
          <NuxtLink
            v-for="page in pages"
            :key="page.path"
            :to="page.path"
            class="group flex items-center justify-center gap-4 px-4 py-5 text-2xl md:text-h3 font-bold transition-colors duration-300 ease-in-out border-b border-midnight-blue/10 last:border-b-0"
            :class="isPageActive(page) ? 'text-lemon' : 'text-clean-white hover:text-lemon'"
            @click="$emit('close-menu')"
          >
            <!-- Icons commented out for now -->
            <!-- <span class="relative flex-shrink-0 w-6 h-6 flex items-center justify-center">
              <span
                class="absolute inset-0 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-300 ease-in-out"
                aria-hidden="true"
              >
                <img src="/white-icons/bullet.svg" alt="" class="w-4 h-5" aria-hidden="true" />
              </span>
              <span
                class="absolute inset-0 flex items-center justify-center text-lemon opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-300 ease-in-out"
                aria-hidden="true"
              >
                <img
                  src="/common/yellowupperarrow.svg"
                  alt=""
                  class="w-5 h-5 rotate-180"
                  aria-hidden="true"
                />
              </span>
            </span> -->
            {{ page.name }}
          </NuxtLink>
        </nav>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, computed, watch, onBeforeUnmount } from 'vue'

const props = defineProps({
  isMenuOpen: { type: Boolean, required: true },
  pages: { type: Array, required: true },
})

defineEmits(['toggle-menu', 'close-menu'])

const route = useRoute()
const switchLocalePath = useSwitchLocalePath()
const { locale, t } = useI18n()

const langDropdownOpen = ref(false)

const isPageActive = (page) => {
  const currentPath = route.path.replace(/\/$/, '') || '/'
  const pagePath = page.path.replace(/\/$/, '') || '/'
  return currentPath === pagePath
}

const currentLocaleName = computed(() =>
  locale.value === 'de' ? t('language.de') : t('language.en')
)

watch(() => props.isMenuOpen, (open) => {
  if (!open) langDropdownOpen.value = false

  if (typeof document === 'undefined') return

  if (open) {
    document.documentElement.style.overflow = 'hidden'
    document.body.style.overflow = 'hidden'
  } else {
    document.documentElement.style.overflow = ''
    document.body.style.overflow = ''
  }
}, { immediate: true })

onBeforeUnmount(() => {
  if (typeof document === 'undefined') return
  document.documentElement.style.overflow = ''
  document.body.style.overflow = ''
})
</script>

<style scoped>
.writing-vertical-rl {
  writing-mode: vertical-rl;
  text-orientation: mixed;
}

.menu-fade-enter-active,
.menu-fade-leave-active {
  transition: opacity 0.3s ease;
}

.menu-fade-enter-from,
.menu-fade-leave-to {
  opacity: 0;
}


.lang-dropdown-enter-active,
.lang-dropdown-leave-active {
  transition: opacity 0.15s ease, transform 0.15s ease;
}

.lang-dropdown-enter-from,
.lang-dropdown-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
</style>
