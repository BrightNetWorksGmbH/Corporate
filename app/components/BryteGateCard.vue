<template>
  <div class="bg-midnight-blue rounded-[30px] px-16 py-8 shadow-lg   flex flex-col items-center justify-center">
    <!-- Title with Icon -->
    <div class="flex items-center gap-2 mb-3">
      <!-- <h3 class="text-clean-white text-xl font-bold">BRYTEGATE</h3> -->
       <img src="/common/whitebrytelogo.svg" alt="brytegate" class=" " />
    </div>

    <!-- Fingerprint Icon -->
    <div class="flex justify-center mb-3 ">
      <!-- <div class="w-20 h-20  rounded-full flex items-center justify-center"> -->
        <img src="/white-icons/fingerprint1.svg" alt="fingure print white" class="w-8 h-8" />
      <!-- </div> -->
    </div>

    <!-- Token Input and Submit Button -->
    <div class="w-full flex items-center mb-3  transition-all  rounded-l-[10px]  overflow-hidden  ">
      <input v-model="token" type="text" placeholder="Type in Token"
        class="flex-1 py-[8.5px] px-10 h-full w-1/2 bg-black text-clean-white placeholder-clean-white text-[11px] font-semibold focus:outline-none  border-gray-500 transition-all rounded-l-[12px] border" />
      <button @click="handleSubmit" :disabled="!hasText"
        class="px-10 h-full font-bold transition-all whitespace-nowrap w-1/2" :class="buttonClasses">
        SUBMIT
      </button>
    </div>

    <!-- Status Messages -->
    <div class="text-clean-white text-xs space-y-1 mb-3 text-center text-[11px]">
      <p>Connection established.</p>
      <p>No personal Data transferred.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const token = ref('')
const scrollY = ref(0)

const hasText = computed(() => token.value.trim().length > 0)
const isScrolled = computed(() => scrollY.value > 100) // Adjust threshold as needed

// Container border classes
const containerBorderClass = computed(() => {
  // State 1 (UP): Thin light gray border
  if (!hasText.value && !isScrolled.value) {
    return 'border border-gray-400'
  }
  // State 2 (OVER): Thin light gray border (same as UP)
  if (hasText.value && !isScrolled.value) {
    return 'border border-gray-400'
  }
  // State 3 (DOWN): Thin golden yellow border
  if (isScrolled.value) {
    return 'border border-lemon-yellow'
  }
  return 'border border-gray-400'
})

// Input border class (right border separating from button)


// Button classes
const buttonClasses = computed(() => {
  // State 1: Initial (UP) - lemon-yellow background, midnight-blue text, no border
  if (!hasText.value) {
    return 'bg-lemon border-[5px] border-lemon text-midnight-blue border-0'
  }

  // State 2: When typing (OVER) - clean-white background, midnight-blue text, lemon-yellow border
  if (hasText.value) {
    return 'bg-clean-white border-[5px] border-clean-white text-midnight-blue border-[5px] border-lemon'
  }

  // State 3: When scrolled (DOWN) - midnight-blue background, clean-white text, clean-white border
  // if (isScrolled.value) {
  //   return 'bg-midnight-blue text-clean-white border-[5px] border-2 border-midnight-blue'
  // }

  // Default fallback
  return 'bg-lemon text-midnight-blue border-[5px] border-lemon'
})

const handleScroll = () => {
  scrollY.value = window.scrollY || window.pageYOffset
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll() // Initial check
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const handleSubmit = () => {
  // Handle token submission
  console.log('Token submitted:', token.value)
}
</script>
