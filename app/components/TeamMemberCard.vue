<template>
  <div class="flex flex-col items-start overflow-hidden">
    <!-- Portrait Image -->
    <div class="w-full  md:h-[310px] md:max-w-[280px] flex justify-start overflow-hidden bg-black">
      <img
        :src="imageSrc"
        :alt="name"
        class="w-full h-full object-cover object-center bg-no-repeat grayscale"
      />
    </div>

    <!-- Name and Position -->
    <div class="text-start py-2">
      <h3 class="text-midnight-blue font-bold   text-xl">{{ name }}</h3>
      <p class="text-midnight-blue text-lg whitespace-nowrap ">{{ position }}</p>
    </div>

    <!-- REQUEST DATA Button -->
    <button
      @click="handleClick"
      class="px-4 py-1 border-[2px] border-black bg-clean-white text-midnight-blue tracking-wider font-bold hover:bg-gray-50 transition-colors flex items-center gap-2"
    >
      <img src="/common/lockprint.svg" alt="arrow right" class="w-6 h-6" />
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
