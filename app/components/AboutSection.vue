<template>
  <section class="relative bg-clean-white px-4 md:px-16 py-20 rounded-b-2xl ">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full md:max-w-[90%] items-start">
        <!-- Left Section -->
        <div class="space-y-6 h-full  flex flex-col justify-center items-start">
          <!-- Icon -->
          <div class="w-full flex items-center justify-center">
            <div class="w-20 h-20 flex items-center justify-center">
            <img src="/common/triangle.svg" alt="EU Flag" class="w-20 h-20" />
          </div>
          </div>

          <!-- Main Heading -->
          <h2 class="text-h3 text-midnight-blue text-left">
            Wir sind da, weil sonst<br />
            noch keiner da ist.
          </h2>

          <!-- Sub-text -->
          <p class="copytext text-midnight-blue max-w-xl">
            Europas Wirtschaft steht an einem Wendepunkt.
            Wer jetzt keine Datenhoheit schafft,
            verliert Handlungshoheit.
          </p>

          <!-- Call to Action Button -->
          <AppButton
            text="Termin vereinbaren"
            @click="handleButtonClick"
          />
        </div>

        <!-- Right Section -->
        <div class="space-y-4 h-full flex md:justify-center items-center">
          <nav class="flex flex-col gap-4">
            <a
              v-for="link in navigationLinks"
              :key="link.href"
              :href="link.href"
              class="flex justify-start items-center  text-lg md:text-2xl leading-relaxed gap-3  text-midnight-blue hover:text-opacity-80 transition-colors group"
            >
              <!-- Triangle Icon -->
              <img src="/common/bulletright.svg" alt="link icons" class="w-6 h-6" />
              <!-- Underlined Text -->
              <span class="underline">{{ link.text }}</span>
            </a>
          </nav>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const navigationLinks = [
  {
    text: 'Unsere Aufgabe',
    href: '#unsere-aufgabe'
  },
  {
    text: 'Verantwortung & Governance',
    href: '#verantwortung-governance'
  },
  {
    text: 'Themen- und Produkteinblick',
    href: '#themen-produkteinblick'
  },
  {
    text: 'Digitale Sicherheit in Europa',
    href: '#digitale-sicherheit'
  }
]

const handleButtonClick = () => {
  const contactSection = document.getElementById('contact-section')
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>
