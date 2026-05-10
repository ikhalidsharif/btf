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


    <!-- Mission & Vision -->
    <section class="mission-section">
      <div class="container">
        <div class="mission-vision">
          <div class="mv-block">
            <h2>{{ locale === 'ar' ? 'رسالتنا' : 'OUR MISSION' }}</h2>
            <p>{{ locale === 'ar'
              ? 'إيجاد حلول ذكية وعملية لحياة أفضل للأفراد في المجتمع'
              : 'To create smart and practical solutions for a better life for people in the community' }}</p>
          </div>
          <div class="mv-divider" />
          <div class="mv-block">
            <h2>{{ locale === 'ar' ? 'رؤيتنا' : 'OUR VISION' }}</h2>
            <p>{{ locale === 'ar'
              ? 'أن يتمكن أفراد المجتمع من تغيير حياتهم نحو الأفضل من خلال خدمات التنمية المستدامة'
              : 'People in the community are able to change their lives for the better through sustainable development services (such as Education, Community Service, and Creative Economy)' }}</p>
          </div>
        </div>

        <div class="pillars">
          <div class="pillar">
            <div class="pillar-icon">🤝</div>
            <p>{{ locale === 'ar'
              ? 'تحسين جودة الحياة من خلال تعزيز مبادرات المجتمع والشراكات المستدامة'
              : 'IMPROVING THE QUALITY OF LIFE BY ENHANCING COMMUNITY INITIATIVES AND SUSTAINABLE PARTNERSHIP' }}</p>
          </div>
          <div class="pillar">
            <div class="pillar-icon">💡</div>
            <p>{{ locale === 'ar'
              ? 'تمكين الأفراد من الاستفادة من الاقتصاد الإبداعي من خلال الحلول المبتكرة'
              : 'EMPOWER INDIVIDUALS TO BENEFIT FROM THE CREATIVE ECONOMY THROUGH INNOVATIVE SOLUTIONS AND VOCATIONAL TRAINING' }}</p>
          </div>
          <div class="pillar">
            <div class="pillar-icon">🎓</div>
            <p>{{ locale === 'ar'
              ? 'تعزيز التعليم الشامل والمستدام محلياً وإقليمياً من خلال برامج مبتكرة'
              : 'ENHANCE INCLUSIVE AND SUSTAINABLE EDUCATION LOCALLY AND REGIONALLY THROUGH INNOVATIVE PROGRAMS' }}</p>
          </div>
        </div>

        <div style="text-align:center;margin-top:32px">
          <NuxtLink :to="localePath('/about')" class="btn-learn-more">
            {{ locale === 'ar' ? 'اعرف أكثر عن المؤسسة' : 'LEARN MORE ABOUT BTF' }}
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Projects 3-Column Slider -->
    <section class="projects-section">
      <div class="projects-columns">

        <!-- EDUCATION -->
        <div class="proj-column">
          <div class="slide-track" :style="{ transform: `translateX(${-eduIndex * 100}%)` }">
            <div v-for="slide in education" :key="slide.slug" class="slide">
              <img :src="slide.image" :alt="slide.title" />
              <div class="slide-overlay">
                <div class="slide-content">
                  <h3>{{ locale === "ar" ? "التعليم" : "EDUCATION" }}</h3>
                  <p>{{ locale === "ar" ? slide.titleAr : slide.title }}</p>
                  <NuxtLink :to="localePath(slide.slug)" class="slide-btn">
                    {{ locale === "ar" ? "اضغط هنا" : "Click Here" }}
                  </NuxtLink>
                </div>
              </div>
              <div class="slide-dots">
                <span v-for="(s, i) in education" :key="i"
                  :class="{ active: i === eduIndex }"
                  @click="eduIndex = i" />
              </div>
            </div>
          </div>
          <button class="slide-prev" @click="eduIndex = (eduIndex - 1 + education.length) % education.length">&#8249;</button>
          <button class="slide-next" @click="eduIndex = (eduIndex + 1) % education.length">&#8250;</button>
        </div>

        <!-- COMMUNITY SERVICE -->
        <div class="proj-column">
          <div class="slide-track" :style="{ transform: `translateX(${-comIndex * 100}%)` }">
            <div v-for="slide in community" :key="slide.slug" class="slide">
              <img :src="slide.image" :alt="slide.title" />
              <div class="slide-overlay">
                <div class="slide-content">
                  <h3>{{ locale === "ar" ? "خدمة المجتمع" : "COMMUNITY SERVICE" }}</h3>
                  <p>{{ locale === "ar" ? slide.titleAr : slide.title }}</p>
                  <NuxtLink :to="localePath(slide.slug)" class="slide-btn">
                    {{ locale === "ar" ? "اضغط هنا" : "Click Here" }}
                  </NuxtLink>
                </div>
              </div>
              <div class="slide-dots">
                <span v-for="(s, i) in community" :key="i"
                  :class="{ active: i === comIndex }"
                  @click="comIndex = i" />
              </div>
            </div>
          </div>
          <button class="slide-prev" @click="comIndex = (comIndex - 1 + community.length) % community.length">&#8249;</button>
          <button class="slide-next" @click="comIndex = (comIndex + 1) % community.length">&#8250;</button>
        </div>

        <!-- CREATIVE ECONOMY -->
        <div class="proj-column">
          <div class="slide-track" :style="{ transform: `translateX(${-creIndex * 100}%)` }">
            <div v-for="slide in creative" :key="slide.slug" class="slide">
              <img :src="slide.image" :alt="slide.title" />
              <div class="slide-overlay">
                <div class="slide-content">
                  <h3>{{ locale === "ar" ? "الاقتصاد الإبداعي" : "CREATIVE ECONOMY" }}</h3>
                  <p>{{ locale === "ar" ? slide.titleAr : slide.title }}</p>
                  <NuxtLink :to="localePath(slide.slug)" class="slide-btn">
                    {{ locale === "ar" ? "اضغط هنا" : "Click Here" }}
                  </NuxtLink>
                </div>
              </div>
              <div class="slide-dots">
                <span v-for="(s, i) in creative" :key="i"
                  :class="{ active: i === creIndex }"
                  @click="creIndex = i" />
              </div>
            </div>
          </div>
          <button class="slide-prev" @click="creIndex = (creIndex - 1 + creative.length) % creative.length">&#8249;</button>
          <button class="slide-next" @click="creIndex = (creIndex + 1) % creative.length">&#8250;</button>
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
    labelEn: 'EDUCATION',
    labelAr: 'التعليم',
    slug: '/projects/education',
    image: '/images/projects/education.jpg',
    desc: { ar: 'مشاريع التعليم', en: 'Education Projects' }
  },
  {
    labelEn: 'MICRO-SCHOOLS',
    labelAr: 'المدارس المصغرة',
    slug: '/projects/micro-schools',
    image: '/images/projects/micro-schools.jpg',
    desc: { ar: 'المدارس المصغرة', en: 'Micro-Schools' }
  },
  {
    labelEn: 'COMMUNITY SERVICE',
    labelAr: 'خدمة المجتمع',
    slug: '/projects/community',
    image: '/images/projects/community.jpg',
    desc: { ar: 'خدمة المجتمع', en: 'Community Service' }
  },
  {
    labelEn: 'STORY WRITING',
    labelAr: 'مسابقة تأليف القصص',
    slug: '/projects/story-writing',
    image: '/images/projects/story.jpg',
    desc: { ar: 'مسابقة تأليف القصص', en: 'Story Writing Competition' }
  },
]

