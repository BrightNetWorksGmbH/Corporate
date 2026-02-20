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
            <div class="relative z-10 lg:pl-24 p-3 w-full pt-20 h-full ">
                <div class=" grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full ">
                    <!-- Left Section: Title -->
                    <div class="space-y-6">
                        <h1
                            class="text-3xl md:text-4xl lg:text-8xl leading-relaxed tracking-[5px] font-[800] font-sans">
                            <span class="text-lemon">ZUGANG<br />
                                ENTSTEHT NICHT <br>DURCH KAUF, <br>SONDERN DURCH</span><span class="text-midnight-blue"> VERANTWORTUNG.</span>

                        </h1>
                    </div>

                    <!-- Right Section: BRYTEGATE Card -->
                    <div class="flex justify-center lg:justify-end  h-full items-end">
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
            <div class="bg-clean-white rounded-t-2xl py-20 px-4 relative  p-2">
                <div class="container mx-auto">
                    <div class="flex flex-col md:flex-row gap-12 md:items-start justify-between">
                        <!-- Left: Image with Triangle Overlay (overlapping from above) -->
                        <div class="relative  w-full md:w-[60%]  p-2">
                            <!-- Statue Image (extends into first section) -->
                            <div class="relative hidden lg:block lg:-mt-[30%] w-full ">
                                <img :src="statueImage" alt="Greek statue"
                                    class="min-h-[700px] w-full object-cover relative z-10" />
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
            <!-- Team Section -->
            <div class="relative z-20 rounded-b-2xl bg-clean-white overflow-hidden">
                <TeamSection />
            </div>

            <!-- Contact Section -->
            <div class="relative z-10 -m-10">
                <ContactSection />
            </div>
        </main>

        <!-- Footer -->
        <AppFooter />
    </div>
</template>

<script setup>
import AllianceContentSection from '~/components/AllianceContentSection.vue';
const statueImage = '/greeknobg.png'

const handleButtonClick = () => {
    console.log('Termin vereinbaren clicked')
}
// Aufgabe page - Team and Contact sections
</script>
