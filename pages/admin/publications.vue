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
        <component
          :is="r.file ? 'a' : 'div'"
          v-for="r in reports"
          :key="r.year"
          v-bind="r.file ? { href: r.file, target: '_blank', rel: 'noopener' } : {}"
          class="report-card"
          :class="{ 'report-card-clickable': r.file }"
        >
          <div class="report-cover">
            <img :src="r.cover" :alt="locale === 'ar' ? `التقرير السنوي ${r.year}` : `Annual Report ${r.year}`" loading="lazy" />
            <div v-if="r.file" class="report-cover-overlay">
              <span class="report-cover-icon">📄</span>
              <span>{{ locale === 'ar' ? 'اقرأ التقرير' : 'Read Report' }}</span>
            </div>
          </div>
          <div class="report-body">
            <h3>{{ locale === 'ar' ? `التقرير السنوي ${r.year}` : `Annual Report ${r.year}` }}</h3>
            <p>{{ locale === 'ar' ? r.descAr : r.descEn }}</p>
            <span v-if="r.file" class="report-link">{{ locale === 'ar' ? 'تحميل PDF ←' : 'Download PDF →' }}</span>
            <span v-else class="report-soon">{{ locale === 'ar' ? 'قريباً' : 'Coming Soon' }}</span>
          </div>
        </component>
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
const { query } = useSupabase()

useHead({
  title: locale.value === 'ar' ? 'تقاريرنا السنوية | مؤسسة البحرين ترست' : 'Our Annual Reports | Bahrain Trust Foundation',
})

// Reports now come from Supabase (manageable via /admin → التقارير السنوية).
// Falls back to the known 2017-2024 reports if the table is empty/not yet
// seeded, so the page never shows blank while you're setting things up.
const { data: rawReports } = await useAsyncData('annual-reports', () =>
  query('annual_reports', '?order=sort_order.asc,year.desc')
)

const fallbackReports = [
  { year: '2024', cover: '/images/reports/cover-2024.jpg', file: 'https://drive.google.com/file/d/1QkTgj2dgSLEco8QK4jmvGP9YTr7Xl3dP/view', descAr: 'ملخص شامل لأنشطة ومشاريع المؤسسة خلال عام 2024.', descEn: "A comprehensive summary of the Foundation's activities and projects in 2024." },
  { year: '2023', cover: '/images/reports/cover-2023.jpg', file: 'https://drive.google.com/file/d/1fKJCcrqmdGNiVm0dCj45YFf5hckS7Etw/view', descAr: 'ملخص شامل لأنشطة ومشاريع المؤسسة خلال عام 2023.', descEn: "A comprehensive summary of the Foundation's activities and projects in 2023." },
  { year: '2022', cover: '/images/reports/cover-2022.jpg', file: 'https://drive.google.com/file/d/1iEOtsdbvOvsW7fdvLAVmSUhDOZgI9Eoq/view', descAr: 'ملخص شامل لأنشطة ومشاريع المؤسسة خلال عام 2022.', descEn: "A comprehensive summary of the Foundation's activities and projects in 2022." },
  { year: '2021', cover: '/images/reports/cover-2021.png', file: 'https://drive.google.com/file/d/1-B66iszaeMOiT1dywsbkgMkeHumwmf4O/view', descAr: 'ملخص شامل لأنشطة ومشاريع المؤسسة خلال عام 2021.', descEn: "A comprehensive summary of the Foundation's activities and projects in 2021." },
  { year: '2020', cover: '/images/reports/cover-2020.png', file: 'https://drive.google.com/file/d/1FzVh0GjxQH3OY007MkK8-KGCymQVDAny/view', descAr: 'ملخص شامل لأنشطة ومشاريع المؤسسة خلال عام 2020.', descEn: "A comprehensive summary of the Foundation's activities and projects in 2020." },
  { year: '2019', cover: '/images/reports/cover-2019.jpg', file: 'https://drive.google.com/file/d/1_eVIL4iseemlGs9lWH6QiUV_df0Y8vnJ/view', descAr: 'ملخص شامل لأنشطة ومشاريع المؤسسة خلال عام 2019.', descEn: "A comprehensive summary of the Foundation's activities and projects in 2019." },
  { year: '2018', cover: '/images/reports/cover-2018.png', file: 'https://drive.google.com/file/d/15WkfPy1rYu1R7n7qyI69YU54EYY66q8R/view', descAr: 'ملخص شامل لأنشطة ومشاريع المؤسسة خلال عام 2018.', descEn: "A comprehensive summary of the Foundation's activities and projects in 2018." },
  { year: '2017', cover: '/images/reports/cover-2017.jpg', file: 'https://drive.google.com/file/d/1gr5vZbthaFqH6eGS7i4XtL5joZpw7fVS/view', descAr: 'ملخص شامل لأنشطة ومشاريع المؤسسة خلال عام 2017.', descEn: "A comprehensive summary of the Foundation's activities and projects in 2017." },
]

const reports = computed(() => {
  if (rawReports.value && rawReports.value.length) {
    return rawReports.value.map((r) => ({
      year: r.year,
      cover: r.cover_image_url,
      file: r.pdf_url || null,
      descAr: r.desc_ar,
      descEn: r.desc_en,
    }))
  }
  return fallbackReports
})
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

.reports-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 28px; }

.report-card {
  display: block;
  text-decoration: none;
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 18px rgba(0,0,0,0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.report-card-clickable { cursor: pointer; }
.report-card-clickable:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.16);
}

.report-cover {
  position: relative;
  width: 100%;
  aspect-ratio: 3/4;
  overflow: hidden;
}
.report-cover img {
  width: 100%; height: 100%; object-fit: cover;
  transition: transform 0.5s ease;
}
.report-card-clickable:hover .report-cover img { transform: scale(1.08); }

.report-cover-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.75) 100%);
  display: flex; flex-direction: column; align-items: center; justify-content: flex-end;
  padding-bottom: 18px; gap: 4px;
  color: white; opacity: 0; transition: opacity 0.3s ease;
}
.report-card-clickable:hover .report-cover-overlay { opacity: 1; }
.report-cover-icon { font-size: 22px; }
.report-cover-overlay span:last-child { font-size: 12px; font-weight: 700; }

.report-body { padding: 20px 18px 24px; text-align: center; }
.report-body h3 { font-size: 16px; color: var(--dark); margin-bottom: 8px; }
.report-body p { font-size: 12px; color: var(--text-light); line-height: 1.6; margin-bottom: 14px; }
.report-link { display: inline-block; font-size: 13px; font-weight: 700; color: var(--red); }
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
  .reports-grid { grid-template-columns: repeat(3, 1fr); gap: 20px; }
}
@media (max-width: 650px) {
  .reports-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; }
}
@media (max-width: 400px) {
  .reports-grid { grid-template-columns: 1fr; }
}
</style>
