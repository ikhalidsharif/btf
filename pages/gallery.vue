<template>
  <div class="gallery-page">

    <!-- Hero -->
    <div class="page-hero">
      <div class="container">
        <span class="hero-eyebrow">{{ locale === 'ar' ? 'معرض الصور' : 'Gallery' }}</span>
        <h1>{{ locale === 'ar' ? 'لحظات من رحلتنا' : 'Moments From Our Journey' }}</h1>
        <p>{{ locale === 'ar'
          ? 'صور من مشاريعنا وفعالياتنا حول العالم'
          : 'Photos from our projects and events around the world' }}</p>
      </div>
    </div>

    <!-- Grid -->
    <div class="container section">
      <div class="gallery-grid">
        <button
          v-for="(img, i) in images"
          :key="img.src"
          class="gallery-item"
          type="button"
          @click="openLightbox(i)"
        >
          <img :src="img.src" :alt="locale === 'ar' ? img.captionAr : img.captionEn" loading="lazy" decoding="async" />
          <span class="gallery-item-overlay">🔍</span>
        </button>
      </div>
    </div>

    <!-- Lightbox -->
    <div v-if="activeIndex !== null" class="lightbox" @click.self="closeLightbox">
      <button class="lightbox-close" type="button" :aria-label="locale === 'ar' ? 'إغلاق' : 'Close'" @click="closeLightbox">✕</button>
      <button class="lightbox-prev" type="button" :aria-label="locale === 'ar' ? 'السابق' : 'Previous'" @click="prevImage">‹</button>

      <figure class="lightbox-figure">
        <img :src="images[activeIndex].src" :alt="locale === 'ar' ? images[activeIndex].captionAr : images[activeIndex].captionEn" />
        <figcaption>{{ locale === 'ar' ? images[activeIndex].captionAr : images[activeIndex].captionEn }}</figcaption>
      </figure>

      <button class="lightbox-next" type="button" :aria-label="locale === 'ar' ? 'التالي' : 'Next'" @click="nextImage">›</button>
      <span class="lightbox-counter">{{ activeIndex + 1 }} / {{ images.length }}</span>
    </div>

  </div>
</template>

<script setup>
const { locale } = useI18n()

useHead({
  title: locale.value === 'ar' ? 'معرض الصور | مؤسسة البحرين ترست' : 'Gallery | Bahrain Trust Foundation',
})

// Placeholder images — replace `src` with real event photos whenever
// you have them. Add/remove entries freely; the grid and lightbox adapt
// automatically to however many images are here.
const images = [
  { src: '/images/projects/education-hospital.jpg', captionAr: 'مدارس المستشفى', captionEn: 'Hospital Schools' },
  { src: '/images/projects/education-space.jpg', captionAr: 'فضاء للجميع', captionEn: 'Space for All' },
  { src: '/images/projects/education-micro.jpg', captionAr: 'المدارس المصغرة', captionEn: 'Micro Schools' },
  { src: '/images/projects/community-goodwill.jpg', captionAr: 'رحلات الخير', captionEn: 'Good Will Trips' },
  { src: '/images/projects/community-volunteer.jpg', captionAr: 'الفرق التطوعية', captionEn: 'Volunteer Teams' },
  { src: '/images/projects/community-inkind.jpg', captionAr: 'المساعدات العينية', captionEn: 'In-Kind Support' },
  { src: '/images/projects/education-davinci.jpg', captionAr: 'برنامج دافنشي', captionEn: 'DaVinci Program' },
  { src: '/images/projects/creative-giftshop.jpg', captionAr: 'متجر الهدايا', captionEn: 'Gift Shop' },
  { src: '/images/projects/education-story.jpg', captionAr: 'مسابقة تأليف القصص', captionEn: 'Story Writing Competition' },
  { src: '/images/projects/community.jpg', captionAr: 'مركز صفية علي كانو للفنون', captionEn: 'Safeya Ali Kanoo Hub for Arts' },
  { src: '/images/projects/hospital.jpg', captionAr: 'من مدارسنا', captionEn: 'From Our Schools' },
  { src: '/images/projects/micro-schools.jpg', captionAr: 'حول العالم', captionEn: 'Around the World' },
]

