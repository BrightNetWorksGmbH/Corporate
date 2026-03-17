<template>
    <div class="relative min-h-screen bg-midnight-blue pb-4">
        <!-- Header -->
        <AppHeader />

        <!-- Hero Section -->
        <section class="relative z-10 h-[95vh] flex items-center bg-contain bg-right bg-no-repeat bg-white" :style="{
            backgroundImage: `url('/kaenguruh_statue_of_a_female_goddess_Diane_in_grayscale_acces_ff9b84ff-8760-4949-845b-4ff269894494_1.png')`
        }">
            <!-- White Overlay -->
            <!-- <div class="absolute inset-0 bg-clean-white bg-opacity-20 z-0"></div> -->

            <!-- Content -->
            <div class="container relative z-10  py-3 w-full pt-20 h-full ">
                <div class=" grid grid-cols-1 lg:grid-cols-3 gap-8 items-center h-full ">
                    <!-- Left Section: Title -->
                    <div class="space-y-6 lg:col-span-2">
                        <h1 class="text-2xl lg:text-[80px] leading-[1.3] tracking-[2px] font-[800] font-sans whitespace-pre-line">
                            <span class="text-lemon">{{ $t('governance.hero.line1') }}</span><span class="text-midnight-blue"> {{ $t('governance.hero.line2') }}</span>
                        </h1>
                    </div>

                    <!-- Right Section: BRYTEGATE Card -->
                    <div class="flex justify-center lg:justify-end h-full items-end lg:col-span-1">
                        <div>
                            <BryteGateCard />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Aufgabe Content Section -->
        <GovernanceContentSection />




        <!-- Main Content -->
        <main class="relative z-10">
            <div class="w-full -mt-4 px-8 md:px-16 lg:px-16  pt-24 pb-60 leading-relaxed bg-cover bg-no-repeat bg-[right_top_30%]"
                :style="{
                    backgroundImage: `url('/lighthouse.png')`
                }">
                <div class="container">
                    <h2 class="text-2xl md:text-3xl lg:text-[100px] lg:leading-[1.2] lg:font-[800]  max-w-5xl whitespace-pre-line">
                        <span class="text-lemon">{{ $t('governance.headline1') }}</span> <span class="text-clean-white">{{ $t('governance.headline1Suffix') }}</span>
                    </h2>
                </div>
            </div>

            <!-- Supervisory Board Section -->
            <SupervisoryBoardSection />

            <div class=" md:min-h-[80vh] px-8 md:px-16 lg:px-16    pt-24 pb-60 leading-relaxed ">
                <div class="container">
                    <h2 class="text-2xl  lg:text-[90px] leading-[1.3] tracking-[3px] font-[800] font-sans whitespace-pre-line">
                        <span class="text-lemon">{{ $t('governance.headline2') }}</span>
                    </h2>
                </div>
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
import GovernanceContentSection from '~/components/GovernanceContentSection.vue';
// StatueWithTextSection component handles the statue image and text section
</script>
