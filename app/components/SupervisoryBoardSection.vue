<template>
  <section class="bg-clean-white rounded-2xl py-20 px-8 md:px-16 lg:px-16 -mt-6">
    <div class="container mx-auto">
      <!-- Title -->
      <h2 class="text-3xl max-md:font-bold md:text-h2 text-midnight-blue mb-12 text-center lg:text-left">
        {{ $t('supervisoryBoard.title') }}
        <span class="text-[lemon]">{{ $t('supervisoryBoard.titleHighlight') }}</span>
      </h2>

      <!-- Dashed Border Box -->
      <div class="border-2 border-dashed border-midnight-blue rounded-[40px] p-8 mb-12">
        <!-- Light Gray Box with Supervisory Board Members -->
        <div class="bg-gray-200 rounded-[50px] p-8 mb-4">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Supervisory Board Member 1 -->
            <div class="flex flex-col items-center text-center">
              <img src="/team/stephan.png" alt="Stephan Tomat"
                class="w-16 h-16  rounded-full object-left object-contain bg-black grayscale mb-4 border-2 border-gray-300" />
              <h3 class="text-lg font-bold text-midnight-blue mb-1">Stephan Tomat</h3>
              <p class="text-sm text-midnight-blue mb-2">{{ $t('supervisoryBoard.member') }}</p>
              <p class="text-xs text-gray-500">{{ $t('supervisoryBoard.currentPosition') }}</p>
            </div>

            <!-- Supervisory Board Chairman (Middle) -->
            <div class="flex flex-col items-center text-center">
              <img src="/team/stephan.png" alt="Stephan Tomat"
                class="w-16 h-16 rounded-full object-left object-contain bg-black grayscale mb-4 border-2 border-gray-300" />
              <h3 class="text-lg font-bold text-midnight-blue mb-1">Stephan Tomat</h3>
              <p class="text-sm text-midnight-blue mb-2">{{ $t('supervisoryBoard.chairman') }}</p>
              <p class="text-xs text-gray-500">{{ $t('supervisoryBoard.currentPosition') }}</p>
            </div>

            <!-- Supervisory Board Member 3 -->
            <div class="flex flex-col items-center text-center">
              <img src="/team/stephan.png" alt="Stephan Tomat"
                class="w-16 h-16 rounded-full object-left object-contain bg-black grayscale mb-4 border-2 border-gray-300" />
              <h3 class="text-lg font-bold text-midnight-blue mb-1">Stephan Tomat</h3>
              <p class="text-sm text-midnight-blue mb-2">{{ $t('supervisoryBoard.member') }}</p>
              <p class="text-xs text-gray-500">{{ $t('supervisoryBoard.currentPosition') }}</p>
            </div>
          </div>
        </div>

        <!-- Downward Triangle -->
        <div class="flex justify-center mb-4">
          <img src="/common/upperarrow.svg" alt="link icons" class="w-8 h-8" />
        </div>

        <!-- Board of Directors Chairman (Outside Gray Box) -->
        <div class="flex flex-col items-center text-center">
          <img src="/team/stephan.png" alt="Stephan Tomat"
            class="w-16 h-16 rounded-full object-left object-contain bg-black grayscale mb-4 border-2 border-gray-300" />
          <h3 class="text-lg font-bold text-midnight-blue mb-1">Stephan Tomat</h3>
          <p class="text-sm text-midnight-blue mb-2">{{ $t('supervisoryBoard.ceo') }}</p>
          <p class="text-xs text-gray-500">{{ $t('supervisoryBoard.currentPosition') }}</p>
        </div>
      </div>

      <!-- Bottom Text -->
      <p class="copytext-paragraph text-midnight-blue text-center max-w-4xl mx-auto">
        {{ $t('supervisoryBoard.bottomText') }}
      </p>
    </div>
  </section>
</template>

<script setup>
// Supervisory Board Section Component
</script>
