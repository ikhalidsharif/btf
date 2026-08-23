<template>
  <div class="donate-page">

    <!-- Hero -->
    <div class="donate-hero">
      <div class="container">
        <h1>{{ locale === 'ar' ? 'التبرع المباشر' : 'Direct Donation' }}</h1>
        <p>{{ locale === 'ar'
          ? 'اختر المشروع المراد التبرع له'
          : 'Choose the project you would like to support' }}</p>
      </div>
    </div>

    <div class="container section">

      <!-- Quick generic donation + category filter bar -->
      <div class="quick-bar card">
        <div class="quick-amount">
          <span class="quick-label">{{ locale === 'ar' ? 'مبلغ التبرع' : 'Donation Amount' }}</span>
          <div class="stepper">
            <button type="button" @click="quickAmount = Math.max(1, quickAmount - 5)">−</button>
            <span>{{ quickAmount }} {{ locale === 'ar' ? 'د.ب' : 'BHD' }}</span>
            <button type="button" @click="quickAmount += 5">+</button>
          </div>
          <NuxtLink :to="localePath(`/donate/general?amount=${quickAmount}`)" class="btn btn-primary quick-btn">
            {{ locale === 'ar' ? 'تبرع عام الآن' : 'Donate Now' }}
          </NuxtLink>
        </div>
        <div class="quick-filters">
          <button
            v-for="cat in categories"
            :key="cat.value"
            class="filter-pill"
            :class="{ active: activeCategory === cat.value }"
            @click="activeCategory = cat.value"
          >{{ locale === 'ar' ? cat.ar : cat.en }}</button>
        </div>
      </div>

      <div class="catalog-layout">

        <!-- Grid -->
        <div class="projects-grid">
          <NuxtLink
            v-for="proj in filteredProjects"
            :key="proj.id"
            :to="localePath(`/donate/${proj.id}`)"
            class="project-card card"
          >
            <div class="project-img">
              <img :src="proj.image" :alt="locale === 'ar' ? proj.nameAr : proj.nameEn" loading="lazy" />
              <span v-if="proj.isUrgent" class="badge badge-urgent">{{ locale === 'ar' ? 'عاجل' : 'Urgent' }}</span>
            </div>
            <div class="project-body">
              <h3>{{ locale === 'ar' ? proj.nameAr : proj.nameEn }}</h3>
              <p>{{ locale === 'ar' ? proj.descAr : proj.descEn }}</p>
              <div class="project-footer">
                <span class="project-amount">{{ proj.amount }} {{ locale === 'ar' ? 'د.ب' : 'BHD' }}</span>
                <span class="project-cta">{{ locale === 'ar' ? 'تبرع الآن ←' : 'Donate Now →' }}</span>
              </div>
            </div>
          </NuxtLink>

          <p v-if="!filteredProjects.length" class="empty-state">
            {{ locale === 'ar' ? 'ما فيه مشاريع بهذا التصنيف حالياً' : 'No projects in this category right now' }}
          </p>
        </div>

        <!-- Sidebar -->
        <aside class="sidebar">
          <div class="sidebar-card card">
            <input
              v-model="searchQuery"
              type="text"
              class="form-input"
              :placeholder="locale === 'ar' ? 'ابحث عن مشروع' : 'Search for a project'"
            />
          </div>
          <div class="sidebar-card card">
            <h4>{{ locale === 'ar' ? 'تصنيفات المشاريع' : 'Project Categories' }}</h4>
            <label v-for="cat in categories" :key="cat.value" class="sidebar-check">
              <input type="radio" :value="cat.value" v-model="activeCategory" />
              {{ locale === 'ar' ? cat.ar : cat.en }}
            </label>
          </div>
        </aside>

      </div>
    </div>

  </div>
</template>

<script setup>
const { locale } = useI18n()
const localePath = useLocalePath()
const { query } = useSupabase()

useHead({
  title: computed(() => locale.value === 'ar' ? 'تبرع | مؤسسة البحرين ترست' : 'Donate | Bahrain Trust Foundation'),
})

// Load projects from Supabase. `category` and `is_urgent` are optional
// columns — see the note at the bottom of this file for the SQL to add
// them; projects without a category fall into "التبرع العام".
const { data: rawProjects } = await useAsyncData('donation-projects', () =>
  query('donation_projects', '?active=eq.true&order=sort_order.asc,id.asc')
)

const projects = computed(() => (rawProjects.value || []).map((p) => ({
  id: p.id,
  image: p.image_url,
  nameAr: p.name_ar,
  nameEn: p.name_en,
  descAr: p.desc_ar,
  descEn: p.desc_en,
  amount: p.amount,
  category: p.category || 'general',
  isUrgent: !!p.is_urgent,
})))

const categories = [
  { value: 'all', ar: 'الكل', en: 'All' },
  { value: 'general', ar: 'التبرع العام', en: 'General' },
  { value: 'education', ar: 'التعليم المجتمعي', en: 'Community Education' },
  { value: 'community', ar: 'خدمة المجتمع', en: 'Community Service' },
  { value: 'creative', ar: 'الإبداع والابتكار', en: 'Creativity & Innovation' },
]

