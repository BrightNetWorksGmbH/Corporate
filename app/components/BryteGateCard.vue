<template>
  <div class="bg-midnight-blue rounded-[30px] px-10 py-8 shadow-lg flex flex-col items-center justify-center min-w-[260px] max-w-[320px]">

    <!-- BryteGate Logo -->
    <div class="flex items-center gap-2 mb-3 h-6 p-2 overflow-hidden">
      <img src="/common/brytegate.svg" alt="brytegate" class="object-contain max-w-[200px]" />
    </div>

    <!-- Fingerprint Icon -->
    <div class="flex justify-center mb-4">
      <img
        :src="corporateMode ? '/white-icons/lockfingure.svg' : '/white-icons/fingerprint1.svg'"
        alt="fingerprint"
        class="w-8 h-8"
      />
    </div>

    <!-- ── Corporate Mode ── -->
    <template v-if="corporateMode">

      <!-- Personalised greeting (client name optional) -->
      <p class="text-clean-white/70 text-[11px] text-center leading-relaxed mb-3 px-2">
        <template v-if="clientFirstName">
          {{ $t('corporate.card.greeting', { name: clientFirstName, manager: managerDisplayName }) }}
        </template>
        <template v-else>
          {{ $t('corporate.card.greetingNoClient', { manager: managerDisplayName }) }}
        </template>
      </p>

      <!-- Manager name row (read-only, styled like an input) -->
      <div class="w-full flex items-center mb-4 rounded-[12px] overflow-hidden border border-clean-white/20">
        <div class="flex-1 py-[9px] px-5 bg-black/40 text-clean-white text-[11px] font-semibold truncate">
          {{ managerName || $t('corporate.card.managerFallback') }}
        </div>
        <div class="px-4 py-[9px] bg-black/40 border-l border-clean-white/20 flex items-center">
          <img src="/common/whitelock.svg" alt="locked" class="w-3.5 h-3.5 opacity-60" />
        </div>
      </div>

    </template>

    <!-- ── Default (Token Input) Mode ── -->
    <template v-else>
      <div class="w-full flex items-center mb-3 transition-all rounded-l-[10px] overflow-hidden">
        <input
          v-model="token"
          type="text"
          :placeholder="$t('brytegate.tokenPlaceholder')"
          class="flex-1 py-[9px] px-7 h-full w-[55%] bg-black text-clean-white placeholder-clean-white text-[11px] font-semibold focus:outline-none border-gray-500 transition-all rounded-l-[12px] border"
        />
        <button
          @click="handleSubmit"
          :disabled="!hasText"
          class="px-5 h-full font-semibold transition-all whitespace-nowrap w-[45%] text-xs py-1"
          :class="buttonClasses"
        >
          {{ $t('brytegate.submit') }}
        </button>
      </div>
    </template>

    <!-- Status Lines -->
    <div class="text-clean-white text-xs space-y-1 mb-1 text-center text-[11px]">
      <p>{{ $t('corporate.card.statusLine1') }}</p>
      <p>{{ $t('corporate.card.statusLine2') }}</p>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

const props = defineProps<{
  corporateMode?: boolean
  clientName?: string
  managerName?: string
}>()

const { t } = useI18n()

// First token of client name (empty when optional client name omitted)
const clientFirstName = computed(() => {
  const n = props.clientName?.trim()
  return n ? n.split(' ')[0]! : ''
})

const managerFirstName = computed(() => props.managerName?.trim()?.split(' ')[0] ?? '')

const managerDisplayName = computed(() =>
  managerFirstName.value ? managerFirstName.value : t('corporate.card.managerFallback'),
)

// ── Token input state (default mode only) ────────────────────────────────────
const token = ref('')
const scrollY = ref(0)

const hasText = computed(() => token.value.trim().length > 0)
const isScrolled = computed(() => scrollY.value > 100)

const buttonClasses = computed(() => {
  if (!hasText.value) return 'bg-lemon border-[5px] border-lemon text-midnight-blue border-0'
  if (hasText.value) return 'bg-clean-white border-px border-clean-white text-midnight-blue border-[5px] border-lemon'
  return 'bg-lemon text-midnight-blue border-[5px] border-lemon'
})

const handleScroll = () => {
  scrollY.value = window.scrollY || window.pageYOffset
}

onMounted(() => {
  if (!props.corporateMode) {
    window.addEventListener('scroll', handleScroll)
    handleScroll()
  }
})

onUnmounted(() => {
  if (!props.corporateMode) {
    window.removeEventListener('scroll', handleScroll)
  }
})

const handleSubmit = () => {
  console.log('Token submitted:', token.value)
}
</script>
