<template>
  <section class="bg-clean-white py-20 px-4 md:px-16 rounded-b-2xl">
    <div class="container mx-auto">
      <!-- Title with Mixed Colors -->

      <!-- Top Section: Two Columns -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20 copytext-paragraph">
        <!-- Left Section -->
        <div class="space-y-12 md:pr-10">
          <h4 class="text-left text-h4 text-midnight-blue max-w-6xl leading-relaxed tracking-wide mb-10 whitespace-pre-line">
            {{ $t('allianceContent.title1') }}
          </h4>
          <p class="text-midnight-blue ">
            {{ $t('allianceContent.paragraph1') }}
          </p>
          <div class="flex flex-col gap-4">
            <div class="flex items-start ">
              <div class="flex items-center justify-center mt-2 w-6 h-6 ">
                <div class="h-3 w-3 bg-lemon rounded-full"></div>
              </div>
              <span class="text-break whitespace-normal">{{ $t('allianceContent.bullet1') }}</span>
            </div>
            <div class="flex items-start ">
              <div class="flex items-center justify-center mt-2 w-6 h-6 ">
                <div class="h-3 w-3 bg-lemon rounded-full"></div>
              </div>
              <span class="text-break whitespace-normal pl-2">{{ $t('allianceContent.bullet2') }}</span>
            </div>
          </div>
          <p class=" text-midnight-blue">
            {{ $t('allianceContent.paragraph2') }}
          </p>
        </div>

        <!-- Right Section -->
        <div class="space-y-6 ">
          <h4 class="text-left text-h4 text-midnight-blue max-w-6xl leading-relaxed tracking-wide mb-10 whitespace-pre-line">
            {{ $t('allianceContent.title2') }}
          </h4>
          <p class=" text-midnight-blue mb-10">
            {{ $t('allianceContent.paragraph3') }}
          </p>
          <div>
            <div class="flex items-start ">
              <div class="flex items-center justify-center mt-2 w-6 h-6 ">
                <div class="h-3 w-3 bg-lemon rounded-full"></div>
              </div>
              <span class="text-break whitespace-normal">{{ $t('allianceContent.bullet3') }}</span>
            </div>
            <div class="flex items-center ">
              <div class="flex items-center justify-center mt-2 w-6 h-6 ">
                <div class="h-3 w-3 bg-lemon rounded-full"></div>
              </div>
              <span class="text-break whitespace-normal">{{ $t('allianceContent.bullet4') }}</span>
            </div>
            <div class="flex items-center ">
              <div class="flex items-center justify-center mt-2 w-6 h-6 ">
                <div class="h-3 w-3 bg-lemon rounded-full"></div>
              </div>
              <span class="text-break whitespace-normal">{{ $t('allianceContent.bullet5') }}</span>
            </div>
          </div>
          <p class=" text-midnight-blue">
            {{ $t('allianceContent.paragraph4') }}
          </p>



      
        </div>
      </div>
      <h2 class="text-3xl max-md:font-bold md:text-h2 max-w-6xl text-lemon text-left whitespace-pre-line">{{ $t('allianceContent.title3') }}</h2>

      <!-- Alliance Image + Text Section -->
      <div class="flex flex-col lg:flex-row gap-12 mt-16 mb-20 ">
        <!-- Left: Image -->
        <div class="w-full lg:w-1/2 md:-ml-24 ">
          <img src="/sheep.png" alt="Alliance" class="w-full h-full object-cover grayscale" />
        </div>

        <!-- Right: Text Content -->
        <div class="w-full lg:w-1/2 space-y-8 copytext-paragraph">
          <p class="text-midnight-blue">
            {{ $t('allianceContent.paragraph5') }}
          </p>

          <h3 class="text-3xl max-md:font-bold md:text-h3 text-midnight-blue font-bold leading-tight whitespace-pre-line">
            {{ $t('allianceContent.title4') }}
          </h3>

          <p class="text-midnight-blue">
            {{ $t('allianceContent.paragraph6') }}
          </p>

          <div class="pt-4">
            <AppButton :text="$t('about.cta')" @click="handleButtonClick" />
          </div>
        </div>
      </div>

      <!-- Bottom Section: Trapezium/Rhombus Shape Dots -->
      <div class="flex justify-center py-8">
        <div class="flex flex-col items-center gap-1">
          <!-- Row 1: 1 dot -->
          <div class="flex gap-2">
            <div class="w-2 h-2 bg-midnight-blue rounded-full"></div>
          </div>
          <!-- Row 2: 2 dots -->
          <div class="flex gap-4">
            <div class="w-2 h-2 bg-midnight-blue rounded-full"></div>
            <div class="w-2 h-2 bg-midnight-blue rounded-full"></div>
          </div>
          <!-- Row 3: 3 dots -->
          <div class="flex gap-4">
            <div class="w-2 h-2 bg-midnight-blue rounded-full"></div>
            <div class="w-2 h-2 bg-midnight-blue rounded-full"></div>
            <div class="w-2 h-2 bg-midnight-blue rounded-full"></div>
          </div>
          <!-- Row 4: 4 dots -->
          <div class="flex gap-4">
            <div class="w-2 h-2 bg-midnight-blue rounded-full"></div>
            <div class="w-2 h-2 bg-midnight-blue rounded-full"></div>
            <div class="w-2 h-2 bg-midnight-blue rounded-full"></div>
            <div class="w-2 h-2 bg-midnight-blue rounded-full"></div>
          </div>
          <!-- Row 5: 3 dots (trapezium shape) -->
          <div class="flex gap-4">
            <div class="w-2 h-2 bg-midnight-blue rounded-full"></div>
            <div class="w-2 h-2 bg-midnight-blue rounded-full"></div>
            <div class="w-2 h-2 bg-midnight-blue rounded-full"></div>
          </div>
          <!-- Row 6: 2 dots -->
          <div class="flex gap-4">
            <div class="w-2 h-2 bg-midnight-blue rounded-full"></div>
            <div class="w-2 h-2 bg-midnight-blue rounded-full"></div>
          </div>
          <!-- Row 7: 1 dot -->
          <div class="flex gap-4">
            <div class="w-2 h-2 bg-midnight-blue rounded-full"></div>
          </div>
        </div>
      </div>

      <h2 class="text-3xl max-md:font-bold md:text-h2 font-[800] max-w-6xl text-lemon text-left mb-4 whitespace-pre-line">{{ $t('allianceContent.title5') }} <span class="text-midnight-blue">{{ $t('allianceContent.title5Highlight') }}</span> {{ $t('allianceContent.title5Suffix') }}</h2>

      <!-- Partners Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 mb-20">
        <div v-for="i in 8" :key="i" class="flex items-center justify-center p-8 ">
          <img src="/nestlnobg.png" alt="Partner" class="w-full h-auto object-contain" style="filter: none;" />
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
const handleButtonClick = () => {
  const contactSection = document.getElementById('contact-section')
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>
