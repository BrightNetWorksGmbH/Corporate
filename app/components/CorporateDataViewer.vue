<template>
  <section
    v-if="hasAnyContent"
    class="relative z-10 bg-midnight-blue py-20 px-4"
  >
    <div class="container mx-auto max-w-5xl space-y-16">

      <!-- ── Section header ── -->
      <div class="text-center space-y-3">
        <div class="flex justify-center mb-4">
          <img src="/white-icons/lockfingure.svg" alt="secure" class="w-10 h-10 opacity-80" />
        </div>
        <h2 class="text-clean-white text-3xl font-bold tracking-tight">
          {{ $t('corporate.dataViewer.title') }}
        </h2>
        <p class="text-clean-white/50 text-sm">
          {{ $t('corporate.dataViewer.subtitle') }}
        </p>
      </div>

      <!-- ── Personal Data (file_type === 'data') ── -->
      <div v-if="personalFiles.length > 0" class="space-y-6">
        <!-- Sub-section header -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 class="text-clean-white font-bold text-lg">
              {{ $t('corporate.dataViewer.contactsTitle') }}
            </h3>
            <p class="text-clean-white/40 text-xs mt-1">
              {{ $t('corporate.dataViewer.contactsSubtitle') }}
            </p>
          </div>
          <!-- Save all to phone -->
          <button
            @click="saveAllPersonalData"
            class="flex items-center gap-2 bg-lemon/10 hover:bg-lemon/20 border border-lemon/30 text-lemon px-5 py-2.5 rounded-[10px] text-xs font-semibold transition-colors whitespace-nowrap"
          >
            <img src="/common/whitedonwarrow.svg" alt="" class="w-4 h-4 opacity-80 brightness-200" />
            {{ $t('corporate.dataViewer.saveAll') }}
          </button>
        </div>

        <!-- Contact cards grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div
            v-for="file in personalFiles"
            :key="file._id"
            class="bg-clean-white/5 border border-clean-white/10 rounded-[16px] p-6 hover:bg-clean-white/8 transition-colors"
          >
            <!-- ── Card header: file-level metadata ── -->
            <div class="flex items-start justify-between mb-5">
              <div class="min-w-0 pr-3">
                <p class="text-clean-white font-bold text-base leading-snug">
                  {{ file.file_name }}
                </p>
                <p v-if="file.description" class="text-clean-white/45 text-xs mt-1 leading-relaxed">
                  {{ file.description }}
                </p>
              </div>
              <!-- Individual .txt download -->
              <button
                @click="downloadSinglePersonalData(file)"
                class="flex-shrink-0 p-2 rounded-[8px] border border-clean-white/20 hover:border-lemon/40 hover:bg-lemon/10 transition-colors group"
                :title="$t('corporate.dataViewer.downloadContact')"
              >
                <img src="/common/whitelock.svg" alt="download" class="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
              </button>
            </div>

            <!-- ── Card body: all personal_detail fields (fully dynamic) ── -->
            <div
              v-if="personalDetailEntries(file).length > 0"
              class="space-y-2.5 border-t border-clean-white/8 pt-4"
            >
              <div
                v-for="[key, value] in personalDetailEntries(file)"
                :key="key"
                class="flex items-start gap-2.5"
              >
                <span class="text-clean-white/30 text-[10px] uppercase tracking-wider w-16 flex-shrink-0 pt-0.5 leading-relaxed">
                  {{ formatFieldLabel(key) }}
                </span>
                <!-- Email field → mailto link -->
                <a
                  v-if="isEmailKey(key)"
                  :href="`mailto:${value}`"
                  class="text-lemon/80 hover:text-lemon text-xs transition-colors break-all"
                >{{ value }}</a>
                <!-- Phone / fax field → tel link -->
                <a
                  v-else-if="isPhoneKey(key)"
                  :href="`tel:${value}`"
                  class="text-clean-white/80 hover:text-clean-white text-xs transition-colors"
                >{{ value }}</a>
                <!-- All other fields -->
                <span v-else class="text-clean-white/80 text-xs leading-relaxed">{{ value }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Divider between sections -->
      <div v-if="personalFiles.length > 0 && downloadableFiles.length > 0" class="border-t border-clean-white/10" />

      <!-- ── Downloadable Files (file_type !== 'data') ── -->
      <div v-if="downloadableFiles.length > 0" class="space-y-6">
        <!-- Sub-section header -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 class="text-clean-white font-bold text-lg">
              {{ $t('corporate.dataViewer.filesTitle') }}
            </h3>
            <p class="text-clean-white/40 text-xs mt-1">
              {{ $t('corporate.dataViewer.filesSubtitle') }}
            </p>
          </div>
          <!-- Download all button -->
          <button
            @click="downloadAllFiles"
            :disabled="downloadingAll"
            class="flex items-center gap-2 bg-lemon text-midnight-blue px-5 py-2.5 rounded-[10px] text-xs font-bold transition-all hover:bg-lemon/90 disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap"
          >
            <img src="/common/whitedonwarrow.svg" alt="" class="w-4 h-4" />
            <span v-if="downloadingAll">{{ $t('corporate.dataViewer.downloading') }}</span>
            <span v-else>{{ $t('corporate.dataViewer.downloadAll') }}</span>
          </button>
        </div>

        <!-- Files list -->
        <div class="space-y-3">
          <div
            v-for="file in downloadableFiles"
            :key="file._id"
            class="flex items-center justify-between bg-clean-white/5 border border-clean-white/10 rounded-[12px] px-5 py-4 hover:bg-clean-white/8 transition-colors group"
          >
            <!-- File info -->
            <div class="flex items-center gap-3 min-w-0">
              <!-- File type icon -->
              <div class="w-9 h-9 rounded-[8px] bg-clean-white/10 flex items-center justify-center flex-shrink-0">
                <span class="text-clean-white/60 text-[9px] font-bold uppercase tracking-wide">
                  {{ fileExtension(file) }}
                </span>
              </div>
              <div class="min-w-0">
                <p class="text-clean-white text-sm font-medium truncate">
                  {{ file.original_name || file.file_name }}
                </p>
                <p v-if="file.description" class="text-clean-white/40 text-xs truncate mt-0.5">
                  {{ file.description }}
                </p>
                <p v-if="file.file_size" class="text-clean-white/30 text-[10px] mt-0.5">
                  {{ formatFileSize(file.file_size) }}
                </p>
              </div>
            </div>

            <!-- Individual download -->
            <button
              @click="downloadSingleFile(file)"
              class="flex-shrink-0 ml-4 flex items-center gap-1.5 bg-clean-white/10 hover:bg-lemon hover:text-midnight-blue px-4 py-2 rounded-[8px] text-clean-white text-xs font-semibold transition-all group-hover:bg-lemon/10"
              :title="$t('corporate.dataViewer.downloadFile')"
            >
              <img src="/common/whitedonwarrow.svg" alt="" class="w-3.5 h-3.5 opacity-70" />
              {{ $t('corporate.dataViewer.download') }}
            </button>
          </div>
        </div>
      </div>

      <!-- Footer note -->
      <div class="text-center pt-4">
        <p class="text-clean-white/25 text-[11px]">
          {{ $t('corporate.dataViewer.privacyNote') }}
        </p>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import type { CorporateFile } from '~/stores/corporate'

const props = defineProps<{
  personalFiles: CorporateFile[]
  downloadableFiles: CorporateFile[]
}>()

const { t } = useI18n()

const hasAnyContent = computed(
  () => props.personalFiles.length > 0 || props.downloadableFiles.length > 0,
)

// ── Field helpers ─────────────────────────────────────────────────────────────

/**
 * Returns non-empty entries of personal_detail as ordered pairs.
 * Filters out null / undefined / empty-string values.
 */
function personalDetailEntries(file: CorporateFile): [string, string][] {
  if (!file.personal_detail) return []
  return Object.entries(file.personal_detail).filter(
    ([, v]) => v !== null && v !== undefined && String(v).trim() !== '',
  ) as [string, string][]
}

/**
 * Converts a snake_case or camelCase key into a readable label.
 * e.g. "email_work" → "Email Work", "phoneNumber" → "Phone Number"
 */
function formatFieldLabel(key: string): string {
  return key
    .replace(/([a-z])([A-Z])/g, '$1 $2') // camelCase → words
    .replace(/_/g, ' ')                   // snake_case → words
    .replace(/\b\w/g, (c) => c.toUpperCase()) // Title Case
}

/** Heuristic: key likely holds an email address */
function isEmailKey(key: string): boolean {
  return /email|mail/i.test(key)
}

/** Heuristic: key likely holds a phone number */
function isPhoneKey(key: string): boolean {
  return /phone|tel|fon|mobile|cell|handy/i.test(key)
}

// ── File extension / size helpers ─────────────────────────────────────────────

function fileExtension(file: CorporateFile): string {
  if (file.file_type && file.file_type !== 'data') return file.file_type.toUpperCase()
  const name = file.original_name || file.file_name || ''
  return name.split('.').pop()?.toUpperCase() ?? 'FILE'
}

function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

// ── Personal data download helpers ───────────────────────────────────────────

/**
 * Builds a plain-text representation of a personal-detail file.
 * Iterates all keys dynamically — no hardcoded field names.
 */
function buildPersonalDetailText(file: CorporateFile): string {
  const lines: string[] = [`=== ${file.file_name} ===`]
  if (file.description) lines.push(file.description)
  lines.push('')
  for (const [key, value] of personalDetailEntries(file)) {
    lines.push(`${formatFieldLabel(key)}: ${value}`)
  }
  return lines.join('\n')
}

function triggerTextDownload(content: string, filename: string) {
  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}

function downloadSinglePersonalData(file: CorporateFile) {
  const content = buildPersonalDetailText(file)
  triggerTextDownload(content, `${file.file_name}.txt`)
}

function saveAllPersonalData() {
  const allContent = props.personalFiles.map(buildPersonalDetailText).join('\n\n')
  triggerTextDownload(allContent, 'contacts.txt')
}

// ── File download helpers ─────────────────────────────────────────────────────

async function downloadSingleFile(file: CorporateFile) {
  if (!file.storage_uri) return

  const filename = file.original_name || file.file_name || 'download'
  // Use Nuxt server proxy to handle CORS-safe downloads
  const proxyUrl = `/api/file-download?url=${encodeURIComponent(file.storage_uri)}&name=${encodeURIComponent(filename)}`

  const a = document.createElement('a')
  a.href = proxyUrl
  a.download = filename
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
}

const downloadingAll = ref(false)

async function downloadAllFiles() {
  if (downloadingAll.value) return
  downloadingAll.value = true

  for (const file of props.downloadableFiles) {
    if (!file.storage_uri) continue
    await downloadSingleFile(file)
    // Small delay between downloads to avoid browser blocking multiple downloads
    await new Promise((r) => setTimeout(r, 600))
  }

  downloadingAll.value = false
}
</script>
