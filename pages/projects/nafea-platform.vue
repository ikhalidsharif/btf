<template>
  <div class="project-page">

    <!-- Hero -->
    <div class="page-hero">
      <div class="container">
        <img src="/images/projects/nafi3/logo.png" alt="Nafi3 Volunteers Platform" class="hero-logo" />
        <span class="hero-eyebrow">{{ locale === 'ar' ? 'خدمة المجتمع' : 'Community Service' }}</span>
        <h1>{{ locale === 'ar' ? 'منصة نافع للمتطوعين' : 'Nafi3 Volunteers Platform' }}</h1>
        <p>{{ locale === 'ar'
          ? 'أداة رقمية مبتكرة لتعزيز العمل التطوعي وتطوير الكوادر'
          : 'An innovative digital tool for promoting volunteerism and developing volunteer capacity' }}</p>
      </div>
    </div>

    <!-- Intro -->
    <div class="container section">
      <div class="intro-text fade-up">
        <p>{{ locale === 'ar'
          ? 'منصة نافع للمتطوعين هي منصة رقمية كأداة مبتكرة لتعزيز العمل التطوعي وتطوير الكوادر التطوعية. تتيح المنصة للمتطوعين تسجيل مشاركاتهم وأنشطتهم، ومتابعة أثر جهودهم، بالإضافة إلى توفير برامج تدريبية وتوجيهية لتنمية المهارات القيادية والاجتماعية. وتهدف المنصة إلى تمكين المتطوعين ليصبحوا شركاء فاعلين في المبادرات الخيرية والمجتمعية، وتعزيز ثقافة التطوع المستدام الذي يساهم في صناعة التغيير الإيجابي في المجتمع.'
          : 'The Nafi3 Volunteers Platform is a digital platform and innovative tool designed to promote volunteerism and develop volunteer capacity. It enables volunteers to register their participation and activities, track the impact of their efforts, and access training and guidance programs aimed at developing their leadership and social skills. The platform aims to empower volunteers to become active partners in charitable and community initiatives, while fostering a culture of sustainable volunteering that contributes to creating positive change in society.' }}</p>
        <div class="intro-ctas">
          <NuxtLink :to="localePath('/volunteer/apply')" class="btn btn-primary">
            {{ locale === 'ar' ? 'كُن متطوع نافع معانا' : 'Be a Nafi3 Volunteer With Us' }}
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- CTA -->
    <section class="cta-section">
      <div class="container cta-inner">
        <h2>{{ locale === 'ar' ? 'تطوّعك يصنع أثراً حقيقياً' : 'Your Volunteering Creates Real Impact' }}</h2>
        <div class="cta-buttons">
          <NuxtLink :to="localePath('/volunteer/apply')" class="btn btn-primary">{{ locale === 'ar' ? 'سجّل كمتطوع' : 'Register as a Volunteer' }}</NuxtLink>
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
  title: locale.value === 'ar' ? 'منصة نافع للمتطوعين | مؤسسة البحرين ترست' : 'Nafi3 Volunteers Platform | Bahrain Trust Foundation',
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
