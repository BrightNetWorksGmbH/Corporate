<template>
  <section class="bg-clean-white py-20 px-4 rounded-b-2xl ">
    <div class="container mx-auto">
      <!-- Title -->
      <div class="text-start mb-12">
        <h5 class="text-h5 text-midnight-blue">
          Wir bauen, was Europa schützt.<br />
          Ohne Kompromisse.
        </h5>
      </div>

      <!-- Team Members Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 ">
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
const teamMembers = [
  {
    id: 1,
    name: 'Stephan Tomat',
    position: 'Vorstandsvorsitzender',
    imageSrc: '/team/stephan.png' // Placeholder - update with actual image path
  },
  {
    id: 2,
    name: 'Dirk Markus',
    position: 'Chief of Staff',
    imageSrc: '/team/dirk.png' // Placeholder - update with actual image path
  },
  {
    id: 3,
    name: 'Verena Menzel',
    position: 'Business Intelligence',
    imageSrc: '/team/verena.png' // Placeholder - update with actual image path
  },
  {
    id: 4,
    name: 'Andreas Jacobi',
    position: 'Finance, CFO',
    imageSrc: '/team/stephan.png' // Placeholder - update with actual image path
  },
  {
    id: 5,
    name: 'Christoph Hempel',
    position: 'Business Integrity',
    imageSrc: '/team/stephan.png' // Placeholder - update with actual image path
  }
]

const handleMemberClick = (member) => {
  console.log(`Request data for: ${member.name} - ${member.position}`)
  // Emit event or handle the click action
  // emit('request-data', member)
}
</script>
