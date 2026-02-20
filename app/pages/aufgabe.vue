<template>
    <div class="relative min-h-screen bg-midnight-blue pb-4">
        <!-- Header -->
        <AppHeader />

        <!-- Hero Section -->
        <section class="relative z-10 h-[105vh]  flex items-center bg-cover bg-right bg-no-repeat bg-white" :style="{
            backgroundImage: `url('/aufbagelanding.png')`
        }">
            <!-- White Overlay -->
            <!-- <div class="absolute inset-0 bg-clean-white bg-opacity-20 z-0"></div> -->

            <!-- Content -->
            <div class="relative z-10 lg:pl-16 p-3 w-full py-20 h-full ">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full ">
                    <!-- Left Section: Title -->
                    <div class="space-y-6">
                        <h1
                            class="text-3xl md:text-4xl lg:text-8xl leading-relaxed tracking-[5px] font-[800] font-sans">
                            <span class="text-lemon">A NEW ERA<br />
                                OF</span><span class="text-midnight-blue"> DATA</span><br />
                            <span class="text-midnight-blue">SCIENCE</span><br />
                            <span class="text-lemon">AWAITS.</span><br />
                            <span class="text-lemon">DONT BE LATE.</span>
                        </h1>
                    </div>

                    <!-- Right Section: BRYTEGATE Card -->
                    <div class="flex justify-center lg:justify-end  h-full items-end">
                        <div>
                            <BryteGateCard />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Aufgabe Content Section -->
        <AufgabeContentSection />




        <!-- Main Content -->
        <main class="relative z-10">
            <div class="container mx-auto px-2 py-16 leading-relaxed">
                <h2 class="text-2xl md:text-h1 ">
                    <span class="text-clean-white">THE MOST DANGEROUS MISTAKE </span>
                    <span class="text-lemon">TO BE MADE IS, TO ASSUME THAT UNEQUAL DATA NEEDS EQUAL PROTECTION.</span>
                </h2>
            </div>
            <!-- Data Equality Section -->
            <DataEqualitySection />


            <!-- Resilience Section -->
            <ResilienceSection />

            <div class="container mx-auto py-16 p-2 leading-relaxed">
                <h2 class="text-4xl max-md:font-bold md:text-h1 leading-relaxed">
                    <span class="text-lemon">WENN VERANTWORTUNG FEHLT, MUSS </span>
                    <span class="text-clean-white">EINER</span> <span class="text-lemon">SIE ÜBERNEHMEN.
                        <br>DIES TUE ICH.<br>
                        MIT MEINEM TEAM.</span>
                </h2>
            </div>
            <OrganizationOverview />
            <div class="w-full mx-auto bg-cover bg-right  bg-no-repeat relative leading-relaxed flex justify-between items-start overflow-hidden"
                :style="{
                    backgroundImage: `url('/image62.png')`,
                    backgroundSize: '130%'
                }">
                <div class="w-full z-10 lg:w-[40%] h-full py-10 p-10">
                    <h2 class="text-4xl lg:text-h2 font-[800] leading-loose tracking-wider ">
                        <span class="text-lemon lg:text-8xl ">EUROPEANS
                            MAY NOT CREATE VALUES, DEPENDING ON OTHERS TO BE SAFE.</span>

                    </h2>
                </div>
                <!-- <div
                    class="absolute w-[65%] top-0 hidden md:block -right-0 -mt-[100px] -mr-[200px] lg:block scale-[130%] h-full   overflow-hidden ">
                    <img class="w-full h-full object-cover object-right  origin-right "
                        src="/19b313fd-69c6-4cb7-bd77-d560a8b88b51_removalai_preview.png" alt="European values" />
                </div> -->
            </div>

            <!-- Team Section -->
            <div class="rounded-2xl bg-clean-white overflow-hidden">
                <TeamSection />
            </div>

            <!-- Contact Section -->
            <ContactSection />
        </main>

        <!-- Footer -->
        <AppFooter />
    </div>
</template>

<script setup>
// Aufgabe page - Team and Contact sections
</script>
