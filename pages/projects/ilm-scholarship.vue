<template>
  <div class="project-page">

    <!-- Hero -->
    <div class="page-hero">
      <div class="container">
        <img src="/images/projects/knowledge-scholarship/logo.png" alt="Ilm Scholarship" class="hero-logo" />
        <span class="hero-eyebrow">{{ locale === 'ar' ? 'التعليم المجتمعي' : 'Community Education' }}</span>
        <h1>{{ locale === 'ar' ? 'منحة علم' : 'Ilm Scholarship' }}</h1>
        <p>{{ locale === 'ar'
          ? 'دعم الطلبة الجامعيين من ذوي الدخل المحدود لمواصلة تعليمهم العالي'
          : 'Supporting low-income university students in pursuing their higher education' }}</p>
      </div>
    </div>

    <!-- Intro -->
    <div class="container section">
      <div class="intro-text fade-up">
        <p>{{ locale === 'ar'
          ? 'مبادرة "منحة علم" إحدى المبادرات الجديدة التي تندرج تحت مظلة التعليم، وتهدف إلى دعم الطلبة الجامعيين من ذوي الدخل المحدود لمواصلة تعليمهم العالي. وتشمل المبادرة تقديم الدعم في تغطية الرسوم الدراسية وبعض المصاريف التعليمية، إضافة إلى توفير الإرشاد الأكاديمي وفرص التطوير المهني.'
          : "The \"Ilm Scholarship\" initiative is one of the Foundation's new initiatives under its education pillar. It aims to support university students from low-income backgrounds in pursuing their higher education. The initiative provides financial assistance to help cover tuition fees and certain educational expenses, in addition to offering academic guidance and professional development opportunities." }}</p>
        <p>{{ locale === 'ar'
          ? 'وتسعى المبادرة إلى تمكين الشباب أكاديمياً ومهنياً، وتعزيز فرصهم في إكمال دراستهم الجامعية، بما يسهم في إعداد جيل واعٍ ومؤهل قادر على الإسهام الإيجابي في خدمة المجتمع والتنمية.'
          : "The initiative seeks to empower young people academically and professionally and enhance their opportunities to complete their university education, contributing to the development of an informed and qualified generation capable of making a positive contribution to society and sustainable development." }}</p>
        <div class="intro-ctas">
          <NuxtLink :to="localePath('/donate')" class="btn btn-primary">
            ❤️ {{ locale === 'ar' ? 'ادعم منحة علم' : 'Support Ilm Scholarship' }}
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- CTA -->
    <section class="cta-section">
      <div class="container cta-inner">
        <h2>{{ locale === 'ar' ? 'استثمر بمستقبل طالب' : "Invest in a Student's Future" }}</h2>
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
  title: locale.value === 'ar' ? 'منحة علم | مؤسسة البحرين ترست' : 'Ilm Scholarship | Bahrain Trust Foundation',
})
</script>

<style scoped>
.page-hero {
  background: linear-gradient(135deg, var(--red) 0%, #8B0000 100%);
  padding: 60px 0 70px;
  color: white;
  text-align: center;
}
.hero-logo { height: 56px; background: white; padding: 10px 16px; border-radius: 10px; margin-bottom: 20px; }
.hero-eyebrow {
  display: inline-block; font-size: 13px; font-weight: 700; letter-spacing: 1.5px;
  text-transform: uppercase; background: rgba(255,255,255,0.15);
  padding: 5px 16px; border-radius: 20px; margin-bottom: 16px;
}
.page-hero h1 { font-size: clamp(28px,4vw,44px); font-weight: 900; margin-bottom: 10px; }
.page-hero p { font-size: 16px; opacity: 0.9; max-width: 640px; margin: 0 auto; }

.intro-text { max-width: 760px; margin: 0 auto; text-align: center; }
.intro-text p { color: var(--text-light); font-size: 16px; line-height: 1.9; margin-bottom: 20px; }
.intro-ctas { margin-top: 20px; }

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
</style>
