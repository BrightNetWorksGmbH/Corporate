<template>
  <div class="relative min-h-screen 2xl:min-h-[70vh] bg-midnight-blue pb-4 ">
    <!-- Background Image - Only for Hero Section -->
    <div class=" bg-cover bg-top min-h-[150vh] bg-no-repeat bg-clean-white " :style="{
      backgroundImage: `url('/common/lady.png')`
    }">
      <!-- <div class="absolute inset-0 bg-clean-white bg-opacity-90"></div> -->
      <AppHeader />
      <section class="w-full relative  z-10 min-h-[100vh]  mb-5   px-4 pt-24  flex flex-col items-center">
        <div class="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-end  min-h-[80vh]  ">
          <!-- Left Section: Title and Description -->
          <div class="space-y-6 h-full flex flex-col justify-center items-start ">
            <h3 class="h3-headline text-midnight-blue leading-[1.5]">
              {{ $t('home.hero.titleLine1') }}<br />
              {{ $t('home.hero.titleLine2') }}
            </h3>
            <p class="text-start text-midnight-blue max-w-2xl leading-[2.1]">
              <span>{{ $t('home.hero.descriptionIntro') }}</span>
              <strong class="font-bold">{{ $t('home.hero.descriptionStrong1') }}</strong>
              <span>{{ $t('home.hero.descriptionMiddle') }}</span>
              <strong class="font-bold">{{ $t('home.hero.descriptionStrong2') }}</strong>
              <span>{{ $t('home.hero.descriptionOutro') }}</span>
            </p>
            <!-- Inverted Triangle SVG -->
            <div class="mt-6 flex justify-center w-full relative ">
              <img src="/common/downarrow.png" alt="down arrow icon" class="w-28 h-24" />
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
    <div id="contact-section" class="relative z-10 -mt-10 ">
      <ContactSection />
    </div>
    <AppFooter />
  </div>
</template>

<script setup>
// Homepage - Hero section with title, description, and BRYTEGATE card
</script>
