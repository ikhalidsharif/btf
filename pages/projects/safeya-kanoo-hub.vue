<template>
  <div class="project-page">

    <!-- Hero -->
    <div class="page-hero">
      <div class="container">
        <span class="hero-eyebrow">{{ locale === 'ar' ? 'الاقتصاد الإبداعي' : 'Creative Economy' }}</span>
        <h1>{{ locale === 'ar' ? 'مركز صفية علي كانو للفنون' : 'Safeya Ali Kanoo Hub for Arts' }}</h1>
        <p>{{ locale === 'ar'
          ? 'مساحة فنية ثقافية تحتضن المبدعين وتصقل مواهبهم'
          : 'A cultural and artistic space that nurtures creatives and refines their talent' }}</p>
      </div>
    </div>

    <!-- Intro -->
    <div class="container section">
      <div class="intro-grid">
        <div class="intro-text fade-up">
          <p>{{ locale === 'ar'
            ? 'مركز صفية علي كانو للفنون هو مشروع فني ثقافي تحت مظلة مؤسسة بحرين ترست الخيرية. تأسس المركز في نهاية عام 2021، وافتُتح رسمياً في عام 2023 بتمويل كامل من السيدة صفية علي محمد كانو. يعدّ المركز نموذجاً لدعمها للمشاريع الخيرية، ويعكس رؤيتها الفنية وأهداف المؤسسة التنموية والاجتماعية.'
            : 'Safeya Ali Kanoo Hub for Arts is a cultural and artistic project under the umbrella of Bahrain Trust Foundation. Established at the end of 2021 and officially inaugurated in 2023 with full funding from Mrs. Safeya Ali Mohammed Kanoo, the hub reflects her artistic vision and aligns with the developmental and social objectives of the Foundation.' }}</p>
          <p>{{ locale === 'ar'
            ? 'يهدف المركز إلى دعم الفنانين وأصحاب المشاريع الصغيرة من خلال بيئة داعمة تشمل أستوديوهات فنية، وقاعات تدريب، ومختبر حاسوب للتصميم الرقمي، ومساحات عرض، ومعرض فني، ومتجر هدايا، ومقهى — بما يخلق بيئة إبداعية متكاملة ومثمرة.'
            : 'The hub supports artists and small business owners by providing a nurturing environment that includes art studios, training halls, a digital design lab, exhibition spaces, an art gallery, a gift shop, and a café — creating an integrated and thriving creative environment.' }}</p>
          <div class="intro-ctas">
            <NuxtLink :to="localePath('/donate')" class="btn btn-primary">
              ❤️ {{ locale === 'ar' ? 'ادعم المركز' : 'Support the Hub' }}
            </NuxtLink>
            <NuxtLink :to="localePath('/gift-shop')" class="btn btn-outline">
              {{ locale === 'ar' ? 'زر متجر الهدايا' : 'Visit the Gift Shop' }}
            </NuxtLink>
          </div>
        </div>
        <div class="intro-image fade-up">
          <img src="/images/projects/community.jpg" :alt="locale === 'ar' ? 'مركز صفية علي كانو للفنون' : 'Safeya Ali Kanoo Hub for Arts'" />
        </div>
      </div>
    </div>

    <!-- Goals -->
    <section class="goals-section">
      <div class="container">
        <h2 class="section-title center">{{ locale === 'ar' ? 'أهداف المركز الفني' : 'Goals of the Arts Hub' }}</h2>
        <div class="goals-grid">
          <div v-for="g in goals" :key="g.titleEn" class="goal-card card fade-up">
            <h3>{{ locale === 'ar' ? g.titleAr : g.titleEn }}</h3>
            <ul>
              <li v-for="(pt, i) in (locale === 'ar' ? g.pointsAr : g.pointsEn)" :key="i">{{ pt }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Services -->
    <div class="container section">
      <h2 class="section-title center">{{ locale === 'ar' ? 'خدمات المركز الفني' : 'Services of the Arts Hub' }}</h2>
      <div class="goals-grid">
        <div v-for="s in servicesList" :key="s.titleEn" class="goal-card card fade-up">
          <h3>{{ locale === 'ar' ? s.titleAr : s.titleEn }}</h3>
          <ul>
            <li v-for="(pt, i) in (locale === 'ar' ? s.pointsAr : s.pointsEn)" :key="i">{{ pt }}</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Future Vision -->
    <section class="vision-band">
      <div class="container">
        <h2>{{ locale === 'ar' ? 'رؤية المركز المستقبلية' : 'Future Vision of the Hub' }}</h2>
        <p>{{ locale === 'ar'
          ? 'يطمح المركز إلى أن يكون مرجعاً ثقافياً وفنياً، يسهم في تعزيز مكانة الفن في المجتمع ويخلق فرصاً مستدامة للفنانين. من خلال شراكات استراتيجية مع مؤسسات فنية محلية ودولية، يسعى المركز إلى توسيع نطاق تأثيره ودوره في إثراء المشهد الفني.'
          : 'The hub aspires to become a cultural and artistic reference point, contributing to elevating the status of art within the community and creating sustainable opportunities for artists. Through strategic partnerships with local and international art institutions, the hub seeks to expand its influence and role in enriching the artistic landscape.' }}</p>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-section">
      <div class="container cta-inner">
        <h2>{{ locale === 'ar' ? 'كل فنان يستحق مساحة يزدهر فيها' : 'Every Artist Deserves a Space to Thrive' }}</h2>
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
  title: locale.value === 'ar' ? 'مركز صفية علي كانو للفنون | مؤسسة البحرين ترست' : 'Safeya Ali Kanoo Hub for Arts | Bahrain Trust Foundation',
})

