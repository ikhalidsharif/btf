<template>
  <div class="project-page">

    <!-- Hero -->
    <div class="page-hero">
      <div class="container">
        <span class="hero-eyebrow">{{ locale === 'ar' ? 'التعليم' : 'Education' }}</span>
        <h1>{{ locale === 'ar' ? 'المدارس المصغرة' : 'Micro Schools' }}</h1>
        <p>{{ locale === 'ar'
          ? 'التعليم يصل لكل طفل، أينما كان'
          : 'Education reaches every child, wherever they are' }}</p>
      </div>
    </div>

    <!-- Intro -->
    <div class="container section">
      <div class="intro-grid">
        <div class="intro-text fade-up">
          <p>{{ locale === 'ar'
            ? 'صف واحد أو أكثر متعدد الأعمار في مناطق قليلة الموارد، مبني على التعليم الذاتي القائم على مشاريع مؤسسة بحرين ترست الخاصة.'
            : "One or more multi-age classes in resource-limited areas, built on self-directed learning based on Bahrain Trust Foundation's own project model." }}</p>
          <div class="intro-ctas">
            <NuxtLink :to="localePath('/donate')" class="btn btn-primary">
              ❤️ {{ locale === 'ar' ? 'ادعم المدارس المصغرة' : 'Support Micro Schools' }}
            </NuxtLink>
          </div>
        </div>
        <div class="intro-image fade-up">
          <img src="/images/projects/education-micro.jpg" :alt="locale === 'ar' ? 'المدارس المصغرة' : 'Micro Schools'" />
        </div>
      </div>
    </div>

    <!-- Stats -->
    <div class="stats-bar">
      <div class="container stats-inner">
        <div class="stat">
          <strong>20</strong>
          <span>{{ locale === 'ar' ? 'مدرسة مصغّرة حول العالم' : 'Micro schools worldwide' }}</span>
        </div>
        <div class="stat">
          <strong>7</strong>
          <span>{{ locale === 'ar' ? 'دول' : 'Countries' }}</span>
        </div>
        <div class="stat">
          <strong>2017</strong>
          <span>{{ locale === 'ar' ? 'بداية المشروع' : 'Project began' }}</span>
        </div>
      </div>
    </div>

    <!-- Countries -->
    <div class="container section">
      <h2 class="section-title center">{{ locale === 'ar' ? 'مدارسنا حول العالم' : 'Our Schools Around the World' }}</h2>
      <p class="section-subtitle center">{{ locale === 'ar'
        ? 'من مصر إلى فلسطين، تصل مدارسنا المصغرة لأكثر المناطق احتياجاً'
        : 'From Egypt to Palestine, our micro schools reach the communities that need them most' }}</p>

      <div class="countries-grid">
        <div v-for="c in countries" :key="c.nameEn" class="country-card card fade-up">
          <h3>{{ locale === 'ar' ? c.nameAr : c.nameEn }}</h3>
          <ul class="country-schools">
            <li v-for="s in c.schools" :key="s.nameEn">
              <span class="school-year">{{ s.year }}</span>
              <span class="school-name">{{ locale === 'ar' ? s.nameAr : s.nameEn }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- CTA -->
    <section class="cta-section">
      <div class="container cta-inner">
        <h2>{{ locale === 'ar' ? 'ابنِ صفاً، تبنِ مستقبل' : 'Build a Classroom, Build a Future' }}</h2>
        <p>{{ locale === 'ar' ? 'كل مدرسة مصغّرة تفتح باباً جديداً للتعلّم' : 'Every micro school opens a new door to learning' }}</p>
        <div class="cta-buttons">
          <NuxtLink :to="localePath('/donate')" class="btn btn-primary">❤️ {{ locale === 'ar' ? 'تبرع الآن' : 'Donate Now' }}</NuxtLink>
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
  title: locale.value === 'ar' ? 'المدارس المصغرة | مؤسسة البحرين ترست' : 'Micro Schools | Bahrain Trust Foundation',
})

