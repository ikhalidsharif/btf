<template>
  <div class="project-page">

    <!-- Hero -->
    <div class="page-hero">
      <div class="container">
        <img src="/images/projects/volunteer-teams/sw-5air/logo.png" alt="Sw 5air Team" class="hero-logo" />
        <span class="hero-eyebrow">{{ locale === 'ar' ? 'خدمة المجتمع' : 'Community Service' }}</span>
        <h1>{{ locale === 'ar' ? 'فريق سو خير' : 'Sw 5air Team' }}</h1>
        <p>{{ locale === 'ar'
          ? 'تأسس 2023 — مدرسة ابن خلدون الوطنية'
          : 'Founded 2023 — Ibn Khuldoon National School' }}</p>
      </div>
    </div>

    <!-- Intro -->
    <div class="container section">
      <p class="lead-text fade-up">{{ locale === 'ar'
        ? 'فريق تطوعي شبابي انطلق من مدرسة ابن خلدون الوطنية، يعمل على مشاريع مؤسسة بحرين ترست داخل وخارج مملكة البحرين — من رحلات الخير الدولية إلى المبادرات المجتمعية المحلية.'
        : "A youth volunteer team launched from Ibn Khuldoon National School, working on Bahrain Trust Foundation's projects both inside and outside the Kingdom of Bahrain — from international Good Will Trips to local community initiatives." }}</p>

      <div class="socials-row">
        <a href="https://www.instagram.com/bahraintrust" target="_blank" rel="noopener" class="btn btn-outline">
          📷 {{ locale === 'ar' ? 'إنستغرام مؤسسة بحرين ترست' : "Bahrain Trust's Instagram" }}
        </a>
      </div>
    </div>

    <!-- Gallery -->
    <section class="gallery-section">
      <div class="container">
        <h2 class="section-title center">{{ locale === 'ar' ? 'من أنشطة الفريق' : "From the Team's Activities" }}</h2>
        <div class="photo-grid">
          <div v-for="img in photos" :key="img" class="photo-item">
            <img :src="img" :alt="locale === 'ar' ? 'فريق سو خير' : 'Sw 5air Team'" loading="lazy" />
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-section">
      <div class="container cta-inner">
        <h2>{{ locale === 'ar' ? 'انضم لفريق سو خير' : 'Join Sw 5air' }}</h2>
        <div class="cta-buttons">
          <NuxtLink :to="localePath('/volunteer/apply')" class="btn btn-primary">{{ locale === 'ar' ? 'سجّل كمتطوع' : 'Register as a Volunteer' }}</NuxtLink>
          <NuxtLink :to="localePath('/projects/volunteer-teams')" class="btn btn-outline-white">{{ locale === 'ar' ? 'كل الفرق التطوعية' : 'All Volunteer Teams' }}</NuxtLink>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
const { locale } = useI18n()
const localePath = useLocalePath()

useHead({
  title: locale.value === 'ar' ? 'فريق سو خير | مؤسسة البحرين ترست' : 'Sw 5air Team | Bahrain Trust Foundation',
})

const photos = Array.from({ length: 11 }, (_, i) => `/images/projects/volunteer-teams/sw-5air/photo-${i + 1}.jpg`)
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
.page-hero p { font-size: 15px; opacity: 0.9; }

.lead-text { text-align: center; max-width: 700px; margin: 0 auto; font-size: 16px; color: var(--text-light); line-height: 1.9; }
.socials-row { text-align: center; margin-top: 24px; }

.gallery-section { background: var(--off-white); padding: 80px 0; }
.photo-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; margin-top: 16px; }
.photo-item { border-radius: var(--radius); overflow: hidden; aspect-ratio: 4/3; box-shadow: 0 2px 10px rgba(0,0,0,0.06); }
.photo-item img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s; }
.photo-item:hover img { transform: scale(1.06); }

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
  .photo-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 480px) {
  .photo-grid { grid-template-columns: 1fr; }
}
</style>