const activeCategory = ref('all')
const searchQuery = ref('')
const quickAmount = ref(10)

const filteredProjects = computed(() => {
  let list = projects.value
  if (activeCategory.value !== 'all') {
    list = list.filter((p) => p.category === activeCategory.value)
  }
  if (searchQuery.value.trim()) {
    const q = searchQuery.value.trim().toLowerCase()
    list = list.filter((p) =>
      p.nameAr?.toLowerCase().includes(q) || p.nameEn?.toLowerCase().includes(q)
    )
  }
  return list
})

// ── To enable categories & urgent badges, add these columns in Supabase ──
// alter table donation_projects add column category text default 'general';
// alter table donation_projects add column is_urgent boolean default false;
// alter table donation_projects add column long_desc_ar text;
// alter table donation_projects add column long_desc_en text;
// category values expected: general | education | community | creative
</script>

<style scoped>
.donate-hero {
  background: linear-gradient(135deg, #E31C26, #8B0000);
  padding: 80px 0 60px;
  color: white;
  text-align: center;
}
.donate-hero h1 { font-size: clamp(32px, 4vw, 52px); font-weight: 900; margin-bottom: 12px; }
.donate-hero p { font-size: 17px; opacity: 0.85; }

/* Quick bar */
.quick-bar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 24px 28px;
  margin-bottom: 32px;
  background: linear-gradient(135deg, #3c3950, #212331);
  color: white;
}
.quick-amount { display: flex; align-items: center; gap: 16px; flex-wrap: wrap; }
.quick-label { font-size: 13px; font-weight: 700; opacity: 0.85; }
.stepper {
  display: flex; align-items: center; gap: 12px;
  background: rgba(255,255,255,0.1); border-radius: 6px; padding: 6px 10px;
}
.stepper button {
  width: 26px; height: 26px; border-radius: 4px; border: none;
  background: rgba(255,255,255,0.15); color: white; font-size: 16px; cursor: pointer;
}
.stepper span { font-weight: 700; font-size: 14px; min-width: 70px; text-align: center; }
.quick-btn { white-space: nowrap; }

.quick-filters { display: flex; gap: 8px; flex-wrap: wrap; }
.filter-pill {
  padding: 8px 16px; border-radius: 20px; font-size: 12px; font-weight: 700;
  background: rgba(255,255,255,0.1); color: white; border: none; cursor: pointer;
  transition: background 0.2s;
}
.filter-pill:hover { background: rgba(255,255,255,0.2); }
.filter-pill.active { background: white; color: var(--dark); }

/* Layout */
.catalog-layout { display: grid; grid-template-columns: 1fr 260px; gap: 28px; align-items: start; }

.projects-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px; }
.empty-state { grid-column: 1 / -1; text-align: center; color: var(--text-light); padding: 40px 0; }

.project-card { display: flex; flex-direction: column; text-decoration: none; overflow: hidden; }
.project-img { position: relative; aspect-ratio: 4/3; overflow: hidden; }
.project-img img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s; }
.project-card:hover .project-img img { transform: scale(1.06); }

.badge {
  position: absolute; top: 10px; inset-inline-start: 10px;
  font-size: 11px; font-weight: 800; padding: 4px 10px; border-radius: 12px; color: white;
}
.badge-urgent { background: #E31C26; }

.project-body { padding: 18px; flex: 1; display: flex; flex-direction: column; }
.project-body h3 { font-size: 15px; color: var(--dark); margin-bottom: 6px; line-height: 1.4; }
.project-body p { font-size: 12px; color: var(--text-light); line-height: 1.6; margin-bottom: 14px; flex: 1; }
.project-footer { display: flex; align-items: center; justify-content: space-between; }
.project-amount { font-size: 14px; font-weight: 800; color: var(--red); }
.project-cta { font-size: 12px; font-weight: 700; color: var(--dark); }

/* Sidebar */
.sidebar { display: flex; flex-direction: column; gap: 16px; }
.sidebar-card { padding: 18px; }
.sidebar-card h4 { font-size: 13px; color: var(--dark); margin-bottom: 12px; }
.sidebar-check { display: flex; align-items: center; gap: 8px; font-size: 13px; color: var(--dark); margin-bottom: 10px; cursor: pointer; }
.form-input {
  width: 100%; padding: 10px 14px; border: 1.5px solid var(--gray-light);
  border-radius: 4px; font-size: 13px; font-family: inherit; box-sizing: border-box;
}

@media (max-width: 900px) {
  .catalog-layout { grid-template-columns: 1fr; }
  .sidebar { order: -1; }
  .projects-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 560px) {
  .projects-grid { grid-template-columns: 1fr; }
  .quick-bar { flex-direction: column; align-items: stretch; }
}
</style>
