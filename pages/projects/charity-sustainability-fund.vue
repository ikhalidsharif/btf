<template>
  <div class="project-page">

    <!-- Hero -->
    <div class="page-hero">
      <div class="container">
        <span class="hero-eyebrow">{{ locale === 'ar' ? 'خدمة المجتمع' : 'Community Service' }}</span>
        <h1>{{ locale === 'ar' ? 'صندوق الاستدامة الخيري' : 'Charity Sustainability Fund' }}</h1>
        <p>{{ locale === 'ar'
          ? 'وقف يضمن استمرار العطاء لأجيال قادمة'
          : 'An endowment that guarantees giving continues for generations to come' }}</p>
      </div>
    </div>

    <!-- Intro -->
    <div class="container section">
      <div class="intro-text fade-up">
        <p>{{ locale === 'ar'
          ? 'الوقف هو عبارة عن أموال محدودة تمثل رأس المال الذي يساهم في استمرار المشروع الذي أنشئ من أجله. وفي الوقف تُستغلّ أرباح الأموال أو المبلغ المتأتي من استثمارها عوضاً عن استغلالها أو التصرف فيها مباشرة.'
          : "An endowment is a limited fund that represents the capital that contributes to the continuation of the project for which it was established. In an endowment, the profits generated from investing the funds are used, instead of exploiting or disposing of the principal directly." }}</p>
        <div class="intro-ctas">
          <NuxtLink :to="localePath('/donate')" class="btn btn-primary">
            ❤️ {{ locale === 'ar' ? 'ساهم بالوقف' : 'Contribute to the Endowment' }}
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Two columns: Types + Where funds go -->
    <section class="two-col-section">
      <div class="container">
        <div class="two-col-grid">
          <div class="scope-card card fade-up">
            <span class="scope-badge">{{ locale === 'ar' ? 'أنواع الوقف' : 'Types of Endowment' }}</span>
            <ul>
              <li v-for="(item, i) in endowmentTypes" :key="i">{{ locale === 'ar' ? item.ar : item.en }}</li>
            </ul>
          </div>
          <div class="scope-card card fade-up">
            <span class="scope-badge scope-badge-alt">{{ locale === 'ar' ? 'أين تُصرف أموال الوقف؟' : 'Where the Funds Are Spent' }}</span>
            <ul>
              <li v-for="(item, i) in fundUses" :key="i">{{ locale === 'ar' ? item.ar : item.en }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-section">
      <div class="container cta-inner">
        <h2>{{ locale === 'ar' ? 'استثمر في أثر يدوم' : 'Invest in an Impact That Lasts' }}</h2>
        <p>{{ locale === 'ar' ? 'وقفك اليوم يبني مدارس وفضاءات لأجيال قادمة' : "Your endowment today builds schools and spaces for generations to come" }}</p>
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
  title: locale.value === 'ar' ? 'صندوق الاستدامة الخيري | مؤسسة البحرين ترست' : 'Charity Sustainability Fund | Bahrain Trust Foundation',
})

const endowmentTypes = [
  { ar: 'الوقف النقدي', en: 'Cash endowment' },
  { ar: 'وقف النقود في محافظ استثمارية', en: 'Endowment of money in investment portfolios' },
  { ar: 'وقف العقار (الأراضي والمباني)', en: 'Real estate endowment (land and buildings)' },
  { ar: 'وقف الأسهم في الشركات', en: 'Endowment of shares in companies' },
  { ar: 'الوقف المباشر العيني (وقف الكتب، وقف الأجهزة والبرامج الحاسوبية)', en: 'Direct in-kind endowment (books, computer hardware and software)' },
]

const fundUses = [
  { ar: 'إنشاء وتشغيل المدارس المصغرة وبناء الملاعب المدرسية', en: 'Establishing and operating micro-schools and building school playgrounds' },
  { ar: 'إنشاء وتشغيل الفضاءات التعليمية', en: 'Establishing and operating educational spaces' },
  { ar: 'إنشاء منصة إلكترونية للتعليم في المدارس وتطوير تقنيات التعليم', en: 'Building an electronic education platform for schools and developing education technology' },
  { ar: 'كفالة الطالب وتقديم الدعم النفسي والتعليمي والاجتماعي والمادي', en: 'Sponsoring students and providing psychological, educational, social, and financial support' },
  { ar: 'إنشاء المكتبات ومصادر المعلومات ودعم مبادرة تأليف القصص', en: 'Establishing libraries and information resources, and supporting the story writing initiative' },
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

.intro-text { max-width: 760px; margin: 0 auto; text-align: center; }
.intro-text p { color: var(--text-light); font-size: 17px; line-height: 1.9; margin-bottom: 24px; }
.intro-ctas { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }

.two-col-section { background: var(--off-white); padding: 16px 0 80px; }
.two-col-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
.scope-card { padding: 32px; }
.scope-badge {
  display: inline-block; background: var(--red); color: white; font-size: 12px; font-weight: 800;
  letter-spacing: 0.5px; text-transform: uppercase; padding: 5px 16px; border-radius: 20px; margin-bottom: 18px;
}
.scope-badge-alt { background: var(--dark); }
.scope-card ul { list-style: none; padding: 0; margin: 0; }
.scope-card li {
  font-size: 14px; color: var(--dark); padding-inline-start: 20px; position: relative;
  margin-bottom: 14px; line-height: 1.7;
}
.scope-card li::before { content: '•'; color: var(--red); position: absolute; inset-inline-start: 0; font-weight: 900; }

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
  .two-col-grid { grid-template-columns: 1fr; }
}
</style>
