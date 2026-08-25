<template>
  <div class="project-page">

    <!-- Hero -->
    <div class="page-hero">
      <div class="container">
        <img src="/images/projects/manarah/logo.png" alt="Manarah Metaverse Educational Platform" class="hero-logo" />
        <span class="hero-eyebrow">{{ locale === 'ar' ? 'التعليم المجتمعي' : 'Community Education' }}</span>
        <h1>{{ locale === 'ar' ? 'منصة منارة ميتافيرس للتعليم' : 'Manarah Metaverse Educational Platform' }}</h1>
        <p>{{ locale === 'ar'
          ? 'تجربة تعلّم تفاعلية عبر الميتافيرس للصفوف من 1 إلى 12'
          : 'An interactive metaverse learning experience for Grades 1 to 12' }}</p>
      </div>
    </div>

    <!-- Intro -->
    <div class="container section">
      <div class="intro-text fade-up">
        <p>{{ locale === 'ar'
          ? 'أطلقت مؤسسة بحرين ترست منصة منارة التعليمية الرقمية، وهي منصة مبتكرة مخصصة للصفوف من 1 إلى 12، تهدف إلى نقل الطلبة إلى عالم تفاعلي يعتمد على تجربة التعلم عبر ميتافيرس، حيث يكتشف الطلاب المعرفة من خلال التجربة، الحوار، والابتكار.'
          : 'Bahrain Trust Foundation has launched the Manarah Metaverse Educational Platform, an innovative platform designed for students from Grades 1 to 12. It aims to immerse students in an interactive learning environment powered by the metaverse, where they explore knowledge through experience, dialogue, and innovation.' }}</p>
        <p>{{ locale === 'ar'
          ? 'وتتيح المنصة للطلاب فرصاً لتطوير مهارات التفكير النقدي، الإبداع، وحل المشكلات، مع تقديم محتوى تعليمي متكامل ومتجدد يدمج بين التعلّم الأكاديمي والتفاعلي. كما توفر المنصة بيئة محفزة لتبادل الأفكار والتفاعل بين الطلبة والمعلمين، بما يدعم تطوير الجيل القادم ليصبح مبدعين، قادة، وصنّاع مستقبل.'
          : 'The platform provides students with opportunities to develop critical thinking, creativity, and problem-solving skills, while offering comprehensive and continuously updated educational content that combines academic and interactive learning. It also provides an engaging environment for the exchange of ideas and interaction between students and teachers, supporting the development of the next generation to become innovators, leaders, and future-makers.' }}</p>
        <p>{{ locale === 'ar'
          ? 'ويأتي إطلاق منصة منارة ضمن جهود المؤسسة لتقديم نماذج تعليمية مبتكرة ومستدامة، تسهم في تمكين الطلاب من التعلم الذاتي وتزويدهم بالمهارات اللازمة لمواكبة تحديات القرن الواحد والعشرين، وتعكس التزام المؤسسة بالارتقاء بالتعليم في البحرين وتوسيع نطاق الوصول إلى الفرص التعليمية النوعية.'
          : "The launch of the Manarah Platform is part of the Foundation's efforts to introduce innovative and sustainable educational models that empower students through self-directed learning and equip them with the skills needed to navigate the challenges of the 21st century. It reflects the Foundation's commitment to advancing education in Bahrain and expanding access to quality educational opportunities." }}</p>
        <div class="intro-ctas">
          <NuxtLink :to="localePath('/donate')" class="btn btn-primary">
            ❤️ {{ locale === 'ar' ? 'ادعم منصة منارة' : 'Support Manarah' }}
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- CTA -->
    <section class="cta-section">
      <div class="container cta-inner">
        <h2>{{ locale === 'ar' ? 'تعليم يواكب المستقبل' : 'Education That Keeps Pace With the Future' }}</h2>
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
  title: locale.value === 'ar' ? 'منصة منارة ميتافيرس للتعليم | مؤسسة البحرين ترست' : 'Manarah Metaverse Educational Platform | Bahrain Trust Foundation',
})
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
.page-hero h1 { font-size: clamp(26px,3.6vw,40px); font-weight: 900; margin-bottom: 10px; }
.page-hero p { font-size: 16px; opacity: 0.9; max-width: 640px; margin: 0 auto; }

.intro-text { max-width: 760px; margin: 0 auto; text-align: center; }
.intro-text p { color: var(--text-light); font-size: 16px; line-height: 1.9; margin-bottom: 20px; }
.intro-ctas { margin-top: 20px; }

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
</style>
