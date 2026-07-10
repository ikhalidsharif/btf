<template>
  <div class="stories-page">

    <!-- Hero -->
    <div class="stories-hero">
      <div class="container">
        <h1>{{ locale === 'ar' ? 'اقرأ قصصنا' : 'Read Our Stories' }}</h1>
        <p>{{ locale === 'ar'
          ? 'قصص إبداعية من مسابقة تأليف القصص للأطفال والناشئة في البحرين'
          : 'Creative stories from the Story Writing Competition for children and youth in Bahrain'
        }}</p>
      </div>
    </div>

    <!-- Books Grid -->
    <div class="container section">
      <div class="books-grid">
        <div
          v-for="book in books"
          :key="book.file"
          class="book-card"
          @click="openBook(book)"
        >
          <!-- Book Cover with real thumbnail -->
          <div class="book-cover">
            <img :src="book.cover" :alt="book.title" class="cover-img" />
            <div class="cover-overlay">
              <span class="read-icon">📖</span>
            </div>
          </div>
          <div class="book-info">
            <h3>{{ book.title }}</h3>
            <button class="btn-read">
              {{ locale === 'ar' ? 'اقرأ الكتاب' : 'Read Book' }} →
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- PDF Viewer Modal -->
    <div v-if="activeBook" class="modal-overlay" @click.self="closeBook">
      <div class="modal-box">

        <div class="modal-header">
          <h2>{{ activeBook.title }}</h2>
          <div class="modal-actions">
            <a :href="activeBook.url" target="_blank" download class="btn-download">
              ⬇️ {{ locale === 'ar' ? 'تحميل' : 'Download' }}
            </a>
            <button @click="closeBook" class="btn-close">✕</button>
          </div>
        </div>

        <div class="modal-body">
          <!-- Controls -->
          <div class="page-controls">
            <!-- LTR: ‹ prev | page | next › -->
            <!-- RTL: › next | page | prev ‹ (visual arrows reversed) -->
            <button @click="locale === 'ar' ? nextPage() : prevPage()"
              :disabled="locale === 'ar' ? currentPage >= totalPages : currentPage <= 1"
              class="flip-btn">‹</button>
            <span class="page-num">{{ currentPage }} / {{ totalPages }}</span>
            <button @click="locale === 'ar' ? prevPage() : nextPage()"
              :disabled="locale === 'ar' ? currentPage <= 1 : currentPage >= totalPages"
              class="flip-btn">›</button>
          </div>

          <!-- PDF Pages - double page spread -->
          <!-- RTL books open right-to-left: right=current, left=current+1 -->
          <!-- LTR books open left-to-right: left=current-1, right=current -->
          <div class="spread">
            <div class="page-wrap" v-show="!isMobile && showLeftPage">
              <canvas ref="canvasLeft" class="pdf-page"></canvas>
            </div>
            <div class="page-wrap">
              <canvas ref="canvasRight" class="pdf-page"></canvas>
              <div v-if="loading" class="loading-overlay">
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
  title: computed(() => locale.value === 'ar' ? 'قصصنا | مؤسسة البحرين' : 'Our Stories | Bahrain Trust Foundation'),
  script: [
    {
      src: 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js',
      defer: true,
    }
  ]
})

const config = useRuntimeConfig()
const SUPABASE = `${config.public.supabaseUrl}/storage/v1/object/public/stories`
const WP = 'https://bahraintrust.org/wp-content/uploads/real3d-flipbook'