const eduIndex = ref(0)
const comIndex = ref(0)
const creIndex = ref(0)

const education = [
  { title: 'SPACE FOR ALL', titleAr: 'فضاء للجميع', slug: '/projects/space-for-all', image: '/images/projects/education-space.jpg' },
  { title: 'DA VINCI TRAINING PROGRAM', titleAr: 'برنامج دافنشي التدريبي', slug: '/projects/da-vinci', image: '/images/projects/education-davinci.jpg' },
  { title: 'STORY WRITING COMPETITION', titleAr: 'مسابقة تأليف القصص', slug: '/projects/story-writing', image: '/images/projects/education-story.jpg' },
  { title: 'MICRO-SCHOOLS', titleAr: 'المدارس المصغرة', slug: '/projects/micro-schools', image: '/images/projects/education-micro.jpg' },
  { title: 'HOSPITAL MICRO SCHOOLS', titleAr: 'مدارس المستشفيات', slug: '/projects/hospital-micro-schools', image: '/images/projects/education-hospital.jpg' },
]

const community = [
  { title: 'GOOD WILL TRIPS', titleAr: 'رحلات الخير', slug: '/projects/good-will-trips', image: '/images/projects/community-goodwill.jpg' },
  { title: 'VOLUNTEER TEAMS', titleAr: 'فرق التطوع', slug: '/projects/volunteer-teams', image: '/images/projects/community-volunteer.jpg' },
  { title: 'IN-KIND SUPPORT', titleAr: 'الدعم العيني', slug: '/projects/in-kind-support', image: '/images/projects/community-inkind.jpg' },
]

const creative = [
  { title: 'SAFEYA ALI KANOO HUB', titleAr: 'مركز صفية علي كانو', slug: '/projects/safeya-kanoo-hub', image: '/images/projects/community.jpg' },
  { title: 'GIFT SHOP', titleAr: 'المتجر', slug: '/gift-shop', image: '/images/projects/creative-giftshop.jpg' },
]

// Auto-advance sliders
onMounted(() => {
  setInterval(() => { eduIndex.value = (eduIndex.value + 1) % education.length }, 5000)
  setInterval(() => { comIndex.value = (comIndex.value + 1) % community.length }, 5500)
  setInterval(() => { creIndex.value = (creIndex.value + 1) % creative.length }, 6000)
})

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
  gap: 4px;
}

