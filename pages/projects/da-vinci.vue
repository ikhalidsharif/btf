<template>
  <div class="project-page">

    <!-- Hero -->
    <div class="page-hero">
      <div class="container">
        <span class="hero-eyebrow">{{ locale === 'ar' ? 'الاقتصاد الإبداعي' : 'Creative Economy' }}</span>
        <h1>{{ locale === 'ar' ? 'برنامج دافنشي التدريبي' : 'DaVinci Training Program' }}</h1>
        <p>{{ locale === 'ar'
          ? 'برنامج ريادي بمملكة البحرين لتأهيل خريجي الفنون والتصميم لسوق العمل'
          : 'A pioneering program preparing arts and design graduates for the job market in the Kingdom of Bahrain' }}</p>
      </div>
    </div>

    <!-- Intro -->
    <div class="container section">
      <div class="intro-grid">
        <div class="intro-text fade-up">
          <h2 class="section-title">{{ locale === 'ar' ? 'ما هو البرنامج؟' : 'What is the Program?' }}</h2>
          <p>{{ locale === 'ar'
            ? 'برنامج دافنشي التدريبي هو برنامج ريادي في مملكة البحرين بالمجال الإبداعي، يستهدف خريجي بكالوريوس الفنون والتصميم العاطلين عن العمل بهدف تعزيز مهاراتهم الفنية بما يلبي احتياجات سوق العمل. يستهدف البرنامج كذلك أصحاب المشاريع الفنية التجارية الساعين للتطوير وفرص العمل المتنامية.'
            : 'The DaVinci Training Program is a pioneering program in the creative field, targeting unemployed graduates of Bachelor of Arts and Design programs to reinforce their skills to meet labor market needs. It also targets business owners looking to grow their businesses and employment opportunities.' }}</p>
          <p>{{ locale === 'ar'
            ? 'يوفّر البرنامج بيئة تدريبية متميزة داخل مركز صفية علي كانو للفنون والحرف اليدوية، بمختبرات وأستوديوهات حديثة وفق المواصفات العالمية، ويقوم بالتدريب نخبة من الأكاديميين والفنانين المحترفين ورواد الأعمال تحت إدارة مؤسسة بحرين ترست. ويدعم صندوق العمل "تمكين" التكلفة الكاملة للتدريب.'
            : 'The program provides a distinguished training environment inside the Safeya Ali Kanoo Hub for Arts and Handicrafts, with modern labs and studios per international standards. A group of academic experts, professional artists, and entrepreneurs lead the training under the management of Bahrain Trust Foundation. Tamkeen fully supports the cost of training.' }}</p>
          <div class="intro-ctas">
            <NuxtLink :to="localePath('/donate')" class="btn btn-primary">
              ❤️ {{ locale === 'ar' ? 'ادعم البرنامج' : 'Support the Program' }}
            </NuxtLink>
            <a href="https://youtu.be/hqV0hFXKcZQ" target="_blank" rel="noopener" class="btn btn-outline">
              ▶ {{ locale === 'ar' ? 'فيديو البرنامج' : 'Program Video' }}
            </a>
          </div>
        </div>
        <div class="intro-image fade-up">
          <img src="/images/projects/education-davinci.jpg" :alt="locale === 'ar' ? 'برنامج دافنشي التدريبي' : 'DaVinci Training Program'" />
        </div>
      </div>
    </div>

    <!-- Quick facts -->
    <div class="stats-bar">
      <div class="container stats-inner">
        <div class="stat">
          <strong>20</strong>
          <span>{{ locale === 'ar' ? 'ورشة تدريبية إلزامية' : 'Mandatory training workshops' }}</span>
        </div>
        <div class="stat">
          <strong>4</strong>
          <span>{{ locale === 'ar' ? 'أشهر مدة البرنامج' : 'Months — program duration' }}</span>
        </div>
        <div class="stat">
          <strong>100%</strong>
          <span>{{ locale === 'ar' ? 'دعم من صندوق تمكين' : 'Funded by Tamkeen' }}</span>
        </div>
      </div>
    </div>

    <!-- Admission requirements -->
    <div class="container section">
      <h2 class="section-title center">{{ locale === 'ar' ? 'شروط القبول' : 'Admission Requirements' }}</h2>
      <p class="section-subtitle center">{{ locale === 'ar'
        ? 'لخريجي برامج الفنون والتصميم'
        : 'For graduates of arts and design programs' }}</p>
      <div class="requirements-list">
        <div v-for="(r, i) in requirements" :key="i" class="requirement-item fade-up">
          <span class="req-num">{{ i + 1 }}</span>
          <p>{{ locale === 'ar' ? r.ar : r.en }}</p>
        </div>
      </div>
    </div>

    <!-- Program modules -->
    <section class="modules-section">
      <div class="container">
        <h2 class="section-title center">{{ locale === 'ar' ? 'وحدات البرنامج' : 'Program Modules' }}</h2>
        <div class="modules-grid">
          <div v-for="(m, i) in modules" :key="i" class="module-card card fade-up">
            <span class="module-num">{{ i + 1 }}</span>
            <h3>{{ locale === 'ar' ? m.titleAr : m.titleEn }}</h3>
            <ul>
              <li v-for="(t, j) in (locale === 'ar' ? m.topicsAr : m.topicsEn)" :key="j">{{ t }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-section">
      <div class="container cta-inner">
        <h2>{{ locale === 'ar' ? 'موهبة تلتقي بفرصة حقيقية' : 'Talent Meets Real Opportunity' }}</h2>
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
  title: locale.value === 'ar' ? 'برنامج دافنشي التدريبي | مؤسسة البحرين ترست' : 'DaVinci Training Program | Bahrain Trust Foundation',
})

