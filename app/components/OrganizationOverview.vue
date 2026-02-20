<template>
    <section class="bg-clean-white py-20 px-4 rounded-b-2xl rounded-2xl relative ">
        <div class="container mx-auto">
            <!-- Organizational Chart Section -->
            <div class="mb-20">
                <!-- Title -->
                <h2 class="text-3xl  max-md:font-bold md:text-h2 text-midnight-blue mb-12">
                    DAS BACKUP HINTER<br />
                    DEM MACHER.
                </h2>

                <!-- Top Leadership: Stephan Tomat -->
                <div class="flex justify-between  mb-8 max-w-6xl mx-auto">
                    <div class="flex items-center gap-6 mb-12">
                        <div class="flex-shrink-0">
                            <img src="/team/stephan.png" alt="Stephan Tomat"
                                class="w-[65px] h-[65px] rounded-full object-cover grayscale" />
                        </div>
                        <div>
                            <h3 class="text-xl font-bold text-midnight-blue">Stephan Tomat</h3>
                            <p class="text-midnight-blue">Vorstandsvorsitzender</p>
                            <p class="text-midnight-blue text-sm">Aufsichtsrat</p>
                        </div>
                    </div>
                    <p>Aufsichtsrat</p>
                </div>

                <!-- Desktop View: Management Box with Department Heads -->
                <div class="relative  hidden lg:block">
                    <!-- Light Gray Box -->
                    <div class="bg-gray-200 rounded-[72px] p-8 relative overflow-visible">
                        <!-- ARKS Label (Vertical) -->
                        <div
                            class="absolute left-0 top-1/2 transform ml-4 -mt-5  writing-vertical-rl text-midnight-blue font-bold text-sm">
                            ARKS
                        </div>

                        <!-- Department Heads Row (Overflowing outside) -->
                        <div class="flex justify-evenly items-start gap-6 -mt-20 relative z-10 px-4">
                            <div v-for="(head, index) in departmentHeads" :key="index"
                                class="flex flex-col items-center text-center flex-1 max-w-[150px]">
                                <!-- Profile Image -->
                                <img :src="head.imageSrc" :alt="head.name"
                                    class="w-16 h-16 rounded-full object-cover grayscale mb-2 border-2 border-gray-300" />
                                <!-- Name -->
                                <h4 class="text-sm font-bold text-midnight-blue mb-1">{{ head.name }}</h4>
                                <!-- Position -->
                                <p class="text-xs text-midnight-blue mb-6">Head of Arc</p>

                                <!-- Domain with Icon -->
                                <div class="flex flex-col items-center mt-auto">
                                    <!-- Upward Triangle Icon -->
                                    <svg class="w-5 h-5 text-midnight-blue mb-2" fill="currentColor"
                                        viewBox="0 0 24 24">
                                        <path d="M12 4L4 20h16L12 4z" />
                                    </svg>
                                    <!-- Domain Title -->
                                    <p class="text-xs font-bold text-midnight-blue leading-tight">{{ head.domain }}</p>
                                    <!-- Domain Subtitle -->
                                    <p class="text-xs text-midnight-blue mt-1 leading-tight">{{ head.subtitle }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Mobile View: Column List of Department Heads -->
                <div class="block lg:hidden space-y-8 ">
                    <div v-for="(head, index) in departmentHeads" :key="index" class="flex flex-col items-start gap-4">
                        <!-- Profile Image and Basic Info -->
                        <div class="flex items-center gap-4 w-full">
                            <img :src="head.imageSrc" :alt="head.name"
                                class="w-20 h-20 rounded-full object-cover grayscale border-2 border-gray-300 flex-shrink-0" />
                            <div class="flex-1">
                                <h4 class="text-lg font-bold text-midnight-blue mb-1">{{ head.name }}</h4>
                                <p class="text-sm text-midnight-blue mb-2">Head of Arc</p>
                            </div>
                        </div>

                        <!-- Domain with Icon -->
                        <div class="flex flex-col items-start gap-2 pl-24">
                            <!-- Upward Triangle Icon -->
                            <svg class="w-5 h-5 text-midnight-blue" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 4L4 20h16L12 4z" />
                            </svg>
                            <!-- Domain Title -->
                            <p class="text-sm font-bold text-midnight-blue">{{ head.domain }}</p>
                            <!-- Domain Subtitle -->
                            <p class="text-sm text-midnight-blue">{{ head.subtitle }}</p>
                        </div>
                    </div>
                </div>


                <!-- Bottom: Three Data Type Sections -->
                <div class=" relative  border-gray-400 mt-5 ">
                    <!-- SVG Connecting Lines -->
                    <div class="hidden lg:block flex justify-between max-w-2xl w-full h-1 mx-auto relative h-30 pl-10">
                        <div class="flex-1 border-l-2 border-t-2 border-black h-10"></div>
                        <div class="flex-1 border-l-2 border-t-2  border-black h-10"></div>
                        <div class="absolute -top-[40px] right-0 border-r-2  h-[60px] border-black w-1"></div>
                    </div>

                    <!-- Data Type Sections -->
                    <div class="flex justify-around items-start gap-4 mt-12 max-w-4xl mx-auto ">
                        <div v-for="(dataType, index) in dataTypes" :key="index"
                            class="flex-1 text-center max-w-[300px]">
                            <!-- Icon -->
                            <div class="mb-4 flex justify-center">
                                <component :is="dataType.icon" />
                            </div>
                            <!-- Title -->
                            <h5 class="text-sm font-bold text-midnight-blue mb-3 uppercase">
                                {{ dataType.title }}
                            </h5>
                            <!-- Description -->
                            <p class="text-xs text-midnight-blue leading-relaxed">
                                {{ dataType.description }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Top Section: Two Columns -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20 copytext-paragraph">
                <!-- Left Section -->
                <div class="space-y-12 pr-10">
                    <!-- Long Paragraph -->
                    <p class="text-midnight-blue ">
                        Mit der Hilfe von Dr. Ludwig Weber, seines Zeichens ausgewiesener Experte für Gesellschaftsrecht
                        und liebevoll
                        "der Strukturierer der Bundesrepublik" genannt, haben der Vorstandsvorsitzende, Stephan Tomat,
                        sowie ausgewählte Mitglieder des Aufsichtsrates eine einzigartige Unternehmens-Struktur
                        geschaffen.
                    </p>

                    <!-- Title with Mixed Colors -->
                    <h4 class="text-h4 text-midnight-blue">
                        Die Business Lodges verantworten alle
                        Fachthemen zentral.
                    </h4>

                    <!-- Second Paragraph -->
                    <p class=" text-midnight-blue">
                        Die BRYTEARK AG ist kein Papiertiger, sondern ein Manifest ökonomischer Effizienz- und
                        Qualitäts-Philosophie. Alle
                        Services arbeiten in ihren jeweiligen Domänen den Business
                        Lodges zu, die durch eben jene Aufgabenteilung volle Konzentration in ihre Themen legen können.
                    </p>
                </div>

                <!-- Right Section -->
                <div class="space-y-6 ">
                    <!-- Title -->
                    <!-- <h3 class="text-h3 text-midnight-blue">
                        Wir bauen Systeme, die standhalten.
                    </h3> -->

                    <!-- First Paragraph -->
                    <p class=" text-midnight-blue">
                        Zunächst vom Vorstandsvorsitzenden Stephan Tomat
                        kommissarisch selbst geführt, werden die Business Lodges inhaltlich von starken Team-Leadern
                        verantwortet, die sich bereits in den letzten Jahrzehnten fachlich in ihren jeweiligen
                        Themengebieten bewährt haben.
                    </p>
                    <p class=" text-midnight-blue">
                        In die übergeordneten Arks - und somit in den Vorstand - berief Stephan Tomat sein Wunschteam
                        auch hochkarätigen
                        Expertinnen und Experten.
                    </p>



                   <div class="flex flex-col md:flex-row  justify-start items-center space-x-8">
                     <!-- Understand More Link -->
                     <a href="#"
                        class="flex items-center gap-2 text-midnight-blue hover:opacity-80 transition-opacity group">
                        <!-- Downward Triangle Icon -->
                        <svg class="w-4 h-4 text-midnight-blue flex-shrink-0 transform group-hover:translate-y-1 transition-transform"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                        <!-- Underlined Text -->
                        <span class="underline font-bold">Understand more</span>
                    </a>

                    <!-- Button -->
                    <div class="pt-4">
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
import { h } from 'vue'

// Department Heads Data
const departmentHeads = [
    {
        name: 'Andreas Jacobi',
        imageSrc: '/team/stephan.png',
        domain: 'FINANCE & ADMIN',
        subtitle: 'FINANCE, CONTROLLING, ADMIN'
    },
    {
        name: 'Verena Menzel',
        imageSrc: '/team/stephan.png',
        domain: 'STRATEGY & SCIENCE',
        subtitle: 'SCIENCE, INNOVATION, TECHNOLOGY'
    },
    {
        name: 'Stephan Tomat',
        imageSrc: '/team/stephan.png',
        domain: 'MARKETING & SALES',
        subtitle: 'SALES & MARKETING'
    },
    {
        name: 'Business Lodges',
        imageSrc: '/team/stephan.png',
        domain: 'BUSINESS LODGES',
        subtitle: 'OPERATIONAL UNITS'
    },
    {
        name: 'Christoph Hempel',
        imageSrc: '/team/stephan.png',
        domain: 'LEGAL & EDUCATION',
        subtitle: 'LEGAL, CONSULTING, EDUCATION'
    }
]

// Data Type Icons as Components
const GreenDataIcon = () => h('div', {
    class: 'grid grid-cols-4 gap-1 w-16 h-16'
}, Array.from({ length: 16 }, (_, i) => h('div', {
    class: 'w-3 h-3 bg-midnight-blue rounded-sm'
})))

const StrongDataIcon = () => h('div', {
    class: 'flex gap-2 justify-center items-center'
}, Array.from({ length: 5 }, () => h('div', {
    class: 'w-3 h-3 bg-midnight-blue rounded-full'
})))

const DeepDataIcon = () => h('div', {
    class: 'flex items-center justify-center relative w-16 h-16'
}, [
    h('div', {
        class: 'absolute w-12 h-12 border-2 border-midnight-blue rounded-full'
    }),
    h('div', {
        class: 'absolute w-8 h-8 border border-midnight-blue rounded-full'
    }),
    h('div', {
        class: 'absolute w-full h-0.5 bg-midnight-blue'
    }),
h('div', {
        class: 'absolute w-0.5 h-full bg-midnight-blue'
    })
])

// Data Types
const dataTypes = [
    {
        title: 'GREEN DATA',
        description: 'Systeme, die den Verbrauch von Ressourcen für Unternehmen nachhaltig machen',
        icon: GreenDataIcon
    },
    {
        title: 'STRONG DATA',
        description: 'Systeme, die Daten und Datenflüsse für Unternehmen resilient und sicher machen',
        icon: StrongDataIcon
    },
    {
        title: 'DEEP DATA',
        description: 'Systeme, die Automation, KI und Robotik für Unternehmen sicher und kontrollierbar machen',
        icon: DeepDataIcon
    }
]

const handleButtonClick = () => {
    const contactSection = document.getElementById('contact-section')
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
}
</script>

<style scoped>
.writing-vertical-rl {
    writing-mode: vertical-rl;
    text-orientation: mixed;
}
</style>