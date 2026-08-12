<template>
  <div class="project-page">

    <!-- Hero -->
    <div class="page-hero">
      <div class="container">
        <span class="hero-eyebrow">{{ locale === 'ar' ? 'خدمة المجتمع' : 'Community Service' }}</span>
        <h1>{{ locale === 'ar' ? 'المساعدات العينية' : 'In-Kind Support' }}</h1>
        <p>{{ locale === 'ar'
          ? 'نصل للأسر المتعففة محلياً وعالمياً على مدار العام'
          : 'Reaching families in need, locally and globally, all year round' }}</p>
      </div>
    </div>

    <!-- Intro -->
    <div class="container section">
      <div class="intro-grid">
        <div class="intro-text fade-up">
          <p>{{ locale === 'ar'
            ? 'في كل عام تقوم مؤسسة بحرين ترست بمساعدة الأسر المتعففة محلياً وعالمياً، حيث يعتبر أحد أهم أوجه الدعم اللي تتيح الفرصة للأفراد والمؤسسات والشركات الراغبين بالمساهمة داخل وخارج البحرين لصالح المجتمعات المستحقة للدعم.'
            : "Every year, Bahrain Trust Foundation assists families in need locally and globally, providing opportunities for individuals, organizations, and companies wishing to contribute inside and outside Bahrain for the benefit of deserving communities." }}</p>
          <div class="intro-ctas">
            <NuxtLink :to="localePath('/donate')" class="btn btn-primary">
              ❤️ {{ locale === 'ar' ? 'تبرع الآن' : 'Donate Now' }}
            </NuxtLink>
          </div>
        </div>
        <div class="intro-image fade-up">
          <img src="/images/projects/community-inkind.jpg" :alt="locale === 'ar' ? 'المساعدات العينية' : 'In-Kind Support'" />
        </div>
      </div>
    </div>

    <!-- Local & Global -->
    <section class="two-col-section">
      <div class="container">
        <div class="two-col-grid">
          <div class="scope-card card fade-up">
            <span class="scope-badge">{{ locale === 'ar' ? 'محلياً' : 'Local' }}</span>
            <ul>
              <li v-for="(item, i) in localItems" :key="i">{{ locale === 'ar' ? item.ar : item.en }}</li>
            </ul>
          </div>
          <div class="scope-card card fade-up">
            <span class="scope-badge scope-badge-alt">{{ locale === 'ar' ? 'عالمياً' : 'Global' }}</span>
            <p class="scope-countries">{{ locale === 'ar' ? 'مصر، الهند، المغرب، مالي، النيجر' : 'Egypt, India, Morocco, Mali, Niger' }}</p>
            <ul>
              <li v-for="(item, i) in globalItems" :key="i">
                {{ locale === 'ar' ? item.ar : item.en }}
                <a v-if="item.video" :href="item.video" target="_blank" rel="noopener" class="item-video-link">
                  ▶ {{ locale === 'ar' ? 'فيديو' : 'Video' }}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-section">
      <div class="container cta-inner">
        <h2>{{ locale === 'ar' ? 'عطاء بسيط، أثر كبير' : 'A Simple Gift, a Big Impact' }}</h2>
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
  title: locale.value === 'ar' ? 'المساعدات العينية | مؤسسة البحرين ترست' : 'In-Kind Support | Bahrain Trust Foundation',
})

const localItems = [
  { ar: 'توزيع قسائم رمضانية للأسر المتعففة', en: 'Ramadan vouchers distribution' },
  { ar: 'دعم الطلبة المتعففين للعام الدراسي الجديد', en: 'Supporting students for the new academic year' },
  { ar: 'كسوة العيد لطلبة مدارس المستشفى', en: 'Eid aid for hospital school students' },
  { ar: 'إفطار صائم', en: 'Iftar Saem' },
]

const globalItems = [
  { ar: 'توزيع السلال الرمضانية للأسر المتعففة', en: 'Ramadan boxes distribution' },
  { ar: 'توزيع معونة الشتاء للأسر المتعففة', en: 'Winter aid distribution' },
  { ar: 'حفر بئر وإمداده للقرية', en: 'Drilling a well and supplying it to the village', video: 'https://youtu.be/e4PCsU3BJ70' },
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

.two-col-section { background: var(--off-white); padding: 16px 0 80px; }
.two-col-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
.scope-card { padding: 32px; }
.scope-badge {
  display: inline-block; background: var(--red); color: white; font-size: 12px; font-weight: 800;
  letter-spacing: 0.5px; text-transform: uppercase; padding: 5px 16px; border-radius: 20px; margin-bottom: 18px;
}
.scope-badge-alt { background: var(--dark); }
.scope-countries { font-size: 13px; color: var(--text-light); font-style: italic; margin-bottom: 16px; }
.scope-card ul { list-style: none; padding: 0; margin: 0; }
.scope-card li {
  font-size: 14px; color: var(--dark); padding-inline-start: 20px; position: relative;
  margin-bottom: 12px; line-height: 1.7;
}
.scope-card li::before { content: '•'; color: var(--red); position: absolute; inset-inline-start: 0; font-weight: 900; }
.item-video-link { display: inline-block; margin-inline-start: 8px; font-size: 12px; font-weight: 700; color: var(--red); }

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
  .two-col-grid { grid-template-columns: 1fr; }
}
</style>
