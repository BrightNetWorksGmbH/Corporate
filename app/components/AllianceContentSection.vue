<template>
  <section class="bg-clean-white py-20 px-4 md:px-16 rounded-b-2xl">
    <div class="container mx-auto">
      <!-- Title with Mixed Colors -->

      <!-- Top Section: Two Columns -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20 copytext-paragraph">
        <!-- Left Section -->
        <div class="space-y-12 md:pr-10">
          <h4 class="text-left text-h4 text-midnight-blue max-w-6xl leading-relaxed tracking-wide  mb-10 ">
            Warum keine
            Dienstleistung?
          </h4>
          <!-- Long Paragraph -->
          <p class="text-midnight-blue ">
            Sicherheit und klassische Dienstleistungsmodelle stehen in einem grundlegenden Spannungsverhältnis.
            Dienstleistung erzeugt Hierarchie. Sie schafft Abhängigkeit. Sicherheit wird gegen Geld bereitgestellt -
            zeitlich begrenzt, vertraglich geregelt, kündbar. Doch Sicherheit ist kein Zustand, den man ein- oder
            ausschalten kann. Was geschieht, wenn Zahlungen ausbleiben? Was geschieht, wenn Verträge enden oder Anbieter
            wechseln? Was geschieht, wenn Systeme kritisch werden - genau dann, wenn Stabilität am dringendsten
            gebraucht wird? <strong class="">In der informatischen Realität entsteht dabei häufig
              eine doppelte Abhängigkeit:</strong>
          </p>
          <div class="flex flex-col gap-4">
            <div class="flex items-center ">
              <div class="flex items-center justify-center  w-6 h-6 ">
                <div class="h-3 w-3 bg-lemon rounded-full"></div>
              </div>
              <span class="text-break whitespace-normal">Der Dienstleister ist abhängig von der
                fortlaufenden Zahlung.</span>

              <!-- <div class="h-4 w-4 bg-lemon rounded-full mr-2"></div>Der Dienstleister ist abhängig von der fortlaufenden Zahlung. -->
            </div>
            <div class="flex items-center ">
              <div class="flex items-center justify-center  w-6 h-6 ">
                <div class="h-3 w-3 bg-lemon rounded-full"></div>
              </div>
              <span class="text-break whitespace-normal pl-2">Der Kunde ist abhängig vom Zugang
                zum Dienstleister, da ein Wechsel mit hohen Kosten, Risiken und Unsicherheiten verbunden ist.</span>
              <!-- <div class="h-4 w-4 bg-lemon rounded-full mr-2"></div>Der Dienstleister ist abhängig von der fortlaufenden Zahlung. -->
            </div>
          </div>
          <!-- Second Paragraph -->
          <p class=" text-midnight-blue">
            Diese Abhängigkeiten sind nicht nur ökonomisch problematisch. Sie sind strukturell riskant. Sicherheit darf
            kein externer Service sein. Sie darf nicht ausgelagert, abgeschaltet oder ersetzt werden müssen.
          </p>
        </div>

        <!-- Right Section -->
        <div class="space-y-6 ">
          <h4 class="text-left text-h4 text-midnight-blue max-w-6xl leading-relaxed tracking-wide  mb-10 ">
            Autonomie statt
            Abhängigkeit
          </h4>
          <!-- First Paragraph -->
          <p class=" text-midnight-blue mb-10">
            Digitale Resilienz kann nur dort entstehen, wo Autonomie und Selbstbestimmung möglich sind. Wo Systeme
            verstanden, kontrolliert und weiterentwickelt werden können
            - unabhängig von einzelnen Anbietern oder Vertrags-verhältnissen. Deshalb streben wir für unsere Partner -
            nicht
            für Kunden - nach:
          </p>
          <div>
            <div class="flex items-center ">
              <div class="mb-8 flex items-start justify-center  w-6 h-6 ">
                <div class="h-3 w-3 bg-lemon rounded-full"></div>
              </div>
              <span class="text-break whitespace-normal">vollständigem Zugang zu Quellcode,
                Architekturen und Forschungsständen</span>
            </div>
            <div class="flex items-center ">
              <div class="flex items-center justify-center  w-6 h-6 ">
                <div class="h-3 w-3 bg-lemon rounded-full"></div>
              </div>
              <span class="text-break whitespace-normal">gemeinsamem Wissen statt proprietärer
                Abschottung</span>

            </div>
            <div class="flex items-center ">
              <div class="flex items-center justify-center  w-6 h-6 ">
                <div class="h-3 w-3 bg-lemon rounded-full"></div>
              </div>
              <span class="text-break whitespace-normal">aktiver Mitgestaltung statt passiver Nutzung</span>

            </div>

          </div>
          <p class=" text-midnight-blue">
            Nicht, weil wir uns damit ausliefern. Sondern weil wir kein Geld gegen Sicherheit tauschen und dadurch neue
            Risiken schaffen wollen.
          </p>



          <div class=" flex flex-col md:flex-row items-center ">
            <!-- Understand More Link -->
            <a href="#" class="flex items-center gap-2 text-midnight-blue hover:opacity-80 transition-opacity group">
              <!-- Downward Triangle Icon -->
              <svg
                class="w-4 h-4 text-midnight-blue flex-shrink-0 transform group-hover:translate-y-1 transition-transform"
                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
              <!-- Underlined Text -->
              <span class="underline font-bold">Understand more</span>
            </a>

            <!-- Button -->
            <div class="pt-4 w-full md:w-auto md:ml-12">
              <AppButton text="Termin vereinbaren" @click="handleButtonClick" />
            </div>
          </div>
        </div>
      </div>
      <h2 class="text-3xl max-md:font-bold md:text-h2 text-lomon max-w-6xl text-lemon text-left">UNSERE ANTWORT IST DIE
        BRYTE ALLIANCE.</h2>

      <!-- Alliance Image + Text Section -->
      <div class="flex flex-col lg:flex-row gap-12 mt-16 mb-20 ">
        <!-- Left: Image -->
        <div class="w-full lg:w-1/2 md:-ml-24 ">
          <img src="/sheep.png" alt="Alliance" class="w-full h-full object-cover grayscale" />
        </div>

        <!-- Right: Text Content -->
        <div class="w-full lg:w-1/2 space-y-8 copytext-paragraph">
          <p class="text-midnight-blue">
            Die <strong>BRYTEALLIANCE</strong> ist eine Allianz aus führenden Akteuren,
            die sich bewusst gegenseitig befähigen, statt voneinander
            abhängig zu werden. Gemeinsam arbeiten wir daran,
            Autonomie zu stärken, Abhängigkeiten systematisch zu
            reduzieren und digitale Sicherheit als dauerhafte Fähigkeit zu
            verankern – nicht als Produkt. Wir glauben, dass Sicherheit
            nicht durch Kontrolle von außen entsteht, sondern durch
            Kompetenz, Transparenz und geteilte Verantwortung.
          </p>

          <h3 class="text-3xl max-md:font-bold md:text-h3 text-midnight-blue font-bold leading-tight">
            Keine Lizenz.<br />
            Ein europäisches<br />
            Bündnis für digitale<br />
            Autonomie.
          </h3>

          <p class="text-midnight-blue">
            Wir laden Top-Player ein, die Verantwortung nicht delegieren,
            sondern teilen wollen – und die gemeinsam mit uns und
            unseren Partnern an einem autonomen Sicherheits-Technologie-Zentrum in Europa mitwirken möchten.
          </p>

          <div class="pt-4">
            <AppButton text="Termin vereinbaren" @click="handleButtonClick" />
          </div>
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

      <h2 class="text-3xl max-md:font-bold md:text-h2 font-[800] text-lomon max-w-6xl text-lemon text-left mb-4">WIR SIND STOLZ AUF <br> UNSERE <span
          class="text-midnight-blue">BÜNDNISPARTNER</span> IN DER BRYTE ALLIANCE</h2>

      <!-- Partners Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 mb-20">
        <div v-for="i in 8" :key="i" class="flex items-center justify-center p-8 ">
          <img src="/nestlnobg.png" alt="Partner" class="w-full h-auto object-contain" style="filter: none;" />
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
