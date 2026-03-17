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
                        {{ $t('governance.content.paragraph1') }}
                    </p>

                    <!-- Second Paragraph -->
                    <p class=" text-midnight-blue">
                        {{ $t('governance.content.paragraph2') }}
                    </p>
                </div>

                <!-- Right Section -->
                <div class="space-y-6 ">
                    <h4 class="text-left text-h4 text-midnight-blue max-w-6xl leading-relaxed tracking-wide  mb-10 whitespace-pre-line">
                        {{ $t('governance.content.title') }}
                    </h4>
                    <!-- First Paragraph -->
                    <p class=" text-midnight-blue mb-10">
                        {{ $t('governance.content.paragraph3') }}
                    </p>

                    <div class="flex flex-col md:flex-row items-center ">
                        <!-- Understand More Link -->
                        <UnderstandMoreLink />

                        <!-- Button -->
                        <div class="pt-4 w-full md:w-auto md:ml-8">
                            <AppButton :text="$t('mission.cta')" @click="handleButtonClick" />
                        </div>
                    </div>
                </div>
            </div>
            <h2
                class="text-3xl md:text-4xl  lg:text-[100px]  lg:leading-[1.2] lg:font-[800] text-lomon max-w-7xl text-lemon text-left whitespace-pre-line">
                {{ $t('governance.content.responsibilityHeadline') }}
            </h2>

            <!-- Alliance Image + Text Section -->
            <div class="flex flex-col lg:flex-row gap-12 mt-16 mb-12">
                <!-- Left: Image -->
                <div class="w-full lg:w-1/2 space-y-8">
                    <p class=" copytext-paragraph md:pr-10">
                        <strong>{{ $t('governance.content.paragraph4Bold') }}</strong> {{ $t('governance.content.paragraph4Rest') }}
                    </p>
                </div>

                <!-- Right: Text Content -->
                <div class="w-full lg:w-1/2 space-y-8 copytext-paragraph">
                    <p class="text-midnight-blue">
                        {{ $t('governance.content.paragraph5') }}
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