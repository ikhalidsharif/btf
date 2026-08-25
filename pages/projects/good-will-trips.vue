<template>
  <div class="project-page">

    <!-- Hero -->
    <div class="page-hero">
      <div class="container">
        <span class="hero-eyebrow">{{ locale === 'ar' ? 'خدمة المجتمع' : 'Community Service' }}</span>
        <h1>{{ locale === 'ar' ? 'رحلات الخير' : 'Good Will Trips' }}</h1>
        <p>{{ locale === 'ar'
          ? 'متطوعون يعبرون الحدود ليفتتحوا مدارس ويبنوا مستقبلاً'
          : 'Volunteers crossing borders to open schools and build a future' }}</p>
      </div>
    </div>

    <!-- Intro -->
    <div class="container section">
      <div class="intro-grid">
        <div class="intro-text fade-up">
          <p>{{ locale === 'ar'
            ? 'في كل عام تسافر مجموعات من متطوعي المؤسسة ضمن برنامج رحلات الخير، أحد أهم البرامج التطوعية اللي تتيح الفرصة للأفراد والفرق الراغبين بالتطوع خارج البحرين والعمل لصالح المجتمعات المستحقة للدعم — بالإضافة للعائد الشخصي من تطوير مهارات المتطوعين الحياتية والقيادية.'
            : "Every year, groups of the Foundation's volunteers travel through the Good Will Trips programme — one of the most important volunteering programmes, providing opportunities for individuals and teams wishing to volunteer abroad for communities deserving of support, alongside the personal return of developing volunteers' life and leadership skills." }}</p>
          <p>{{ locale === 'ar'
            ? 'الهدف الرئيسي من هذه الرحلات هو افتتاح المدارس التي تقوم المؤسسة بإنشائها، بالإضافة إلى بناء ملاعب لتلك المدارس.'
            : 'The main goal of these trips is to open the schools the Foundation builds, in addition to building playgrounds for them.' }}</p>
          <div class="intro-ctas">
            <NuxtLink :to="localePath('/volunteer')" class="btn btn-primary">
              {{ locale === 'ar' ? 'انضم كمتطوع' : 'Become a Volunteer' }}
            </NuxtLink>
            <NuxtLink :to="localePath('/donate')" class="btn btn-outline">
              ❤️ {{ locale === 'ar' ? 'ادعم رحلات الخير' : 'Support Good Will Trips' }}
            </NuxtLink>
          </div>
        </div>
        <div class="intro-image fade-up">
          <img src="/images/projects/good-will-trips/photo-1.jpg" :alt="locale === 'ar' ? 'رحلات الخير' : 'Good Will Trips'" />
        </div>
      </div>
    </div>

    <!-- Timeline -->
    <section class="timeline-section">
      <div class="container">
        <h2 class="section-title center">{{ locale === 'ar' ? 'رحلاتنا حول العالم' : 'Our Trips Around the World' }}</h2>
        <p class="section-subtitle center">{{ locale === 'ar' ? 'منذ 2017 وإلى اليوم' : 'Since 2017 and counting' }}</p>

        <div class="timeline">
          <div v-for="(t, i) in trips" :key="i" class="timeline-item fade-up">
            <div class="timeline-dot" />
            <div class="timeline-content card">
              <span class="timeline-date">{{ t.date }}</span>
              <h3>{{ locale === 'ar' ? t.countryAr : t.countryEn }}</h3>
              <p>{{ locale === 'ar' ? t.placeAr : t.placeEn }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Photo Gallery -->
    <section class="gallery-section">
      <div class="container">
        <h2 class="section-title center">{{ locale === 'ar' ? 'لحظات من رحلاتنا' : 'Moments From Our Trips' }}</h2>
        <div class="photo-grid">
          <button
            v-for="(img, i) in photos"
            :key="img"
            class="photo-item"
            type="button"
            @click="openLightbox(i)"
          >
            <img :src="img" :alt="locale === 'ar' ? 'رحلات الخير' : 'Good Will Trips'" loading="lazy" />
          </button>
        </div>
      </div>
    </section>

    <!-- Lightbox -->
    <div v-if="activeIndex !== null" class="lightbox" @click.self="closeLightbox">
      <button class="lightbox-close" type="button" @click="closeLightbox">✕</button>
      <button class="lightbox-prev" type="button" @click="prevImage">‹</button>
      <img class="lightbox-img" :src="photos[activeIndex]" alt="" />
      <button class="lightbox-next" type="button" @click="nextImage">›</button>
      <span class="lightbox-counter">{{ activeIndex + 1 }} / {{ photos.length }}</span>
    </div>

    <!-- CTA -->
    <section class="cta-section">
      <div class="container cta-inner">
        <h2>{{ locale === 'ar' ? 'الرحلة القادمة تحتاجك' : 'The Next Trip Needs You' }}</h2>
        <div class="cta-buttons">
          <NuxtLink :to="localePath('/volunteer')" class="btn btn-primary">{{ locale === 'ar' ? 'انضم كمتطوع' : 'Become a Volunteer' }}</NuxtLink>
          <NuxtLink :to="localePath('/projects')" class="btn btn-outline-white">{{ locale === 'ar' ? 'كل المشاريع' : 'All Projects' }}</NuxtLink>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
const { locale } = useI18n()
const localePath = useLocalePath()

useHead({
  title: locale.value === 'ar' ? 'رحلات الخير | مؤسسة البحرين ترست' : 'Good Will Trips | Bahrain Trust Foundation',
})

const trips = [
  { date: '8–12 Nov 2017', countryAr: 'مصر — أسوان', countryEn: 'Egypt — Aswan', placeAr: 'نجع جبران', placeEn: 'Nagaa Jabran' },
  { date: '16 Feb 2019', countryAr: 'مصر — أسوان', countryEn: 'Egypt — Aswan', placeAr: 'قرية الرحاب', placeEn: 'Rehab Village' },
  { date: '7–11 Apr 2019', countryAr: 'مصر — أسوان', countryEn: 'Egypt — Aswan', placeAr: 'قرية العبابدة', placeEn: 'Al-Ababda Village' },
  { date: '11–18 Apr 2018', countryAr: 'الهند', countryEn: 'India', placeAr: 'كوجي، كيرلا', placeEn: 'Kogi, Kerala' },
  { date: '15–23 Jan 2020', countryAr: 'مصر — الأقصر', countryEn: 'Egypt — Luxor', placeAr: 'قرية عودة حمدان', placeEn: 'Oudha Hamdan Village' },
  { date: '31 Jan – 7 Feb 2020', countryAr: 'الهند', countryEn: 'India', placeAr: 'كوتشي، كيرلا', placeEn: 'Kochi, Kerala' },
  { date: '8–13 Nov 2022', countryAr: 'الهند', countryEn: 'India', placeAr: 'كوتشي، كيرلا', placeEn: 'Kochi, Kerala' },
  { date: '3–10 Feb 2024', countryAr: 'المغرب', countryEn: 'Morocco', placeAr: 'خنيفرة', placeEn: 'Khenifra' },
  { date: '24–31 Oct 2024', countryAr: 'تنزانيا — زنجبار', countryEn: 'Tanzania — Zanzibar', placeAr: 'المدينة القديمة', placeEn: 'Old Town' },
  { date: '21–26 Dec 2024', countryAr: 'مصر', countryEn: 'Egypt', placeAr: 'أسوان', placeEn: 'Aswan' },
  { date: '16–24 Jan 2025', countryAr: 'المغرب', countryEn: 'Morocco', placeAr: 'خنيفرة', placeEn: 'Khenifra' },
  { date: '6–9 Oct 2025', countryAr: 'الهند', countryEn: 'India', placeAr: 'كوتشي، كيرلا', placeEn: 'Kochi, Kerala' },
  { date: '21–28 Dec 2025', countryAr: 'تركيا', countryEn: 'Turkey', placeAr: 'اسطنبول', placeEn: 'Istanbul' },
]

const photos = Array.from({ length: 23 }, (_, i) => `/images/projects/good-will-trips/photo-${i + 1}.jpg`)

const activeIndex = ref(null)
function openLightbox(i) { activeIndex.value = i }
function closeLightbox() { activeIndex.value = null }
function nextImage() { activeIndex.value = (activeIndex.value + 1) % photos.length }
function prevImage() { activeIndex.value = (activeIndex.value - 1 + photos.length) % photos.length }

function onKeydown(e) {
  if (activeIndex.value === null) return
  if (e.key === 'Escape') closeLightbox()
  else if (e.key === 'ArrowRight') nextImage()
  else if (e.key === 'ArrowLeft') prevImage()
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

.intro-grid { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 48px; align-items: center; }
.intro-text p { color: var(--text-light); margin-bottom: 16px; font-size: 16px; line-height: 1.9; }
.intro-ctas { display: flex; gap: 14px; margin-top: 24px; flex-wrap: wrap; }
.intro-image img { border-radius: var(--radius); box-shadow: var(--shadow-lg); width: 100%; aspect-ratio: 4/3; object-fit: cover; }

.timeline-section { background: var(--off-white); padding: 80px 0; }
.timeline { max-width: 720px; margin: 16px auto 0; position: relative; padding-inline-start: 28px; }
.timeline::before {
  content: ''; position: absolute; inset-inline-start: 5px; top: 8px; bottom: 8px;
  width: 2px; background: var(--gray-light);
}
.timeline-item { position: relative; margin-bottom: 20px; }
.timeline-dot {
  position: absolute; inset-inline-start: -28px; top: 6px;
  width: 12px; height: 12px; border-radius: 50%; background: var(--red);
  border: 3px solid white; box-shadow: 0 0 0 2px var(--red);
}
.timeline-content { padding: 18px 22px; }
.timeline-date { display: block; font-size: 12px; font-weight: 800; color: var(--red); margin-bottom: 4px; }
.timeline-content h3 { font-size: 16px; color: var(--dark); margin-bottom: 2px; }
.timeline-content p { font-size: 13px; color: var(--text-light); }

/* Gallery */
.gallery-section { background: white; padding: 80px 0; }
.photo-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-top: 16px; }
.photo-item {
  border: none; padding: 0; cursor: pointer; border-radius: var(--radius);
  overflow: hidden; aspect-ratio: 1/1; box-shadow: 0 2px 10px rgba(0,0,0,0.06);
}
.photo-item img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s; }
.photo-item:hover img { transform: scale(1.08); }

