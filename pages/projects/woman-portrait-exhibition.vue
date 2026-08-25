<template>
  <div class="project-page">

    <!-- Hero -->
    <div class="page-hero">
      <div class="container">
        <span class="hero-eyebrow">{{ locale === 'ar' ? 'الإبداع والابتكار' : 'Creativity & Innovation' }}</span>
        <h1>{{ locale === 'ar' ? 'معرض "بورتريه المرأة البحرينية"' : '"Bahraini Women\'s Portrait" Exhibition' }}</h1>
        <p>{{ locale === 'ar'
          ? 'احتفاءً بيوم المرأة البحرينية، الأول من ديسمبر من كل عام'
          : "Celebrating Bahraini Women's Day, observed annually on December 1st" }}</p>
      </div>
    </div>

    <!-- Intro -->
    <div class="container section">
      <div class="intro-grid">
        <div class="intro-text fade-up">
          <p>{{ locale === 'ar'
            ? 'تنظم مؤسسة بحرين ترست معرض «بورتريه المرأة البحرينية» احتفاءً بيوم المرأة البحرينية الذي يصادف الأول من شهر ديسمبر من كل عام، وتقديراً لدور المرأة البحرينية وإسهاماتها في المجتمع. ويقدم المعرض مجموعة من الأعمال الفنية التي تجسّد ملامح وتجارب المرأة البحرينية، وتسلّط الضوء على حضورها المتنوع في مختلف المجالات، من خلال رؤية فنية تعكس الاعتزاز بهويتها وإنجازاتها ومسيرتها.'
            : "Bahrain Trust Foundation organizes the \"Bahraini Women's Portrait\" Exhibition in celebration of Bahraini Women's Day, observed annually on December 1st, and in recognition of the valuable role and contributions of Bahraini women to society. The exhibition features a collection of artworks portraying the features and experiences of Bahraini women, highlighting their diverse presence across different fields through an artistic perspective that reflects pride in their identity, achievements, and journeys." }}</p>
          <p>{{ locale === 'ar'
            ? 'ويهدف المعرض إلى إبراز مكانة المرأة البحرينية ودورها في صناعة الأثر، وفتح مساحة فنية للاحتفاء بقصصها وتجاربها وإسهاماتها، بما يعكس تقدير المجتمع لعطائها ودورها في مسيرة التنمية.'
            : "The exhibition aims to highlight the status and contributions of Bahraini women in creating meaningful impact, while providing an artistic space to celebrate their stories, experiences, and achievements, reflecting the community's appreciation for their contributions to Bahrain's development." }}</p>
          <div class="intro-ctas">
            <NuxtLink :to="localePath('/donate')" class="btn btn-primary">
              ❤️ {{ locale === 'ar' ? 'ادعم المعرض' : 'Support the Exhibition' }}
            </NuxtLink>
          </div>
        </div>
        <div class="intro-image fade-up">
          <img src="/images/projects/woman-portrait-exhibition/photo-1.jpg" :alt="locale === 'ar' ? 'معرض بورتريه المرأة البحرينية' : 'Bahraini Women\'s Portrait Exhibition'" />
        </div>
      </div>
    </div>

    <!-- Gallery -->
    <section class="gallery-section">
      <div class="container">
        <h2 class="section-title center">{{ locale === 'ar' ? 'من المعرض' : 'From the Exhibition' }}</h2>
        <div class="photo-grid">
          <div v-for="img in photos" :key="img" class="photo-item">
            <img :src="img" :alt="locale === 'ar' ? 'معرض بورتريه المرأة البحرينية' : 'Bahraini Women\'s Portrait Exhibition'" loading="lazy" />
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-section">
      <div class="container cta-inner">
        <h2>{{ locale === 'ar' ? 'إجلالاً لكل امرأة بحرينية' : 'In Honor of Every Bahraini Woman' }}</h2>
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
  title: locale.value === 'ar' ? 'معرض بورتريه المرأة البحرينية | مؤسسة البحرين ترست' : "Bahraini Women's Portrait Exhibition | Bahrain Trust Foundation",
})

const photos = Array.from({ length: 2 }, (_, i) => `/images/projects/woman-portrait-exhibition/photo-${i + 1}.jpg`)
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
.page-hero h1 { font-size: clamp(26px,3.6vw,42px); font-weight: 900; margin-bottom: 14px; }
.page-hero p { font-size: 16px; opacity: 0.9; max-width: 640px; margin: 0 auto; }

.intro-grid { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 48px; align-items: center; }
.intro-text p { color: var(--text-light); margin-bottom: 16px; font-size: 16px; line-height: 1.9; }
.intro-ctas { display: flex; gap: 14px; margin-top: 24px; flex-wrap: wrap; }
.intro-image img { border-radius: var(--radius); box-shadow: var(--shadow-lg); width: 100%; aspect-ratio: 4/3; object-fit: cover; }

.gallery-section { background: var(--off-white); padding: 80px 0; }
.photo-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; margin-top: 16px; max-width: 700px; margin-inline: auto; }
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
}
@media (max-width: 480px) {
  .photo-grid { grid-template-columns: 1fr; }
}
</style>
