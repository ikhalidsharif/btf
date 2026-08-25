<template>
  <div class="project-page">

    <!-- Hero -->
    <div class="page-hero">
      <div class="container">
        <span class="hero-eyebrow">{{ locale === 'ar' ? 'الإبداع والابتكار' : 'Creativity & Innovation' }}</span>
        <h1>{{ locale === 'ar' ? 'معرض "علّمني" لفن الطفل' : '"3alimny" Children\'s Art Exhibition' }}</h1>
        <p>{{ locale === 'ar'
          ? 'مساحة فنية وإنسانية تُبرز مواهب أطفال مدارس المستشفى وفضاء للجميع'
          : "An artistic and human-centered space showcasing the talents of children from Hospital Schools and Space for All" }}</p>
      </div>
    </div>

    <!-- Intro -->
    <div class="container section">
      <div class="intro-grid">
        <div class="intro-text fade-up">
          <p>{{ locale === 'ar'
            ? 'تنظم مؤسسة بحرين ترست سنوياً معرض "علّمني" لفن الطفل تزامناً مع يوم الطفل العالمي، كمساحة فنية وإنسانية تُبرز مواهب أطفال مدارس المستشفى ومشروع فضاء للجميع، حيث يحوّلون تجاربهم إلى لوحات تنبض بالحياة والأمل.'
            : "Bahrain Trust Foundation organizes the \"3alimny\" Children's Art Exhibition annually in conjunction with World Children's Day. The exhibition serves as an artistic and human-centered space that showcases the talents of children from Hospital Schools and the Space for All project, where they transform their experiences into vibrant artworks filled with life and hope." }}</p>
          <p>{{ locale === 'ar'
            ? 'يقدّم المعرض رحلة بصرية تعبّر عمّا يتعلّمه الأطفال من الصبر والفرح والأمل، ويأتي احتفاءً بقدراتهم وإيماناً بدور الفن في دعم التعليم وصناعة الأثر.'
            : "The exhibition offers a visual journey reflecting what children learn about patience, joy, and hope. It celebrates their abilities and highlights the role of art in supporting education and creating meaningful impact." }}</p>
          <p>{{ locale === 'ar'
            ? 'يهدف المعرض إلى تمكين الأطفال من التعبير عن ذواتهم عبر الفنون، وإبراز مواهبهم ضمن بيئات تعليمية شاملة، من خلال أعمال فنية أُنجزت بدعم الميسّرات والمرشدات والمتطوعين والفنانين.'
            : "The exhibition aims to empower children to express themselves through art and showcase their talents within inclusive educational environments, through artworks created with the support of facilitators, volunteers, and artists." }}</p>
          <div class="intro-ctas">
            <NuxtLink :to="localePath('/donate')" class="btn btn-primary">
              ❤️ {{ locale === 'ar' ? 'ادعم المعرض' : 'Support the Exhibition' }}
            </NuxtLink>
            <NuxtLink :to="localePath('/gift-shop')" class="btn btn-outline">
              {{ locale === 'ar' ? 'تسوّق منتجات علّمني' : 'Shop 3alimny Products' }}
            </NuxtLink>
          </div>
        </div>
        <div class="intro-image fade-up">
          <img src="/images/projects/3alimny-exhibition/photo-1.jpg" :alt="locale === 'ar' ? 'معرض علّمني' : '3alimny Exhibition'" />
        </div>
      </div>
    </div>

    <!-- Gallery -->
    <section class="gallery-section">
      <div class="container">
        <h2 class="section-title center">{{ locale === 'ar' ? 'من المعرض' : 'From the Exhibition' }}</h2>
        <div class="photo-grid">
          <div v-for="img in photos" :key="img" class="photo-item">
            <img :src="img" :alt="locale === 'ar' ? 'معرض علّمني' : '3alimny Exhibition'" loading="lazy" />
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-section">
      <div class="container cta-inner">
        <h2>{{ locale === 'ar' ? 'كل رسمة تحمل قصة أمل' : 'Every Drawing Carries a Story of Hope' }}</h2>
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
  title: locale.value === 'ar' ? 'معرض "علّمني" لفن الطفل | مؤسسة البحرين ترست' : '"3alimny" Children\'s Art Exhibition | Bahrain Trust Foundation',
})

const photos = Array.from({ length: 3 }, (_, i) => `/images/projects/3alimny-exhibition/photo-${i + 1}.jpg`)
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
.page-hero h1 { font-size: clamp(28px,4vw,44px); font-weight: 900; margin-bottom: 14px; }
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
