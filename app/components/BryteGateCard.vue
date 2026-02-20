<template>
  <div class="bg-midnight-blue rounded-[40px] px-16 py-4 shadow-lg max-w-xl flex flex-col items-center justify-center">
    <!-- Title with Icon -->
    <div class="flex items-center gap-2 mb-6">
      <h3 class="text-clean-white text-xl font-bold">BRYTEGATE</h3>
    </div>

    <!-- Fingerprint Icon -->
    <div class="flex justify-center mb-6">
      <div class="w-20 h-20 border-2 border-clean-white rounded-full flex items-center justify-center">
        <svg class="w-12 h-12 text-clean-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04c.654-1.027 1.623-2.003 2.853-2.857.614-.425 1.283-.77 2-1.02m5.9-3.653c.376-.196.78-.36 1.2-.49m-1.2 0c-.42.13-.824.294-1.2.49m1.2 0c.376.196.78.36 1.2.49m0 0c.42-.13.824-.294 1.2-.49m-1.2.49c.376-.196.78-.36 1.2-.49m-1.2 0c-.42.13-.824.294-1.2.49" />
        </svg>
      </div>
    </div>

    <!-- Token Input and Submit Button -->
    <div 
      class="flex items-center mb-6  transition-all  rounded-l-2xl  overflow-hidden"
      
    >
      <input
        v-model="token"
        type="text"
        placeholder="Type in Token"
        class="flex-1 py-[6px] px-10 h-full w-1/2 bg-black text-clean-white placeholder-gray-400 focus:outline-none  border-gray-500 transition-all rounded-l-2xl border"
      />
      <button
        @click="handleSubmit"
        :disabled="!hasText"
        class="px-10 h-full font-bold transition-all whitespace-nowrap w-1/2"
        :class="buttonClasses"
      >
        SUBMIT
      </button>
    </div>

    <!-- Status Messages -->
    <div class="text-clean-white text-xs space-y-1">
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
  if (!hasText.value ) {
    return 'bg-lemon border-[5px] border-lemon text-midnight-blue border-0'
  }
  
  // State 2: When typing (OVER) - clean-white background, midnight-blue text, lemon-yellow border
  if (hasText.value ) {
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
