<template>
    <section class="bg-clean-white relative -m-2 rounded-b-2xl">
        <!-- Top Section: Background Image with Text -->
        <div class="relative bg-cover  bg-no-repeat py-32 px-4 md:h-[110vh]  rounded-b-2xl overflow-hidden" :style="{
            backgroundImage: `url('/ocean8.png')`,
            backgroundPosition: 'right center'
        }">
            <!-- Dark Overlay for better text readability -->
            <div class="absolute inset-0 bg-midnight-blue bg-opacity-30"></div>

            <!-- Text Content -->
            <div class="relative z-10 container mx-auto">
                <h2 class="text-2xl md:text-[95px] font-[800] leading-[1.2]">
                    <span class="text-lemon">RESILIENZ</span><br />
                    <span class="text-lemon">HEISST:</span><br />
                    <span class="text-clean-white">STANDHALTEN.</span>
                </h2>
            </div>
        </div>

        <!-- Bottom Section: Two Columns with Profile Image -->
        <div class="container mx-auto px-4 py-20 relative">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <!-- Left Section: Profile Image and Text -->
                <div class="relative">
                    <!-- Profile Image - Overlapping from top section -->
                    <div class="relative -mt-32 lg:-mt-[75%] mb-8 h-[900px]  ">
                        <img src="/team/stephan.png" alt="Stephan Tomat"
                            class=" h-full object-cover grayscale" />
                    </div>

                    <!-- Paragraph -->
                    <p class="copytext-paragraph text-midnight-blue mb-6 text-left md:pr-14">
                        An der deutschen Nordseeküste geboren, weiß Stephan Tomat, was Standhalten bedeutet. Den
                        Gezeiten. Dem Nordwind. Dem Regen. Nicht als Ausnahme, sondern als Normalzustand. Aus dieser
                        Erfahrung heraus ist er angetreten, klare Visionen in tragfähige unternehmerische Strukturen zu
                        überführen. Strukturen, die nicht auf kurzfristige Effekte ausgelegt sind, sondern auf
                        Beständigkeit unter Druck. Auf Basis des bestehenden BrightNetWorks-Netzwerks entstand unter
                        seiner Verantwortung die BRYTEARK AG als eigenständige Plattform für europäische Datenresilienz
                        - gegründet aus der Überzeugung, dass digitale Sicherheit nur dort
                    </p>

                    <!-- Link with Icon -->
                    <a href="#"
                        class="flex items-center gap-2 text-midnight-blue hover:opacity-80 transition-opacity group text-xl">
                        <!-- Downward Triangle Icon -->
                        <svg class="w-4 h-4 text-midnight-blue flex-shrink-0 transform group-hover:translate-y-1 transition-transform"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                        <!-- Underlined Text -->
                        <span class="underline">Kontaktdaten</span>
                    </a>
                </div>

                <!-- Right Section: Name, Title, and Content -->
                <div class="space-y-4  h-full">
                    <!-- Name in Lemon -->
                    <h3 class="text-3xl max-md:font-bold md:text-h3 text-lemon">
                        Stephan Tomat.
                    </h3>

                    <!-- Subtitle in Midnight Blue -->
                    <h3 class="text-2xl max-md:font-bold md:text-h3 text-midnight-blue leading-relaxed">
                        Hier um Verantwor- <br>tung zu Tragen.
                    </h3>

                    <!-- First Paragraph -->
                    <p class="copytext-paragraph text-midnight-blue">
                        entsteht, wo Verantwortung, Struktur und technologische Exzellenz zusammengedacht werden. Als
                        Vorstandsvorsitzender verantwortet Stephan Tomat die strategische Führung von BRYTEARK. Seine
                        Aufgabe ist nicht, Wachstum um jeden Preis zu erzeugen, sondern Integrität zu sichern,
                        Stabilität herzustellen und nachhaltige Wertschöpfung zu ermöglichen - auch dann, wenn der Wind
                        dreht.
                    </p>

                    <!-- Second Paragraph -->
                    <p class="copytext text-midnight-blue mb-12">
                        Resilienz zeigt sich nicht in ruhigen Zeiten.
                        Sondern darin, stehen zu bleiben, wenn andere ausweichen.
                    </p>

                    <!-- Button -->
                    <div class="md:pt-16">
                        <AppButton text="Gespräch vereinbaren" @click="handleButtonClick" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const handleButtonClick = () => {
    // Handle button click - can emit event or navigate
    console.log('Gespräch vereinbaren clicked')
}
</script>
