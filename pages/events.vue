<template>
  <div class="project-page">

    <!-- Hero -->
    <div class="page-hero">
      <div class="container">
        <span class="hero-eyebrow">{{ locale === 'ar' ? 'خدمة المجتمع' : 'Community Service' }}</span>
        <h1>{{ locale === 'ar' ? 'الأنشطة' : 'Events' }}</h1>
        <p>{{ locale === 'ar'
          ? 'نتفاعل مع مجتمعنا على مدار العام'
          : 'Engaging with our community throughout the year' }}</p>
      </div>
    </div>

    <!-- Intro -->
    <div class="container section">
      <p class="lead-text fade-up">{{ locale === 'ar'
        ? 'على مدار العام، تتفاعل المؤسسة مع مجتمعاتنا من خلال أنشطة مختلفة ترتبط بالمناسبات المحلية والعالمية.'
        : 'Throughout the year, the Foundation interacts with our communities through various activities related to local and international events.' }}</p>
    </div>

    <!-- Local & International events -->
    <div class="container section">
      <div class="events-grid">
        <div class="events-col fade-up">
          <h2 class="section-title">{{ locale === 'ar' ? 'الأنشطة المحلية' : 'Local Events' }}</h2>
          <ul class="events-list">
            <li v-for="(e, i) in localEvents" :key="i">
              <span class="event-date">{{ locale === 'ar' ? e.dateAr : e.dateEn }}</span>
              <span>{{ locale === 'ar' ? e.nameAr : e.nameEn }}</span>
            </li>
          </ul>
        </div>
        <div class="events-col fade-up">
          <h2 class="section-title">{{ locale === 'ar' ? 'الأنشطة العالمية' : 'International Events' }}</h2>
          <ul class="events-list">
            <li v-for="(e, i) in globalEvents" :key="i">
              <span class="event-date">{{ locale === 'ar' ? e.dateAr : e.dateEn }}</span>
              <span>{{ locale === 'ar' ? e.nameAr : e.nameEn }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- CTA -->
    <section class="cta-section">
      <div class="container cta-inner">
        <h2>{{ locale === 'ar' ? 'كل مناسبة فرصة لنكون أقرب لمجتمعنا' : 'Every Occasion, a Chance to Connect' }}</h2>
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
  title: locale.value === 'ar' ? 'الأنشطة | مؤسسة البحرين ترست' : 'Events | Bahrain Trust Foundation',
})

const localEvents = [
  { dateAr: '14 فبراير', dateEn: 'Feb 14', nameAr: 'يوم ميثاق العمل الوطني', nameEn: 'National Action Charter Day' },
  { dateAr: '—', dateEn: '—', nameAr: 'القرقاعون', nameEn: 'Qerqaoon' },
  { dateAr: '—', dateEn: '—', nameAr: 'عيد الفطر', nameEn: 'Eid al-Fitr' },
  { dateAr: '—', dateEn: '—', nameAr: 'الموروث الشعبي "الحيّة بيّة"', nameEn: "Folklore 'Haya Beyyah'" },
  { dateAr: '—', dateEn: '—', nameAr: 'عيد الأضحى', nameEn: 'Eid al-Adha' },
  { dateAr: '1 نوفمبر', dateEn: 'Nov 1', nameAr: 'يوم الطبيب البحريني', nameEn: "Bahraini Doctor's Day" },
  { dateAr: '1 ديسمبر', dateEn: 'Dec 1', nameAr: 'يوم المرأة البحرينية', nameEn: "Bahraini Women's Day" },
  { dateAr: '16 ديسمبر', dateEn: 'Dec 16', nameAr: 'اليوم الوطني البحريني', nameEn: 'Bahrain National Day' },
  { dateAr: '17 ديسمبر', dateEn: 'Dec 17', nameAr: 'عيد الجلوس — يوم الشهيد', nameEn: "Sitting Day — Martyr's Day" },
]

const globalEvents = [
  { dateAr: '15 فبراير', dateEn: 'Feb 15', nameAr: 'اليوم العالمي لسرطان الأطفال', nameEn: 'World Childhood Cancer Day' },
  { dateAr: '21 مارس', dateEn: 'Mar 21', nameAr: 'يوم الأم', nameEn: "Mother's Day" },
  { dateAr: '2 أبريل', dateEn: 'Apr 2', nameAr: 'اليوم العالمي لكتاب الطفل', nameEn: "World Children's Book Day" },
  { dateAr: '5 سبتمبر', dateEn: 'Sep 5', nameAr: 'اليوم الدولي للعمل الخيري', nameEn: 'International Philanthropy Day' },
  { dateAr: '1 أكتوبر', dateEn: 'Oct 1', nameAr: 'شهر التوعية بسرطان الثدي', nameEn: 'Breast Cancer Awareness Month' },
  { dateAr: '5 أكتوبر', dateEn: 'Oct 5', nameAr: 'اليوم العالمي للمعلم', nameEn: 'World Teachers Day' },
  { dateAr: '5 ديسمبر', dateEn: 'Dec 5', nameAr: 'اليوم العالمي للتطوع', nameEn: 'International Volunteer Day' },
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

.lead-text { text-align: center; max-width: 700px; margin: 0 auto; font-size: 17px; color: var(--text-light); line-height: 1.9; }

.events-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; margin-top: 16px; }
.events-list { list-style: none; padding: 0; margin: 0; }
.events-list li {
  display: flex; gap: 14px; align-items: baseline; padding: 14px 0;
  border-bottom: 1px solid var(--gray-light); font-size: 14px; color: var(--dark);
}
.event-date { flex-shrink: 0; min-width: 90px; font-weight: 800; color: var(--red); font-size: 13px; }

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
  .events-grid { grid-template-columns: 1fr; gap: 32px; }
}
</style>
