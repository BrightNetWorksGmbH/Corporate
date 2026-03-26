import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export interface PersonalDetail {
  name?: string
  role?: string
  email?: string
  phone?: string
  address?: string
  [key: string]: string | undefined
}

export interface CorporateFile {
  _id: string
  file_name: string
  file_type: string
  mime_type: string | null
  storage_uri: string | null
  file_size: number | null
  description: string | null
  original_name: string | null
  personal_detail: PersonalDetail | null
}

export interface ManagerInfo {
  name: string
  role: string | null
  profile_picture_url: string | null
}

export interface CorporateInstanceData {
  _id: string
  slug: string
  client_name: string
  client_company: string | null
  client_logo_url: string | null
  nda_accepted: boolean
  expires_at: string
  files: CorporateFile[]
  manager: ManagerInfo | null
}

export const useCorporateStore = defineStore('corporate', () => {
  const instance = ref<CorporateInstanceData | null>(null)
  const loading = ref(false)
  const error = ref<string | null>(null)

  const personalDetailFiles = computed(() =>
    instance.value?.files?.filter((f) => f.file_type === 'data') ?? [],
  )

  const downloadableFiles = computed(() =>
    instance.value?.files?.filter((f) => f.file_type !== 'data') ?? [],
  )

  const clientFirstName = computed(() => instance.value?.client_name?.split(' ')[0] ?? '')

  const managerFirstName = computed(() => instance.value?.manager?.name?.split(' ')[0] ?? '')

  function setInstance(data: CorporateInstanceData) {
    instance.value = data
    error.value = null
  }

  function setError(msg: string) {
    error.value = msg
    instance.value = null
  }

  function clearInstance() {
    instance.value = null
    error.value = null
  }

  return {
    instance,
    loading,
    error,
    personalDetailFiles,
    downloadableFiles,
    clientFirstName,
    managerFirstName,
    setInstance,
    setError,
    clearInstance,
  }
})