/* Lightbox */
.lightbox {
  position: fixed; inset: 0; z-index: 1000; background: rgba(0,0,0,0.92);
  display: flex; align-items: center; justify-content: center; padding: 24px;
}
.lightbox-img { max-width: 90vw; max-height: 85vh; object-fit: contain; border-radius: 8px; box-shadow: 0 10px 40px rgba(0,0,0,0.5); }
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
.lightbox-counter { position: absolute; bottom: 20px; left: 50%; transform: translateX(-50%); color: rgba(255,255,255,0.7); font-size: 13px; }

.cta-section { background: var(--dark); padding: 64px 0; }
.cta-inner { text-align: center; color: white; }
.cta-inner h2 { font-size: clamp(24px,3vw,34px); font-weight: 800; margin-bottom: 24px; }
.cta-buttons { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }
.btn-outline-white {
  background: transparent; color: white; border: 2px solid rgba(255,255,255,0.4);
  padding: 12px 28px; border-radius: 4px; font-weight: 700; font-size: 14px;
  text-transform: uppercase; letter-spacing: 0.5px; display: inline-flex; align-items: center; gap: 8px;
  transition: all var(--transition);
}
.btn-outline-white:hover { background: rgba(255,255,255,0.1); border-color: white; }

@media (max-width: 900px) {
  .intro-grid { grid-template-columns: 1fr; }
  .intro-image { order: -1; }
  .photo-grid { grid-template-columns: repeat(3, 1fr); }
}
@media (max-width: 560px) {
  .photo-grid { grid-template-columns: repeat(2, 1fr); }
  .lightbox-prev, .lightbox-next { width: 40px; height: 40px; font-size: 22px; }
}
</style>
