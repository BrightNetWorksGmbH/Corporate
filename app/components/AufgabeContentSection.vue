<template>
  <section class="bg-clean-white py-20 px-4 rounded-b-2xl">
    <div class="container mx-auto">
      <!-- Top Section: Two Columns -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20 copytext-paragraph">
        <!-- Left Section -->
        <div class="space-y-12 pr-10">
          <!-- Long Paragraph -->
          <p class="text-midnight-blue ">
            Europa steht an einem Wendepunkt. Daten sind längst keine rein technischen Ressourcen mehr. Sie sind
            Grundlage
            wirtschaftlicher Handlungsfähigkeit, politischer Souveränität und gesellschaftlicher Stabilität. Wer über
            Daten verfügt, entscheidet. Wer ihre Strukturen kontrolliert, gestaltet Zukunft. Gleichzeitig beruhen große
            Teile der digitalen Infrastruktur, die europäische Unternehmen und Institutionen täglich nutzen, auf
            Systemen, die außerhalb europäischer Rechts-, Werte- und Verantwortungsräume betrieben werden. Diese
            Abhängigkeit ist nicht abstrakt. Sie ist strukturell. Und sie lässt sich nicht durch einzelne Produkte oder
            punktuelle Maßnahmen auflösen.
          </p>

          <!-- Title with Mixed Colors -->
          <h4 class="text-h4 text-midnight-blue">
            Wir glauben nicht an eine <br> Welt ohne Risiko.
          </h4>

          <!-- Second Paragraph -->
          <p class=" text-midnight-blue">
            Resilienz bedeutet für uns nicht Abschottung, sondern
            Belastbarkeit. Nicht Geschwindigkeit, sondern Struktur. Nicht Versprechen, sondern Verantwortung. Sicherheit
            entsteht nicht dort, wo alles ruhig ist, sondern dort, wo Strukturen auch unter Druck tragfähig bleiben.
          </p>
        </div>

        <!-- Right Section -->
        <div class="space-y-6 ">
          <!-- Title -->
          <h3 class="text-h3 text-midnight-blue">
            Wir bauen Systeme, die standhalten.
          </h3>

          <!-- First Paragraph -->
          <p class=" text-midnight-blue">
            Deshalb arbeiten wir nicht an isolierten Lösungen, sondern
            an Architekturen. An Datenräumen, die Autonomie ermöglichen. An Systemen, die nachvollziehbar, überprüfbar
            und langfristig tragfähig sind. Und an Entscheidungslogiken, die technologische Möglichkeiten mit ethischer
            Bindung verbinden. Ein zentraler Irrtum der digitalen Gegenwart besteht darin, Daten gleichzusetzen.
            <br> Doch nicht alle Daten sind gleich - und sie benötigen auch nicht den gleichen Schutz. Manche Daten sind
            austauschbar.
            Andere sind kritisch. Wieder andere können, falsch behandelt, erheblichen Schaden anrichten.
            <br>
            Unsere Aufgabe ist es, diese Unterschiede ernst zu nehmen und daraus Strukturen abzuleiten, die
            differenziert,
            verantwortungsvoll und wirksam sind.
          </p>



          <!-- Understand More Link -->
          <a href="#" class="flex items-center gap-2 text-midnight-blue hover:opacity-80 transition-opacity group">
            <!-- Downward Triangle Icon -->
           <img src="/common/downarrow.svg" alt="link icons" class="w-6 h-6" />
            <!-- Underlined Text -->
            <span class="underline font-bold">Understand more</span>
          </a>

          <!-- Button -->
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
