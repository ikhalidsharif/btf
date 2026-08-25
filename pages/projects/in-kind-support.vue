<template>
  <div class="project-page">

    <!-- Hero -->
    <div class="page-hero">
      <div class="container">
        <span class="hero-eyebrow">{{ locale === 'ar' ? 'خدمة المجتمع' : 'Community Service' }}</span>
        <h1>{{ locale === 'ar' ? 'مبادراتنا مع المجتمع' : 'Our Community Initiatives' }}</h1>
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
          <img src="/images/projects/community-initiatives/ramadan-abroad/photo-1.jpg" :alt="locale === 'ar' ? 'مبادراتنا مع المجتمع' : 'Our Community Initiatives'" />
        </div>
      </div>
    </div>

    <!-- Initiatives Gallery -->
    <section class="initiatives-section">
      <div class="container">
        <h2 class="section-title center">{{ locale === 'ar' ? 'من مبادراتنا' : 'From Our Initiatives' }}</h2>
        <div v-for="group in initiativeGroups" :key="group.nameEn" class="initiative-group">
          <h3 class="initiative-group-title">{{ locale === 'ar' ? group.nameAr : group.nameEn }}</h3>
          <div class="photo-grid">
            <div v-for="img in group.photos" :key="img" class="photo-item">
              <img :src="img" :alt="locale === 'ar' ? group.nameAr : group.nameEn" loading="lazy" />
              <span class="photo-label">{{ locale === 'ar' ? group.nameAr : group.nameEn }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

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
  title: locale.value === 'ar' ? 'مبادراتنا مع المجتمع | مؤسسة البحرين ترست' : 'Our Community Initiatives | Bahrain Trust Foundation',
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

const initiativeGroups = [
  {
    nameAr: 'قسائم مشتريات رمضانية — داخل البحرين', nameEn: 'Ramadan Shopping Vouchers — Inside Bahrain',
    photos: Array.from({ length: 6 }, (_, i) => `/images/projects/community-initiatives/ramadan-bahrain/photo-${i + 1}.jpg`),
  },
  {
    nameAr: 'سلال رمضانية — خارج البحرين', nameEn: 'Ramadan Boxes — Outside Bahrain',
    photos: Array.from({ length: 5 }, (_, i) => `/images/projects/community-initiatives/ramadan-abroad/photo-${i + 1}.jpg`),
  },
  {
    nameAr: 'إفطار صائم', nameEn: 'Iftar Saem',
    photos: Array.from({ length: 6 }, (_, i) => `/images/projects/community-initiatives/iftar-saem/photo-${i + 1}.jpg`),
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

/* Initiatives gallery */
.initiatives-section { background: white; padding: 80px 0; }
.initiative-group { margin-top: 44px; }
.initiative-group:first-of-type { margin-top: 24px; }
.initiative-group-title {
  font-size: 16px; font-weight: 800; color: var(--dark); margin-bottom: 18px;
  padding-inline-start: 14px; border-inline-start: 4px solid var(--red);
}
.photo-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
.photo-item { position: relative; border-radius: var(--radius); overflow: hidden; aspect-ratio: 4/3; box-shadow: 0 2px 10px rgba(0,0,0,0.06); }
.photo-item img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s; }
.photo-item:hover img { transform: scale(1.06); }
.photo-label {
  position: absolute; bottom: 0; inset-inline: 0; padding: 8px 10px;
  background: linear-gradient(0deg, rgba(0,0,0,0.75), transparent);
  color: white; font-size: 11px; font-weight: 700; line-height: 1.4;
}

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
  .photo-grid { grid-template-columns: repeat(3, 1fr); }
}
@media (max-width: 560px) {
  .photo-grid { grid-template-columns: repeat(2, 1fr); }
}
</style>
