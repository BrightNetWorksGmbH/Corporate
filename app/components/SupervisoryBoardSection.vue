<template>
  <section class="bg-clean-white rounded-2xl py-20 px-8 md:px-16 lg:px-24">
    <div class="container mx-auto">
      <!-- Title -->
      <h2 class="text-3xl max-md:font-bold md:text-h2 text-midnight-blue mb-12 text-center lg:text-left">
        Sichtbare Selbstindung. Unabhängige Kontrolle. 
        <span class="text-lemon">Unser Aufsichtsrat.</span>
      </h2>

      <!-- Dashed Border Box -->
      <div class="border-2 border-dashed border-midnight-blue rounded-2xl p-8 mb-12">
        <!-- Light Gray Box with Supervisory Board Members -->
        <div class="bg-gray-200 rounded-[50px] p-8 mb-8">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Supervisory Board Member 1 -->
            <div class="flex flex-col items-center text-center">
              <img src="/team/stephan.png" alt="Stephan Tomat"
                class="w-20 h-20 rounded-full object-cover grayscale mb-4 border-2 border-gray-300" />
              <h3 class="text-lg font-bold text-midnight-blue mb-1">Stephan Tomat</h3>
              <p class="text-sm text-midnight-blue mb-2">Aufsichtsrat</p>
              <p class="text-xs text-gray-500">CEO AKTUELLE POSITION</p>
            </div>

            <!-- Supervisory Board Chairman (Middle) -->
            <div class="flex flex-col items-center text-center">
              <img src="/team/stephan.png" alt="Stephan Tomat"
                class="w-20 h-20 rounded-full object-cover grayscale mb-4 border-2 border-gray-300" />
              <h3 class="text-lg font-bold text-midnight-blue mb-1">Stephan Tomat</h3>
              <p class="text-sm text-midnight-blue mb-2">Aufsichtsratvorsitzender</p>
              <p class="text-xs text-gray-500">CEO AKTUELLE POSITION</p>
            </div>

            <!-- Supervisory Board Member 3 -->
            <div class="flex flex-col items-center text-center">
              <img src="/team/stephan.png" alt="Stephan Tomat"
                class="w-20 h-20 rounded-full object-cover grayscale mb-4 border-2 border-gray-300" />
              <h3 class="text-lg font-bold text-midnight-blue mb-1">Stephan Tomat</h3>
              <p class="text-sm text-midnight-blue mb-2">Aufsichtsrat</p>
              <p class="text-xs text-gray-500">CEO AKTUELLE POSITION</p>
            </div>
          </div>
        </div>

        <!-- Downward Triangle -->
        <div class="flex justify-center mb-8">
          <svg class="w-8 h-8 text-midnight-blue" fill="none" stroke="currentColor" stroke-width="2"
            viewBox="0 0 24 24">
            <path d="M12 20L4 4h16L12 20z" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>

        <!-- Board of Directors Chairman (Outside Gray Box) -->
        <div class="flex flex-col items-center text-center">
          <img src="/team/stephan.png" alt="Stephan Tomat"
            class="w-20 h-20 rounded-full object-cover grayscale mb-4 border-2 border-gray-300" />
          <h3 class="text-lg font-bold text-midnight-blue mb-1">Stephan Tomat</h3>
          <p class="text-sm text-midnight-blue mb-2">Vorstandsvorsitzender</p>
          <p class="text-xs text-gray-500">CEO AKTUELLE POSITION</p>
        </div>
      </div>

      <!-- Bottom Text -->
      <p class="copytext-paragraph text-midnight-blue text-center max-w-4xl mx-auto">
        Verantwortung entsteht dort, wo Führung, Kontrolle und Fachlichkeit klar voneinander getrennt sind.
      </p>
    </div>
  </section>
</template>

<script setup>
// Supervisory Board Section Component
</script>
