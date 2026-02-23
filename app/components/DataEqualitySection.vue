<template>
    <section class="bg-clean-white rounded-2xl relative z-10 py-20 pl-4">
        <div class="px-2 md:pl-10 mx-auto">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <!-- Left Section -->
                <div class="">
                    <!-- Title with Mixed Colors -->
                    <h2 class="text-[60px] font-bold leading-relaxed mb-10">
                        <span class="text-midnight-blue">There's a simple Truth, that need's to be told:</span><br />
                        <span class="text-lemon">Not all Data <br> is Equal.</span>
                    </h2>

                    <!-- Paragraph -->
                    <p class=" text-midnight-blue copytext-paragraph mb-16">
                        In moral systems, equality is an ideal we rightly strive for.
                        In the realm of data, however, equality becomes a dangerous simplification.
                        Data is inherently unequal: some is ballast, while certain subsets can mean healing, power or
                        even <strong>weapons</strong>.
                    </p>

                    <div class="flex flex-col md:flex-row items-center md:gap-12 mt-10">
                        <!-- Understand More Link -->
                        <a href="#"
                            class="flex items-center gap-2 text-midnight-blue hover:opacity-80 transition-opacity group">
                            <!-- Downward Triangle Icon -->
                            <img src="/common/downarrow.svg" alt="link icons" class="w-6 h-6" />
                            <!-- Underlined Text -->
                            <span class="underline font-bold text-xl leading-relaxed">Understand more</span>
                        </a>

                        <!-- Button -->
                        <div class="pt-2 w-full md:w-auto">
                            <AppButton text="Termin vereinbaren" @click="handleButtonClick" />
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
