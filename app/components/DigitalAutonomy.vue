<template>
  <section class="bg-clean-white py-20 px-4 rounded-b-2xl">
    <div class="container mx-auto">
      <!-- Title with Mixed Colors -->
      <h4
        class="text-left text-3xl max-md:font-bold md:text-h4 text-midnight-blue max-w-6xl leading-relaxed tracking-wide  mb-10 ">
        Digitale Sicherheit ist in Europa keine <br> rein staatliche Aufgabe. Und darf es nicht sein.
      </h4>
      <!-- Top Section: Two Columns -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20 copytext-paragraph">
        <!-- Left Section -->
        <div class="space-y-12 md:pr-10">
          <!-- Long Paragraph -->
          <p class="text-midnight-blue ">
            Sie betrifft öffentliche Institutionen und private Unternehmen gleichermaßen, denn digitale Systeme,
            Datenflüsse und technologische Entscheidungen prägen heute zentrale Bereiche von Wirtschaft, Verwaltung und
            gesellschaftlichem Zusammenleben. Europäische Akteure tragen damit gemeinsame Verantwortung dafür, digitale
            Infrastrukturen und Artefakte zu schützen, Systeme resilient gegenüber Angriffen zu gestalten und Daten als
            das zu begreifen, was sie längst sind: eine strategische Ressource von globaler Bedeutung.
            Diese Ressource entfaltet ihren Wert nicht nur in regulierten Märkten und legitimem Handel, sondern auch
            dort, wo Kontrolle, Transparenz und Verantwortung fehlen. Schwarzmärkte, Missbrauchsszenarien und gezielte
            Angriffe sind Teil derselben digitalen Realität. Sicherheit bedeutet daher nicht nur Schutz vor Ausfall,
            sondern den bewussten Umgang mit Macht, Zugriff und Abhängigkeiten.
          </p>



          <!-- Second Paragraph -->
          <p class=" text-midnight-blue">
            Gleichzeitig ist Europas digitale Infrastruktur in weiten Teilen von wenigen globalen Akteuren geprägt,
            deren Geschäftsmodelle, Vertragsbedingungen und technische Architekturen nicht immer mit europäischen
            Rechts- und Wertvorstellungen in Einklang stehen. Diese Situation ist historisch gewachsen; sie ist nicht
            per se illegitim – sie ist jedoch strukturell relevant. Verantwortung und Handlungsspielräume liegen heute
            vielfach außerhalb des europäischen Gestaltungsraums.
          </p>
        </div>

        <!-- Right Section -->
        <div class="space-y-6 ">

          <!-- First Paragraph -->
          <p class=" text-midnight-blue mb-10">
            Architekturen nicht Immer mit europalschen kechts- una
            Wertvorstellungen in Einklang stehen. Diese Situation ist historisch gewachsen, sie ist nicht per se
            illegitim - sie ist jedoch strukturell relevant. Verantwortung und
            Handlunasspielraume liegen heute vieltach aulsernalb des
            europäischen Gestaltungsraums
          </p>
          <p class=" text-midnight-blue">
            Eine zukunftsfähige Antwort darauf liegt weder in Abschottung noch in Konfrontation. Sie liegt in
            Verantwortungsübernahme, institutioneller Reife und der Fähigkeit, digitale Souveränität so zu gestalten,
            dass europäische Werte, rechtliche Anforderungen und technologische Unabhängigkeit miteinander vereinbar
            bleiben.
          </p>



          <div class="flex flex-col md:flex-row items-center ">
            <!-- Understand More Link -->
            <UnderstandMoreLink />

            <!-- Button -->
            <div class="pt-4 md:ml-8 w-full md:w-auto">
              <AppButton text="Termin vereinbaren" @click="handleButtonClick" />
            </div>
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
