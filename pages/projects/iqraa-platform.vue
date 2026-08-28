<template>
  <div class="project-page">

    <!-- Hero -->
    <div class="page-hero">
      <div class="container">
        <span class="hero-eyebrow">{{ locale === 'ar' ? 'التعليم المجتمعي' : 'Community Education' }}</span>
        <h1>{{ locale === 'ar' ? 'منصة إقراء' : 'Iqraa Platform' }}</h1>
        <p class="hero-subtitle">{{ locale === 'ar' ? 'نقرئ القرآن بإتقان وفهم' : "Reciting the Qur'an with Accuracy and Understanding" }}</p>
      </div>
    </div>

    <!-- Intro -->
    <div class="container section">
      <div class="intro-text fade-up">
        <p>{{ locale === 'ar'
          ? 'برنامج إقراء هو أحد البرامج التابعة لوزارة العدل والشؤون الإسلامية والأوقاف، ويُعنى بتعليم القرآن الكريم من خلال مراكز وحلقات منتشرة في مختلف مناطق مملكة البحرين.'
          : "The Iqraa Programme is one of the programmes under the Ministry of Justice, Islamic Affairs and Waqf, dedicated to Qur'an education through centers and learning circles across the Kingdom of Bahrain." }}</p>
        <p>{{ locale === 'ar'
          ? 'وانطلاقاً من أهمية تطوير منظومة تعليم القرآن الكريم ومواكبة التحول الرقمي، تعمل وزارة العدل والشؤون الإسلامية والأوقاف، بالتعاون مع مؤسسة بحرين ترست وشركة شفرة، على تحويل برنامج إقراء إلى منصة رقمية ذكية توظف التقنيات الحديثة والذكاء الاصطناعي لدعم تعليم القرآن الكريم، وتعزيز تجربة الطالب والمعلم.'
          : "As part of the ongoing development of Qur'an education and digital transformation, the Ministry of Justice, Islamic Affairs and Waqf, in collaboration with Bahrain Trust Foundation and Shaffra, is transforming the Iqraa Programme into an intelligent digital platform that harnesses modern technologies and artificial intelligence to support Qur'an education and enhance the learning experience for both students and teachers." }}</p>
        <div class="intro-ctas">
          <NuxtLink :to="localePath('/donate')" class="btn btn-primary">
            ❤️ {{ locale === 'ar' ? 'ادعم منصة إقراء' : 'Support Iqraa Platform' }}
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- From Programme to Platform -->
    <section class="two-col-section">
      <div class="container">
        <div class="two-col-grid">
          <div class="scope-card card fade-up">
            <span class="scope-badge">{{ locale === 'ar' ? 'من البرنامج إلى المنصة' : 'From Programme to Platform' }}</span>
            <p class="scope-text">{{ locale === 'ar'
              ? 'يمثل التحول الرقمي لبرنامج إقراء خطوة نوعية نحو بناء منظومة تعليمية رقمية مستدامة للقرآن الكريم، تتيح للطالب مواصلة التعلم والممارسة داخل الحلقة وخارجها، وتوفر للمعلم أدوات مساندة للمتابعة والتقييم.'
              : "The digital transformation of the Iqraa Programme represents a significant step towards building a sustainable digital learning ecosystem for Qur'an education. The platform enables students to continue learning and practicing both inside and outside learning circles, while providing teachers with supportive tools for monitoring and assessment." }}</p>
          </div>
          <div class="scope-card card fade-up">
            <span class="scope-badge scope-badge-alt">{{ locale === 'ar' ? 'تعمل منصة إقراء على دعم' : 'Iqraa Supports' }}</span>
            <ul>
              <li v-for="(item, i) in supports" :key="i">{{ locale === 'ar' ? item.ar : item.en }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- AI Section -->
    <div class="container section">
      <div class="intro-text fade-up">
        <h2 class="section-title center">{{ locale === 'ar' ? 'الذكاء الاصطناعي في خدمة القرآن الكريم' : "Artificial Intelligence in the Service of the Qur'an" }}</h2>
        <p>{{ locale === 'ar'
          ? 'توظف المنصة تقنيات الذكاء الاصطناعي لتكون مساعداً دائماً للطالب والمعلم؛ حيث تستمع إلى تلاوة الطالب، وتساعد على اكتشاف الأخطاء، وتدعم عملية الحفظ والمراجعة، وتوفر متابعة مستمرة للتقدم.'
          : "The platform harnesses artificial intelligence to serve as a continuous learning assistant for both students and teachers. It listens to students' recitations, helps identify errors, supports memorization and revision, and enables continuous progress monitoring." }}</p>
        <p>{{ locale === 'ar'
          ? 'ويستند تطوير النموذج الذكي إلى بيانات صوتية ونصية موثوقة، تشمل مصحف البحرين، وتسجيلات لقراء ومشايخ بحرينيين معتمدين، وتسجيلات لقراء من العالم الإسلامي، وعشرات الآلاف من الملفات الصوتية لاختبارات التلاوة، مع إشراف علمي وشرعي مستمر.'
          : "The development of the specialized AI model is based on trusted textual and audio resources, including the Bahrain Mushaf, recordings by accredited Bahraini reciters and scholars, recordings by prominent reciters from the Islamic world, and tens of thousands of audio files from recitation assessments, under continuous scientific and Sharia supervision." }}</p>
      </div>
    </div>

    <!-- From Bahrain to the World -->
    <section class="dark-section">
      <div class="container">
        <h2 class="section-title center light">{{ locale === 'ar' ? 'من البحرين إلى العالم' : 'From Bahrain to the World' }}</h2>
        <p class="dark-text">{{ locale === 'ar'
          ? 'تنطلق منصة إقراء من مملكة البحرين برؤية تتجاوز الحدود المحلية، لتقديم نموذج بحريني رائد في توظيف التقنية والذكاء الاصطناعي لخدمة القرآن الكريم، وإتاحة أثر المشروع للمجتمعات في المنطقة والعالم الإسلامي.'
          : "Iqraa is rooted in the Kingdom of Bahrain, with a vision that extends beyond national borders to present a pioneering Bahraini model for using technology and artificial intelligence in the service of the Qur'an and to extend the project's impact to communities across the region and the wider Islamic world." }}</p>
        <p class="dark-text">{{ locale === 'ar'
          ? 'كما تسهم المنصة في التعريف بمصحف البحرين، والقراء والمشايخ البحرينيين، والقراءات القرآنية، ومهارات الأداء الصوتي.'
          : 'The platform also introduces users to the Bahrain Mushaf, Bahraini reciters and scholars, Qur\'anic readings, and vocal performance skills.' }}</p>
      </div>
    </section>

    <!-- Partners -->
    <div class="container section">
      <div class="intro-text fade-up">
        <h2 class="section-title center">{{ locale === 'ar' ? 'شركاء التحول الرقمي' : 'Partners in Digital Transformation' }}</h2>
        <p>{{ locale === 'ar'
          ? 'يتم تطوير منصة إقراء بالتعاون بين وزارة العدل والشؤون الإسلامية والأوقاف، ومؤسسة بحرين ترست، وشركة شفرة، ضمن رؤية مشتركة لتحويل برنامج إقراء إلى منظومة رقمية متطورة تخدم المتعلمين والمعلمين، وتدعم نشر علوم القرآن الكريم.'
          : 'The Iqraa Platform is being developed through collaboration between the Ministry of Justice, Islamic Affairs and Waqf, Bahrain Trust Foundation, and Shaffra, with a shared vision of transforming the Iqraa Programme into an advanced digital ecosystem that serves learners and teachers and supports the dissemination of Qur\'anic knowledge.' }}</p>
        <p>{{ locale === 'ar'
          ? 'وتتولى وزارة العدل والشؤون الإسلامية والأوقاف الإشراف والإدارة، فيما تتولى شركة شفرة التشغيل التقني، ويسهم دعم وتبرعات مؤسسة بحرين ترست في تمويل المشروع.'
          : 'The Ministry oversees and manages the programme, Shaffra leads the technical operations, and donations through Bahrain Trust Foundation contribute to funding the project.' }}</p>
      </div>
    </div>

    <!-- CTA -->
    <section class="cta-section">
      <div class="container cta-inner">
        <h2>{{ locale === 'ar' ? 'كل حرف بركة، كل تبرع أثر' : 'Every Letter is a Blessing, Every Donation Creates Impact' }}</h2>
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
  title: locale.value === 'ar' ? 'منصة إقراء | مؤسسة البحرين ترست' : 'Iqraa Platform | Bahrain Trust Foundation',
})