const goals = [
  {
    titleAr: 'دعم الفنانين المحليين والدوليين', titleEn: 'Supporting Local and International Artists',
    pointsAr: [
      'تسليط الضوء على أعمال الفنانين الناشئين والمخضرمين من خلال معارض فردية وجماعية.',
      'تقديم الدعم الفني والإرشاد لمساعدة الفنانين على تطوير مهاراتهم والارتقاء بأعمالهم.',
    ],
    pointsEn: [
      'Highlighting the work of emerging and seasoned artists through solo and group exhibitions.',
      'Providing artistic guidance and mentorship to help artists develop their skills.',
    ],
  },
  {
    titleAr: 'تعزيز الثقافة الفنية', titleEn: 'Promoting Artistic Culture',
    pointsAr: [
      'نشر الوعي الفني في المجتمع من خلال فعاليات ثقافية وفنية متنوعة.',
      'تقديم ورش عمل ودورات تدريبية تنمّي المهارات الفنية وتنقل خبرات الفنانين للأجيال الجديدة.',
    ],
    pointsEn: [
      'Raising community awareness about art through diverse cultural and artistic events.',
      'Offering workshops and training programs that transfer expertise to younger generations.',
    ],
  },
  {
    titleAr: 'إتاحة مساحات للفنانين', titleEn: 'Providing Spaces for Artists',
    pointsAr: [
      'قاعات مجهزة بأعلى المعايير الفنية للإيجار، لتنظيم المعارض والفعاليات الفنية.',
      'تعزيز روح التعاون بين الفنانين من خلال بيئة مشتركة للإبداع والتواصل.',
    ],
    pointsEn: [
      'State-of-the-art venues for rent, enabling artists to host exhibitions or events.',
      'Encouraging collaboration through a shared space for creativity and networking.',
    ],
  },
]

const servicesList = [
  {
    titleAr: 'تنظيم المعارض الفنية', titleEn: 'Organizing Art Exhibitions',
    pointsAr: [
      'إقامة معارض دورية تعكس مختلف أشكال الإبداع — الرسم، النحت، التصوير، والفنون الرقمية.',
      'ربط الفنانين بالجمهور والمهتمين بالفنون.',
    ],
    pointsEn: [
      'Hosting regular exhibitions showcasing painting, sculpture, photography, and digital arts.',
      'Creating opportunities for artists to connect with audiences.',
    ],
  },
  {
    titleAr: 'ورش العمل الفنية والتدريبية', titleEn: 'Art and Training Workshops',
    pointsAr: [
      'تنظيم ورش عمل في مجالات فنية متنوعة لتطوير المهارات ونقل الخبرات.',
      'مساحات تفاعلية تجمع الفنانين والمشاركين لتعزيز الحوار الإبداعي.',
    ],
    pointsEn: [
      'Conducting workshops across various art fields to develop skills and share expertise.',
      'Providing interactive spaces for artistic dialogue between artists and participants.',
    ],
  },
  {
    titleAr: 'تأجير القاعات الفنية', titleEn: 'Renting Artistic Venues',
    pointsAr: [
      'قاعات متعددة الاستخدامات مجهزة بأحدث التقنيات لتلبية احتياجات الفنانين.',
      'تسهيلات خاصة تتيح للفنانين تنفيذ رؤاهم الإبداعية بحرية واحترافية.',
    ],
    pointsEn: [
      'Multipurpose halls equipped with the latest technology for exhibitions or events.',
      'Tailored facilities allowing artists to execute their creative visions freely.',
    ],
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

.goals-section { background: var(--off-white); padding: 80px 0; }
.goals-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-top: 16px; }
.goal-card { padding: 28px; }
.goal-card h3 { font-size: 16px; color: var(--dark); margin-bottom: 14px; line-height: 1.4; }
.goal-card ul { list-style: none; padding: 0; margin: 0; }
.goal-card li {
  font-size: 13px; color: var(--text-light); padding-inline-start: 18px; position: relative;
  margin-bottom: 10px; line-height: 1.7;
}
.goal-card li::before { content: '•'; color: var(--red); position: absolute; inset-inline-start: 0; }

.vision-band { background: var(--dark); padding: 56px 0; text-align: center; }
.vision-band h2 { color: white; font-size: 22px; font-weight: 800; margin-bottom: 16px; }
.vision-band p { color: rgba(255,255,255,0.85); font-size: 16px; line-height: 1.9; max-width: 760px; margin: 0 auto; }

.cta-section { background: var(--red); padding: 64px 0; }
.cta-inner { text-align: center; color: white; }
.cta-inner h2 { font-size: clamp(24px,3vw,34px); font-weight: 800; margin-bottom: 24px; }
.cta-buttons { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }
.btn-outline-white {
  background: transparent; color: white; border: 2px solid rgba(255,255,255,0.6);
  padding: 12px 28px; border-radius: 4px; font-weight: 700; font-size: 14px;
  text-transform: uppercase; letter-spacing: 0.5px; display: inline-flex; align-items: center; gap: 8px;
  transition: all var(--transition);
}
.btn-outline-white:hover { background: rgba(255,255,255,0.15); border-color: white; }

@media (max-width: 900px) {
  .intro-grid { grid-template-columns: 1fr; }
  .intro-image { order: -1; }
  .goals-grid { grid-template-columns: 1fr; }
}
</style>
