<template>
  <div class="projects-page">

    <!-- Hero -->
    <div class="page-hero">
      <div class="container">
        <span class="hero-eyebrow">{{ locale === 'ar' ? 'مشاريعنا' : 'Our Projects' }}</span>
        <h1>{{ locale === 'ar' ? 'أثر يلمس حياة الناس' : 'Impact That Touches Lives' }}</h1>
        <p>{{ locale === 'ar'
          ? 'برامج مستدامة في التعليم المجتمعي وخدمة المجتمع والإبداع والابتكار'
          : 'Sustainable programs across community education, community service, and creativity & innovation' }}</p>
      </div>
    </div>

    <!-- Category jump nav -->
    <div class="cat-nav">
      <div class="container cat-nav-inner">
        <a href="#education" class="cat-link">🎓 {{ locale === 'ar' ? 'التعليم المجتمعي' : 'Community Education' }}</a>
        <a href="#community" class="cat-link">🤝 {{ locale === 'ar' ? 'خدمة المجتمع' : 'Community Service' }}</a>
        <a href="#creative" class="cat-link">💡 {{ locale === 'ar' ? 'الإبداع والابتكار' : 'Creativity & Innovation' }}</a>
      </div>
    </div>

    <!-- Community Education -->
    <section id="education" class="container section cat-section">
      <div class="cat-header">
        <h2 class="section-title">🎓 {{ locale === 'ar' ? 'التعليم المجتمعي' : 'Community Education' }}</h2>
        <p class="section-subtitle">{{ locale === 'ar'
          ? 'مدارس مصغرة، منح دراسية، ومنصات تعليمية داخل وخارج البحرين'
          : 'Micro-schools, scholarships, and learning platforms inside and outside Bahrain' }}</p>
      </div>
      <div class="projects-grid">
        <NuxtLink v-for="p in education" :key="p.slug" :to="localePath(p.slug)" class="project-card card">
          <div class="project-img"><img :src="p.image" :alt="locale === 'ar' ? p.titleAr : p.title" /></div>
          <div class="project-body">
            <h3>{{ locale === 'ar' ? p.titleAr : p.title }}</h3>
            <p>{{ locale === 'ar' ? p.descAr : p.desc }}</p>
            <span class="project-link">{{ locale === 'ar' ? 'اعرف أكثر ←' : 'Learn More →' }}</span>
          </div>
        </NuxtLink>
      </div>
    </section>

    <!-- Community Service -->
    <section id="community" class="container section cat-section">
      <div class="cat-header">
        <h2 class="section-title">🤝 {{ locale === 'ar' ? 'خدمة المجتمع' : 'Community Service' }}</h2>
        <p class="section-subtitle">{{ locale === 'ar'
          ? 'رحلات، فرق تطوعية، ومبادرات مستدامة تدعم الأسر المحتاجة'
          : 'Trips, volunteer teams, and sustainable initiatives supporting families in need' }}</p>
      </div>
      <div class="projects-grid">
        <NuxtLink v-for="p in community" :key="p.slug" :to="localePath(p.slug)" class="project-card card">
          <div class="project-img"><img :src="p.image" :alt="locale === 'ar' ? p.titleAr : p.title" /></div>
          <div class="project-body">
            <h3>{{ locale === 'ar' ? p.titleAr : p.title }}</h3>
            <p>{{ locale === 'ar' ? p.descAr : p.desc }}</p>
            <span class="project-link">{{ locale === 'ar' ? 'اعرف أكثر ←' : 'Learn More →' }}</span>
          </div>
        </NuxtLink>
      </div>
    </section>

    <!-- Creativity & Innovation -->
    <section id="creative" class="container section cat-section">
      <div class="cat-header">
        <h2 class="section-title">💡 {{ locale === 'ar' ? 'الإبداع والابتكار' : 'Creativity & Innovation' }}</h2>
        <p class="section-subtitle">{{ locale === 'ar'
          ? 'دعم الفن والمواهب البحرينية عبر مساحات ومسابقات ومعارض'
          : 'Supporting Bahraini art and talent through spaces, competitions, and exhibitions' }}</p>
      </div>
      <div class="projects-grid">
        <NuxtLink v-for="p in creative" :key="p.slug" :to="localePath(p.slug)" class="project-card card">
          <div class="project-img"><img :src="p.image" :alt="locale === 'ar' ? p.titleAr : p.title" /></div>
          <div class="project-body">
            <h3>{{ locale === 'ar' ? p.titleAr : p.title }}</h3>
            <p>{{ locale === 'ar' ? p.descAr : p.desc }}</p>
            <span class="project-link">{{ locale === 'ar' ? 'اعرف أكثر ←' : 'Learn More →' }}</span>
          </div>
        </NuxtLink>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-section">
      <div class="container cta-inner">
        <h2>{{ locale === 'ar' ? 'ادعم أحد مشاريعنا' : 'Support One of Our Projects' }}</h2>
        <p>{{ locale === 'ar' ? 'اختر مشروعاً وساهم في إحداث فرق حقيقي' : 'Choose a project and help make a real difference' }}</p>
        <NuxtLink :to="localePath('/donate')" class="btn btn-primary">❤️ {{ locale === 'ar' ? 'تبرع الآن' : 'Donate Now' }}</NuxtLink>
      </div>
    </section>

  </div>
