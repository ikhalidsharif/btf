<template>
  <div class="project-page">

    <!-- Hero -->
    <div class="page-hero">
      <div class="container">
        <span class="hero-eyebrow">{{ locale === 'ar' ? 'الإبداع والابتكار' : 'Creativity & Innovation' }}</span>
        <h1>{{ locale === 'ar' ? 'مسابقة محمد بن يوسف البلوشي لتلاوة وحفظ القرآن الكريم' : 'Mohamed bin Yousif Al Balooshi Holy Quran Recitation and Memorization Competition' }}</h1>
        <p>{{ locale === 'ar'
          ? 'مسابقة سنوية خلال شهر رمضان المبارك ضمن مشروع فضاء للجميع'
          : 'An annual competition during the holy month of Ramadan, part of the Space for All project' }}</p>
      </div>
    </div>

    <!-- Intro -->
    <div class="container section">
      <div class="intro-grid">
        <div class="intro-text fade-up">
          <p>{{ locale === 'ar'
            ? 'تنظم مؤسسة بحرين ترست سنوياً خلال شهر رمضان المبارك مسابقة محمد بن يوسف البلوشي لتلاوة وحفظ القرآن الكريم، والتي تقام ضمن مشروع "فضاء للجميع"، بهدف تشجيع مختلف الفئات العمرية على حفظ القرآن وترسيخ القيم الدينية.'
            : 'Bahrain Trust Foundation organizes the Mohamed bin Yousif Al Balooshi Holy Quran Recitation and Memorization Competition annually during the holy month of Ramadan. The competition is held as part of the "Space for All" project, with the aim of encouraging people of different age groups to memorize the Holy Quran and strengthen religious values.' }}</p>
          <p>{{ locale === 'ar'
            ? 'وتُنفذ المسابقة في عدة مواقع، تشمل مدارس المستشفى وفضاء للجميع، حيث يقدّم البرنامج مراحل تحكيم متخصصة تتضمن الحفظ ودقة التلاوة وأحكام التجويد، مع تعزيز التفاعل بين المشاركين ودعم التواصل مع أولياء الأمور.'
            : 'The competition is held at several locations, including Hospital Schools and Space for All, where participants undergo specialized judging stages that assess memorization, recitation accuracy, and Tajweed rules. The competition also promotes engagement among participants and strengthens communication with parents.' }}</p>
          <p>{{ locale === 'ar'
            ? 'كما تضم المسابقة تكريم الفائزين بجوائز نقدية، والتي تسهم في تعزيز التنافس الإيجابي وترسيخ أثر المبادرة التربوي والروحي في المجتمع.'
            : "The competition concludes with the recognition of winners through cash prizes, contributing to positive competition and reinforcing the initiative's educational and spiritual impact on the community." }}</p>
          <div class="intro-ctas">
            <NuxtLink :to="localePath('/donate')" class="btn btn-primary">
              ❤️ {{ locale === 'ar' ? 'ادعم المسابقة' : 'Support the Competition' }}
            </NuxtLink>
          </div>
        </div>
        <div class="intro-image fade-up">
          <img src="/images/projects/quran-competition/photo-1.jpg" :alt="locale === 'ar' ? 'مسابقة تلاوة وحفظ القرآن الكريم' : 'Quran Recitation Competition'" />
        </div>
      </div>
    </div>

    <!-- Gallery -->
    <section class="gallery-section">
      <div class="container">
        <h2 class="section-title center">{{ locale === 'ar' ? 'من المسابقة' : 'From the Competition' }}</h2>
        <div class="photo-grid">
          <div v-for="img in photos" :key="img" class="photo-item">
            <img :src="img" :alt="locale === 'ar' ? 'مسابقة القرآن' : 'Quran Competition'" loading="lazy" />
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-section">
      <div class="container cta-inner">
        <h2>{{ locale === 'ar' ? 'كل حرف بركة' : 'Every Letter is a Blessing' }}</h2>
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
  title: locale.value === 'ar' ? 'مسابقة محمد بن يوسف البلوشي | مؤسسة البحرين ترست' : 'Mohamed bin Yousif Al Balooshi Quran Competition | Bahrain Trust Foundation',
})

const photos = Array.from({ length: 3 }, (_, i) => `/images/projects/quran-competition/photo-${i + 1}.jpg`)
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
.page-hero h1 { font-size: clamp(22px,3.2vw,38px); font-weight: 900; margin-bottom: 14px; line-height: 1.4; }
.page-hero p { font-size: 16px; opacity: 0.9; max-width: 640px; margin: 0 auto; }

.intro-grid { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 48px; align-items: center; }
.intro-text p { color: var(--text-light); margin-bottom: 16px; font-size: 16px; line-height: 1.9; }
.intro-ctas { display: flex; gap: 14px; margin-top: 24px; flex-wrap: wrap; }
.intro-image img { border-radius: var(--radius); box-shadow: var(--shadow-lg); width: 100%; aspect-ratio: 4/3; object-fit: cover; }

.gallery-section { background: var(--off-white); padding: 80px 0; }
.photo-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; margin-top: 16px; }
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
  .intro-grid { grid-template-columns: 1fr; }
  .intro-image { order: -1; }
  .photo-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 480px) {
  .photo-grid { grid-template-columns: 1fr; }
}
</style>
