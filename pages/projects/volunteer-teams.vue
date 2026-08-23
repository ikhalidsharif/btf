<template>
  <div class="project-page">

    <!-- Hero -->
    <div class="page-hero">
      <div class="container">
        <span class="hero-eyebrow">{{ locale === 'ar' ? 'خدمة المجتمع' : 'Community Service' }}</span>
        <h1>{{ locale === 'ar' ? 'الفرق التطوعية' : 'Volunteer Teams' }}</h1>
        <p>{{ locale === 'ar'
          ? 'شباب بحريني يقود العمل الخيري من مدارسه وجامعاته'
          : 'Bahraini youth leading charitable work from their schools and universities' }}</p>
      </div>
    </div>

    <!-- Intro -->
    <div class="container section">
      <p class="lead-text fade-up">{{ locale === 'ar'
        ? 'ثلاثة فرق تطوعية شبابية، كل واحد منها انطلق من مؤسسة تعليمية بحرينية، ويعمل اليوم على مشاريع مؤسسة بحرين ترست داخل وخارج المملكة.'
        : "Three youth volunteer teams, each launched from a Bahraini educational institution, now working on Bahrain Trust Foundation's projects both inside and outside the Kingdom." }}</p>
    </div>

    <!-- Teams -->
    <section class="teams-section">
      <div class="container">
        <div class="teams-grid">
          <div v-for="t in teams" :key="t.nameEn" class="team-card-lg card fade-up">
            <h3>{{ locale === 'ar' ? t.nameAr : t.nameEn }}</h3>
            <span class="team-since">{{ locale === 'ar' ? t.foundedAr : t.foundedEn }}</span>
            <p>{{ locale === 'ar' ? t.descAr : t.descEn }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-section">
      <div class="container cta-inner">
        <h2>{{ locale === 'ar' ? 'كوّن فريقك، وابدأ التغيير' : 'Form Your Team, Start the Change' }}</h2>
        <p>{{ locale === 'ar' ? 'من مدرستك أو جامعتك، تقدر تصنع فرقاً' : 'From your school or university, you can make a difference' }}</p>
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
  title: locale.value === 'ar' ? 'الفرق التطوعية | مؤسسة البحرين ترست' : 'Volunteer Teams | Bahrain Trust Foundation',
})

const teams = [
  {
    nameAr: 'فريق سو خير', nameEn: 'Sw 5air Team',
    foundedAr: 'تأسس 2023 — مدرسة ابن خلدون الوطنية', foundedEn: 'Founded 2023 — Ibn Khuldoon National School',
    descAr: 'فريق تطوعي شبابي يعمل لصالح مشاريع مؤسسة بحرين ترست داخل وخارج مملكة البحرين.',
    descEn: "A youth volunteer team working on Bahrain Trust Foundation's projects both inside and outside the Kingdom of Bahrain.",
  },
  {
    nameAr: 'فريق يزاك', nameEn: 'Yazak Team',
    foundedAr: 'تأسس 2023 — الجامعة الأمريكية بمملكة البحرين', foundedEn: 'Founded 2023 — American University of Bahrain',
    descAr: 'فريق تطوعي شبابي معنيّ بمشاريع مؤسسة بحرين ترست داخل وخارج المملكة.',
    descEn: "A youth volunteer team involved in Bahrain Trust Foundation's projects both inside and outside the Kingdom.",
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

.lead-text { text-align: center; max-width: 700px; margin: 0 auto; font-size: 17px; color: var(--text-light); line-height: 1.9; }

.teams-section { background: var(--off-white); padding: 40px 0 80px; }
.teams-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; max-width: 700px; margin: 16px auto 0; }
.team-card-lg { padding: 32px 26px; }
.team-card-lg h3 { font-size: 19px; color: var(--dark); margin-bottom: 8px; }
.team-since { display: block; font-size: 12px; font-weight: 700; color: var(--red); margin-bottom: 16px; line-height: 1.5; }
.team-card-lg p { font-size: 14px; color: var(--text-light); line-height: 1.8; }

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
  .teams-grid { grid-template-columns: 1fr; }
}
</style>