</template>

<script setup>
const { locale } = useI18n()
const localePath = useLocalePath()

useHead({
  title: locale.value === 'ar' ? 'مشاريعنا | مؤسسة البحرين ترست' : 'Our Projects | Bahrain Trust Foundation',
})

const education = [
  {
    slug: '/projects/hospital-micro-schools', image: '/images/projects/education-hospital.jpg',
    title: 'Hospital Schools', titleAr: 'مدارس المستشفى',
    desc: 'Supporting hospital schools and developing the artistic talents of sick children.',
    descAr: 'دعم مدارس المستشفيات وطلاب الأطفال المرضى وتنمية مواهبهم الفنية.',
  },
  {
    slug: '/projects/space-for-all', image: '/images/projects/education-space.jpg',
    title: 'Space for All', titleAr: 'فضاء للجميع',
    desc: 'Creating inclusive learning spaces accessible to every child.',
    descAr: 'إيجاد فضاءات تعليمية شاملة يستفيد منها كل طفل.',
  },
  {
    slug: '/projects/micro-schools', image: '/images/projects/education-micro.jpg',
    title: 'Micro Schools', titleAr: 'المدارس المصغرة',
    desc: 'Small-scale schools bringing quality education closer to students.',
    descAr: 'مدارس مصغرة تقرب التعليم الجيد من الطلاب في مجتمعاتهم.',
  },
  {
    slug: '/projects/ilm-scholarship', image: '/images/projects/education.jpg',
    title: 'Ilm Scholarship', titleAr: 'منحة علم',
    desc: 'Scholarships helping talented students continue their education.',
    descAr: 'منح دراسية تساعد الطلاب المتفوقين على مواصلة تعليمهم.',
  },
  {
    slug: '/projects/manara-platform', image: '/images/projects/education.jpg',
    title: 'Manara Education Platform', titleAr: 'منصة منارة للتعليم',
    desc: 'A digital platform expanding access to quality education.',
    descAr: 'منصة رقمية توسّع فرص الوصول إلى تعليم جيد.',
  },
]

const community = [
  {
    slug: '/projects/good-will-trips', image: '/images/projects/community-goodwill.jpg',
    title: 'Good Will Trips', titleAr: 'رحلات الخير',
    desc: 'Recreational trips bringing joy to families in need.',
    descAr: 'رحلات ترفيهية تُدخل الفرحة على الأسر المحتاجة.',
  },
  {
    slug: '/projects/volunteer-teams', image: '/images/projects/community-volunteer.jpg',
    title: 'Volunteer Teams', titleAr: 'الفرق التطوعية',
    desc: 'Organized volunteer teams driving our community initiatives.',
    descAr: 'فرق تطوعية منظمة تقود مبادراتنا المجتمعية.',
  },
  {
    slug: '/projects/nafea-platform', image: '/images/projects/community.jpg',
    title: 'Nafea Volunteer Platform', titleAr: 'منصة نافع للمتطوعين',
    desc: 'A digital platform connecting volunteers with opportunities.',
    descAr: 'منصة رقمية تربط المتطوعين بفرص التطوع المتاحة.',
  },
  {
    slug: '/projects/charity-sustainability-fund', image: '/images/projects/community.jpg',
    title: 'Charity Sustainability Fund', titleAr: 'صندوق الاستدامة الخيري',
    desc: 'An endowment fund supporting our programs for the long term.',
    descAr: 'صندوق وقفي يدعم استدامة برامجنا على المدى الطويل.',
  },
  {
    slug: '/projects/in-kind-support', image: '/images/projects/community-inkind.jpg',
    title: 'Our Community Initiatives', titleAr: 'مبادراتنا مع المجتمع',
    desc: 'Distributing essential goods and support to families in need.',
    descAr: 'مبادرات وتوزيع مساعدات أساسية على الأسر المحتاجة.',
  },
  {
    slug: '/events', image: '/images/projects/community.jpg',
    title: 'Our Events', titleAr: 'فعالياتنا',
    desc: 'Community events that bring people together throughout the year.',
    descAr: 'فعاليات مجتمعية تجمع الناس على مدار العام.',
  },
]

