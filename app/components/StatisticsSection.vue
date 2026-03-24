<template>
  <div ref="sectionRef" class="container relative z-10 lg:min-h-[100vh] ">
    <div class="space-y-6 h-full w-full flex flex-col justify-center items-end min-h-[100vh] py-4">
      <!-- Stat Bar 1 - 90% -->
      <div class="w-[90%] relative overflow-hidden">
        <div
          class="absolute inset-y-0 right-0 bg-gradient-to-r from-[#E29B49] to-[#E2C649] bar-fill bar-fill--right"
          :class="{ 'bar-fill--active': hasAnimated }"
        />
        <div class="relative flex flex-col md:flex-row  gap-x-6 px-4 md:px-12 py-5 bar-content" :class="{ 'bar-content--visible': contentVisible }">
          <h2 class="text-h2 text-midnight-blue">{{ displayVal1 }}%</h2>
          <p class="text-midnight-blue text-xs leading-relaxed max-w-[300px]">
            {{ $t('statistics.bar1') }}
          </p>
        </div>
      </div>

      <!-- Stat Bar 2 - 72% -->
      <div class="w-[70%] relative overflow-hidden">
        <div
          class="absolute inset-y-0 right-0 bg-gradient-to-r from-[#E29B49] to-[#E2C649] bar-fill bar-fill--right"
          :class="{ 'bar-fill--active': hasAnimated }"
        />
        <div class="relative flex flex-col md:flex-row  gap-x-6 px-4 md:px-12 py-5 bar-content" :class="{ 'bar-content--visible': contentVisible }">
          <h2 class="text-h2 text-midnight-blue">{{ displayVal2 }}%</h2>
          <p class="text-midnight-blue text-xs leading-relaxed max-w-[300px]">
            {{ $t('statistics.bar2') }}
          </p>
        </div>
      </div>

      <!-- Stat Bar 3 - 08% -->
      <div class="w-[80%] relative overflow-hidden">
        <div
          class="absolute inset-y-0 right-0 bg-gradient-to-r from-[#E29B49] to-[#E2C649] bar-fill bar-fill--right"
          :class="{ 'bar-fill--active': hasAnimated }"
        />
        <div class="relative flex flex-col   px-4 md:px-12 py-5 bar-content" :class="{ 'bar-content--visible': contentVisible }">
          <h2 class="text-h2 text-midnight-blue">
            <span class="md:hidden">{{ mobileBar3Amount }}</span>
            <span class="hidden md:inline">{{ displayVal3Formatted }} $</span>
          </h2>
          <p class="text-midnight-blue text-xs leading-relaxed max-w-[300px]">
            {{ $t('statistics.bar3') }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const { locale } = useI18n()

const sectionRef = ref(null)
const hasAnimated = ref(false)
const contentVisible = ref(false)

const displayVal1 = ref(0)
const displayVal2 = ref(0)
const displayVal3 = ref(0)

const TARGETS = [90, 72, 8_000_000_000_000]
const BAR_DURATION_MS = 1600
const COUNT_DURATION_MS = 2200

const displayVal3Formatted = computed(() =>
  new Intl.NumberFormat('de-DE').format(displayVal3.value)
)

const mobileBar3Amount = computed(() =>
  locale.value === 'de' ? '8B $' : '8T $'
)

let observer = null

function easeOutQuart(t) {
  return 1 - (1 - t) ** 4
}

function animateValue(from, to, duration, update) {
  const start = performance.now()
  function step(now) {
    const elapsed = now - start
    const progress = Math.min(elapsed / duration, 1)
    const eased = easeOutQuart(progress)
    const value = Math.round(from + (to - from) * eased)
    update(value)
    if (progress < 1) requestAnimationFrame(step)
  }
  requestAnimationFrame(step)
}

function runAnimations() {
  if (hasAnimated.value) return
  hasAnimated.value = true
  contentVisible.value = true

  // Bar grows (1.6s) and text fades in together. After bar finishes, start number count-up.
  setTimeout(() => {
    animateValue(0, TARGETS[0], COUNT_DURATION_MS, (v) => { displayVal1.value = v })
    animateValue(0, TARGETS[1], COUNT_DURATION_MS, (v) => { displayVal2.value = v })
    animateValue(0, TARGETS[2], COUNT_DURATION_MS, (v) => { displayVal3.value = v })
  }, BAR_DURATION_MS)
}

function onIntersect(entries) {
  const entry = entries[0]
  if (!entry?.isIntersecting || hasAnimated.value) return
  runAnimations()
}

onMounted(() => {
  if (!sectionRef.value) return
  observer = new IntersectionObserver(onIntersect, {
    root: null,
    rootMargin: '0px',
    threshold: 0.15,
  })
  observer.observe(sectionRef.value)
})

onBeforeUnmount(() => {
  if (observer && sectionRef.value) {
    observer.unobserve(sectionRef.value)
  }
})
</script>

<style scoped>
.bar-fill {
  width: 0;
  transition: width 1.6s cubic-bezier(0.22, 1, 0.36, 1);
}

.bar-fill--right {
  left: auto;
}

.bar-fill--active {
  width: 100%;
}

.bar-content {
  opacity: 0;
  transition: opacity 0.25s ease-out;
}

.bar-content--visible {
  opacity: 1;
}
</style>
