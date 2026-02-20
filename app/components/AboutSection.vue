<template>
  <section class="relative bg-clean-white px-4 md:px-16 py-20 rounded-b-2xl ">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full md:max-w-[90%] items-start">
        <!-- Left Section -->
        <div class="space-y-6 h-full  flex flex-col justify-center items-start">
          <!-- Icon -->
          <div class="w-full flex items-center justify-center">
            <div class="w-12 h-12 flex items-center justify-center">
            <div class="grid grid-cols-5 gap-1">
              <template v-for="row in 5" :key="row">
                <template v-for="col in 5" :key="col">
                  <div
                    v-if="!((row === 1 && col === 1) || (row === 5 && col === 5))"
                    class="w-2 h-2 bg-midnight-blue rounded-sm"
                  ></div>
                  <div v-else class="w-2 h-2"></div>
                </template>
              </template>
            </div>
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
              class="flex items-center  text-lg md:text-2xl leading-relaxed gap-5 space-y-5 text-midnight-blue hover:text-opacity-80 transition-colors group"
            >
              <!-- Triangle Icon -->
              <svg
                class="w-4 h-4 text-midnight-blue flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
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
