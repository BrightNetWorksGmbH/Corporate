<template>
  <div class="relative min-h-screen bg-midnight-blue pb-4 ">
    <!-- Background Image - Only for Hero Section -->
    <div class=" bg-cover bg-top min-h-[150vh]  bg-no-repeat bg-clean-white  " :style="{
      backgroundImage: `url('/womenStatue.svg')`
    }">
      <!-- <div class="absolute inset-0 bg-clean-white bg-opacity-90"></div> -->
      <AppHeader />

      <!-- Hero Section -->
      <section class="relative z-10 min-h-screen  flex items-center">
        <div class="pl-8 lg:pl-24 p-3 w-full pt-32  md:py-20  ">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end h-full  min-h-[700px]">
            <!-- Left Section: Title and Description -->
            <div class="space-y-6 h-full flex flex-col justify-center items-start ">
              <h3 class="h3-headline text-midnight-blue">
                Wir sind:<br />
                Europas Powerhouse für Daten-Resilienz
              </h3>
              <p class="text-start text-midnight-blue  max-w-2xl">
                In einer Welt, in der Daten zu Waffen, Währungen und Machtmitteln geworden sind,
                brauchen europäische Unternehmen mehr als Schutz: Es braucht Resilienz. Die BryteArk AG
                ist die Antwort - das Powerhouse für Daten-Resilienz, gebaut auf Verantwortung, Struktur
                und technologischem Können.
              </p>
              <!-- Inverted Triangle SVG -->
              <div class="mt-6 flex justify-center w-full ">
                <svg class="w-28 h-24 text-black" fill="none" stroke="currentColor" stroke-width="1"
                  viewBox="0 0 24 24">
                  <path d="M12 20L4 4h16L12 20z" />
                </svg>
              </div>
            </div>

            <!-- Right Section: BRYTEGATE Card -->
            <div class="flex justify-center lg:justify-end ">
              <BryteGateCard />
            </div>
          </div>

          <!-- Scroll Indicator -->
          <!-- <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
      <svg
        class="w-8 h-8 text-midnight-blue"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 14l-7 7m0 0l-7-7m7 7V3"
        />
      </svg>
    </div> -->
        </div>
      </section>
      <!-- Statistics Section -->
      <StatisticsSection />
    </div>

    <!-- Header -->



    <!-- <AboutHome /> -->

    <!-- About Section -->
    <AboutSection />

    <!-- Mission Section -->
    <MissionSection />

   

    <!-- Contact Section -->
    <div class="relative z-10 -m-10 border border-red-500">
      <ContactSection />
    </div>
    <AppFooter />
  </div>
</template>

<script setup>
// Homepage - Hero section with title, description, and BRYTEGATE card
</script>