const requirements = [
  { ar: 'أن يكون المتقدم بحريني الجنسية.', en: 'Applicants must be Bahraini.' },
  { ar: 'أن يكون حاصلاً على درجة البكالوريوس في الفنون الجميلة أو التصميم الجرافيكي أو كليهما.', en: "Must have a Bachelor's degree in fine arts, graphic design, or both." },
  { ar: 'أن يكون لديه المستوى المبتدئ على الأقل في ورش وحدة التصميم الجرافيكي التخصصية.', en: 'Must have at least the beginner level in specialized Graphic Design workshops.' },
  { ar: 'أن يكون حديث التخرج أو مسجلاً لدى وزارة العمل كباحث عن عمل.', en: 'Must be a recent graduate or registered as a job seeker with the Ministry of Labor.' },
  { ar: 'أن يجتاز المقابلة الشخصية وتقييم البورتفوليو الخاص بأعماله الفنية.', en: "Must pass a personal interview and a portfolio evaluation of their artwork." },
]

const modules = [
  {
    titleAr: 'إدارة وتنظيم وتنسيق المعارض واللقاءات الفنية', titleEn: 'Managing & Curating Art Exhibitions and Meetings',
    topicsAr: [
      'المبادئ الأساسية لتنظيم أنواع المعارض الفنية الفعلية',
      'أساسيات تصميم وتنسيق المعارض الافتراضية والواقع الافتراضي بالأعمال الفنية',
      'أساسيات إعداد وتقديم الورش وتنظيم الندوات مع الفنانين',
    ],
    topicsEn: [
      'Basic principles for organizing actual art exhibitions',
      'Basics of designing virtual art galleries and virtual reality in artwork',
      'Basics of preparing workshops and organizing seminars with artists',
    ],
  },
  {
    titleAr: 'التصميم الجرافيكي', titleEn: 'Graphic Design',
    topicsAr: [
      'أساسيات تصميم المجوهرات بالرسم الحر والرقمي',
      'أساسيات تصميم الأزياء',
      'الرسم التوضيحي الرقمي (إليستريتور، بروكرييت) — متوسط ومتقدم',
      'التصميم ثلاثي الأبعاد ببرنامج بلندر — متوسط ومتقدم',
      'موشن جرافيكس (أفتر إفكتس، بريمير) — متوسط ومتقدم',
      'فن الرسم الرقمي التوضيحي لقصص الأطفال — متوسط ومتقدم',
      'التصميم التحريري للنشر — متوسط ومتقدم',
      'تصميم التغليف',
      'تصميم العلامة التجارية والهوية البصرية',
    ],
    topicsEn: [
      'Fundamentals of freehand and digital jewelry design',
      'Basics of fashion design',
      'Digital Illustration (Illustrator, Procreate) — Intermediate & Advanced',
      '3D design using Blender — Intermediate & Advanced',
      'Motion graphics (After Effects, Premiere) — Intermediate & Advanced',
      "Digital Illustration for Children's Stories — Intermediate & Advanced",
      'Editorial Design for Publication — Intermediate & Advanced',
      'Packaging design',
      'Brand design and visual identity',
    ],
  },
  {
    titleAr: 'تسويق المنتجات الفنية', titleEn: 'Artwork Marketing',
    topicsAr: [
      'أساسيات تطوير المنتجات الفنية وتسويقها',
      'التصوير الاحترافي للمنتجات الفنية',
      'التسويق الرقمي للترويج الإبداعي',
    ],
    topicsEn: [
      'Fundamentals of developing and marketing art products',
      'Professional photography of art products',
      'Digital marketing for creative promotion',
    ],
  },
  {
    titleAr: 'مهارات متنوعة في الفنون الجميلة وطرق تدريس التربية الفنية', titleEn: 'Fine Arts Skills & Teaching Methods',
    topicsAr: [
      'أساسيات طرق تدريس التربية الفنية',
      'أساسيات الإدارة الصفية',
      'أساسيات فن النحت: نموذج بالطين، قالب، وصب (جبس أو فايبر جلاس)',
      'أساسيات الخزف: تصميم وتنفيذ دروع وهدايا',
      'أساسيات الطباعة بتقنيات مختلفة',
    ],
    topicsEn: [
      'Fundamentals of methods in teaching arts',
      'Fundamentals of classroom management',
      'Sculpture basics: clay modeling, molding, and casting (gypsum or fiberglass)',
      'Ceramics basics: design and implementation of shields and gifts',
      'Basics and concept of printing with different techniques',
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

.stats-bar { background: var(--dark); }
.stats-inner { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; padding: 36px 0; }
.stat { text-align: center; color: white; }
.stat strong { display: block; font-size: 34px; font-weight: 900; color: var(--red-light); }
.stat span { font-size: 13px; opacity: 0.8; }

.requirements-list { max-width: 700px; margin: 16px auto 0; display: flex; flex-direction: column; gap: 14px; }
.requirement-item { display: flex; align-items: flex-start; gap: 16px; padding: 18px 22px; background: white; border-radius: var(--radius); box-shadow: 0 2px 10px rgba(0,0,0,0.05); }
.req-num {
  flex-shrink: 0; width: 28px; height: 28px; border-radius: 50%; background: var(--red);
  color: white; font-weight: 800; font-size: 13px; display: flex; align-items: center; justify-content: center;
}
.requirement-item p { font-size: 14px; color: var(--dark); line-height: 1.6; }

.modules-section { background: var(--off-white); padding: 80px 0; }
.modules-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; margin-top: 16px; }
.module-card { padding: 28px; position: relative; }
.module-num {
  display: inline-flex; width: 32px; height: 32px; border-radius: 50%; background: var(--red);
  color: white; font-weight: 800; font-size: 14px; align-items: center; justify-content: center; margin-bottom: 12px;
}
.module-card h3 { font-size: 16px; color: var(--dark); margin-bottom: 14px; line-height: 1.4; }
.module-card ul { list-style: none; padding: 0; margin: 0; }
.module-card li {
  font-size: 13px; color: var(--text-light); padding-inline-start: 18px; position: relative;
  margin-bottom: 8px; line-height: 1.6;
}
.module-card li::before { content: '•'; color: var(--red); position: absolute; inset-inline-start: 0; }

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
  .intro-grid { grid-template-columns: 1fr; }
  .intro-image { order: -1; }
  .stats-inner { grid-template-columns: 1fr; gap: 20px; }
  .modules-grid { grid-template-columns: 1fr; }
}
</style>
