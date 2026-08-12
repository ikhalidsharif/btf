<template>
  <div class="partners-page">

    <!-- Hero -->
    <div class="page-hero">
      <div class="container">
        <span class="hero-eyebrow">{{ locale === 'ar' ? 'شركاؤنا' : 'Our Partners' }}</span>
        <h1>{{ locale === 'ar' ? 'الشركاء والرعاة' : 'Our Partners & Sponsors' }}</h1>
        <p>{{ locale === 'ar'
          ? 'أثرنا ما كان ممكن يتحقق لولا شراكات حقيقية تؤمن برسالتنا'
          : "Our impact wouldn't be possible without genuine partnerships that believe in our mission" }}</p>
      </div>
    </div>

    <!-- Intro -->
    <div class="container section">
      <div class="intro-text fade-up">
        <p>{{ locale === 'ar'
          ? 'تؤمن مؤسسة بحرين ترست بأن العمل الخيري المستدام يُبنى على شراكات حقيقية. نفخر بالتعاون مع جهات حكومية ومؤسسات خاصة وأفراد ووجهاء يشاركوننا نفس الرؤية في تمكين المجتمع من خلال التعليم وخدمة المجتمع والاقتصاد الإبداعي — سواء عبر الدعم المالي، أو المساحات، أو الخبرات، أو التطوع.'
          : 'Bahrain Trust Foundation believes that sustainable charitable work is built on genuine partnerships. We are proud to collaborate with government entities, private institutions, individuals, and dignitaries who share our vision of empowering the community through education, community service, and the creative economy — whether through funding, spaces, expertise, or volunteering.' }}</p>
      </div>
    </div>

    <!-- Partner logos -->
    <section class="partners-section">
      <div class="container">
        <h2 class="section-title center">{{ locale === 'ar' ? 'يثقون بنا' : 'They Trust Us' }}</h2>
        <div class="partners-grid">
          <div v-for="p in partners" :key="p.name" class="partner-logo">
            <img :src="p.image" :alt="p.name" loading="lazy" />
          </div>
        </div>
      </div>
    </section>

    <!-- Why partner with us -->
    <section class="why-section">
      <div class="container">
        <h2 class="section-title center">{{ locale === 'ar' ? 'ليش تشاركنا؟' : 'Why Partner With Us?' }}</h2>
        <div class="why-grid">
          <div v-for="w in reasons" :key="w.titleEn" class="why-card card fade-up">
            <span class="why-icon">{{ w.icon }}</span>
            <h3>{{ locale === 'ar' ? w.titleAr : w.titleEn }}</h3>
            <p>{{ locale === 'ar' ? w.textAr : w.textEn }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-section">
      <div class="container cta-inner">
        <h2>{{ locale === 'ar' ? 'تبي تكون شريكاً معنا؟' : 'Want to Become a Partner?' }}</h2>
        <p>{{ locale === 'ar'
          ? 'سواء كنت شركة أو جهة حكومية أو فرداً، يسعدنا نسمع منك'
          : "Whether you're a company, a government entity, or an individual, we'd love to hear from you" }}</p>
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
  title: locale.value === 'ar' ? 'الشركاء والرعاة | مؤسسة البحرين ترست' : 'Our Partners & Sponsors | Bahrain Trust Foundation',
})

// Logos self-hosted under /public/images/partners/ — kept in sync with the
// homepage partners array manually for now.
const partners = [
  { name: 'Tamkeen', image: '/images/partners/tamkeen.png' },
  { name: 'ONE GCC', image: '/images/partners/onegcc.png' },
  { name: 'Khutwa', image: '/images/partners/khutwa.jpg' },
  { name: 'Baladeya', image: '/images/partners/baladeya.jpg' },
  { name: 'Telp', image: '/images/partners/telp.jpg' },
]

const reasons = [
  {
    icon: '🎯', titleAr: 'أثر مباشر وواضح', titleEn: 'Direct, Visible Impact',
    textAr: 'مشاريعنا ملموسة — مدارس، فضاءات، برامج تدريبية — تشوف أثر شراكتك بعينك.',
    textEn: 'Our projects are tangible — schools, spaces, training programs — you can see the impact of your partnership firsthand.',
  },
  {
    icon: '🤝', titleAr: 'شفافية بالتعامل', titleEn: 'Transparent Collaboration',
    textAr: 'نتعامل بوضوح ومسؤولية مع كل شريك، ونشارك تحديثات دورية عن المشاريع المدعومة.',
    textEn: 'We work with clarity and accountability with every partner, sharing regular updates on supported projects.',
  },
  {
    icon: '🌍', titleAr: 'أثر محلي وعالمي', titleEn: 'Local & Global Reach',
    textAr: 'مشاريعنا تمتد من أحياء البحرين إلى مجتمعات محتاجة بسبع دول حول العالم.',
    textEn: 'Our projects extend from Bahraini neighborhoods to communities in need across seven countries worldwide.',
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

.intro-text { max-width: 760px; margin: 0 auto; text-align: center; }
.intro-text p { color: var(--text-light); font-size: 17px; line-height: 1.9; }

.partners-section { background: var(--off-white); padding: 64px 0; }
.partners-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 24px; margin-top: 32px; align-items: center; }
.partner-logo {
  background: white; border-radius: 14px; padding: 20px;
  display: flex; align-items: center; justify-content: center; height: 88px;
  transition: box-shadow 0.25s, transform 0.25s;
}
.partner-logo img { max-width: 100%; max-height: 40px; filter: grayscale(100%); opacity: 0.7; transition: filter 0.3s, opacity 0.3s; }
.partner-logo:hover { box-shadow: 0 8px 24px rgba(0,0,0,0.08); transform: translateY(-3px); }
.partner-logo:hover img { filter: grayscale(0%); opacity: 1; }

.why-section { padding: 80px 0; }
.why-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-top: 16px; }
.why-card { padding: 32px 26px; text-align: center; }
.why-icon { font-size: 32px; display: block; margin-bottom: 14px; }
.why-card h3 { font-size: 16px; color: var(--dark); margin-bottom: 10px; }
.why-card p { font-size: 14px; color: var(--text-light); line-height: 1.8; }

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
  .partners-grid { grid-template-columns: repeat(3, 1fr); }
  .why-grid { grid-template-columns: 1fr; }
}
@media (max-width: 560px) {
  .partners-grid { grid-template-columns: repeat(2, 1fr); }
}
</style>