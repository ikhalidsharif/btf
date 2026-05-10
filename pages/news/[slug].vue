<template>
  <div class="post-page">
    <div class="page-hero" :style="getCoverStyle(post?.issue)">
      <div class="container">
        <NuxtLink :to="localePath('/news')" class="back-link">
          ← {{ locale === 'ar' ? 'الأخبار' : 'News' }}
        </NuxtLink>
        <div class="post-meta">
          <span class="news-issue-tag">{{ locale === 'ar' ? 'العدد' : 'Issue' }} {{ post?.issue }}</span>
          <span class="news-date-tag">{{ formatDate(post?.date) }}</span>
        </div>
        <h1>{{ post?.title }}</h1>

        <!-- AI Translation button -->
        <button v-if="locale === 'en' && post?.title" class="btn-translate" @click="translatePost" :disabled="translating">
          {{ translating ? '⏳ Translating...' : '🌐 Show in English' }}
        </button>
      </div>
    </div>

    <div class="container section">
      <!-- Translated content -->
      <div v-if="translatedContent" class="translated-box">
        <div class="translated-header">
          <span>🤖 AI Translation</span>
          <button @click="translatedContent = ''" class="close-translated">✕</button>
        </div>
        <div class="translated-text">{{ translatedContent }}</div>
      </div>

      <article class="post-content card">
        <!-- Link to original newsletter -->
        <div v-if="post?.link" class="newsletter-link">
          <a :href="post.link" target="_blank" class="btn-newsletter">
            📧 {{ locale === 'ar' ? 'اقرأ النشرة كاملة على MailChimp' : 'Read full newsletter on MailChimp' }}
          </a>
        </div>
        <ContentRenderer :value="post" />
      </article>

      <!-- Nav between posts -->
      <div class="post-nav">
        <NuxtLink v-if="prev" :to="localePath(prev._path)" class="btn btn-outline">
          ← {{ prev.title }}
        </NuxtLink>
        <NuxtLink v-if="next" :to="localePath(next._path)" class="btn btn-outline ms-auto">
          {{ next.title }} →
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const { locale } = useI18n()
const localePath = useLocalePath()
const route = useRoute()

const newsBasePath = locale.value === 'ar' ? '/ar/news' : '/en/news'

const { data: post } = await useAsyncData(`post-${route.path}`, () =>
  queryContent(route.path).findOne()
)

const { data: surroundData } = await useAsyncData(`surround-${route.path}`, () =>
  queryContent(newsBasePath)
    .sort({ date: -1 })
    .findSurround(route.path)
)

const prev = computed(() => surroundData.value?.[0] || null)
const next = computed(() => surroundData.value?.[1] || null)

useHead({
  title: computed(() => `${post.value?.title || 'News'} | Bahrain Trust Foundation`),
})

// Translation
const translating = ref(false)
const translatedContent = ref('')

async function translatePost() {
  if (!post.value) return
  translating.value = true
  try {
    const textToTranslate = `${post.value.title}\n\n${post.value.body || ''}`
    const res = await $fetch('/api/translate', {
      method: 'POST',
      body: { text: post.value.title, targetLang: 'en' }
    })
    translatedContent.value = res.translated
  } catch (e) {
    translatedContent.value = 'Translation failed. Please try again.'
  }
  translating.value = false
}

function formatDate(dateStr) {
  if (!dateStr) return ''
  return new Date(dateStr).toLocaleDateString(
    locale.value === 'ar' ? 'ar-BH' : 'en-BH',
    { year: 'numeric', month: 'long', day: 'numeric' }
  )
}

const gradients = [
  'linear-gradient(135deg, #E31C26 0%, #8B0000 100%)',
  'linear-gradient(135deg, #3c3950 0%, #212331 100%)',
  'linear-gradient(135deg, #00bcd4 0%, #006064 100%)',
  'linear-gradient(135deg, #E31C26 0%, #3c3950 100%)',
  'linear-gradient(135deg, #c8972a 0%, #8B6914 100%)',
  'linear-gradient(135deg, #1a237e 0%, #00bcd4 100%)',
]

function getCoverStyle(issue) {
  const num = parseInt(String(issue || '').replace(/[٠-٩]/g, d => String('٠١٢٣٤٥٦٧٨٩'.indexOf(d)))) || 0
  return { background: gradients[num % gradients.length] }
}
</script>

<style scoped>
.page-hero {
  padding: 60px 0 48px;
  color: white;
  min-height: 240px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.back-link {
  display: inline-block;
  color: rgba(255,255,255,0.7);
  font-size: 14px;
  margin-bottom: 20px;
  transition: color 0.2s;
  text-decoration: none;
}
.back-link:hover { color: white; }

.post-meta {
  display: flex;
  gap: 12px;
  align-items: center;
  margin-bottom: 16px;
}

.news-issue-tag {
  background: rgba(255,255,255,0.2);
  padding: 4px 14px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 700;
}

.news-date-tag {
  font-size: 13px;
  opacity: 0.8;
}

.page-hero h1 {
  font-size: clamp(22px, 3vw, 38px);
  font-weight: 900;
  line-height: 1.3;
  max-width: 800px;
  margin-bottom: 16px;
}

.btn-translate {
  background: rgba(255,255,255,0.2);
  border: 1.5px solid rgba(255,255,255,0.5);
  color: white;
  padding: 8px 20px;
  border-radius: 4px;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s;
  width: fit-content;
}
.btn-translate:hover:not(:disabled) { background: rgba(255,255,255,0.35); }
.btn-translate:disabled { opacity: 0.6; cursor: not-allowed; }

/* Translated box */
.translated-box {
  background: #e3f2fd;
  border: 1px solid #90caf9;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 24px;
}

.translated-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  font-size: 13px;
  font-weight: 700;
  color: #1565c0;
}

.close-translated {
  background: none;
  border: none;
  cursor: pointer;
  color: #1565c0;
  font-size: 16px;
}

.translated-text {
  font-size: 15px;
  line-height: 1.8;
  color: #1a237e;
}

/* Newsletter link */
.newsletter-link {
  margin-bottom: 24px;
  padding-bottom: 20px;
  border-bottom: 1px solid #f0f0f0;
}

.btn-newsletter {
  display: inline-block;
  background: #E31C26;
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 13px;
  font-weight: 700;
  text-decoration: none;
  transition: background 0.2s;
}
.btn-newsletter:hover { background: #b5151e; }

/* Post content */
.post-content {
  padding: 40px;
  max-width: 800px;
  margin: 0 auto;
  font-size: 16px;
  line-height: 1.9;
}

.post-content :deep(h2),
.post-content :deep(h3) {
  color: #3c3950;
  margin: 28px 0 14px;
  font-weight: 700;
}

.post-content :deep(p) { margin-bottom: 16px; }

.post-content :deep(a) {
  color: #E31C26;
  text-decoration: underline;
}

/* Nav */
.post-nav {
  display: flex;
  gap: 16px;
  margin-top: 32px;
  max-width: 800px;
  margin-inline: auto;
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .post-content { padding: 20px; }
}
</style>
