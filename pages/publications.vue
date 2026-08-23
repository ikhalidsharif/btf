<template>
  <div class="reports-page">

    <!-- Hero -->
    <div class="page-hero">
      <div class="container">
        <span class="hero-eyebrow">{{ locale === 'ar' ? 'الشفافية' : 'Transparency' }}</span>
        <h1>{{ locale === 'ar' ? 'تقاريرنا السنوية' : 'Our Annual Reports' }}</h1>
        <p>{{ locale === 'ar'
          ? 'نؤمن بالشفافية الكاملة مع مجتمعنا وشركائنا — تصفّح تقاريرنا السنوية وشوف أثر عملنا بالأرقام'
          : "We believe in full transparency with our community and partners — browse our annual reports and see our impact in numbers" }}</p>
      </div>
    </div>

    <!-- Reports -->
    <div class="container section">
      <div class="reports-grid">
        <div v-for="r in reports" :key="r.year" class="report-card card fade-up">
          <div class="report-icon">📄</div>
          <h3>{{ locale === 'ar' ? `التقرير السنوي ${r.year}` : `Annual Report ${r.year}` }}</h3>
          <p>{{ locale === 'ar' ? r.descAr : r.descEn }}</p>
          <a v-if="r.file" :href="r.file" target="_blank" rel="noopener" class="btn btn-outline">
            {{ locale === 'ar' ? 'تحميل PDF' : 'Download PDF' }}
          </a>
          <span v-else class="report-soon">{{ locale === 'ar' ? 'قريباً' : 'Coming Soon' }}</span>
        </div>
      </div>
    </div>

    <!-- CTA -->
    <section class="cta-section">
      <div class="container cta-inner">
        <h2>{{ locale === 'ar' ? 'عندك أسئلة عن أثرنا؟' : 'Questions About Our Impact?' }}</h2>
        <div class="cta-buttons">
          <NuxtLink :to="localePath('/contact')" class="btn btn-primary">{{ locale === 'ar' ? 'تواصل معنا' : 'Contact Us' }}</NuxtLink>
          <NuxtLink :to="localePath('/donate')" class="btn btn-outline-white">❤️ {{ locale === 'ar' ? 'تبرع الآن' : 'Donate Now' }}</NuxtLink>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
const { locale } = useI18n()
const localePath = useLocalePath()

useHead({
  title: locale.value === 'ar' ? 'تقاريرنا السنوية | مؤسسة البحرين ترست' : 'Our Annual Reports | Bahrain Trust Foundation',
})

// Placeholder entries — replace `file` with the real PDF path once uploaded
// to /public/reports/, e.g. file: '/reports/annual-report-2025.pdf'.
// Entries with file: null show a "Coming Soon" badge instead of a broken link.
const reports = [
  { year: '2025', file: null, descAr: 'ملخص شامل لأنشطة ومشاريع المؤسسة خلال عام 2025.', descEn: "A comprehensive summary of the Foundation's activities and projects in 2025." },
  { year: '2024', file: null, descAr: 'ملخص شامل لأنشطة ومشاريع المؤسسة خلال عام 2024.', descEn: "A comprehensive summary of the Foundation's activities and projects in 2024." },
  { year: '2023', file: null, descAr: 'ملخص شامل لأنشطة ومشاريع المؤسسة خلال عام 2023.', descEn: "A comprehensive summary of the Foundation's activities and projects in 2023." },
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

.reports-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
.report-card { padding: 32px 26px; text-align: center; }
.report-icon { font-size: 36px; margin-bottom: 14px; }
.report-card h3 { font-size: 17px; color: var(--dark); margin-bottom: 10px; }
.report-card p { font-size: 13px; color: var(--text-light); line-height: 1.7; margin-bottom: 20px; }
.report-soon {
  display: inline-block; font-size: 12px; font-weight: 700; color: var(--text-light);
  background: var(--off-white); padding: 8px 18px; border-radius: 20px;
}

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
  .reports-grid { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 560px) {
  .reports-grid { grid-template-columns: 1fr; }
}
</style>
