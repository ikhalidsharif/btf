<template>
  <div class="post-page">
    <div class="page-hero">
      <div class="container">
        <NuxtLink :to="localePath('/news')" class="back-link">
          ← {{ t('news.title') }}
        </NuxtLink>
        <div class="post-meta">
          <span class="news-date">{{ formatDate(post?.date) }}</span>
          <span class="news-issue">{{ t('news.issue') }} {{ post?.issue }}</span>
        </div>
        <h1>{{ post?.title }}</h1>
      </div>
    </div>

    <div class="container section">
      <article class="post-content card">
        <ContentRenderer :value="post" />
      </article>

      <!-- Nav between posts -->
      <div class="post-nav">
        <NuxtLink v-if="prev" :to="prev._path" class="btn btn-outline">
          ← {{ prev.title }}
        </NuxtLink>
        <NuxtLink v-if="next" :to="next._path" class="btn btn-outline ms-auto">
          {{ next.title }} →
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const { t, locale } = useI18n()
const localePath = useLocalePath()
const route = useRoute()

const { data: post } = await useAsyncData(`post-${route.path}`, () =>
  queryContent(route.path).findOne()
)

const { data: [prev, next] } = await useAsyncData(`post-nav-${route.path}`, () =>
  queryContent(locale.value === 'ar' ? '/ar/news' : '/en/news')
    .sort({ date: -1 })
    .findSurround(route.path)
)

useHead({
  title: post.value?.title || 'News',
})

function formatDate(dateStr) {
  if (!dateStr) return ''
  return new Date(dateStr).toLocaleDateString(
    locale.value === 'ar' ? 'ar-BH' : 'en-BH',
    { year: 'numeric', month: 'long', day: 'numeric' }
  )
}
</script>

<style scoped>
.page-hero {
  background: linear-gradient(135deg, var(--green-dark), var(--green));
  padding: 60px 0 48px;
  color: white;
}

.back-link {
  display: inline-block;
  color: rgba(255,255,255,0.7);
  font-size: 14px;
  margin-bottom: 20px;
  transition: color 0.2s;
}
.back-link:hover { color: white; }

.post-meta {
  display: flex;
  gap: 12px;
  align-items: center;
  margin-bottom: 16px;
}

.news-date {
  font-size: 13px;
  color: var(--gold-light);
  font-weight: 600;
}

.news-issue {
  font-size: 12px;
  background: rgba(255,255,255,0.15);
  padding: 3px 12px;
  border-radius: 50px;
}

.page-hero h1 {
  font-size: clamp(24px, 3vw, 40px);
  font-weight: 900;
  line-height: 1.3;
  max-width: 800px;
}

.post-content {
  padding: 48px;
  max-width: 800px;
  margin: 0 auto;
  font-size: 17px;
  line-height: 1.9;
  color: var(--text);
}

.post-content :deep(h2),
.post-content :deep(h3) {
  color: var(--green-dark);
  margin: 32px 0 16px;
  font-weight: 700;
}

.post-content :deep(p) { margin-bottom: 18px; }

.post-content :deep(img) {
  border-radius: var(--radius);
  margin: 24px 0;
  width: 100%;
}

.post-nav {
  display: flex;
  gap: 16px;
  margin-top: 40px;
  max-width: 800px;
  margin-inline: auto;
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .post-content { padding: 24px; }
}
</style>
