<template>
    <div class="relative min-h-screen bg-midnight-blue pb-4">
        <!-- Header -->
        <AppHeader />

        <!-- Hero Section -->
        <section class="relative z-10 h-[95vh] flex items-center bg-contain bg-right bg-no-repeat bg-white" :style="{
            backgroundImage: `url('/alliancelanding.png')`
        }">
            <!-- White Overlay -->
            <!-- <div class="absolute inset-0 bg-clean-white bg-opacity-20 z-0"></div> -->

            <!-- Content -->
            <div class="container relative z-10  py-3 w-full pt-20 h-full ">
                <div class="h-full grid grid-cols-1 lg:grid-cols-3 gap-12 items-center ">
                    <!-- Left Section: Title -->
                    <div class="space-y-6 lg:col-span-2">
                        <h1
                            class="text-2xl lg:text-[80px] leading-[1.3] tracking-[2px] font-[800] font-sans whitespace-pre-line">
                            <span class="text-lemon">{{ $t('digitalAutonomy.hero.line1') }}</span><span class="text-midnight-blue"> {{ $t('digitalAutonomy.hero.line2') }}</span>
                        </h1>
                    </div>

                    <!-- Right Section: BRYTEGATE Card -->
                    <div class="flex justify-center lg:justify-end  h-full items-end lg:col-span-1">
                        <div>
                            <BryteGateCard />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Aufgabe Content Section -->
        <DigitalAutonomy />




        <!-- Main Content -->
        <main class="relative z-10">
            <div class="container mx-auto px-2 py-24 max-2xl:pb-60 leading-relaxed">
                <h2 class="text-3xl max-md:font-bold md:text-h1 ">
                    <span class="text-lemon">{{ $t('digitalAutonomy.mainHeadline') }}</span>
                </h2>
            </div>

            <!-- Mission Section -->
            <StatueWithTextSection class="h-[50vh] md:min-h-[90vh]" />
            <!-- Team Section -->
            <div class="relative z-20 rounded-b-2xl bg-clean-white overflow-hidden">
                <TeamSection />
            </div>

            <!-- Contact Section -->
            <div id="contact-section" class="relative z-10 -mt-10">
                <ContactSection />
            </div>
        </main>

        <!-- Footer -->
        <AppFooter />
    </div>
</template>

<script setup>
import DigitalAutonomy from '~/components/DigitalAutonomy.vue';
// StatueWithTextSection component handles the statue image and text section
</script>
