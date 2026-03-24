<template>
  <section class="bg-clean-white py-20 px-4 rounded-b-2xl ">
    <div class="container mx-auto ">
      <!-- Title -->
      <div class="text-start mb-12">
        <h5 class="text-h5 text-midnight-blue whitespace-pre-line">
          {{ $t('team.heading') }}
        </h5>
      </div>

      <!-- Team Members Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 ">
        <TeamMemberCard
          v-for="member in teamMembers"
          :key="member.id"
          :image-src="member.imageSrc"
          :name="member.name"
          :position="member.position"
          @click="handleMemberClick(member)"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'

const { t } = useI18n()

const teamMembers = computed(() => [
  { id: 1, name: 'Stephan Tomat', position: t('team.positions.vorstand'), imageSrc: '/team/stephan.png' },
  { id: 2, name: 'Dirk Markus', position: t('team.positions.chiefOfStaff'), imageSrc: '/team/dirk.png' },
  { id: 3, name: 'Verena Menzel', position: t('team.positions.businessIntelligence'), imageSrc: '/team/verena.png' },
  { id: 4, name: 'Andreas Jacobi', position: t('team.positions.financeCfo'), imageSrc: '/team/andreas.png' },
  { id: 5, name: 'Christoph Hempel', position: t('team.positions.businessIntegrity'), imageSrc: '/team/christoph.png' },
])

const handleMemberClick = (member) => {
  console.log(`Request data for: ${member.name} - ${member.position}`)
  // Emit event or handle the click action
  // emit('request-data', member)
}
</script>
