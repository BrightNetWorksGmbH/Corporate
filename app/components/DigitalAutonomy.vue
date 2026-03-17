<template>
  <section class="bg-clean-white py-20 px-4 rounded-b-2xl">
    <div class="container mx-auto">
      <!-- Title with Mixed Colors -->
      <h4
        class="text-left text-3xl max-md:font-bold md:text-h4 text-midnight-blue max-w-6xl leading-relaxed tracking-wide  mb-10 ">
        {{ $t('digitalAutonomy.content.title') }}
      </h4>
      <!-- Top Section: Two Columns -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20 copytext-paragraph">
        <!-- Left Section -->
        <div class="space-y-12 md:pr-10">
          <!-- Long Paragraph -->
          <p class="text-midnight-blue ">
            {{ $t('digitalAutonomy.content.paragraph1') }}
          </p>



          <!-- Second Paragraph -->
          <p class=" text-midnight-blue">
            {{ $t('digitalAutonomy.content.paragraph2') }}
          </p>
        </div>

        <!-- Right Section -->
        <div class="space-y-6 ">

          <!-- First Paragraph -->
          <p class=" text-midnight-blue mb-10">
            {{ $t('digitalAutonomy.content.paragraph3') }}
          </p>
          <p class=" text-midnight-blue">
            {{ $t('digitalAutonomy.content.paragraph4') }}
          </p>



          <div class="flex flex-col md:flex-row items-center ">
            <!-- Understand More Link -->
            <UnderstandMoreLink />

            <!-- Button -->
            <div class="pt-4 md:ml-8 w-full md:w-auto">
              <AppButton :text="$t('mission.cta')" @click="handleButtonClick" />
            </div>
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
