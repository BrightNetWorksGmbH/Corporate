<template>
    <div class="relative min-h-screen bg-midnight-blue pb-4">
        <AppHeader />

        <section
            class="relative z-10 h-[95vh] max-md:px-2 flex flex-col items-center bg-cover bg-no-repeat bg-white bg-[right_90%]"
            :style="{ backgroundImage: `url('/ship3.png')` }"
        >
            <div class="container relative z-10 py-3 w-full pt-20 h-full">
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center h-full w-full">
                    <div class="space-y-6 lg:col-span-2">
                        <h1 class="text-2xl lg:text-[80px] leading-[1.3] tracking-[2px] font-[800] font-sans max-w-full whitespace-pre-line">
                            <span class="text-lemon">{{ $t('alliance.hero.line1') }}<br />
                                {{ $t('alliance.hero.line2') }}<br>{{ $t('alliance.hero.line3') }}<br>{{ $t('alliance.hero.line4') }}</span><br>
                            <span class="text-midnight-blue">{{ $t('alliance.hero.line5') }}</span>
                        </h1>
                    </div>
                    <div class="flex justify-center lg:justify-end h-full items-end lg:col-span-1">
                        <BryteGateCard />
                    </div>
                </div>
            </div>
        </section>

        <AllianceContentSection />

        <main class="relative z-10">
            <div class="w-full flex items-start justify-start">
                <div class="container mx-auto py-24 max-2xl:pb-60 leading-relaxed 2xl:w-[90%]">
                    <h2 class="text-3xl max-md:font-bold md:text-h1 px-2">
                        <span class="text-lemon">{{ $t('alliance.headline') }}</span>
                    </h2>
                </div>
            </div>
            <StatueWithTextSection />
            <div class="relative z-20 rounded-b-2xl bg-clean-white overflow-hidden">
                <TeamSection />
            </div>
            <div id="contact-section" class="relative z-10 -mt-10">
                <ContactSection />
            </div>
        </main>

        <AppFooter />
    </div>
</template>

<script setup>
import AllianceContentSection from '~/components/AllianceContentSection.vue'
</script>
