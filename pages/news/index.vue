<template>
  <div class="news-page">
    <div class="page-hero">
      <div class="container">
        <h1>{{ locale === 'ar' ? 'الأخبار والنشرات' : 'News & Newsletters' }}</h1>
        <p>{{ locale === 'ar' ? 'آخر إصدارات نشرتنا الإخبارية' : 'Latest editions of our newsletter' }}</p>
      </div>
    </div>

    <div class="container section">
      <div class="news-grid">
        <NuxtLink
          v-for="post in news"
          :key="post._path"
          :to="localePath(post._path)"
          class="news-card"
        >
          <!-- Gradient cover -->
          <div class="news-cover" :style="getCoverStyle(post.issue)">
            <img src="/logo.png" alt="BTF" class="cover-logo" />
            <span class="cover-issue">{{ locale === 'ar' ? 'العدد' : 'Issue' }} {{ post.issue }}</span>
          </div>

          <div class="news-body">
            <div class="news-meta">
              <span class="news-date">{{ formatDate(post.date) }}</span>
              <span class="news-badge">{{ locale === 'ar' ? 'نشرة' : 'Newsletter' }}</span>
            </div>
            <h2>{{ post.title }}</h2>
            <span class="read-more">{{ locale === 'ar' ? '« المزيد' : 'Read More »' }}</span>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const { locale } = useI18n()
const localePath = useLocalePath()

useHead({
  title: locale.value === 'ar' ? 'الأخبار | مؤسسة البحرين' : 'News | Bahrain Trust Foundation',
})

const newsPath = locale.value === 'ar' ? '/ar/news' : '/en/news'
const { data: news } = await useAsyncData('news-list', () =>
  queryContent(newsPath).sort({ date: -1 }).find()
)

function formatDate(dateStr) {
  if (!dateStr) return ''
  return new Date(dateStr).toLocaleDateString(
    locale.value === 'ar' ? 'ar-BH' : 'en-BH',
    { year: 'numeric', month: 'long' }
  )
}

const gradients = [
  'linear-gradient(135deg, #E31C26 0%, #8B0000 100%)',
  'linear-gradient(135deg, #3c3950 0%, #212331 100%)',
  'linear-gradient(135deg, #00bcd4 0%, #006064 100%)',
  'linear-gradient(135deg, #c8972a 0%, #8B6914 100%)',
  'linear-gradient(135deg, #1a237e 0%, #283593 100%)',
  'linear-gradient(135deg, #E31C26 0%, #3c3950 100%)',
]

function getCoverStyle(issue) {
  const num = parseInt(String(issue || '').replace(/[٠-٩]/g, d => String('٠١٢٣٤٥٦٧٨٩'.indexOf(d)))) || 0
  return { background: gradients[num % gradients.length] }
}
</script>

<style scoped>
.page-hero {
  background: linear-gradient(135deg, #E31C26 0%, #8B0000 100%);
  padding: 80px 0 60px;
  color: white;
}
.page-hero h1 {
  font-size: clamp(32px, 4vw, 52px);
  font-weight: 900;
  margin-bottom: 12px;
}
.page-hero p { font-size: 18px; opacity: 0.85; }

.news-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}

.news-card {
  background: white;
  border-radius: 6px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
  transition: transform 0.2s, box-shadow 0.2s;
}
.news-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 28px rgba(0,0,0,0.14);
}

.news-cover {
  height: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
  position: relative;
}

.cover-logo {
  height: 70px;
  width: auto;
  filter: brightness(10);
  opacity: 0.85;
}

.cover-issue {
  color: white;
  font-size: 13px;
  font-weight: 700;
  background: rgba(0,0,0,0.25);
  padding: 4px 16px;
  border-radius: 20px;
  letter-spacing: 0.5px;
}

.news-body {
  padding: 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
}

.news-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.news-date {
  font-size: 12px;
  color: #99a9b5;
}

.news-badge {
  font-size: 11px;
  background: #f0f3f2;
  color: #5f727f;
  padding: 2px 10px;
  border-radius: 20px;
}

.news-body h2 {
  font-size: 15px;
  font-weight: 700;
  color: #E31C26;
  line-height: 1.5;
  flex: 1;
}

.read-more {
  font-size: 13px;
  color: #E31C26;
  font-weight: 700;
}

@media (max-width: 900px) {
  .news-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 600px) {
  .news-grid { grid-template-columns: 1fr; }
}
</style>
