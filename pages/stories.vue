<template>
  <div class="stories-page" :dir="locale === 'ar' ? 'rtl' : 'ltr'">

    <!-- Hero Banner -->
    <div class="stories-hero">
      <div class="container">
        <div class="hero-badge">📚</div>
        <h1>{{ locale === 'ar' ? 'اقرأ قصصنا' : 'Read Our Stories' }}</h1>
        <p>{{ locale === 'ar'
          ? 'قصص إبداعية من مسابقة تأليف القصص للأطفال والناشئة في البحرين'
          : 'Creative stories from the Story Writing Competition for children and youth in Bahrain'
        }}</p>
      </div>
    </div>

    <!-- Books shelf -->
    <div class="container section">
      <div class="books-grid">
        <div
          v-for="book in books"
          :key="book.file"
          class="book-card"
          @click="openBook(book)"
        >
          <div class="book-cover" :style="{ background: book.color }">
            <div class="book-spine" :style="{ background: book.spineColor }"></div>
            <div class="book-cover-content">
              <div class="book-icon">📖</div>
              <div class="book-title-cover">{{ book.title }}</div>
              <div class="book-author-cover">{{ book.author }}</div>
            </div>
          </div>
          <div class="book-info">
            <h3>{{ book.title }}</h3>
            <p>{{ book.author }}</p>
            <button class="btn-read">
              {{ locale === 'ar' ? 'اقرأ الكتاب' : 'Read Book' }} →
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Flipbook Modal -->
    <div v-if="activeBook" class="flipbook-modal" @click.self="closeBook">
      <div class="flipbook-container">
        <div class="flipbook-header">
          <h2>{{ activeBook.title }}</h2>
          <div class="flipbook-actions">
            <a :href="activeBook.url" target="_blank" class="btn-download">
              ⬇️ {{ locale === 'ar' ? 'تحميل' : 'Download' }}
            </a>
            <button class="btn-close" @click="closeBook">✕</button>
          </div>
        </div>

        <!-- PDF Flipbook using PDF.js + StPageFlip -->
        <div class="flipbook-viewer">
          <div class="flipbook-controls">
            <button class="flip-btn" @click="prevPage" :disabled="currentPage <= 1">
              {{ locale === 'ar' ? '›' : '‹' }}
            </button>
            <span class="page-info">
              {{ locale === 'ar'
                ? `صفحة ${currentPage} من ${totalPages}`
                : `Page ${currentPage} of ${totalPages}`
              }}
            </span>
            <button class="flip-btn" @click="nextPage" :disabled="currentPage >= totalPages">
              {{ locale === 'ar' ? '‹' : '›' }}
            </button>
          </div>

          <div class="pages-wrapper" :class="{ rtl: locale === 'ar' }">
            <!-- Left page (or right in RTL) -->
            <div class="page-left" v-show="!isMobile">
              <canvas :id="`canvas-left`" class="pdf-canvas"></canvas>
            </div>
            <!-- Right page (or left in RTL) -->
            <div class="page-right">
              <canvas :id="`canvas-right`" class="pdf-canvas"></canvas>
              <div v-if="loading" class="page-loading">
                <div class="spinner"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
const { locale } = useI18n()

