<template>
  <div class="home">
    <!-- Hero with YouTube Video Background -->
    <section class="hero">
      <!-- YouTube iframe background -->
      <div class="video-bg">
        <iframe
          src="https://www.youtube.com/embed/EGrbZpgYoj8?autoplay=1&mute=1&loop=1&playlist=EGrbZpgYoj8&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
          title="Bahrain Trust Foundation"
        />
      </div>
      <!-- Dark overlay -->
      <div class="video-overlay" />

      <!-- Content -->
      <div class="container hero-content">
        <div class="hero-text fade-up">
          <h1>{{ locale === "ar" ? "حكاية مؤسسة بحرين ترست" : "Bahrain Trust Foundation's Story" }}</h1>
          <p>{{ locale === "ar" ? "نعمل من أجل تمكين المجتمع البحريني والأجيال القادمة" : "Empowering communities and shaping the next generation" }}</p>
          <div class="hero-ctas">
            <NuxtLink :to="localePath('/donate')" class="btn btn-donate-hero">
              ❤️ {{ locale === "ar" ? "تبرع الآن" : "Donate Now" }}
            </NuxtLink>
            <NuxtLink :to="localePath('/about')" class="btn btn-outline-hero">
              {{ locale === "ar" ? "اعرف أكثر" : "Learn More About BTF" }} →
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Stats bar -->
      <div class="stats-bar">
        <div class="container stats-inner">
          <div class="stat">
            <strong>20,508</strong>
            <span>{{ locale === "ar" ? "طالب مستفيد من مدارسنا" : "Beneficiary students from our micro schools" }}</span>
          </div>
          <div class="stat">
            <strong>2,353</strong>
            <span>{{ locale === "ar" ? "حقيبة مدرسية وزعت" : "School bags distributed to students" }}</span>
          </div>
          <div class="stat">
            <strong>1,996</strong>
            <span>{{ locale === "ar" ? "صندوق رمضان وزع" : "Ramadan boxes distributed inside & outside Bahrain" }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects -->
    <section class="section">
      <div class="container">
        <h2 class="section-title">{{ t('home.projects.title') }}</h2>
        <p class="section-subtitle">{{ t('home.projects.subtitle') }}</p>

        <div class="projects-grid">
          <NuxtLink
            v-for="proj in projects"
            :key="proj.slug"
            :to="localePath(proj.slug)"
            class="project-card card"
          >
            <div class="project-icon">{{ proj.icon }}</div>
            <h3>{{ t(proj.label) }}</h3>
            <p>{{ proj.desc[locale] }}</p>
            <span class="arrow">→</span>
          </NuxtLink>
        </div>

        <div style="text-align:center;margin-top:40px">
          <NuxtLink :to="localePath('/projects')" class="btn btn-primary">
            {{ t('home.projects.viewAll') }}
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- News -->
    <section class="section news-section">
      <div class="container">
        <div class="section-header">
          <div>
            <h2 class="section-title">{{ t('home.news.title') }}</h2>
            <p class="section-subtitle">{{ t('home.news.subtitle') }}</p>
          </div>
          <NuxtLink :to="localePath('/news')" class="btn btn-outline">
            {{ t('home.news.viewAll') }}
          </NuxtLink>
        </div>

        <div class="news-grid">
          <NuxtLink
            v-for="post in latestNews"
            :key="post._path"
            :to="localePath(post._path)"
            class="news-card card"
          >
            <div class="news-date">{{ formatDate(post.date) }}</div>
            <h3>{{ post.title }}</h3>
            <span class="news-issue">{{ t('news.issue') }} {{ post.issue }}</span>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Donate CTA -->
    <section class="donate-cta">
      <div class="container donate-cta-inner">
        <div class="donate-cta-text">
          <h2>{{ t('home.donate.title') }}</h2>
          <p>{{ t('home.donate.subtitle') }}</p>
        </div>
        <NuxtLink :to="localePath('/donate')" class="btn btn-gold btn-lg">
          ❤️ {{ t('home.donate.cta') }}
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
const { t, locale } = useI18n()
const localePath = useLocalePath()

useHead({
  title: locale.value === 'ar' ? 'مؤسسة البحرين للتنمية والتطوير' : 'Bahrain Trust Foundation',
})

const stats = [
  { value: '50+', label: 'home.stats.projects' },
  { value: '15+', label: 'home.stats.years' },
  { value: '5000+', label: 'home.stats.beneficiaries' },
  { value: '200+', label: 'home.stats.volunteers' },
]

const projects = [
  {
    icon: '📚',
    label: 'home.projects.education',
    slug: '/projects/education',
    desc: {
      ar: 'مدارس مصغرة، كفالة الطلاب، فضاءات تعليمية',
      en: 'Micro-schools, student sponsorships, learning spaces'
    }
  },
  {
    icon: '🏥',
    label: 'home.projects.health',
    slug: '/projects/health',
    desc: {
      ar: 'دعم مدارس المستشفيات وطلاب الأطفال المرضى',
      en: 'Hospital schools and support for sick children'
    }
  },
  {
    icon: '🤝',
    label: 'home.projects.community',
    slug: '/projects/community',
    desc: {
      ar: 'مساعدات عينية، أنشطة، رحلات الخير',
      en: 'In-kind support, activities, goodwill trips'
    }
  },
  {
    icon: '💡',
    label: 'home.projects.microbusiness',
    slug: '/projects/microbusiness',
    desc: {
      ar: 'دعم المشاريع الصغيرة وريادة الأعمال',
      en: 'Supporting small businesses and entrepreneurship'
    }
  },
]

// Fetch latest 3 news posts
const newsPath = locale.value === 'ar' ? '/ar/news' : '/en/news'
const { data: latestNews } = await useAsyncData('home-news', () =>
  queryContent(newsPath)
    .sort({ date: -1 })
    .limit(3)
    .find()
)

function formatDate(dateStr) {
  if (!dateStr) return ''
  const d = new Date(dateStr)
  return d.toLocaleDateString(locale.value === 'ar' ? 'ar-BH' : 'en-BH', {
    year: 'numeric', month: 'long'
  })
}
</script>

<style scoped>
/* Hero */
.hero {
  position: relative;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: #000;
}

/* YouTube video background */
.video-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
}
.video-bg iframe {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 177.78vh;
  height: 56.25vw;
  min-width: 100%;
  min-height: 100%;
}

