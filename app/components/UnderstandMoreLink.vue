<template>
  <a
    :href="disabled ? undefined : (href || '#')"
    :aria-disabled="disabled"
    class="understand-more-link inline-flex items-center gap-2 font-bold underline transition-colors duration-300 ease-in-out cursor-pointer"
    :class="linkClasses"
    @click.prevent="onClick"
  >
    <!-- Icon container: both icons overlap and crossfade -->
    <span class="relative flex-shrink-0 w-6 h-6 flex items-center justify-center">
      <span
        class="absolute inset-0 flex items-center justify-center text-inherit link-icon-default transition-opacity duration-300 ease-in-out"
        aria-hidden="true"
      >
        <svg width="27" height="36" viewBox="0 0 27 36" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-4 h-5">
          <path d="M24 16.7L1.5 32.7V2.69995L24 16.7Z" stroke="currentColor" stroke-width="3"/>
        </svg>
      </span>
      <span
        class="absolute inset-0 flex items-center justify-center text-inherit link-icon-hover opacity-0 pointer-events-none transition-opacity duration-300 ease-in-out"
        aria-hidden="true"
      >
        <img src="/common/yellowupperarrow.svg" alt="" class="w-5 h-5 rotate-180" aria-hidden="true" />
      </span>
    </span>
    <span class="underline">{{ $t('common.understandMore') }}</span>
  </a>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  href: { type: String, default: '#' },
  disabled: { type: Boolean, default: false },
  /** Optional extra class for text size (e.g. text-xl) */
  textClass: { type: String, default: '' }
})

const emit = defineEmits(['click'])

const linkClasses = computed(() => {
  const base = []
  if (props.disabled) {
    base.push('text-blueish-gray pointer-events-none')
  } else {
    base.push(
      'text-midnight-blue',
      'hover:text-lemon',
      'active:text-midnight-blue'
    )
  }
  if (props.textClass) base.push(props.textClass)
  return base.join(' ')
})

function onClick(e) {
  if (props.disabled) {
    e.preventDefault()
    return
  }
  if (props.href === '#') {
    e.preventDefault()
  }
  emit('click', e)
}
</script>

<style scoped>
.understand-more-link:hover .link-icon-default,
.understand-more-link:active .link-icon-default {
  opacity: 0;
  pointer-events: none;
}
.understand-more-link:hover .link-icon-hover,
.understand-more-link:active .link-icon-hover {
  opacity: 1;
  pointer-events: auto;
}
</style>
