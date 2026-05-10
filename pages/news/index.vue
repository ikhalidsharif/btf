<template>
  <div class="news-page">
    <div class="page-hero">
      <div class="container">
        <h1>{{ locale === 'ar' ? 'الأخبار والنشرات' : 'News & Newsletters' }}</h1>
        <p>{{ locale === 'ar' ? 'آخر إصدارات نشرتنا الإخبارية من MailChimp' : 'Latest editions of our newsletter from MailChimp' }}</p>
      </div>
    </div>

    <div class="container section">
      <!-- Loading -->
      <div v-if="pending" class="loading">
        <div class="spinner" />
        <p>{{ locale === 'ar' ? 'جاري تحميل الأخبار...' : 'Loading newsletters...' }}</p>
      </div>

      <!-- Error -->
      <div v-else-if="error" class="error-msg">
        {{ locale === 'ar' ? 'حدث خطأ في تحميل الأخبار' : 'Error loading news' }}
      </div>

      <!-- News grid -->
      <div v-else class="news-grid">
        <a
          v-for="(post, index) in newsData?.items"
          :key="post.link"
          :href="post.link"
          target="_blank"
          rel="noopener"
          class="news-card"
        >
          <!-- Gradient cover -->
          <div class="news-cover" :style="getCoverStyle(index)">
            <img src="/logo.png" alt="BTF" class="cover-logo" />
            <span class="cover-issue" v-if="post.issue">
              {{ locale === 'ar' ? 'العدد' : 'Issue' }} {{ post.issue }}
            </span>
          </div>

          <div class="news-body">
            <div class="news-meta">
              <span class="news-date">{{ formatDate(post.date) }}</span>
              <span class="news-badge">{{ locale === 'ar' ? 'نشرة' : 'Newsletter' }}</span>
            </div>
            <h2>{{ post.title }}</h2>
            <p class="news-excerpt" v-if="post.description">{{ post.description }}</p>
            <span class="read-more">
              {{ locale === 'ar' ? '« اقرأ على MailChimp' : 'Read on MailChimp »' }}
              🔗
            </span>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
const { locale } = useI18n()

useHead({
  title: locale.value === 'ar' ? 'الأخبار | مؤسسة البحرين' : 'News | Bahrain Trust Foundation',
})

// Fetch from server API which gets RSS
const { data: newsData, pending, error } = await useLazyFetch('/api/news')

function formatDate(dateStr) {
  if (!dateStr) return ''
  try {
    return new Date(dateStr).toLocaleDateString(
      locale.value === 'ar' ? 'ar-BH' : 'en-BH',
      { year: 'numeric', month: 'long' }
    )
  } catch { return dateStr }
}

const gradients = [
  'linear-gradient(135deg, #E31C26 0%, #8B0000 100%)',
  'linear-gradient(135deg, #3c3950 0%, #212331 100%)',
  'linear-gradient(135deg, #00bcd4 0%, #006064 100%)',
  'linear-gradient(135deg, #c8972a 0%, #8B6914 100%)',
  'linear-gradient(135deg, #1a237e 0%, #283593 100%)',
  'linear-gradient(135deg, #2e7d32 0%, #1b5e20 100%)',
]

function getCoverStyle(index) {
  return { background: gradients[index % gradients.length] }
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
.page-hero p { font-size: 17px; opacity: 0.85; }

.loading {
  text-align: center;
  padding: 60px 0;
  color: #5f727f;
}
.spinner {
  width: 40px; height: 40px;
  border: 3px solid #f0f0f0;
  border-top-color: #E31C26;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  margin: 0 auto 16px;
}
@keyframes spin { to { transform: rotate(360deg); } }

.error-msg {
  text-align: center;
  padding: 40px;
  color: #E31C26;
  font-weight: 700;
}

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
  height: 160px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
}

.cover-logo {
  height: 60px;
  width: auto;
  filter: brightness(10);
  opacity: 0.85;
}

.cover-issue {
  color: white;
  font-size: 12px;
  font-weight: 700;
  background: rgba(0,0,0,0.25);
  padding: 3px 14px;
  border-radius: 20px;
}

.news-body {
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
}

.news-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.news-date { font-size: 12px; color: #99a9b5; }

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
}

.news-excerpt {
  font-size: 13px;
  color: #5f727f;
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.read-more {
  font-size: 12px;
  color: #00bcd4;
  font-weight: 700;
  margin-top: auto;
}

@media (max-width: 900px) {
  .news-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 600px) {
  .news-grid { grid-template-columns: 1fr; }
}
</style>