.project-card {
  display: block;
  text-decoration: none;
  overflow: hidden;
}

.project-img {
  position: relative;
  aspect-ratio: 4/3;
  overflow: hidden;
}

.project-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.project-card:hover .project-img img {
  transform: scale(1.05);
}

.project-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(transparent 40%, rgba(0,0,0,0.75));
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 16px;
  transition: background 0.3s;
}

.project-card:hover .project-overlay {
  background: linear-gradient(transparent 20%, rgba(227,28,38,0.85));
}

.project-label {
  color: white;
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.project-arrow {
  color: white;
  font-size: 18px;
  opacity: 0;
  transition: opacity 0.2s;
  margin-top: 4px;
}

.project-card:hover .project-arrow { opacity: 1; }

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

/* Mission & Vision */
.mission-section {
  background: white;
  padding: 64px 0;
  text-align: center;
}

.mission-vision {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 48px;
  margin-bottom: 48px;
  flex-wrap: wrap;
}

.mv-block { max-width: 420px; }

.mv-block h2 {
  font-size: 20px;
  font-weight: 800;
  color: #3c3950;
  letter-spacing: 1px;
  margin-bottom: 14px;
  text-transform: uppercase;
}

.mv-block p {
  font-size: 15px;
  color: #5f727f;
  line-height: 1.8;
}

.mv-divider {
  width: 1px;
  background: #dfe5e8;
  min-height: 100px;
  align-self: stretch;
}

.pillars {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin-top: 32px;
  max-width: 900px;
  margin-inline: auto;
}

.pillar {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
}

.pillar-icon {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  background: #f4f6f7;
  border: 2px solid #dfe5e8;
}

.pillar:nth-child(1) .pillar-icon { background: #e8f5e9; border-color: #c8e6c9; }
.pillar:nth-child(2) .pillar-icon { background: #fff3e0; border-color: #ffe0b2; }
.pillar:nth-child(3) .pillar-icon { background: #e3f2fd; border-color: #bbdefb; }

.pillar p {
  font-size: 12px;
  font-weight: 700;
  color: #E31C26;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  line-height: 1.6;
}

.btn-learn-more {
  display: inline-block;
  background: #E31C26;
  color: white;
  padding: 12px 28px;
  border-radius: 3px;
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  text-decoration: none;
  transition: background 0.2s;
}
.btn-learn-more:hover { background: #b5151e; }

@media (max-width: 768px) {
  .pillars { grid-template-columns: 1fr; }
  .mv-divider { display: none; }
  .mission-vision { flex-direction: column; align-items: center; }
}


/* ── Projects 3-Column Slider ── */
.projects-section {
  background: #f0f3f2;
  padding: 0;
}

.projects-columns {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4px;
}

.proj-column {
  position: relative;
  overflow: hidden;
  aspect-ratio: 3/4;
}

.slide-track {
  display: flex;
  height: 100%;
  transition: transform 0.5s ease;
}

.slide {
  min-width: 100%;
  height: 100%;
  position: relative;
  flex-shrink: 0;
}

.slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.slide-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(transparent 30%, rgba(0,0,0,0.7));
  display: flex;
  align-items: flex-end;
}

.slide-content {
  padding: 24px;
  color: white;
  animation: slideUp 0.5s ease;
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.slide-content h3 {
  font-size: 22px;
  font-weight: 900;
  letter-spacing: 1px;
  margin-bottom: 6px;
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);
}

.slide-content p {
  font-size: 13px;
  letter-spacing: 0.5px;
  margin-bottom: 14px;
  opacity: 0.9;
  text-transform: uppercase;
}

.slide-btn {
  display: inline-block;
  border: 1.5px solid white;
  color: white;
  padding: 8px 20px;
  font-size: 12px;
  font-weight: 700;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: all 0.2s;
}
.slide-btn:hover {
  background: white;
  color: #3c3950;
}

.slide-dots {
  position: absolute;
  bottom: 12px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 6px;
}
.slide-dots span {
  width: 8px; height: 8px;
  border-radius: 50%;
  background: rgba(255,255,255,0.5);
  cursor: pointer;
  transition: background 0.2s;
}
.slide-dots span.active { background: white; }

.slide-prev, .slide-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0,0,0,0.3);
  border: none;
  color: white;
  font-size: 28px;
  width: 36px;
  height: 48px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
  z-index: 10;
}
.slide-prev:hover, .slide-next:hover { background: rgba(0,0,0,0.6); }
.slide-prev { left: 0; }
.slide-next { right: 0; }

@media (max-width: 768px) {
  .projects-columns { grid-template-columns: 1fr; }
  .proj-column { aspect-ratio: 4/3; }
}

</style>
