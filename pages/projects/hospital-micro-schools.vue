<template>
  <div class="project-page">

    <!-- Hero -->
    <div class="page-hero">
      <div class="container">
        <span class="hero-eyebrow">{{ locale === 'ar' ? 'التعليم' : 'Education' }}</span>
        <h1>{{ locale === 'ar' ? 'مدارس المستشفى' : 'Hospital Schools' }}</h1>
        <p>{{ locale === 'ar'
          ? 'برنامج "علّمني" — أول مدرسة داخل مستشفيات مملكة البحرين'
          : '"3alimny" Program — the first school inside hospitals in the Kingdom of Bahrain' }}</p>
      </div>
    </div>

    <!-- Intro -->
    <div class="container section">
      <div class="intro-grid">
        <div class="intro-text fade-up">
          <p>{{ locale === 'ar'
            ? 'نظراً لوجود عدد من الأطفال المرضى الذين يضطرهم المرض للبقاء لفترات طويلة للعلاج في المستشفيات بدون الالتحاق بالمدارس، قامت مؤسسة بحرين ترست بتقديم برنامج "علّمني" كنموذج مدرسة المستشفى المطبّق حول العالم.'
            : 'In an effort to ensure the provision of education to children who are unable to attend school for long periods of treatment due to medical needs, Bahrain Trust Foundation introduced the school programme "3alimny" as a hospital school model applied around the world.' }}</p>
          <p>{{ locale === 'ar'
            ? 'يقدّم برنامج "علّمني" عدة خدمات تعليمية للطلبة المرضى لدعم تعليمهم وتطوير مهاراتهم الدراسية، بجانب اكتشاف وصقل مواهبهم العلمية والفنية سواء داخل المستشفى أو خارجه.'
            : 'The programme provides several educational services to hospitalized students to support their education and develop their academic skills, in addition to exploring and refining their academic and creative competencies — both inside the hospital and outside it.' }}</p>
          <p>{{ locale === 'ar'
            ? 'تُعتبر مدرسة المستشفى أول مدرسة داخل المستشفيات في مملكة البحرين، وهي عبارة عن صف واحد متعدد المراحل الدراسية يضم أطفالاً بأعمار وقدرات وخلفيات مختلفة، بحيث يكون الطالب محور التعلم، معتمدةً على طرق تعليم حديثة مثل التعلم القائم على المشروعات وفق منحى STEAM الذي يشجّع التعلم الذاتي والتعاوني.'
            : 'The hospital school is a single, multistage classroom which includes children of different ages, abilities and backgrounds, where the teaching emphasis is on the student as an individual. Modern teaching methods such as project-based learning and the STEAM approach are adopted, promoting self-learning and collaborative learning through modern technology.' }}</p>
          <div class="intro-ctas">
            <NuxtLink :to="localePath('/donate')" class="btn btn-primary">
              ❤️ {{ locale === 'ar' ? 'ادعم البرنامج' : 'Support the Program' }}
            </NuxtLink>
            <a href="https://youtu.be/bnWw492BCr8" target="_blank" rel="noopener" class="btn btn-outline">
              ▶ {{ locale === 'ar' ? 'حكاية مدارس المستشفى' : 'Hospital Schools Story' }}
            </a>
            <a href="https://www.instagram.com/bahraintrust_hospitals_schools" target="_blank" rel="noopener" class="btn btn-outline">
              📷 {{ locale === 'ar' ? 'إنستغرام' : 'Instagram' }}
            </a>
          </div>
        </div>
        <div class="intro-image fade-up">
          <img src="/images/projects/education-hospital.jpg" :alt="locale === 'ar' ? 'مدارس المستشفى' : 'Hospital Schools'" />
        </div>
      </div>
    </div>

    <!-- Branches -->
    <section class="branches-section">
      <div class="container">
        <h2 class="section-title center">{{ locale === 'ar' ? 'مدارسنا داخل المستشفيات' : 'Our Schools Inside Hospitals' }}</h2>
        <p class="section-subtitle center">{{ locale === 'ar'
          ? 'أربع مدارس مصغّرة تخدم الأطفال المرضى في مراحل علاجهم المختلفة'
          : 'Four micro-schools serving hospitalized children throughout their treatment' }}</p>

        <div class="branches-grid">
          <div v-for="b in branches" :key="b.nameEn" class="branch-card card fade-up">
            <h3>{{ locale === 'ar' ? b.nameAr : b.nameEn }}</h3>
            <span class="branch-since">{{ locale === 'ar' ? b.sinceAr : b.sinceEn }}</span>
            <ul class="branch-wards">
              <li v-for="w in (locale === 'ar' ? b.wardsAr : b.wardsEn)" :key="w">{{ w }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-section">
      <div class="container cta-inner">
        <h2>{{ locale === 'ar' ? 'كل طفل يستحق فرصة للتعلّم' : 'Every Child Deserves a Chance to Learn' }}</h2>
        <p>{{ locale === 'ar' ? 'حتى داخل المستشفى، حتى في أصعب الظروف' : 'Even inside a hospital, even in the hardest of circumstances' }}</p>
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
  title: locale.value === 'ar' ? 'مدارس المستشفى | مؤسسة البحرين ترست' : 'Hospital Schools | Bahrain Trust Foundation',
})

