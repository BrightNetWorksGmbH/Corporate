<template>
  <!-- Mission Section: White Background with Left Image and Right Content -->
  <div class="bg-clean-white rounded-t-2xl px-4 md:py-16 md:pr-16 md:pl-0 relative 2xl:max-h-[70vh]">
    <div class="container mx-auto">
      <div class="relative" :class="props.containerHeightClass">
        <!-- Left: Image with Triangle Overlay (overlapping from above) -->
        <div class="absolute left-0 top-0 max-w-[80vw] hidden md:block w-full md:w-[80%] mr-10 ">
          <!-- Statue Image (extends into first section) -->
          <div class="relative -mt-32 lg:-mt-44 w-full">
            <img :src="props.statueImage" alt="Greek statue" class="w-full object-cover relative z-10" />
            <!-- Large Triangle Overlay -->
            <!-- <div class="absolute inset-0 z-20 flex items-center justify-center pointer-events-none w-full">
              <svg class="w-[100%] h-[95%]" viewBox="-13 -2 126 125" preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M50 3 L110 117 L-10 117 Z" fill="none" stroke="#00002f" stroke-width="3"
                  stroke-miterlimit="10" />
              </svg>
            </div> -->
          </div>
        </div>

        <!-- Right: Text and Button (overlapping on top) -->
        <div
          class="absolute right-0 top-0 md:top-[20%] md:-translate-y-1/2 w-full md:w-auto md:max-w-[40%] z-30">
          <div class="space-y-6 z-20 py-10 md:py-6">
            <h5 class="text-h5 md:text-end text-midnight-blue">
              Wir sind Europas<br />
              Powerhouse für<br />
              eine sichere<br />
              digitale Zukunft.
            </h5>
            <AppButton text="Termin vereinbaren" @click="handleButtonClick" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  statueImage?: string
  containerHeightClass?: string
}>(), {
  statueImage: '/common/wisdom.png',
  containerHeightClass: 'min-h-[90vh]'
})

const handleButtonClick = () => {
  const contactSection = document.getElementById('contact-section')
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>
