<template>
  <div class="project-page">

    <!-- Hero -->
    <div class="page-hero">
      <div class="container">
        <span class="hero-eyebrow">{{ locale === 'ar' ? 'الإبداع والابتكار' : 'Creativity & Innovation' }}</span>
        <h1>{{ locale === 'ar' ? 'مسابقة تأليف قصص الأطفال والناشئة' : 'Story Writing Competition for Kids & Teens' }}</h1>
        <p>{{ locale === 'ar'
          ? 'بالتعاون مع هيئة البحرين للثقافة والآثار'
          : 'In collaboration with the Bahrain Authority for Culture and Antiquities' }}</p>
      </div>
    </div>

    <!-- Intro -->
    <div class="container section">
      <div class="intro-grid">
        <div class="intro-text fade-up">
          <p>{{ locale === 'ar'
            ? 'مسابقة تأليف القصص للأطفال والناشئة هي مبادرة قامت بها مؤسسة بحرين ترست بالتعاون مع هيئة البحرين للثقافة والآثار، انطلاقاً من إيمان الطرفين بأن التعليم والتدريب مفتاحان أساسيان لتعزيز الإبداع لدى أجيالنا الصاعدة وتشجيعهم على القراءة والسعي في طرق العلم والمعرفة.'
            : 'The Story Writing Competition for Kids & Teens is an initiative by Bahrain Trust Foundation in collaboration with the Bahrain Authority for Culture and Antiquities, stemming from the belief of both parties that education and training are fundamental keys to enhancing creativity among our future generations and encouraging them to read and pursue knowledge.' }}</p>
          <p>{{ locale === 'ar'
            ? 'تُطرح هذه المسابقة كل سنتين منذ عام 2018، وتهدف موضوعاتها لإيجاد قصص تعليمية تُثري مناهج المؤسسة التعليمية والمدارس الحكومية والخاصة داخل وخارج البحرين.'
            : "The competition has been held every two years since 2018, with themes centered on creating educational stories that enrich the curricula of the Foundation's educational projects and government and private schools inside and outside Bahrain." }}</p>
          <div class="intro-ctas">
            <NuxtLink :to="localePath('/stories')" class="btn btn-primary">
              📖 {{ locale === 'ar' ? 'اقرأ قصصنا' : 'Read Our Stories' }}
            </NuxtLink>
            <NuxtLink :to="localePath('/donate')" class="btn btn-outline">
              ❤️ {{ locale === 'ar' ? 'ادعم المسابقة' : 'Support the Competition' }}
            </NuxtLink>
          </div>
        </div>
        <div class="intro-image fade-up">
          <img src="/images/projects/story-competition/photo-1.jpg" :alt="locale === 'ar' ? 'مسابقة تأليف القصص' : 'Story Writing Competition'" />
        </div>
      </div>
    </div>

    <!-- Themes -->
    <section class="themes-section">
      <div class="container">
        <h2 class="section-title center">{{ locale === 'ar' ? 'موضوعات المسابقة' : 'Competition Themes' }}</h2>
        <p class="section-subtitle center">{{ locale === 'ar'
          ? 'ترتكز موضوعات كل دورة على قضايا مشوقة تخدم أهداف التعليم والمجتمع'
          : "Each edition's themes center on engaging issues that serve education and community goals" }}</p>
        <div class="themes-grid">
          <div v-for="(t, i) in themes" :key="i" class="theme-item fade-up">
            <span class="theme-num">{{ i + 1 }}</span>
            <p>{{ locale === 'ar' ? t.ar : t.en }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats -->
    <div class="stats-bar">
      <div class="container stats-inner">
        <div class="stat">
          <strong>4</strong>
          <span>{{ locale === 'ar' ? 'نسخ من المسابقة تم تنفيذها' : 'Editions held so far' }}</span>
        </div>
        <div class="stat">
          <strong>21</strong>
          <span>{{ locale === 'ar' ? 'قصة فائزة' : 'Winning stories' }}</span>
        </div>
        <div class="stat">
          <strong>+200</strong>
          <span>{{ locale === 'ar' ? 'مشارك في المسابقة' : 'Participants in the competition' }}</span>
        </div>
      </div>
    </div>

    <!-- Gallery -->
    <section class="gallery-section">
      <div class="container">
        <h2 class="section-title center">{{ locale === 'ar' ? 'من ورش المسابقة وحفلات التدشين' : 'From Workshops & Launch Ceremonies' }}</h2>
        <div class="photo-grid">
          <div v-for="img in photos" :key="img" class="photo-item">
            <img :src="img" :alt="locale === 'ar' ? 'مسابقة تأليف القصص' : 'Story Writing Competition'" loading="lazy" />
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-section">
      <div class="container cta-inner">
        <h2>{{ locale === 'ar' ? 'كل طفل عنده قصة يستحق يرويها' : 'Every Child Has a Story Worth Telling' }}</h2>
        <div class="cta-buttons">
          <NuxtLink :to="localePath('/stories')" class="btn btn-primary">📖 {{ locale === 'ar' ? 'اقرأ قصصنا' : 'Read Our Stories' }}</NuxtLink>
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
  title: locale.value === 'ar' ? 'مسابقة تأليف قصص الأطفال والناشئة | مؤسسة البحرين ترست' : 'Story Writing Competition | Bahrain Trust Foundation',
})