const branches = [
  {
    nameAr: 'مدرسة دينا كانو المصغرة',
    nameEn: 'Deena Kanoo Micro-School',
    sinceAr: 'منذ 2017 — بدعم من الوجيه السيّد محمد إبراهيم المؤيّد',
    sinceEn: 'Since 2017 — Supported by Mr. Mohamed Ibrahim Al Moayyed',
    wardsAr: ['جناح 31: الأمراض المزمنة — مجمع السلمانية الطبي', 'جناح الأطفال — مركز البحرين للأورام'],
    wardsEn: ['Ward 31: Chronic Diseases — Salmaniya Medical Complex', "Children's Ward — Bahrain Oncology Center"],
  },
  {
    nameAr: 'مدرسة مستشفى الملك حمد الجامعي المصغرة',
    nameEn: 'King Hamad University Hospital Micro-School',
    sinceAr: 'منذ 2022 — بدعم من وجهاء مملكة البحرين',
    sinceEn: "Since 2022 — Supported by the Kingdom's dignitaries",
    wardsAr: ['جناح الأطفال'],
    wardsEn: ['Pediatric Ward'],
  },
  {
    nameAr: 'مدرسة المستشفى العسكري المصغرة',
    nameEn: 'Military Hospital Micro-School',
    sinceAr: 'منذ 2024 — بدعم من وجهاء مملكة البحرين',
    sinceEn: "Since 2024 — Supported by the Kingdom's dignitaries",
    wardsAr: ['عيادة الأطفال', 'جناح الأطفال 31'],
    wardsEn: ['Pediatric Clinic', 'Pediatric Ward 31'],
  },
  {
    nameAr: 'مدرسة مستشفى الطب النفسي المصغرة',
    nameEn: 'Psychiatric Hospital Micro-School',
    sinceAr: 'منذ 2025 — بدعم من وجهاء مملكة البحرين',
    sinceEn: "Since 2025 — Supported by the Kingdom's dignitaries",
    wardsAr: ['عيادة الأطفال والناشئة'],
    wardsEn: ["Children and Youth's Ward"],
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

.branches-section { background: var(--off-white); padding: 80px 0; }
.branches-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; margin-top: 16px; }
.branch-card { padding: 28px; }
.branch-card h3 { font-size: 17px; color: var(--dark); margin-bottom: 8px; line-height: 1.4; }
.branch-since { display: block; font-size: 12px; font-weight: 700; color: var(--red); margin-bottom: 14px; }
.branch-wards { list-style: none; padding: 0; margin: 0; }
.branch-wards li {
  font-size: 14px; color: var(--text-light); padding-inline-start: 18px; position: relative;
  margin-bottom: 6px; line-height: 1.6;
}
.branch-wards li::before {
  content: '•'; color: var(--red); position: absolute; inset-inline-start: 0;
}

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
  .branches-grid { grid-template-columns: 1fr; }
}
</style>