/* Dark overlay */
.video-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  z-index: 1;
}

.hero-content {
  flex: 1;
  display: flex;
  align-items: center;
  padding-top: 80px;
  padding-bottom: 60px;
  position: relative;
  z-index: 2;
}

.hero-text { max-width: 680px; }

.hero-badge {
  display: inline-block;
  background: rgba(255,255,255,0.15);
  color: rgba(255,255,255,0.9);
  padding: 6px 16px;
  border-radius: 50px;
  font-size: 14px;
  margin-bottom: 24px;
  backdrop-filter: blur(8px);
}

.hero-text h1 {
  font-size: clamp(36px, 5vw, 64px);
  font-weight: 900;
  color: white;
  line-height: 1.15;
  margin-bottom: 20px;
}

.hero-text p {
  font-size: clamp(16px, 2vw, 20px);
  color: rgba(255,255,255,0.85);
  margin-bottom: 36px;
  line-height: 1.8;
}

.hero-ctas { display: flex; gap: 16px; flex-wrap: wrap; }

.btn-donate-hero {
  background: #E31C26;
  color: white;
  padding: 14px 32px;
  border-radius: 3px;
  font-weight: 700;
  font-size: 15px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: all 0.2s;
  border: none;
  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
.btn-donate-hero:hover { background: #b5151e; transform: translateY(-2px); }

.btn-outline-hero {
  background: transparent;
  color: white;
  padding: 14px 32px;
  border-radius: 3px;
  font-weight: 700;
  font-size: 15px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border: 2px solid rgba(255,255,255,0.6);
  transition: all 0.2s;
  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
.btn-outline-hero:hover { background: rgba(255,255,255,0.15); border-color: white; }

/* Stats bar */
.stats-bar {
  background: rgba(0,0,0,0.5);
  backdrop-filter: blur(8px);
  position: relative;
  z-index: 2;
}
.stats-inner {
  display: flex;
  justify-content: space-around;
  padding: 24px 0;
}
.stat {
  text-align: center;
  color: white;
}
.stat strong {
  display: block;
  font-size: 32px;
  font-weight: 900;
  color: var(--gold-light);
}
.stat span { font-size: 14px; opacity: 0.8; }

/* Projects grid */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.project-card {
  padding: 32px 24px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}
.project-icon {
  font-size: 40px;
  margin-bottom: 8px;
}
.project-card h3 {
  font-size: 18px;
  font-weight: 700;
  color: var(--green-dark);
}
.project-card p {
  font-size: 14px;
  color: var(--text-light);
  line-height: 1.6;
}
.arrow {
  margin-top: auto;
  font-size: 20px;
  color: var(--green);
  opacity: 0;
  transition: opacity 0.2s;
}
.project-card:hover .arrow { opacity: 1; }

/* News */
.news-section { background: var(--gray-light); }
.section-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 40px;
}
.section-header .section-subtitle { margin-bottom: 0; }

.news-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.news-card {
  padding: 28px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.news-date {
  font-size: 13px;
  color: var(--gold);
  font-weight: 600;
}
.news-card h3 {
  font-size: 17px;
  font-weight: 700;
  color: var(--green-dark);
  line-height: 1.5;
}
.news-issue {
  font-size: 13px;
  color: var(--text-light);
  margin-top: auto;
}

/* Donate CTA */
.donate-cta {
  background: linear-gradient(135deg, var(--gold) 0%, #b5821e 100%);
  padding: 64px 0;
}
.donate-cta-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 32px;
  flex-wrap: wrap;
}
.donate-cta-text h2 {
  font-size: clamp(24px, 3vw, 36px);
  font-weight: 800;
  color: white;
  margin-bottom: 8px;
}
.donate-cta-text p {
  font-size: 17px;
  color: rgba(255,255,255,0.85);
}
.btn-lg { padding: 16px 36px; font-size: 17px; }

/* Mobile */
@media (max-width: 768px) {
  .projects-grid { grid-template-columns: 1fr 1fr; }
  .news-grid { grid-template-columns: 1fr; }
  .stats-inner { flex-wrap: wrap; gap: 24px; }
  .stat { flex: 1 1 40%; }
  .section-header { flex-direction: column; align-items: flex-start; gap: 16px; }
  .donate-cta-inner { flex-direction: column; text-align: center; }
}

@media (max-width: 480px) {
  .projects-grid { grid-template-columns: 1fr; }
}
</style>
