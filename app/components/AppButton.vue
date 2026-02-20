<template>
  <button
    @click="$emit('click')"
    class="px-4 md:px-16 max-md:w-full py-3 border-[5px] border-lemon bg-clean-white text-xl leading-relaxed tracking-[2px] text-midnight-blue font-bold hover:bg-yellow-50 transition-colors"
    :class="customClass"
  >
    <slot>{{ text }}</slot>
  </button>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    default: ''
  },
  customClass: {
    type: String,
    default: ''
  }
})

defineEmits(['click'])
</script>
