<template>
  <div class="news-page">
    <div class="page-hero">
      <div class="container">
        <h1>{{ t('news.title') }}</h1>
        <p>{{ t('news.subtitle') }}</p>
      </div>
    </div>

    <div class="container section">
      <div class="news-grid">
        <NuxtLink
          v-for="post in news"
          :key="post._path"
          :to="post._path"
          class="news-card card"
        >
          <div class="news-meta">
            <span class="news-date">{{ formatDate(post.date) }}</span>
            <span class="news-issue">{{ t('news.issue') }} {{ post.issue }}</span>
          </div>
          <h2>{{ post.title }}</h2>
          <span class="read-more">{{ t('news.readMore') }} →</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const { t, locale } = useI18n()

useHead({
  title: locale.value === 'ar' ? 'الأخبار | مؤسسة البحرين' : 'News | Bahrain Trust Foundation',
})

const newsPath = locale.value === 'ar' ? '/ar/news' : '/en/news'
const { data: news } = await useAsyncData('news', () =>
  queryContent(newsPath).sort({ date: -1 }).find()
)

function formatDate(dateStr) {
  if (!dateStr) return ''
  return new Date(dateStr).toLocaleDateString(
    locale.value === 'ar' ? 'ar-BH' : 'en-BH',
    { year: 'numeric', month: 'long' }
  )
}
</script>

<style scoped>
.page-hero {
  background: linear-gradient(135deg, var(--green-dark), var(--green));
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
  gap: 24px;
}

.news-card {
  padding: 28px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.news-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.news-date {
  font-size: 13px;
  color: var(--gold);
  font-weight: 600;
}

.news-issue {
  font-size: 12px;
  background: var(--gray-light);
  color: var(--text-light);
  padding: 3px 10px;
  border-radius: 50px;
}

.news-card h2 {
  font-size: 17px;
  font-weight: 700;
  color: var(--green-dark);
  line-height: 1.5;
  flex: 1;
}

.read-more {
  font-size: 14px;
  color: var(--green);
  font-weight: 600;
  margin-top: auto;
}

@media (max-width: 768px) {
  .news-grid { grid-template-columns: 1fr; }
}
</style>