const supports = [
  { ar: 'القراءة والتلاوة', en: 'Qur\'an reading and recitation' },
  { ar: 'الحفظ والمراجعة', en: 'Memorization and revision' },
  { ar: 'تصحيح الأخطاء بصورة فورية', en: 'Real-time error detection and correction' },
  { ar: 'متابعة تقدم الطالب', en: 'Student progress tracking' },
  { ar: 'التدريب على مهارات الأداء الصوتي', en: 'Vocal performance training' },
  { ar: 'تعليم القراءات المختلفة', en: 'Learning different Qur\'anic readings' },
  { ar: 'توفير محتوى معرفي مرتبط بمصحف إقراء', en: 'Knowledge-based content related to the Iqraa Mushaf' },
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
.page-hero h1 { font-size: clamp(32px,4vw,52px); font-weight: 900; margin-bottom: 10px; }
.hero-subtitle { font-size: 18px; opacity: 0.9; font-weight: 600; }

.intro-text { max-width: 760px; margin: 0 auto; text-align: center; }
.intro-text p { color: var(--text-light); font-size: 16px; line-height: 1.9; margin-bottom: 20px; }
.intro-ctas { margin-top: 20px; }

.two-col-section { background: var(--off-white); padding: 16px 0 80px; }
.two-col-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
.scope-card { padding: 32px; }
.scope-badge {
  display: inline-block; background: var(--red); color: white; font-size: 12px; font-weight: 800;
  letter-spacing: 0.5px; text-transform: uppercase; padding: 5px 16px; border-radius: 20px; margin-bottom: 18px;
}
.scope-badge-alt { background: var(--dark); }
.scope-text { font-size: 14px; color: var(--dark); line-height: 1.8; }
.scope-card ul { list-style: none; padding: 0; margin: 0; }
.scope-card li {
  font-size: 14px; color: var(--dark); padding-inline-start: 20px; position: relative;
  margin-bottom: 14px; line-height: 1.7;
}
.scope-card li::before { content: '•'; color: var(--red); position: absolute; inset-inline-start: 0; font-weight: 900; }

.dark-section { background: var(--dark); padding: 64px 0; }
.section-title.light { color: white; }
.dark-text { color: rgba(255,255,255,0.85); font-size: 16px; line-height: 1.9; max-width: 760px; margin: 0 auto 16px; text-align: center; }

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
  .two-col-grid { grid-template-columns: 1fr; }
}
</style>
