<template>
    <div class="relative min-h-screen bg-midnight-blue pb-4 ">
        <!-- Header -->
        <AppHeader />

        <!-- Hero Section -->
        <section
            class="relative z-10 h-[93vh] max-md:px-2 py-5 flex flex-col items-center bg-cover bg-no-repeat bg-white bg-[right_90%]"
            :style="{
                backgroundImage: `url('/ship3.png')`
            }">
            <!-- White Overlay -->
            <!-- <div class="absolute inset-0 bg-clean-white bg-opacity-20 z-0"></div> -->


            <!-- Content -->
            <!-- <section class="w-full relative  z-10 min-h-[80vh] border border-blue-500 2xl:min-h-[60vh]  px-4 pt-20  flex flex-col items-center"> -->
            <!-- <div class="container relative z-10  py-3 w-full  h-full ">
                    <div class=" grid grid-cols-1 lg:grid-cols-3 gap-12 items-center h-full ">
                        <div class="space-y-6 h-full flex flex-col justify-center items-start lg:col-span-2">
                            <h1 class="text-2xl  lg:text-[80px] leading-[1.3] tracking-[2px] font-[800] font-sans">
                                <span class="text-lemon">ZUGANG<br />
                                    ENTSTEHT NICHT <br>DURCH KAUF, <br>SONDERN DURCH</span><span
                                    class="text-midnight-blue">
                                    VERANTWORTUNG.</span>

                            </h1>
                        </div>

                    </div>
                </div>
                <div class="relative z-10 lg:absolute lg:right-0 lg:bottom-0 mr-3 mb-4">
                    <BryteGateCard />
                </div> -->
            <!-- </section> -->
            <div class="container relative z-10  py-3 w-full pt-20 h-full ">
                <div class=" grid grid-cols-1 lg:grid-cols-3 gap-12 items-center h-full">

                    <div class="space-y-6 h-full flex flex-col justify-center items-start lg:col-span-2 min-w-0 w-full">
                        <h1 class="text-2xl lg:text-[80px] leading-[1.3] tracking-[2px] font-[800] font-sans break-words max-w-full">
                            <span class="text-lemon">{{ $t('alliance.hero.line1') }}<br />
                                {{ $t('alliance.hero.line2') }}<br>{{ $t('alliance.hero.line3') }}<br>{{ $t('alliance.hero.line4') }}</span><span class="text-midnight-blue">
                                {{ $t('alliance.hero.line5') }}</span>
                        </h1>
                    </div>


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
        <main class="relative z-10 ">
           <div class="w-full flex items-start justify-start">
            <div class="container mx-auto py-24 max-2xl:pb-60 leading-relaxed 2xl:w-[90%] ">
                <h2 class="text-3xl max-md:font-bold md:text-h1 px-2">
                    <span class="text-lemon">{{ $t('alliance.headline') }}</span>
                </h2>
            </div>
           </div>

            <!-- Mission Section -->
            <StatueWithTextSection  />
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
import AllianceContentSection from '~/components/AllianceContentSection.vue';
// StatueWithTextSection component handles the statue image and text section
</script>
