<template>
  <section class="relative z-20 ">
    <!-- First Part: Dark Blue Background with Centered Content -->
    <div class="bg-midnight-blue py-20 px-4 mb-5 relative min-h-[90vh]">
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
          <img src="/white-icons/frontofsculpture.svg" alt="EU Flag" class="w-32 h-32 mb-3" />
          <h4 class="text-h5 text-clean-white  leading-[50px] tracking-wide ">
            Wir schaffen Resilienz. <br>Autonome Daten für eine autonome Ökonomie –<br />
            entwickelt mit Integrität, Ethik und Exzellenz.
          </h4>
        </div>




        <!-- <p class="text-clean-white text-xl leading-relaxed">

        </p> -->
      </div>
    </div>

    <!-- Second Part: White Background with Left Image and Right Content -->
    <StatueWithTextSection container-height-class="h-[50vh] md:min-h-[90vh]" />

    <!-- Third Part: Team Section -->
    <TeamSection />
  </section>
</template>

<script setup>
// MissionSection component - uses StatueWithTextSection for the statue and text section
</script>
