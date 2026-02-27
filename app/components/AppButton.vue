<template>
  <button
    type="button"
    :disabled="disabled"
    @click="$emit('click')"
    class="px-4 md:px-14 max-md:w-full py-3 border-[5px] text-xl leading-relaxed tracking-[2px] font-bold transition-colors duration-300 ease-in-out disabled:cursor-not-allowed border-lemon bg-clean-white text-midnight-blue hover:bg-lemon hover:border-lemon active:bg-midnight-blue active:border-midnight-blue active:text-clean-white disabled:border-blueish-gray disabled:bg-clean-white disabled:text-blueish-gray"
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
  },
  disabled: {
    type: Boolean,
    default: false
  }
})

defineEmits(['click'])
</script>