const books = [
  {
    title: locale.value === 'ar' ? 'برواز الأعواد' : 'Brawaz Al-Awad',
    cover: `${WP}/flipbook_2/thumb.jpg`,
    url: `${SUPABASE}/Brawaz-Al-Awad.pdf`,
  },
  {
    title: locale.value === 'ar' ? 'رأيت في حلمي' : 'I Saw in My Dream',
    cover: `${WP}/flipbook_4/thumb.jpg`,
    url: `${SUPABASE}/Rayt-Fi-Holmi.pdf`,
  },
  {
    title: locale.value === 'ar' ? 'أنا طباخ ماهر' : 'I Am a Great Chef',
    cover: `${WP}/flipbook_5/thumb.jpg`,
    url: `${SUPABASE}/Tabbakh-Maher.pdf`,
  },
  {
    title: locale.value === 'ar' ? 'طائرتي الصفراء' : 'My Yellow Airplane',
    cover: `${WP}/flipbook_6/thumb.jpg`,
    url: `${SUPABASE}/Tayarti-Al-Safra.pdf`,
  },
  {
    title: locale.value === 'ar' ? 'أح مد' : 'Ahmad',
    cover: `${WP}/flipbook_7/thumb.jpg`,
    url: `${SUPABASE}/Ahmad.pdf`,
  },
  {
    title: locale.value === 'ar' ? 'مقدام يعيد الأيام' : 'Moqdam Relives the Days',
    cover: `${WP}/flipbook_8/thumb.jpg`,
    url: `${SUPABASE}/Moqdam.pdf`,
  },
  {
    title: locale.value === 'ar' ? 'العالم الذي أيقظني' : 'The World That Woke Me',
    cover: `${WP}/flipbook_10/thumb.jpg`,
    url: `${SUPABASE}/Al-Alam-Alathi-Ayqathni.pdf`,
  },
  {
    title: locale.value === 'ar' ? 'جدي القلاف' : 'My Grandfather the Boat Builder',
    cover: `${WP}/flipbook_11/thumb.jpg`,
    url: `${SUPABASE}/Jiddi-Al-Qallaf.pdf`,
  },
  {
    title: locale.value === 'ar' ? 'معالم بلادنا' : 'Landmarks of Our Country',
    cover: `${WP}/flipbook_12/thumb.jpg`,
    url: `${SUPABASE}/Malem-Bladna.pdf`,
  },
  {
    title: locale.value === 'ar' ? 'ما هو إعادة التدوير؟' : 'What is Recycling?',
    cover: `${WP}/flipbook_14/thumb.jpg`,
    url: `${SUPABASE}/Eadat-Tadweer.pdf`,
  },
]

// State
const activeBook = ref(null)
const currentPage = ref(1)
const totalPages = ref(0)
const loading = ref(false)
const isMobile = ref(false)
const canvasLeft = ref(null)
const canvasRight = ref(null)
let pdfDoc = null

const showLeftPage = computed(() => {
  if (locale.value === 'ar') {
    // RTL: show left page if there's a next page to show
    return currentPage.value + 1 <= totalPages.value
  } else {
    // LTR: show left page if there's a previous page
    return currentPage.value > 1
  }
})

onMounted(() => {
  isMobile.value = window.innerWidth < 768
  window.addEventListener('resize', () => {
    isMobile.value = window.innerWidth < 768
  })
  // Keyboard navigation
  window.addEventListener('keydown', (e) => {
    if (!activeBook.value) return
    if (e.key === 'ArrowRight') locale.value === 'ar' ? nextPage() : prevPage()
    if (e.key === 'ArrowLeft') locale.value === 'ar' ? prevPage() : nextPage()
    if (e.key === 'Escape') closeBook()
  })
})

async function openBook(book) {
  activeBook.value = book
  currentPage.value = 1
  loading.value = true
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
  try {
    // Wait for pdf.js to load
    let attempts = 0
    while (!window.pdfjsLib && attempts < 20) {
      await new Promise(r => setTimeout(r, 200))
      attempts++
    }

    const lib = window.pdfjsLib
    if (!lib) throw new Error('PDF.js not loaded')

    lib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js'
    pdfDoc = await lib.getDocument(url).promise
    totalPages.value = pdfDoc.numPages
    await renderSpread()
  } catch (e) {
    console.error('PDF error:', e)
  }
  loading.value = false
}

async function renderSpread() {
  if (!pdfDoc) return
  loading.value = true

  if (locale.value === 'ar') {
    // RTL: reading right-to-left
    // Right canvas = current page (first in reading order)
    // Left canvas = current page + 1 (second in reading order)
    const rightPageNum = currentPage.value
    const leftPageNum = currentPage.value + 1

    if (canvasRight.value && rightPageNum <= totalPages.value) {
      await renderPage(rightPageNum, canvasRight.value)
    }
    if (!isMobile.value && canvasLeft.value && leftPageNum <= totalPages.value) {
      await renderPage(leftPageNum, canvasLeft.value)
    }
  } else {
    // LTR: reading left-to-right
    // Left canvas = previous page, right canvas = current page
    const rightPageNum = currentPage.value
    const leftPageNum = currentPage.value - 1

    if (canvasRight.value && rightPageNum <= totalPages.value) {
      await renderPage(rightPageNum, canvasRight.value)
    }
    if (!isMobile.value && canvasLeft.value && leftPageNum >= 1) {
      await renderPage(leftPageNum, canvasLeft.value)
    }
  }

  loading.value = false
}

async function renderPage(num, canvas) {
  const page = await pdfDoc.getPage(num)
  const scale = Math.min(
    (window.innerWidth * 0.4) / page.getViewport({ scale: 1 }).width,
    (window.innerHeight * 0.75) / page.getViewport({ scale: 1 }).height,
    2
  )
  const viewport = page.getViewport({ scale })
  canvas.width = viewport.width
  canvas.height = viewport.height
  await page.render({ canvasContext: canvas.getContext('2d'), viewport }).promise
}