useHead({
  title: locale.value === 'ar' ? 'قصصنا | مؤسسة البحرين' : 'Our Stories | Bahrain Trust Foundation',
  script: [
    { src: 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js', defer: true }
  ]
})

const SUPABASE_URL = 'https://atfcckxxcomreukjzuxa.supabase.co/storage/v1/object/public/stories'

const books = [
  {
    file: 'Rana.pdf',
    title: locale.value === 'ar' ? 'قصة رنا' : 'Rana\'s Story',
    author: 'Rana',
    color: 'linear-gradient(135deg, #E31C26, #8B0000)',
    spineColor: '#8B0000',
    url: `${SUPABASE_URL}/Rana.pdf`,
  },
  {
    file: 'imand.pdf',
    title: locale.value === 'ar' ? 'قصة إيمان' : 'Imand\'s Story',
    author: 'Imand',
    color: 'linear-gradient(135deg, #00bcd4, #006064)',
    spineColor: '#006064',
    url: `${SUPABASE_URL}/imand.pdf`,
  },
  {
    file: 'mustafa_compressed.pdf',
    title: locale.value === 'ar' ? 'قصة مصطفى' : 'Mustafa\'s Story',
    author: 'Mustafa',
    color: 'linear-gradient(135deg, #3c3950, #212331)',
    spineColor: '#212331',
    url: `${SUPABASE_URL}/mustafa_compressed.pdf`,
  },
  {
    file: 'Batool-dummy-3-r1.pdf',
    title: locale.value === 'ar' ? 'قصة بتول' : 'Batool\'s Story',
    author: 'Batool',
    color: 'linear-gradient(135deg, #c8972a, #8B6914)',
    spineColor: '#8B6914',
    url: `${SUPABASE_URL}/Batool-dummy-3-r1.pdf`,
  },
  {
    file: 'siddiqa-FINAL-2-r1.pdf',
    title: locale.value === 'ar' ? 'قصة صديقة' : 'Siddiqa\'s Story',
    author: 'Siddiqa',
    color: 'linear-gradient(135deg, #1a237e, #283593)',
    spineColor: '#1a237e',
    url: `${SUPABASE_URL}/siddiqa-FINAL-2-r1.pdf`,
  },
  {
    file: '2-Booklet-A4s.pdf',
    title: locale.value === 'ar' ? 'مجموعة القصص ٢' : 'Stories Collection 2',
    author: locale.value === 'ar' ? 'مؤسسة بحرين ترست' : 'Bahrain Trust Foundation',
    color: 'linear-gradient(135deg, #2e7d32, #1b5e20)',
    spineColor: '#1b5e20',
    url: `${SUPABASE_URL}/2-Booklet-A4s.pdf`,
  },
  {
    file: '3-Booklets.pdf',
    title: locale.value === 'ar' ? 'مجموعة القصص ٣' : 'Stories Collection 3',
    author: locale.value === 'ar' ? 'مؤسسة بحرين ترست' : 'Bahrain Trust Foundation',
    color: 'linear-gradient(135deg, #6a1b9a, #4a148c)',
    spineColor: '#4a148c',
    url: `${SUPABASE_URL}/3-Booklets.pdf`,
  },
]

const activeBook = ref(null)
const currentPage = ref(1)
const totalPages = ref(0)
const loading = ref(false)
const isMobile = ref(false)
let pdfDoc = null

onMounted(() => {
  isMobile.value = window.innerWidth < 768
  window.addEventListener('resize', () => {
    isMobile.value = window.innerWidth < 768
  })
})

async function openBook(book) {
  activeBook.value = book
  currentPage.value = 1
  await nextTick()
  await loadPDF(book.url)
}

function closeBook() {
  activeBook.value = null
  pdfDoc = null
  currentPage.value = 1
  totalPages.value = 0
}

async function loadPDF(url) {
  loading.value = true
  try {
    const pdfjsLib = window['pdfjs-dist/build/pdf']
    if (!pdfjsLib) {
      // Load PDF.js if not loaded
      await new Promise((resolve) => setTimeout(resolve, 1000))
    }

    const pdfjsLib2 = window.pdfjsLib || window['pdfjs-dist/build/pdf']
    pdfjsLib2.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js'

    pdfDoc = await pdfjsLib2.getDocument(url).promise
    totalPages.value = pdfDoc.numPages
    await renderPages()
  } catch (e) {
    console.error('PDF load error:', e)
  }
  loading.value = false
}

async function renderPages() {
  if (!pdfDoc) return
  loading.value = true

  // Render main page
  const canvasRight = document.getElementById('canvas-right')
  if (canvasRight && currentPage.value <= totalPages.value) {
    await renderPage(pdfDoc, currentPage.value, canvasRight)
  }

  // Render facing page (RTL: previous page, LTR: next page)
  if (!isMobile.value) {
    const canvasLeft = document.getElementById('canvas-left')
    const facingPage = locale.value === 'ar' ? currentPage.value + 1 : currentPage.value - 1
    if (canvasLeft && facingPage >= 1 && facingPage <= totalPages.value) {
      await renderPage(pdfDoc, facingPage, canvasLeft)
    }
  }

  loading.value = false
}

async function renderPage(pdf, pageNum, canvas) {
  const page = await pdf.getPage(pageNum)
  const viewport = page.getViewport({ scale: 1.2 })
  canvas.height = viewport.height
  canvas.width = viewport.width
  const ctx = canvas.getContext('2d')
  await page.render({ canvasContext: ctx, viewport }).promise
}

async function prevPage() {
  if (currentPage.value > 1) {
    currentPage.value = locale.value === 'ar'
      ? Math.min(currentPage.value + 2, totalPages.value)
      : Math.max(currentPage.value - 2, 1)
    await renderPages()
  }
}

async function nextPage() {
  if (currentPage.value < totalPages.value) {
    currentPage.value = locale.value === 'ar'
      ? Math.max(currentPage.value - 2, 1)
      : Math.min(currentPage.value + 2, totalPages.value)
    await renderPages()
  }
}
</script>

<style scoped>
/* Hero */
.stories-hero {
  background: linear-gradient(135deg, #3c3950 0%, #212331 100%);
  padding: 80px 0 60px;
  color: white;
  text-align: center;
}

.hero-badge {
  font-size: 48px;
  margin-bottom: 16px;
}

.stories-hero h1 {
  font-size: clamp(32px, 4vw, 52px);
  font-weight: 900;
  margin-bottom: 16px;
}

.stories-hero p {
  font-size: 17px;
  opacity: 0.8;
  max-width: 600px;
  margin: 0 auto;
}

/* Books grid */
.books-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
}

.book-card {
  cursor: pointer;
  transition: transform 0.2s;
}
.book-card:hover { transform: translateY(-6px); }

.book-cover {
  border-radius: 4px 8px 8px 4px;
  height: 220px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: -4px 4px 16px rgba(0,0,0,0.3), 4px 0 8px rgba(0,0,0,0.1);
  overflow: hidden;
}

.book-spine {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 14px;
  border-radius: 4px 0 0 4px;
}

.book-cover-content {
  text-align: center;
  color: white;
  padding: 16px;
  z-index: 1;
}

.book-icon { font-size: 32px; margin-bottom: 8px; }

.book-title-cover {
  font-size: 14px;
  font-weight: 700;
  line-height: 1.4;
  margin-bottom: 6px;
}

.book-author-cover {
  font-size: 12px;
  opacity: 0.8;
}

.book-info {
  padding: 12px 0;
  text-align: center;
}

.book-info h3 {
  font-size: 15px;
  font-weight: 700;
  color: #3c3950;
  margin-bottom: 4px;
}

.book-info p {
  font-size: 13px;
  color: #99a9b5;
  margin-bottom: 10px;
}

.btn-read {
  background: #E31C26;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 3px;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s;
  font-family: inherit;
}
.btn-read:hover { background: #b5151e; }

/* Modal */
.flipbook-modal {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.85);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.flipbook-container {
  background: #1a1a2e;
  border-radius: 8px;
  width: 100%;
  max-width: 1000px;
  max-height: 90vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.flipbook-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  background: #212331;
  border-bottom: 1px solid rgba(255,255,255,0.1);
}

.flipbook-header h2 {
  color: white;
  font-size: 18px;
  font-weight: 700;
}

.flipbook-actions {
  display: flex;
  gap: 12px;
  align-items: center;
}

.btn-download {
  background: #00bcd4;
  color: white;
  padding: 6px 14px;
  border-radius: 3px;
  font-size: 12px;
  font-weight: 700;
  text-decoration: none;
  transition: background 0.2s;
}
.btn-download:hover { background: #0097a7; }

.btn-close {
  background: rgba(255,255,255,0.1);
  border: none;
  color: white;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
}
.btn-close:hover { background: #E31C26; }

.flipbook-viewer {
  flex: 1;
  overflow: auto;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
}

.flipbook-controls {
  display: flex;
  align-items: center;
  gap: 20px;
}

.flip-btn {
  background: #E31C26;
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
  font-family: inherit;
}
.flip-btn:hover:not(:disabled) { background: #b5151e; }
.flip-btn:disabled { opacity: 0.4; cursor: not-allowed; }

.page-info { color: rgba(255,255,255,0.7); font-size: 14px; }

.pages-wrapper {
  display: flex;
  gap: 4px;
  direction: ltr;
}

.pages-wrapper.rtl {
  direction: rtl;
}

.page-left, .page-right {
  position: relative;
  background: white;
  box-shadow: 0 4px 24px rgba(0,0,0,0.4);
}

.pdf-canvas {
  display: block;
  max-height: 60vh;
  width: auto;
}

.page-loading {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
}

.spinner {
  width: 40px; height: 40px;
  border: 3px solid #f0f0f0;
  border-top-color: #E31C26;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }

@media (max-width: 900px) {
  .books-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 600px) {
  .books-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; }
  .book-cover { height: 160px; }
  .pages-wrapper { flex-direction: column; }
}
</style>
