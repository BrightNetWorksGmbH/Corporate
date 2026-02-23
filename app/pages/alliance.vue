<template>
    <div class="relative min-h-screen bg-midnight-blue pb-4 ">
        <!-- Header -->
        <AppHeader />

        <!-- Hero Section -->
        <section class="relative z-10 h-[95vh] py-5  flex items-center bg-contain bg-right bg-no-repeat bg-white"
            :style="{
                backgroundImage: `url('/ship3.png')`
            }">
            <!-- White Overlay -->
            <!-- <div class="absolute inset-0 bg-clean-white bg-opacity-20 z-0"></div> -->

            <!-- Content -->
            <div class="relative z-10 lg:pl-16 p-3 w-full pt-20 h-full ">
                <div class=" grid grid-cols-1 lg:grid-cols-3 gap-12 items-center h-full ">
                    <!-- Left Section: Title -->
                    <div class="space-y-6 h-full flex flex-col justify-center items-start lg:col-span-2">
                        <h1 class="text-2xl  lg:text-[90px] leading-[1.3] tracking-[3px] font-[800] font-sans">
                            <span class="text-lemon">ZUGANG<br />
                                ENTSTEHT NICHT <br>DURCH KAUF, <br>SONDERN DURCH</span><span class="text-midnight-blue">
                                VERANTWORTUNG.</span>

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
        <AllianceContentSection />




        <!-- Main Content -->
        <main class="relative z-10">
            <div class="container mx-auto pt-24 pb-60 leading-relaxed">
                <h2 class="text-3xl max-md:font-bold md:text-h1 px-2">
                    <span class="text-olive-gold">IN DIESEM JAHRTAUSEND IST SICHERHEIT NICHT KÄUFLICH. SIE BEGINNT UND
                        ENDET
                        IMMER MIT AUTONOMIE.</span>
                </h2>
            </div>

            <!-- Mission Section -->
            <StatueWithTextSection container-height-class="h-[50vh] md:min-h-[90vh]" />
            <!-- Team Section -->
            <div class="relative z-20 rounded-b-2xl bg-clean-white overflow-hidden">
                <TeamSection />
            </div>

            <!-- Contact Section -->
            <div id="contact-section" class="relative z-10 -m-10">
                <ContactSection />
            </div>
        </main>

        <!-- Footer -->
        <AppFooter />
    </div>
</template>

<script setup>
import AllianceContentSection from '~/components/AllianceContentSection.vue';
// StatueWithTextSection component handles the statue image and text section
</script>
