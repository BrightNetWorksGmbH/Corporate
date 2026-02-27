<template>
  <div class="relative min-h-screen 2xl:min-h-[70vh] bg-midnight-blue pb-4 ">
    <!-- Background Image - Only for Hero Section -->
    <div class=" bg-cover bg-top min-h-[150vh]  bg-no-repeat bg-clean-white " :style="{
      backgroundImage: `url('/womenStatue.svg')`
    }">
      <!-- <div class="absolute inset-0 bg-clean-white bg-opacity-90"></div> -->
      <AppHeader />
      <section class="w-full relative  z-10 min-h-[100vh]  mb-5   px-4 pt-24  flex flex-col items-center">
        <div class="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-end  min-h-[80vh]  ">
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
            <div class="mt-6 flex justify-center w-full relative ">
              <img src="/common/downarrow.svg" alt="EU Flag" class="w-28 h-24" />
            </div>
          </div>
          <div class="flex justify-center lg:justify-end py-4 h-full items-end lg:col-span-1 ">
            <BryteGateCard />
          </div>
        </div>

      </section>

      <!-- Hero Section -->

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
    <div id="contact-section" class="relative z-10 -m-10 ">
      <ContactSection />
    </div>
    <AppFooter />
  </div>
</template>

<script setup>
// Homepage - Hero section with title, description, and BRYTEGATE card
</script>
