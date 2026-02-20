<template>
  <div class="flex flex-col items-start overflow-hidden">
    <!-- Portrait Image -->
    <div class="w-[300px] h-[350px] aspect-square overflow-hidden ">
      <img
        :src="imageSrc"
        :alt="name"
        class="w-full h-full object-contain bg-no-repeat grayscale"
      />
    </div>

    <!-- Name and Position -->
    <div class="text-start">
      <h3 class="text-midnight-blue font-bold  mb-1 text-2xl">{{ name }}</h3>
      <p class="text-midnight-blue text-2xl">{{ position }}</p>
    </div>

    <!-- REQUEST DATA Button -->
    <button
      @click="handleClick"
      class="px-4 py-1 border-[2px] border-black bg-clean-white text-midnight-blue tracking-wider font-bold hover:bg-gray-50 transition-colors flex items-center gap-2"
    >
      <svg
        class="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
        />
      </svg>
      REQUEST DATA
    </button>
  </div>
</template>

<script setup>
defineProps({
  imageSrc: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  position: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['click'])

const handleClick = () => {
  emit('click')
}
</script>
