<template>
  <section class="relative py-20  px-16">
    <!-- Background Image -->
    <div class="absolute inset-0 bg-cover bg-center bg-no-repeat " :style="{
      backgroundImage: `url('/common/euflagg.png')`
    }"></div>
    <!-- <div class="absolute inset-0 bg-midnight-blue opacity-30"></div> -->

    <!-- Content -->
    <div
      class="relative z-10 container mx-auto w-full md:max-w-5xl flex flex-col justify-center items-center ">
      <!-- Title -->
      <div class="text-center px-2 pt-5 mb-12">
        <h3 class="text-h3 text-midnight-blue leading-relaxed whitespace-pre-line">
          {{ $t('contact.titleLine1') }}<br />
          {{ $t('contact.titleLine2') }}
        </h3>
      </div>

      <!-- Contact Form -->
      <form @submit.prevent="handleSubmit" class=" space-y-8  w-full lg:w-[60%]">
        <!-- Name Input -->
        <input v-model="formData.name" type="text" :placeholder="$t('contact.namePlaceholder')" required
          class="text-center w-full p-7 bg-clean-white text-midnight-blue placeholder-midnight-blue text-2xl  focus:outline-none focus:ring-2 focus:ring-lemon transition-all" />

        <!-- Email Input -->
        <input v-model="formData.email" type="email" :placeholder="$t('contact.emailPlaceholder')" required
          class="text-center w-full p-7 bg-clean-white text-midnight-blue placeholder-midnight-blue text-2xl  focus:outline-none focus:ring-2 focus:ring-lemon transition-all" />

        <!-- Message Textarea -->
        <textarea v-model="formData.message" :placeholder="$t('contact.messagePlaceholder')" rows="4" required
          class="w-full p-7 bg-clean-white text-midnight-blue placeholder-midnight-blue text-2xl  focus:outline-none focus:ring-2 focus:ring-lemon transition-all resize-none"></textarea>

        <!-- Submit Button -->
        <div class="flex justify-center">
          <button type="submit" :disabled="isSubmitting"
            class="p-6 w-full border-[5px] border-lemon bg-midnight-blue text-clean-white text-3xl tracking-[5px] font-bold hover:bg-opacity-90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed">
            {{ $t('contact.submit') }}
          </button>
        </div>

        <p v-if="errorMessage" class="text-center text-red-100 text-lg">
          {{ errorMessage }}
        </p>
        <p v-if="successMessage" class="text-center text-clean-white text-lg">
          {{ successMessage }}
        </p>
      </form>
    </div>
  
  </section>
</template>

<script setup lang="ts">
import { ref, onBeforeUnmount } from 'vue'

const { t } = useI18n()

const formData = ref({
  name: '',
  email: '',
  message: ''
})

const isSubmitting = ref(false)
const errorMessage = ref('')
const successMessage = ref('')
let messageTimeout: ReturnType<typeof setTimeout> | null = null

const clearMessages = () => {
  if (messageTimeout) {
    clearTimeout(messageTimeout)
    messageTimeout = null
  }
  errorMessage.value = ''
  successMessage.value = ''
}

const setMessage = (message: string, isError = false) => {
  clearMessages()
  
  if (isError) {
    errorMessage.value = message
  } else {
    successMessage.value = message
  }
  
  messageTimeout = setTimeout(() => {
    clearMessages()
  }, 5000)
}

const handleSubmit = async () => {
  if (isSubmitting.value) return

  isSubmitting.value = true
  clearMessages()

  try {
    await $fetch('/api/contact', {
      method: 'POST',
      body: formData.value,
    })

    setMessage(t('contact.successMessage'))
    formData.value = { name: '', email: '', message: '' }
  } catch (error: any) {
    setMessage(error?.data?.statusMessage || t('contact.errorMessage'), true)
  } finally {
    isSubmitting.value = false
  }
}

onBeforeUnmount(() => {
  clearMessages()
})
</script>