const creative = [
  {
    slug: '/projects/safeya-kanoo-hub', image: '/images/projects/community.jpg',
    title: 'Safeya Ali Kanoo Hub for Arts', titleAr: 'مركز صفية علي كانو للفنون',
    desc: 'A creative hub nurturing artistic talent and community programs.',
    descAr: 'مركز إبداعي يحتضن المواهب الفنية والبرامج المجتمعية.',
  },
  {
    slug: '/gift-shop', image: '/images/projects/creative-giftshop.jpg',
    title: 'Gift Shop', titleAr: 'متجر الهدايا',
    desc: 'Handmade products supporting entrepreneurship and small businesses.',
    descAr: 'منتجات يدوية تدعم ريادة الأعمال والمشاريع الصغيرة.',
  },
  {
    slug: '/stories', image: '/images/projects/education-story.jpg',
    title: 'Children & Youth Story Writing Competition', titleAr: 'مسابقة تأليف قصص الأطفال والناشئة',
    desc: 'Nurturing young writers and encouraging Arabic literacy through storytelling.',
    descAr: 'رعاية المواهب الكتابية الشابة وتعزيز حب اللغة العربية من خلال القصص.',
  },
  {
    slug: '/projects/quran-competition', image: '/images/projects/education.jpg',
    title: 'Mohammed bin Yousif Al Baloushi Quran Competition', titleAr: 'مسابقة محمد بن يوسف البلوشي لتلاوة وحفظ القرآن الكريم',
    desc: 'A competition encouraging Quran memorization and recitation.',
    descAr: 'مسابقة تشجّع على حفظ وتلاوة القرآن الكريم.',
  },
  {
    slug: '/projects/3alimny-exhibition', image: '/images/projects/education-hospital.jpg',
    title: '"3alimny" Child Art Exhibition', titleAr: 'معرض "علّمني" لفن الطفل',
    desc: "An exhibition celebrating hospital school students' artwork.",
    descAr: 'معرض يحتفي بالأعمال الفنية لطلاب مدارس المستشفى.',
  },
  {
    slug: '/projects/bahraini-woman-portrait', image: '/images/projects/community.jpg',
    title: '"Portrait of the Bahraini Woman" Exhibition', titleAr: 'معرض "بورتريه المرأة البحرينية"',
    desc: 'An exhibition celebrating the Bahraini woman through art.',
    descAr: 'معرض فني يحتفي بالمرأة البحرينية.',
  },
]
</script>

<style scoped>
.page-hero {
  background: linear-gradient(135deg, var(--red) 0%, #8B0000 100%);
  padding: 90px 0 60px;
  color: white;
  text-align: center;
}
.hero-eyebrow {
  display: inline-block; font-size: 13px; font-weight: 700; letter-spacing: 1.5px;
  text-transform: uppercase; background: rgba(255,255,255,0.15);
  padding: 5px 16px; border-radius: 20px; margin-bottom: 16px;
}
.page-hero h1 { font-size: clamp(32px,4vw,52px); font-weight: 900; margin-bottom: 14px; }
.page-hero p { font-size: 17px; opacity: 0.9; max-width: 600px; margin: 0 auto; }

/* Category nav */
.cat-nav { background: white; border-bottom: 1px solid var(--gray-light); position: sticky; top: 0; z-index: 50; }
.cat-nav-inner { display: flex; gap: 8px; padding: 14px 24px; overflow-x: auto; }
.cat-link {
  font-size: 13px; font-weight: 700; color: var(--dark); white-space: nowrap;
  padding: 8px 16px; border-radius: 20px; transition: all var(--transition);
}
.cat-link:hover { background: var(--off-white); color: var(--red); }

.cat-section { scroll-margin-top: 70px; }
.cat-header { margin-bottom: 32px; }

.projects-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }

.project-card { display: flex; flex-direction: column; text-decoration: none; }
.project-img { height: 180px; overflow: hidden; }
.project-img img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s; }
.project-card:hover .project-img img { transform: scale(1.06); }

.project-body { padding: 22px; }
.project-body h3 { font-size: 16px; color: var(--dark); margin-bottom: 8px; line-height: 1.4; }
.project-body p { font-size: 13px; color: var(--text-light); line-height: 1.7; margin-bottom: 14px; }
.project-link { font-size: 13px; font-weight: 700; color: var(--red); }

/* CTA */
.cta-section { background: var(--dark); padding: 64px 0; margin-top: 24px; }
.cta-inner { text-align: center; color: white; }
.cta-inner h2 { font-size: clamp(24px,3vw,34px); font-weight: 800; margin-bottom: 10px; }
.cta-inner p { opacity: 0.8; margin-bottom: 24px; }

@media (max-width: 900px) {
  .projects-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 600px) {
  .projects-grid { grid-template-columns: 1fr; }
}
</style>