async function prevPage() {
  // prevPage = go to earlier pages (lower page numbers)
  if (currentPage.value <= 1) return
  currentPage.value = Math.max(1, currentPage.value - 2)
  await renderSpread()
}

async function nextPage() {
  // nextPage = go to later pages (higher page numbers)
  if (currentPage.value >= totalPages.value) return
  currentPage.value = Math.min(totalPages.value, currentPage.value + 2)
  await renderSpread()
}
</script>

<style scoped>
.stories-hero {
  background: linear-gradient(135deg, #3c3950, #212331);
  padding: 80px 0 60px;
  color: white;
  text-align: center;
}
.stories-hero h1 {
  font-size: clamp(28px, 4vw, 48px);
  font-weight: 900;
  margin-bottom: 12px;
}
.stories-hero p { font-size: 16px; opacity: 0.8; max-width: 600px; margin: 0 auto; }

/* Books Grid */
.books-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 28px;
}

.book-card {
  cursor: pointer;
  transition: transform 0.25s;
}
.book-card:hover { transform: translateY(-6px); }

.book-cover {
  position: relative;
  border-radius: 4px 8px 8px 4px;
  overflow: hidden;
  box-shadow: -4px 4px 16px rgba(0,0,0,0.25), 2px 0 6px rgba(0,0,0,0.1);
  aspect-ratio: 3/4;
}

.cover-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.cover-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
}
.book-card:hover .cover-overlay { background: rgba(227,28,38,0.5); }

.read-icon {
  font-size: 32px;
  opacity: 0;
  transform: scale(0.5);
  transition: all 0.2s;
}
.book-card:hover .read-icon { opacity: 1; transform: scale(1); }

.book-info {
  padding: 10px 0;
  text-align: center;
}
.book-info h3 {
  font-size: 13px;
  font-weight: 700;
  color: #3c3950;
  margin-bottom: 8px;
  line-height: 1.4;
}

.btn-read {
  background: #E31C26;
  color: white;
  border: none;
  padding: 6px 14px;
  border-radius: 3px;
  font-size: 11px;
  font-weight: 700;
  cursor: pointer;
  font-family: inherit;
  transition: background 0.2s;
}
.btn-read:hover { background: #b5151e; }

/* Modal */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.9);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
}

.modal-box {
  background: #1a1a2e;
  border-radius: 8px;
  width: 100%;
  max-width: 1100px;
  max-height: 95vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 20px;
  background: #212331;
  border-bottom: 1px solid rgba(255,255,255,0.1);
  flex-shrink: 0;
}
.modal-header h2 { color: white; font-size: 16px; font-weight: 700; }

.modal-actions { display: flex; gap: 10px; align-items: center; }

.btn-download {
  background: #00bcd4;
  color: white;
  padding: 6px 14px;
  border-radius: 3px;
  font-size: 12px;
  font-weight: 700;
  text-decoration: none;
}

.btn-close {
  background: rgba(255,255,255,0.1);
  border: none;
  color: white;
  width: 30px; height: 30px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 14px;
}
.btn-close:hover { background: #E31C26; }

.modal-body {
  flex: 1;
  overflow: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.page-controls {
  display: flex;
  align-items: center;
  gap: 16px;
}

.flip-btn {
  background: #E31C26;
  color: white;
  border: none;
  width: 38px; height: 38px;
  border-radius: 50%;
  font-size: 22px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: inherit;
  transition: background 0.2s;
}
.flip-btn:hover:not(:disabled) { background: #b5151e; }
.flip-btn:disabled { opacity: 0.35; cursor: not-allowed; }

.page-num { color: rgba(255,255,255,0.7); font-size: 14px; min-width: 80px; text-align: center; }

.spread {
  display: flex;
  gap: 2px;
  direction: ltr;
}
.spread.rtl { direction: rtl; }

.page-wrap {
  position: relative;
  background: white;
  box-shadow: 0 4px 20px rgba(0,0,0,0.5);
}

.pdf-page {
  display: block;
  max-height: 70vh;
  width: auto;
}

.loading-overlay {
  position: absolute;
  inset: 0;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
}

.spinner {
  width: 36px; height: 36px;
  border: 3px solid #f0f0f0;
  border-top-color: #E31C26;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }

@media (max-width: 1100px) { .books-grid { grid-template-columns: repeat(4, 1fr); } }
@media (max-width: 800px) { .books-grid { grid-template-columns: repeat(3, 1fr); } }
@media (max-width: 500px) { .books-grid { grid-template-columns: repeat(2, 1fr); } }
</style>
