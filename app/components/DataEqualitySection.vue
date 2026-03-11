<template>
    <section class=" bg-clean-white rounded-2xl relative z-10 py-20 pl-4">
        <div class="container px-2 md:pl-10 mx-auto">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <!-- Left Section -->
                <div class="">
                    <!-- Title with Mixed Colors -->
                    <h2 class="text-[60px] font-bold leading-relaxed mb-10 whitespace-pre-line">
                        <span class="text-midnight-blue">{{ $t('dataEquality.title1') }}</span><br />
                        <span class="text-lemon">{{ $t('dataEquality.title2') }}</span>
                    </h2>

                    <!-- Paragraph -->
                    <p class=" text-midnight-blue copytext-paragraph mb-16">
                        {{ $t('dataEquality.paragraph') }}
                    </p>

                    <div class="flex flex-col md:flex-row items-center md:gap-12 mt-10">
                        <!-- Understand More Link -->
                        <UnderstandMoreLink text-class="text-xl leading-relaxed" />

                        <!-- Button -->
                        <div class="pt-2 w-full md:w-auto">
                            <AppButton :text="$t('about.cta')" @click="handleButtonClick" />
                        </div>
                    </div>
                </div>

                <!-- Right Section: Image -->
                <div class="flex justify-center lg:justify-end w-full ">
                    <img src="/lemonbyhand.png"
                        alt="Greek hand holding a lemon" class="w-full h-full object-cover" />
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
