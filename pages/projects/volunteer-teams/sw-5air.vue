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
        <a href="https://www.instagram.com/sw5air.bh" target="_blank" rel="noopener" class="btn btn-outline">
          📷 {{ locale === 'ar' ? 'إنستغرام فريق سو خير' : "Sw 5air Team's Instagram" }}
        </a>
      </div>
    </div>

    <!-- Award highlight -->
    <section class="award-band">
      <div class="container award-inner">
        <span class="award-icon">🏆</span>
        <p>{{ locale === 'ar'
          ? 'الفوز بالمركز الأول في النسخة الأولى من جائزة محفوظة الزياني للعمل الإنساني لعام 2025، والحصول على جائزة مالية قدرها 20,000 دولار أمريكي.'
          : 'Won first place in the inaugural Mahfouza Al Zayani Humanitarian Award 2025, receiving a cash prize of USD 20,000.' }}</p>
      </div>
    </section>

    <!-- Local Achievements -->
    <div class="container section">
      <h2 class="section-title center">{{ locale === 'ar' ? 'الإنجازات المحلية' : 'Local Achievements' }}</h2>
      <div class="bullet-grid">
        <div v-for="(item, i) in localAchievements" :key="i" class="bullet-item fade-up">
          <span class="bullet-dot" />
          <p>{{ locale === 'ar' ? item.ar : item.en }}</p>
        </div>
      </div>
    </div>

    <!-- Trips -->
    <section class="trips-section">
      <div class="container">
        <h2 class="section-title center">{{ locale === 'ar' ? 'رحلات الخير الدولية' : 'International Good Will Trips' }}</h2>
        <div class="trips-grid">
          <div v-for="t in trips" :key="t.titleEn" class="trip-card card fade-up">
            <h3>{{ locale === 'ar' ? t.titleAr : t.titleEn }}</h3>
            <ul>
              <li v-for="(pt, i) in (locale === 'ar' ? t.pointsAr : t.pointsEn)" :key="i">{{ pt }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Fundraising -->
    <div class="container section">
      <h2 class="section-title center">{{ locale === 'ar' ? 'فعاليات جمع التبرعات' : 'Fundraising Activities' }}</h2>
      <div class="bullet-grid">
        <div v-for="(item, i) in fundraising" :key="i" class="bullet-item fade-up">
          <span class="bullet-dot" />
          <p>{{ locale === 'ar' ? item.ar : item.en }}</p>
        </div>
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

const localAchievements = [
  { ar: 'تنظيم فعالية إفطار بالتعاون مع جمعية الأيتام.', en: 'Organized an Iftar event in collaboration with an orphan care society.' },
  { ar: 'تنظيم غبقة رمضانية بالتعاون مع جمعية الأيتام.', en: 'Organized a Ramadan Ghabga in collaboration with an orphan care society.' },
  { ar: 'تنظيم احتفال القرقاعون بالتعاون مع جمعية الأيتام.', en: 'Organized a Gargee\'an celebration in collaboration with an orphan care society.' },
  { ar: 'تنفيذ زيارات لعدة مستشفيات: المستشفى العسكري، مستشفى الملك حمد الجامعي، مجمع السلمانية الطبي.', en: 'Conducted visits to several hospitals: Military (BDF) Hospital, King Hamad University Hospital, and Salmaniya Medical Complex.' },
  { ar: 'تنفيذ مبادرة رسائل «بسمة الخير»، التي تضمنت إرسال رسائل إيجابية إلى الأطفال المرضى في المستشفيات.', en: 'Implemented the "Basmat Al Khair" letter initiative, sending positive messages to children receiving treatment in hospitals.' },
  { ar: 'تنظيم أنشطة ترفيهية للأطفال المصابين بالسرطان.', en: 'Organized recreational activities for children with cancer.' },
  { ar: 'المشاركة في تنفيذ مشروع إفطار صائم بصورة يومية بالتعاون مع فريق يزاك.', en: 'Participated in the daily implementation of the Iftar Meals Project in collaboration with the YZAK Team.' },
]

const trips = [
  {
    titleAr: 'رحلة الخير إلى الهند', titleEn: 'Humanitarian Trip to India',
    pointsAr: [
      'جمع 5,200 دينار بحريني خلال شهر ونصف، من سبتمبر إلى أكتوبر 2022.',
      'مشاركة 25 طالباً وثلاثة معلمين في الرحلة.',
      'تأثيث وتجهيز أربعة فصول دراسية.',
      'توفير القرطاسية وأجهزة الحاسوب المحمول لعدد من المدارس.',
      'إنشاء ملعب للأطفال.',
    ],
    pointsEn: [
      'Raised BHD 5,200 within one and a half months, from September to October 2022.',
      'Participated with 25 students and three teachers.',
      'Furnished and equipped four classrooms.',
      'Provided stationery and laptops to several schools.',
      'Established a playground for children.',
    ],
  },
  {
    titleAr: 'رحلة الخير إلى المغرب', titleEn: 'Humanitarian Trip to Morocco',
    pointsAr: [
      'جمع 7,653 ديناراً بحرينياً خلال العام الدراسي 2023–2024.',
      'مشاركة 26 طالباً وأربعة معلمين في الرحلة.',
      'بناء فصل دراسي، وسور لإحدى المدارس، ودورات مياه.',
      'تجهيز وتزيين ملعب للأطفال.',
      'توزيع الحقائب والاحتياجات المدرسية على الطلبة.',
    ],
    pointsEn: [
      'Raised BHD 7,653 during the 2023–2024 academic year.',
      'Participated with 26 students and four teachers.',
      'Built a classroom, a boundary wall, and sanitation facilities.',
      "Equipped and decorated a children's playground.",
      'Distributed school bags and essential supplies to students.',
    ],
  },
  {
    titleAr: 'رحلة الخير إلى تنزانيا — زنجبار', titleEn: 'Humanitarian Trip to Tanzania — Zanzibar',
    pointsAr: [
      'جمع 5,800 دينار بحريني خلال أقل من ستة أشهر.',
      'مشاركة 29 طالباً وأربعة معلمين في الرحلة.',
      'ترميم سبعة فصول دراسية.',
      'إضافة رفوف جديدة للمكتبة وتزويدها بالكتب.',
      'ترميم عدد من المرافق الداخلية والخارجية للمدرسة، وتوزيع مستلزمات النظافة الشخصية.',
    ],
    pointsEn: [
      'Raised BHD 5,800 in less than six months.',
      'Participated with 29 students and four teachers.',
      'Renovated seven classrooms.',
      "Added new shelves to the school library and supplied it with books.",
      'Renovated several internal and external school facilities and distributed personal hygiene supplies.',
    ],
  },
]

const fundraising = [
  { ar: 'تنظيم بطولتين لكرة القدم وبطولة للكرة الطائرة.', en: 'Organized two football tournaments and a volleyball tournament.' },
  { ar: 'تنظيم مبيعات "Morocco Mondays" لدعم مشروع المغرب.', en: 'Organized "Morocco Mondays" sales in support of the Morocco Project.' },
  { ar: 'تنظيم أكثر من ثمانية معارض لبيع المخبوزات.', en: 'Organized more than eight bake sales.' },
  { ar: 'تنظيم أيام للملابس غير الرسمية بهدف جمع التبرعات.', en: 'Organized casual-dress days to raise funds.' },
  { ar: 'تنظيم فعالية «سو كشتة» الطلابية، وفعالية لغسل سيارات المعلمين، وبطولة للبادل.', en: 'Organized the student "Sw Kashta" event, a teacher car-washing event, and a padel tournament.' },
  { ar: 'تنظيم ثلاث ورش فنية لطلبة المرحلة الابتدائية.', en: 'Organized three art workshops for primary school students.' },
  { ar: 'إعداد تصاميم فنية خاصة بالعيد الوطني.', en: 'Created artistic designs for Bahrain National Day.' },
  { ar: 'تنظيم حملة لجمع التبرعات لصالح غزة بالتعاون مع مؤسسة بحرين ترست.', en: 'Organized a fundraising campaign in support of Gaza in collaboration with Bahrain Trust Foundation.' },
  { ar: 'المساهمة في مبادرة «كوبونات السرور» بمبلغ 1,000 دينار بحريني، لدعم الطلبة البحرينيين من الأسر المتعففة بمناسبة العودة للمدارس.', en: 'Contributed BHD 1,000 to the "Joy Coupons" initiative, supporting Bahraini students from low-income families for the new school year.' },
]
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

.award-band { background: linear-gradient(90deg, #c8972a, #E31C26); padding: 24px 0; }
.award-inner { display: flex; align-items: center; justify-content: center; gap: 16px; text-align: center; flex-wrap: wrap; }
.award-icon { font-size: 32px; }
.award-inner p { color: white; font-weight: 700; font-size: 15px; max-width: 700px; }

.bullet-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; margin-top: 24px; }
.bullet-item { display: flex; align-items: flex-start; gap: 12px; }
.bullet-dot { flex-shrink: 0; width: 8px; height: 8px; border-radius: 50%; background: var(--red); margin-top: 7px; }
.bullet-item p { font-size: 14px; color: var(--text-light); line-height: 1.7; }

.trips-section { background: var(--off-white); padding: 80px 0; }
.trips-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-top: 16px; }
.trip-card { padding: 26px; }
.trip-card h3 { font-size: 16px; color: var(--dark); margin-bottom: 14px; line-height: 1.4; }
.trip-card ul { list-style: none; padding: 0; margin: 0; }
.trip-card li {
  font-size: 13px; color: var(--text-light); padding-inline-start: 18px; position: relative;
  margin-bottom: 10px; line-height: 1.7;
}
.trip-card li::before { content: '•'; color: var(--red); position: absolute; inset-inline-start: 0; }

.gallery-section { background: white; padding: 80px 0; }
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
  .bullet-grid { grid-template-columns: 1fr; }
  .trips-grid { grid-template-columns: 1fr; }
}
@media (max-width: 480px) {
  .photo-grid { grid-template-columns: 1fr; }
}
</style>