const activeIndex = ref(null)

function openLightbox(i) {
  activeIndex.value = i
}
function closeLightbox() {
  activeIndex.value = null
}
function nextImage() {
  activeIndex.value = (activeIndex.value + 1) % images.length
}
function prevImage() {
  activeIndex.value = (activeIndex.value - 1 + images.length) % images.length
}

function onKeydown(e) {
  if (activeIndex.value === null) return
  if (e.key === 'Escape') closeLightbox()
  else if (e.key === 'ArrowRight') locale.value === 'ar' ? prevImage() : nextImage()
  else if (e.key === 'ArrowLeft') locale.value === 'ar' ? nextImage() : prevImage()
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onUnmounted(() => window.removeEventListener('keydown', onKeydown))
</script>

<style scoped>
.page-hero {
  background: linear-gradient(135deg, var(--red) 0%, #8B0000 100%);
  padding: 90px 0 70px;
  color: white;
  text-align: center;
}
.hero-eyebrow {
  display: inline-block; font-size: 13px; font-weight: 700; letter-spacing: 1.5px;
  text-transform: uppercase; background: rgba(255,255,255,0.15);
  padding: 5px 16px; border-radius: 20px; margin-bottom: 16px;
}
.page-hero h1 { font-size: clamp(32px,4vw,52px); font-weight: 900; margin-bottom: 14px; }
.page-hero p { font-size: 17px; opacity: 0.9; max-width: 640px; margin: 0 auto; }

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}
.gallery-item {
  position: relative;
  aspect-ratio: 1/1;
  border-radius: 14px;
  overflow: hidden;
  border: none;
  padding: 0;
  cursor: pointer;
  background: var(--off-white);
}
.gallery-item img {
  width: 100%; height: 100%; object-fit: cover;
  transition: transform 0.4s ease;
}
.gallery-item:hover img { transform: scale(1.08); }
.gallery-item-overlay {
  position: absolute; inset: 0;
  display: flex; align-items: center; justify-content: center;
  background: rgba(0,0,0,0); font-size: 24px; opacity: 0;
  transition: background 0.25s, opacity 0.25s;
}
.gallery-item:hover .gallery-item-overlay { background: rgba(0,0,0,0.35); opacity: 1; }

/* Lightbox */
.lightbox {
  position: fixed; inset: 0; z-index: 1000;
  background: rgba(0,0,0,0.92);
  display: flex; align-items: center; justify-content: center;
  padding: 24px;
}
.lightbox-figure { max-width: 90vw; max-height: 85vh; text-align: center; }
.lightbox-figure img {
  max-width: 100%; max-height: 78vh; object-fit: contain;
  border-radius: 8px; box-shadow: 0 10px 40px rgba(0,0,0,0.5);
}
.lightbox-figure figcaption { color: white; font-size: 14px; margin-top: 14px; opacity: 0.85; }

.lightbox-close, .lightbox-prev, .lightbox-next {
  position: absolute; background: rgba(255,255,255,0.1); border: none; color: white;
  border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center;
  transition: background 0.2s;
}
.lightbox-close:hover, .lightbox-prev:hover, .lightbox-next:hover { background: rgba(255,255,255,0.25); }
.lightbox-close { top: 20px; inset-inline-end: 20px; width: 40px; height: 40px; font-size: 16px; }
.lightbox-prev, .lightbox-next { top: 50%; transform: translateY(-50%); width: 52px; height: 52px; font-size: 30px; }
.lightbox-prev { inset-inline-start: 16px; }
.lightbox-next { inset-inline-end: 16px; }
.lightbox-counter {
  position: absolute; bottom: 20px; left: 50%; transform: translateX(-50%);
  color: rgba(255,255,255,0.7); font-size: 13px;
}

@media (max-width: 900px) {
  .gallery-grid { grid-template-columns: repeat(3, 1fr); gap: 10px; }
}
@media (max-width: 560px) {
  .gallery-grid { grid-template-columns: repeat(2, 1fr); }
  .lightbox-prev, .lightbox-next { width: 40px; height: 40px; font-size: 22px; }
}
</style>