const themes = [
  { ar: 'تعزيز الهوية البحرينية والانتماء الوطني', en: 'Enhancing Bahraini identity and national belonging' },
  { ar: 'استكشاف العالم المحيط بنا', en: 'Exploring the world around us' },
  { ar: 'استكشاف العلوم المرحة (STEAM)', en: 'Exploring fun STEAM' },
  { ar: 'مفهوم المدن المستدامة والخضراء', en: 'Raising awareness about sustainable and green cities' },
  { ar: 'التشجيع على إعادة التدوير', en: 'Encouraging recycling' },
  { ar: 'التشجيع على ريادة الأعمال', en: 'Encouraging entrepreneurship' },
  { ar: 'التوعية بأهداف التنمية المستدامة', en: 'Raising awareness about sustainable development' },
]

const photos = Array.from({ length: 12 }, (_, i) => `/images/projects/story-competition/photo-${i + 1}.jpg`)
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
.page-hero h1 { font-size: clamp(26px,3.6vw,44px); font-weight: 900; margin-bottom: 14px; }
.page-hero p { font-size: 16px; opacity: 0.9; max-width: 640px; margin: 0 auto; }

.intro-grid { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 48px; align-items: center; }
.intro-text p { color: var(--text-light); margin-bottom: 16px; font-size: 16px; line-height: 1.9; }
.intro-ctas { display: flex; gap: 14px; margin-top: 24px; flex-wrap: wrap; }
.intro-image img { border-radius: var(--radius); box-shadow: var(--shadow-lg); width: 100%; aspect-ratio: 4/3; object-fit: cover; }

.themes-section { background: var(--off-white); padding: 80px 0; }
.themes-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; margin-top: 16px; }
.theme-item { display: flex; align-items: flex-start; gap: 14px; padding: 18px; background: white; border-radius: var(--radius); box-shadow: 0 2px 10px rgba(0,0,0,0.05); }
.theme-num {
  flex-shrink: 0; width: 30px; height: 30px; border-radius: 50%; background: var(--red);
  color: white; font-weight: 800; font-size: 13px; display: flex; align-items: center; justify-content: center;
}
.theme-item p { font-size: 14px; color: var(--dark); line-height: 1.6; }

.stats-bar { background: var(--dark); }
.stats-inner { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; padding: 36px 0; }
.stat { text-align: center; color: white; }
.stat strong { display: block; font-size: 30px; font-weight: 900; color: var(--red-light); }
.stat span { font-size: 13px; opacity: 0.8; }

.gallery-section { background: white; padding: 80px 0; }
.photo-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-top: 16px; }
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
  .themes-grid { grid-template-columns: 1fr; }
  .stats-inner { grid-template-columns: 1fr; gap: 20px; }
  .photo-grid { grid-template-columns: repeat(2, 1fr); }
}
</style>
