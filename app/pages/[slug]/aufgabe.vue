<template>
    <div class="relative min-h-screen bg-midnight-blue pb-4">
        <AppHeader />

        <section
            class="relative z-10 h-[95vh] flex justify-center items-center bg-cover bg-right bg-no-repeat bg-white"
            :style="{ backgroundImage: `url('/aufbagelanding.png')` }"
        >
            <div class="container relative z-10 px-4 pt-20 h-full">
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center h-full">
                    <div class="space-y-6 lg:col-span-2">
                        <h1 class="text-3xl md:text-4xl lg:text-8xl leading-relaxed tracking-[5px] font-[800] font-sans">
                            <span class="text-lemon">{{ $t('aufgabe.hero.line1') }}<br />{{ $t('aufgabe.hero.line2') }}</span>
                            <span class="text-midnight-blue"> {{ $t('aufgabe.hero.line3') }}</span><br />
                            <span class="text-midnight-blue">{{ $t('aufgabe.hero.line4') }}</span><br />
                            <span class="text-lemon">{{ $t('aufgabe.hero.line5') }}</span><br />
                            <span class="text-lemon">{{ $t('aufgabe.hero.line6') }}</span>
                        </h1>
                    </div>
                    <div class="flex justify-center lg:justify-end py-4 h-full items-end lg:col-span-1">
                        <BryteGateCard />
                    </div>
                </div>
            </div>
        </section>

        <AufgabeContentSection />

        <main class="relative z-10">
            <div class="container mx-auto px-2 py-16 leading-relaxed">
                <h2 class="text-2xl md:text-h1">
                    <span class="text-clean-white">{{ $t('aufgabe.mistakeHeadlineWhite') }}</span>
                    <span class="text-lemon">{{ $t('aufgabe.mistakeHeadlineLemon') }}</span>
                </h2>
            </div>
            <DataEqualitySection />
            <ResilienceSection />
            <div class="container mx-auto py-16 p-2 leading-relaxed">
                <h2 class="text-4xl max-md:font-bold md:text-h1 leading-relaxed whitespace-pre-line">
                    <span class="text-lemon">{{ $t('aufgabe.responsibilityLemon') }}</span>
                    <span class="text-clean-white">{{ $t('aufgabe.responsibilityWhite') }}</span>
                    {{ ' ' }}
                    <span class="text-lemon">{{ $t('aufgabe.responsibilityLemon2') }}</span>
                </h2>
            </div>
            <OrganizationOverview />
            <div class="container w-full mx-auto bg-contain bg-right bg-no-repeat relative leading-relaxed flex justify-between items-start overflow-hidden">
                <div class="w-full z-10 lg:w-[45%] h-full py-10 p-10 relative">
                    <h3 class="text-4xl lg:text-h2 leading-loose tracking-wider">
                        <span class="text-lemon lg:text-[90px] font-[900]">{{ $t('aufgabe.europeansHeadline') }}</span>
                    </h3>
                </div>
                <div class="hidden lg:block lg:w-[62%] -mt-[15%] absolute right-0 top-0">
                    <img src="/common/person.png" alt="person" class="w-full h-full object-cover" />
                </div>
            </div>
            <div class="relative z-20 rounded-2xl bg-clean-white overflow-hidden">
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
// Content identical to /aufgabe — rendered under /{slug}/aufgabe
</script>
