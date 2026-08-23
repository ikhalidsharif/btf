<template>
  <div class="project-page">

    <!-- Hero -->
    <div class="page-hero">
      <div class="container">
        <span class="hero-eyebrow">{{ locale === 'ar' ? 'خدمة المجتمع' : 'Community Service' }}</span>
        <h1>{{ locale === 'ar' ? 'فضاء للجميع' : 'Space for All' }}</h1>
        <p>{{ locale === 'ar'
          ? 'بيئة تعليمية آمنة وممتعة وتفاعلية تشمل كل الأعمار'
          : 'A fun, safe, and interactive age-inclusive community space' }}</p>
      </div>
    </div>

    <!-- Intro -->
    <div class="container section">
      <div class="intro-grid">
        <div class="intro-text fade-up">
          <p>{{ locale === 'ar'
            ? 'يهدف فضاء للجميع إلى خلق بيئة تعليمية ممتعة وآمنة وتفاعلية، تشكّل مساحة مجتمعية تشمل جميع الفئات العمرية، وتشجّع الجميع على قضاء الوقت بشكل أكثر إنتاجية وإبداعاً.'
            : 'Space for All aims to create a fun, safe, and interactive learning public environment that is an age-inclusive community space. It encourages people from all generations to spend more productive and creative time together as a community.' }}</p>
          <p>{{ locale === 'ar'
            ? 'يعمل الفضاء كنقطة محورية في أحيائنا، حيث يتواصل الناس ويعزّزون العلاقات ويبنون المجتمع من خلال البرامج والأنشطة والفعاليات، بالإضافة إلى توفير مساحة آمنة وصديقة للتطوير الشخصي وتنمية المجتمع.'
            : 'Its role in our neighborhoods is pivotal, facilitating communication, fostering relationships, and building community through programs, activities, and events. Additionally, it provides a safe and friendly environment for personal development and community growth.' }}</p>
          <div class="intro-ctas">
            <NuxtLink :to="localePath('/donate')" class="btn btn-primary">
              ❤️ {{ locale === 'ar' ? 'ادعم المشروع' : 'Support the Project' }}
            </NuxtLink>
            <a href="https://youtu.be/BqzoZNFTG_E" target="_blank" rel="noopener" class="btn btn-outline">
              ▶ {{ locale === 'ar' ? 'مشروع فضاء للجميع' : 'Space for All Video' }}
            </a>
          </div>
        </div>
        <div class="intro-image fade-up">
          <img src="/images/projects/education-space.jpg" :alt="locale === 'ar' ? 'فضاء للجميع' : 'Space for All'" />
        </div>
      </div>
    </div>

    <!-- Mission & Vision -->
    <section class="mission-section">
      <div class="container">
        <div class="mission-vision">
          <div class="mv-block">
            <h2>{{ locale === 'ar' ? 'مهمتنا' : 'OUR MISSION' }}</h2>
            <p>{{ locale === 'ar'
              ? 'تمكين أهل الحيّ من المشاركة في مجموعة متنوعة من برامج الترفيه والتعلّم والإنتاجية الإبداعية.'
              : 'Empowering neighborhood residents to participate in a diverse range of entertainment, educational, and creative productivity programs.' }}</p>
          </div>
          <div class="mv-divider" />
          <div class="mv-block">
            <h2>{{ locale === 'ar' ? 'رؤيتنا' : 'OUR VISION' }}</h2>
            <p>{{ locale === 'ar'
              ? 'خلق مكان في المجتمع يدعم المشاركة الكاملة للأطفال والشباب وعائلاتهم في برامج ما بعد المدرسة، بالإضافة إلى الأنشطة الصباحية لكبار السن وربات البيوت.'
              : 'Creating a place in the community that supports full participation of children, youth, and their families in after-school programs, in addition to morning activities for the elderly and housewives.' }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Services -->
    <div class="container section">
      <h2 class="section-title center">{{ locale === 'ar' ? 'خدمات فضاء للجميع' : 'Services We Offer' }}</h2>
      <div class="services-grid">
        <div v-for="(s, i) in services" :key="i" class="service-item fade-up">
          <span class="service-num">{{ i + 1 }}</span>
          <p>{{ locale === 'ar' ? s.ar : s.en }}</p>
        </div>
      </div>
    </div>

    <!-- Branches -->
    <section class="branches-section">
      <div class="container">
        <h2 class="section-title center">{{ locale === 'ar' ? 'فروعنا' : 'Our Locations' }}</h2>
        <p class="section-subtitle center">{{ locale === 'ar'
          ? 'ثلاثة فضاءات تخدم أحياء مختلفة في مملكة البحرين'
          : 'Three spaces serving different neighborhoods across the Kingdom of Bahrain' }}</p>

        <div class="branches-grid">
          <div v-for="b in branches" :key="b.nameEn" class="branch-card card fade-up">
            <h3>{{ locale === 'ar' ? b.nameAr : b.nameEn }}</h3>
            <span class="branch-since">{{ locale === 'ar' ? b.sinceAr : b.sinceEn }}</span>
            <p class="branch-location">📍 {{ locale === 'ar' ? b.locationAr : b.locationEn }}</p>
            <p class="branch-contact">📞 <span dir="ltr">{{ b.contact }}</span></p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-section">
      <div class="container cta-inner">
        <h2>{{ locale === 'ar' ? 'مساحة تصنع فرقاً حقيقياً بالحي' : 'A Space That Makes a Real Difference' }}</h2>
        <p>{{ locale === 'ar' ? 'كل يوم، بكل الأعمار، بكل الأحياء' : 'Every day, for every age, in every neighborhood' }}</p>
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
  title: locale.value === 'ar' ? 'فضاء للجميع | مؤسسة البحرين ترست' : 'Space for All | Bahrain Trust Foundation',
})

