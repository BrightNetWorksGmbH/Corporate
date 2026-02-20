<template>
  <section class="relative z-20 ">
    <!-- First Part: Dark Blue Background with Centered Content -->
    <div class="bg-midnight-blue py-20 px-4  relative min-h-[90vh]">
      <!-- Inverted Triangle Icon at Top -->
      <!-- <div class="flex justify-center mb-8">
        <svg
          class="w-16 h-16 text-clean-white"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M5 15l7-7 7 7"
          />
        </svg>
      </div> -->

      <!-- Centered Text Content -->
      <div class="container mx-auto text-center pt-10 relative ">
        <!-- White Border Inverted Triangle SVG -->
        <div class="flex flex-col items-center">
          <svg class="w-48 h-24 text-clean-white" fill="none" stroke="currentColor" stroke-width="1.5"
            viewBox="0 0 24 24">
            <path d="M12 20L4 4h16L12 20z"  stroke-linejoin="square" />
          </svg>
          <h4 class="text-h3 text-clean-white  leading-relaxed ">
          Wir schaffen Resilienz. <br>Autonome Daten für eine autonome Ökonomie –<br />
          entwickelt mit Integrität, Ethik und Exzellenz.
        </h4>
        </div>
      



        <!-- <p class="text-clean-white text-xl leading-relaxed">

        </p> -->
      </div>
    </div>

    <!-- Second Part: White Background with Left Image and Right Content -->
    <div class="bg-clean-white rounded-t-2xl py-20 px-4 relative ">
      <div class="container mx-auto">
        <div class="flex flex-col md:flex-row gap-12 md:items-start justify-between">
          <!-- Left: Image with Triangle Overlay (overlapping from above) -->
          <div class="relative hidden md:block w-full md:w-[60%] ">
            <!-- Statue Image (extends into first section) -->
            <div class="relative -mt-32 lg:-mt-44 w-full ">
              <img :src="statueImage" alt="Greek statue" class="min-h-[700px] w-full object-cover relative z-10" />
              <!-- Large Triangle Overlay -->

            </div>
          </div>

          <!-- Right: Text and Button -->
          <div class="space-y-6 ">
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

    <!-- Third Part: Team Section -->
    <TeamSection />
  </section>
</template>

<script setup>
// Use a male Greek statue image - adjust filename as needed
// Options: kaenguruh_grayscale_male_Greek_thinker_statue_modern_influenc_18ae69af-8dd8-43b5-9470-181c2a9fb2d7_1.png
// or: kaenguruh_grayscale_statue_of_a_male_Greek_philosopher_depict_3cdc8ec6-9e90-49c7-b937-fc98ba493142_2.png
const statueImage = '/greeknobg.png'

const handleButtonClick = () => {
  const contactSection = document.getElementById('contact-section')
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>
