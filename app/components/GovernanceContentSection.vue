<template>
    <section class="bg-clean-white py-20 relative  z-20 px-4 md:px-16 rounded-b-2xl">
        <div class="container mx-auto">
            <!-- Title with Mixed Colors -->

            <!-- Top Section: Two Columns -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20 copytext-paragraph">
                <!-- Left Section -->
                <div class="space-y-12 md:pr-10">
                    <div class="flex justify-center">
                        <div class="flex flex-col items-center gap-1">
                            <!-- Row 1: 1 dot -->
                            <div class="flex gap-2">
                                <div class="w-2 h-2 bg-midnight-blue rounded-full"></div>
                            </div>
                            <!-- Row 2: 2 dots -->
                            <div class="flex gap-4">
                                <div class="w-2 h-2 bg-midnight-blue rounded-full"></div>
                                <div class="w-2 h-2 bg-midnight-blue rounded-full"></div>
                            </div>
                            <!-- Row 3: 3 dots -->
                            <div class="flex gap-4">
                                <div class="w-2 h-2 bg-midnight-blue rounded-full"></div>
                                <div class="w-2 h-2 bg-midnight-blue rounded-full"></div>
                                <div class="w-2 h-2 bg-midnight-blue rounded-full"></div>
                            </div>
                            <!-- Row 4: 4 dots -->
                            <div class="flex gap-4">
                                <div class="w-2 h-2 bg-midnight-blue rounded-full"></div>
                                <div class="w-2 h-2 bg-midnight-blue rounded-full"></div>
                                <div class="w-2 h-2 bg-midnight-blue rounded-full"></div>
                                <div class="w-2 h-2 bg-midnight-blue rounded-full"></div>
                            </div>
                            <!-- Row 5: 3 dots (trapezium shape) -->
                            <div class="flex gap-4">
                                <div class="w-2 h-2 bg-midnight-blue rounded-full"></div>
                                <div class="w-2 h-2 bg-midnight-blue rounded-full"></div>
                                <div class="w-2 h-2 bg-midnight-blue rounded-full"></div>
                            </div>
                            <!-- Row 6: 2 dots -->
                            <div class="flex gap-4">
                                <div class="w-2 h-2 bg-midnight-blue rounded-full"></div>
                                <div class="w-2 h-2 bg-midnight-blue rounded-full"></div>
                            </div>
                            <!-- Row 7: 1 dot -->
                            <div class="flex gap-4">
                                <div class="w-2 h-2 bg-midnight-blue rounded-full"></div>
                            </div>
                        </div>
                    </div>
                    <!-- Long Paragraph -->
                    <p class="text-midnight-blue ">
                        Digitale Sicherheit lässt sich nicht durch technische Maßnahmen allein herstellen. Sie entsteht
                        dort, wo Macht, Verantwortung und Kontrolle in ein tragfähiges Verhältnis gebracht werden.
                        Governance ist deshalb für uns kein formaler Rahmen, sondern eine bewusste Selbstbindung.
                        BRYTEARK ist nicht aus dem Nichts entstanden. Die Organisation ist aus der praktischen Arbeit
                        innerhalb des BrightNetWorks-Netzwerks hervorgegangen - aus jahrelanger Erfahrung mit komplexen
                        digitalen Systemen, unternehmerischer Verantwortung und der Frage, wie technologische
                        Möglichkeiten in belastbare Strukturen übersetzt werden können.
                    </p>

                    <!-- Second Paragraph -->
                    <p class=" text-midnight-blue">
                        Diese Erfahrung prägt unsere Haltung bis heute:
                        Verantwortung entsteht nicht durch Delegation, sondern
                        durch Bindung. Durch klare Rollen, nachvollziehbare Entscheidungswege und die Bereitschaft, sich
                        selbst zu begrenzen.
                    </p>
                </div>

                <!-- Right Section -->
                <div class="space-y-6 ">
                    <h4 class="text-left text-h4 text-midnight-blue max-w-6xl leading-relaxed tracking-wide  mb-10 ">
                        Eigenständig. Gebunden.
                        Verantwortlich.
                    </h4>
                    <!-- First Paragraph -->
                    <p class=" text-midnight-blue mb-10">
                        <strong>BRYTEARK</strong> agiert als eigenständige Plattform mit klar definierter
                        Governance-Struktur. Vorstand
                        und Aufsichtsrat sind nicht formale Instanzen, sondern integraler Bestandteil unserer
                        Verantwortungskette. <strong>BrightNetWorks</strong> wirkt heute als strategischer
                        Erfahrungsraum und
                        Innovationsumfeld - nicht als operativer Taktgeber. Die Verantwortung für Ausrichtung,
                        Entscheidungen und Wirkung liegt eindeutig bei <strong>BRYTEARK</strong>. Diese bewusste
                        Trennung ist kein Bruch,
                        sondern Ausdruck von Reife.
                    </p>

                    <div class="flex flex-col md:flex-row items-center ">
                        <!-- Understand More Link -->
                        <UnderstandMoreLink />

                        <!-- Button -->
                        <div class="pt-4 w-full md:w-auto md:ml-8">
                            <AppButton text="Termin vereinbaren" @click="handleButtonClick" />
                        </div>
                    </div>
                </div>
            </div>
            <h2
                class="text-3xl md:text-4xl  lg:text-[100px]  lg:leading-[1.2] lg:font-[800] text-lomon max-w-7xl text-lemon text-left">
                VERANTWORTUNG
                <br>IST KEIN VERSPRECHEN.
            </h2>

            <!-- Alliance Image + Text Section -->
            <div class="flex flex-col lg:flex-row gap-12 mt-16 mb-12">
                <!-- Left: Image -->
                <div class="w-full lg:w-1/2 space-y-8">
                    <p class=" copytext-paragraph md:pr-10">
                        <strong>Sie ist eine Struktur.</strong> Governance bedeutet für uns, Entscheidungen so zu
                        organisieren, dass sie auch
                        unter Druck Bestand haben. Nicht jede Entscheidung muss schnell sein. Aber jede muss tragfähig
                        sein.
                        Deshalb trennen wir bewusst zwischen strategischer Führung, fachlicher Verantwortung, operativer
                        Umsetzung und unabhängiger Kontrolle. Nicht, um Komplexität zu erzeugen - sondern um sie
                        beherrschbar zu machen.
                        Führung bei <strong>BRYTEARK</strong> heißt nicht, Verantwortung zu bündeln, sondern sie dort zu
                        verankern, wo
                        Kompetenz und Wirkung zusammenkommen.
                    </p>
                </div>

                <!-- Right: Text Content -->
                <div class="w-full lg:w-1/2 space-y-8 copytext-paragraph">
                    <p class="text-midnight-blue">
                        Wer Systeme baut, die über Daten, Infrastrukturen und Entscheidungen verfügen, muss bereit sein,
                        sich selbst prüfen zu lassen. Governance bedeutet für uns deshalb nicht Absicherung nach außen,
                        sondern Verlässlichkeit nach innen.
                        Wir glauben, dass digitale Macht nur dort legitim ist, wo sie an Verantwortung gebunden bleibt.
                        Und dass Vertrauen nicht dort entsteht, wo Regeln möglichst flexibel ausgelegt werden - sondern
                        dort, wo Haltung auch dann trägt, wenn sie unbequem wird.
                    </p>
                </div>
            </div>

            <!-- Bottom Section: Trapezium/Rhombus Shape Dots -->
            <div class="flex justify-center py-8">
                <div class="flex flex-col items-center gap-1">
                    <!-- Row 1: 1 dot -->
                    <div class="flex gap-2">
                        <div class="w-2 h-2 bg-midnight-blue rounded-full"></div>
                    </div>
                    <!-- Row 2: 2 dots -->
                    <div class="flex gap-4">
                        <div class="w-2 h-2 bg-midnight-blue rounded-full"></div>
                        <div class="w-2 h-2 bg-midnight-blue rounded-full"></div>
                    </div>
                    <!-- Row 3: 3 dots -->
                    <div class="flex gap-4">
                        <div class="w-2 h-2 bg-midnight-blue rounded-full"></div>
                        <div class="w-2 h-2 bg-midnight-blue rounded-full"></div>
                        <div class="w-2 h-2 bg-midnight-blue rounded-full"></div>
                    </div>
                    <!-- Row 4: 4 dots -->
                    <div class="flex gap-4">
                        <div class="w-2 h-2 bg-midnight-blue rounded-full"></div>
                        <div class="w-2 h-2 bg-midnight-blue rounded-full"></div>
                        <div class="w-2 h-2 bg-midnight-blue rounded-full"></div>
                        <div class="w-2 h-2 bg-midnight-blue rounded-full"></div>
                    </div>
                    <!-- Row 5: 3 dots (trapezium shape) -->
                    <div class="flex gap-4">
                        <div class="w-2 h-2 bg-midnight-blue rounded-full"></div>
                        <div class="w-2 h-2 bg-midnight-blue rounded-full"></div>
                        <div class="w-2 h-2 bg-midnight-blue rounded-full"></div>
                    </div>
                    <!-- Row 6: 2 dots -->
                    <div class="flex gap-4">
                        <div class="w-2 h-2 bg-midnight-blue rounded-full"></div>
                        <div class="w-2 h-2 bg-midnight-blue rounded-full"></div>
                    </div>
                    <!-- Row 7: 1 dot -->
                    <div class="flex gap-4">
                        <div class="w-2 h-2 bg-midnight-blue rounded-full"></div>
                    </div>
                </div>
            </div>





        </div>
    </section>
</template>

<script setup>
const handleButtonClick = () => {

    const contactSection = document.getElementById('contact-section')
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
}
</script>