const services = [
  { ar: 'برامج يومية للأطفال والشباب ما بعد المدرسة من جميع الأعمار', en: 'Daily after-school programs for children and youth of all ages' },
  { ar: 'أنشطة صباحية يومية لربات البيوت وكبار السن', en: 'Daily morning activities for housewives and the elderly' },
  { ar: 'مكان آمن للأطفال', en: 'Safe space for children' },
  { ar: 'فعاليات وأنشطة متنوعة في عطلات نهاية الأسبوع', en: 'Various events and activities on weekends' },
  { ar: 'ورش عمل واجتماعات ودروس للشباب', en: 'Workshops, meetings, and lessons for youth' },
  { ar: 'مساحة عمل وورش عمل مشتركة', en: 'Shared workspace and workshops' },
  { ar: 'تأجير قاعات الفضاء للأنشطة الخارجية', en: 'Renting space for external activities' },
  { ar: 'محطات كمبيوتر وطابعات', en: 'Computer stations and printers' },
  { ar: 'مكتبة', en: 'Library' },
  { ar: 'مقهى', en: 'Café' },
  { ar: 'مساحة تفاعلية للعب الحر', en: 'Interactive space for free play' },
]

const branches = [
  {
    nameAr: 'فضاء حصة للفن', nameEn: 'Hessa Space for Arts',
    sinceAr: 'منذ 2021 — بدعم من عائلة الشيخة حصة بنت محمد آل خليفة رحمها الله',
    sinceEn: 'Since 2021 — Supported by the family of Sheikha Hessa bint Mohammed Al Khalifa',
    locationAr: 'حيّ النور — ديار المحرق', locationEn: 'Al Noor Neighborhood — Diyar Al Muharraq',
    contact: '17478664',
  },
  {
    nameAr: 'فضاء عادل سلمان كانو', nameEn: 'Space Adel Salman Kanoo',
    sinceAr: 'منذ 2021 — بدعم من الوجيه السيد عادل سلمان كانو',
    sinceEn: 'Since 2021 — Supported by Mr. Adel Salman Kanoo',
    locationAr: 'حيّ الشروق — ديار المحرق', locationEn: 'Al Sherooq Neighborhood — Diyar Al Muharraq',
    contact: '17827682',
  },
  {
    nameAr: 'فضاء عائشة', nameEn: 'Space Aysha',
    sinceAr: 'منذ 2021 — بدعم من عائلة السيدة عائشة بنت ناصر البلوشي رحمها الله',
    sinceEn: 'Since 2021 — Supported by the family of Aysha bint Nasser Al Balooshi',
    locationAr: 'الطريق التعليمي — الرفاع الشرقي', locationEn: 'Learning Alley — East Riffa',
    contact: '17691518',
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

.mission-section { background: var(--off-white); padding: 64px 0; }
.mission-vision { display: flex; align-items: stretch; gap: 48px; }
.mv-block { flex: 1; }
.mv-block h2 { font-size: 15px; font-weight: 800; letter-spacing: 1.5px; color: var(--red); margin-bottom: 12px; }
.mv-block p { font-size: 17px; color: var(--dark); line-height: 1.8; font-weight: 500; }
.mv-divider { width: 1px; background: var(--gray-light); }

.services-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; margin-top: 16px; }
.service-item { display: flex; align-items: flex-start; gap: 14px; padding: 18px; background: white; border-radius: var(--radius); box-shadow: 0 2px 10px rgba(0,0,0,0.05); }
.service-num {
  flex-shrink: 0; width: 30px; height: 30px; border-radius: 50%; background: var(--red);
  color: white; font-weight: 800; font-size: 13px; display: flex; align-items: center; justify-content: center;
}
.service-item p { font-size: 14px; color: var(--dark); line-height: 1.6; }

.branches-section { background: var(--off-white); padding: 80px 0; }
.branches-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-top: 16px; }
.branch-card { padding: 28px; }
.branch-card h3 { font-size: 17px; color: var(--dark); margin-bottom: 8px; }
.branch-since { display: block; font-size: 12px; font-weight: 700; color: var(--red); margin-bottom: 14px; line-height: 1.5; }
.branch-location, .branch-contact { font-size: 14px; color: var(--text-light); margin-bottom: 4px; }

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
  .mission-vision { flex-direction: column; gap: 28px; }
  .mv-divider { display: none; }
  .services-grid { grid-template-columns: 1fr; }
  .branches-grid { grid-template-columns: 1fr; }
}
</style>
