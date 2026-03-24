<template>
    <section class="bg-clean-white relative -mt-2 rounded-b-2xl">
        <!-- Top Section: Background Image with Text -->
        <div class="relative bg-cover  bg-no-repeat bg-[right_20%] py-32 px-4 md:h-[115vh]  rounded-b-2xl overflow-hidden" :style="{
            backgroundImage: `url('/ocean8.png')`,
            // backgroundPosition: 'right center'
        }">
            <!-- Dark Overlay for better text readability -->
            <div class="absolute inset-0 bg-midnight-blue bg-opacity-30"></div>

            <!-- Text Content -->
            <div class="relative z-10 container mx-auto">
                <h2 class="text-2xl md:text-[95px] font-[800] leading-[1.2]">
                    <span class="text-lemon">{{ $t('resilience.headline1') }}</span><br />
                    <span class="text-lemon">{{ $t('resilience.headline2') }}</span><br />
                    <span class="text-clean-white">{{ $t('resilience.headline3') }}</span>
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
                        {{ $t('resilience.profileParagraph') }}
                    </p>

                    <!-- Link with Icon -->
                    <a href="#"
                        class="flex items-center gap-2 text-midnight-blue hover:opacity-80 transition-opacity group text-xl">
                        <img src="/common/downarrow.png" alt="arrow down" class="w-6 h-6" />
                        <span class="underline">{{ $t('resilience.contactLink') }}</span>
                    </a>
                </div>

                <!-- Right Section: Name, Title, and Content -->
                <div class="space-y-4  h-full">
                    <h3 class="text-3xl max-md:font-bold md:text-h3 text-lemon">
                        {{ $t('resilience.name') }}
                    </h3>

                    <h3 class="text-2xl max-md:font-bold md:text-h3 text-midnight-blue leading-relaxed">
                        {{ $t('resilience.subtitle') }}
                    </h3>

                    <p class="copytext-paragraph text-midnight-blue">
                        {{ $t('resilience.paragraph1') }}
                    </p>

                    <p class="copytext text-midnight-blue mb-12">
                        {{ $t('resilience.paragraph2') }}
                    </p>

                    <div class="md:pt-16">
                        <AppButton :text="$t('resilience.cta')" @click="handleButtonClick" />
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