const countries = [
  {
    nameAr: 'مصر', nameEn: 'Egypt',
    schools: [
      { year: '2017', nameAr: 'مدرسة جبران 1، أسوان', nameEn: 'Gibran 1 School, Aswan' },
      { year: '2017', nameAr: 'مدرسة جبران 2، أسوان', nameEn: 'Gibran 2 School, Aswan' },
      { year: '2018', nameAr: 'مدرسة الرحاب، أسوان', nameEn: 'Al Rehab School, Aswan' },
      { year: '2019', nameAr: 'مدرسة عزبة سالم 1، أسوان', nameEn: 'Ezbet Salem 1 School, Aswan' },
      { year: '2019', nameAr: 'مدرسة عودة حمدان، الأقصر', nameEn: 'Oda Hamdan School, Luxor' },
      { year: '2020', nameAr: 'مدرسة عزبة سالم 2، أسوان', nameEn: 'Ezbet Salem 2 School, Aswan' },
      { year: '2020', nameAr: 'مدرسة علي بدر، الأقصر', nameEn: 'Ali Badr School, Luxor' },
      { year: '2021', nameAr: 'مدرسة محمد علي الصغير، أسوان', nameEn: 'Mohamed Ali Al-Saghir School, Aswan' },
      { year: '2021', nameAr: 'مدرسة أبو جريو، أسوان', nameEn: 'Abu Grew School, Aswan' },
      { year: '2023', nameAr: 'مدرسة عرب دموشيا، بني سويف', nameEn: 'Arab Damoushia School, Beni Suef' },
    ],
  },
  {
    nameAr: 'الهند', nameEn: 'India',
    schools: [
      { year: '2018', nameAr: 'المدرسة المثالية، كيرلا', nameEn: 'Ideal School, Kerala' },
      { year: '2021', nameAr: 'مدرسة دار السلام، كيرلا', nameEn: 'Darussalam School, Kerala' },
    ],
  },
  {
    nameAr: 'مالي', nameEn: 'Mali',
    schools: [
      { year: '2018', nameAr: 'مدرسة دوغي', nameEn: 'Dogui School' },
    ],
  },
  {
    nameAr: 'النيجر', nameEn: 'Niger',
    schools: [
      { year: '2021', nameAr: 'مدرسة ناصر', nameEn: 'Nasser School' },
    ],
  },
  {
    nameAr: 'المغرب', nameEn: 'Morocco',
    schools: [
      { year: '2023', nameAr: 'مدرسة أبو خضرة، خنيفرة', nameEn: 'Abu Khadhra School, Khenifra' },
      { year: '2025', nameAr: 'مدرسة آيت الحاج، خنيفرة', nameEn: 'Ayat Al Haj School, Khenifra' },
    ],
  },
  {
    nameAr: 'تنزانيا', nameEn: 'Tanzania',
    schools: [
      { year: '2024', nameAr: 'مدرسة ماكادارا، زنجبار', nameEn: 'Makadara School, Zanzibar' },
    ],
  },
  {
    nameAr: 'فلسطين', nameEn: 'Palestine',
    schools: [
      { year: '2024', nameAr: 'مدرسة مساق التعليمية', nameEn: 'Masaq Educational School' },
    ],
  },
]
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

.stats-bar { background: var(--dark); }
.stats-inner { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; padding: 36px 0; }
.stat { text-align: center; color: white; }
.stat strong { display: block; font-size: 34px; font-weight: 900; color: var(--red-light); }
.stat span { font-size: 13px; opacity: 0.8; }

.countries-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-top: 16px; }
.country-card { padding: 28px; }
.country-card h3 {
  font-size: 17px; color: var(--dark); margin-bottom: 16px; padding-bottom: 10px;
  border-bottom: 2px solid var(--gray-light);
}
.country-schools { list-style: none; padding: 0; margin: 0; }
.country-schools li { display: flex; gap: 10px; margin-bottom: 10px; font-size: 13px; align-items: baseline; }
.school-year { flex-shrink: 0; font-weight: 800; color: var(--red); font-size: 12px; }
.school-name { color: var(--text-light); line-height: 1.5; }

.cta-section { background: var(--dark); padding: 64px 0; }
.cta-inner { text-align: center; color: white; }
.cta-inner h2 { font-size: clamp(24px,3vw,34px); font-weight: 800; margin-bottom: 10px; }
.cta-inner p { opacity: 0.8; margin-bottom: 28px; }
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
  .countries-grid { grid-template-columns: 1fr 1fr; }
  .stats-inner { grid-template-columns: 1fr; gap: 20px; }
}
@media (max-width: 600px) {
  .countries-grid { grid-template-columns: 1fr; }
}
</style>
