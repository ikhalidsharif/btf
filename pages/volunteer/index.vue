<template>
  <div class="vol-page" dir="rtl">

    <!-- شريط تنويه: عرض تصوري -->
    <div class="demo-banner">
      🎯 عرض تصوري (Prototype) لفكرة تفعيل التطوع بنظام نقاط وإنجازات — البيانات هنا تجريبية لغرض العرض على الإدارة
    </div>

    <!-- Header مبسط -->
    <header class="vol-header">
      <div class="vol-header-inner">
        <div class="brand">
          <img src="/logo.png" alt="مؤسسة بحرين ترست" class="brand-logo" />
          <div class="brand-text">
            <strong>مؤسسة بحرين ترست</strong>
            <span>معاً نصنع أثراً حقيقياً</span>
          </div>
        </div>
        <div class="user-chip">
          <img src="https://i.pravatar.cc/80?img=12" alt="" class="user-avatar" />
          <div class="user-meta">
            <strong>أحمد علي</strong>
            <span>المستوى {{ level }}</span>
          </div>
          <div class="user-xp">{{ xp.toLocaleString('ar') }} نقطة</div>
        </div>
      </div>
    </header>

    <main class="vol-main">

      <!-- Hero -->
      <section class="hero">
        <div class="hero-text">
          <span class="eyebrow">منصة التطوع التفاعلية</span>
          <h1>اصنع أثراً حقيقياً... واكسب إنجازات</h1>
          <p>انضم إلى مهام تطوعية حقيقية، اجمع نقاط الخبرة، ارتقِ بمستواك، وتابع أثرك في المجتمع البحريني خطوة بخطوة.</p>
          <div class="hero-actions">
            <button class="btn btn-primary" @click="scrollToMissions">ابدأ التطوع الآن</button>
            <NuxtLink to="/" class="btn btn-ghost">عرض أثرنا</NuxtLink>
          </div>
        </div>

        <!-- بطاقة المستخدم الجانبية -->
        <div class="profile-card">
          <div class="profile-top">
            <img src="https://i.pravatar.cc/120?img=12" alt="" class="profile-avatar" />
            <div class="level-pill">المستوى {{ level }}</div>
          </div>
          <h3>أحمد علي</h3>
          <p class="profile-sub">من ضمن أفضل 5 متطوعين هذا الشهر 🏅</p>

          <div class="xp-block">
            <div class="xp-labels">
              <span>{{ xp.toLocaleString('ar') }} / {{ nextLevelXp.toLocaleString('ar') }} نقطة خبرة</span>
              <span>{{ Math.round(progress * 100) }}%</span>
            </div>
            <div class="xp-bar">
              <div class="xp-fill" :style="{ width: (progress * 100) + '%' }"></div>
            </div>
            <small>{{ (nextLevelXp - xp).toLocaleString('ar') }} نقطة للمستوى {{ level + 1 }}</small>
          </div>

          <div class="profile-stats">
            <div>
              <strong>{{ completedMissions }}</strong>
              <span>مهمة منجزة</span>
            </div>
            <div>
              <strong>{{ volunteerHours }}</strong>
              <span>ساعة تطوع</span>
            </div>
          </div>

          <div class="streak-row">
            <span class="streak-icon">🔥</span>
            <div>
              <strong>{{ streak }} يوم</strong>
              <span>سلسلة إنجاز متواصلة</span>
            </div>
          </div>
        </div>
      </section>

      <!-- إحصائيات عامة -->
      <section class="stats-strip">
        <div class="stat-item">
          <span class="stat-icon">🤝</span>
          <strong>2,353</strong>
          <span>متطوع نشط</span>
        </div>
        <div class="stat-item">
          <span class="stat-icon">⏱️</span>
          <strong>45,280</strong>
          <span>ساعة تطوعية</span>
        </div>
        <div class="stat-item">
          <span class="stat-icon">🎓</span>
          <strong>20,508</strong>
          <span>مستفيد من برامجنا</span>
        </div>
        <div class="stat-item">
          <span class="stat-icon">🏆</span>
          <strong>358</strong>
          <span>مهمة مكتملة هذا الشهر</span>
        </div>
      </section>

      <!-- شارات سريعة -->
      <section class="badges-preview">
        <div class="section-head">
          <h2>إنجازاتك وشاراتك</h2>
          <span class="section-sub">كل مهمة تنجزها تقربك من شارة جديدة</span>
        </div>
        <div class="badges-grid">
          <div v-for="b in badges" :key="b.id" class="badge-card" :class="{ locked: !b.unlocked }">
            <div class="badge-icon">{{ b.icon }}</div>
            <strong>{{ b.title }}</strong>
            <span>{{ b.desc }}</span>
            <span v-if="b.unlocked" class="badge-status unlocked">✓ تم تحقيقها</span>
            <span v-else class="badge-status locked">🔒 {{ b.progressText }}</span>
          </div>
        </div>
      </section>

      <!-- المهام -->
      <section id="missions" class="missions-section">
        <div class="section-head">
          <h2>المهام التطوعية المتاحة</h2>
          <span class="section-sub">اختر المهمة المناسبة لوقتك واهتماماتك وابدأ بصنع الأثر</span>
        </div>

        <!-- الفلاتر -->
        <div class="filters">
          <button
            v-for="cat in categories"
            :key="cat.key"
            class="filter-chip"
            :class="{ active: activeCategory === cat.key }"
            @click="activeCategory = cat.key"
          >
            {{ cat.icon }} {{ cat.label }}
          </button>
        </div>

        <!-- بطاقات المهام -->
        <div class="missions-grid">
          <div v-for="m in filteredMissions" :key="m.id" class="mission-card">
            <div class="mission-img">
              <img :src="m.image" :alt="m.title" />
              <span class="mission-tag" :class="'tag-' + m.difficulty">{{ difficultyLabel(m.difficulty) }}</span>
              <span class="mission-cat">{{ categoryLabel(m.category) }}</span>
            </div>
            <div class="mission-body">
              <h3>{{ m.title }}</h3>
              <p>{{ m.desc }}</p>
              <div class="mission-meta">
                <span>👥 {{ m.beneficiaries }}+ مستفيد</span>
                <span>⏱️ {{ m.hours }} ساعات</span>
                <span class="mission-xp">⭐ {{ m.xp }} نقطة</span>
              </div>
              <button
                class="btn-join"
                :class="{ joined: joinedMissions.includes(m.id) }"
                @click="joinMission(m)"
                :disabled="joinedMissions.includes(m.id)"
              >
                {{ joinedMissions.includes(m.id) ? '✓ تم الانضمام' : 'انضم للمهمة' }}
              </button>
            </div>
          </div>
        </div>
      </section>

    </main>

    <!-- إشعار XP المنبثق -->
    <transition name="pop">
      <div v-if="toast.show" class="xp-toast">
        <span class="toast-icon">🎉</span>
        <div>
          <strong>+{{ toast.xp }} نقطة خبرة!</strong>
          <span>{{ toast.msg }}</span>
        </div>
      </div>
    </transition>

    <!-- إشعار ترقية مستوى -->
    <transition name="pop">
      <div v-if="levelUpToast" class="levelup-toast">
        <span class="toast-icon">🚀</span>
        <div>
          <strong>وصلت للمستوى {{ level }}!</strong>
          <span>استمر في صنع الأثر</span>
        </div>
      </div>
    </transition>

    <footer class="vol-footer">
      <p>عرض تصوري داخلي لفريق التطوير والإدارة — مؤسسة بحرين ترست © 2026</p>
    </footer>

  </div>
</template>

<script setup>
useHead({
  title: 'منصة التطوع التفاعلية | مؤسسة بحرين ترست',
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700;800;900&display=swap' },
  ],
})

// ===== حالة المستخدم (تجريبية) =====
const xp = ref(2450)
const completedMissions = ref(27)
const volunteerHours = ref(48)
const streak = ref(12)

const level = computed(() => getLevel(xp.value))
const currentLevelXp = computed(() => xpForLevel(level.value))
const nextLevelXp = computed(() => xpForLevel(level.value + 1))
const progress = computed(() => {
  const span = nextLevelXp.value - currentLevelXp.value
  return span > 0 ? (xp.value - currentLevelXp.value) / span : 0
})

function xpForLevel(lvl) {
  return Math.round(100 * Math.pow(lvl, 1.6))
}
function getLevel(totalXp) {
  let lvl = 1
  while (xpForLevel(lvl) <= totalXp) lvl++
  return lvl - 1
}

// ===== الشارات =====
const badges = ref([
  { id: 1, icon: '🌱', title: 'الخطوة الأولى', desc: 'أكمل أول مهمة تطوعية', unlocked: true },
  { id: 2, icon: '📚', title: 'بطل التعليم', desc: 'أكمل 5 مهام تعليمية', unlocked: true },
  { id: 3, icon: '🔥', title: 'ماستر الإنجاز', desc: 'حافظ على سلسلة 7 أيام', unlocked: true },
  { id: 4, icon: '🤝', title: 'باني المجتمع', desc: 'ساهم في 20 مستفيد', unlocked: false, progressText: '14 / 20 مستفيد' },
  { id: 5, icon: '⏰', title: 'المثابر', desc: 'تطوع لمدة 10 ساعات', unlocked: false, progressText: '8 / 10 ساعات' },
  { id: 6, icon: '👑', title: 'رمز العطاء', desc: 'ساهم في 100 ساعة تطوع', unlocked: false, progressText: '48 / 100 ساعة' },
])

// ===== التصنيفات =====
const categories = [
  { key: 'all', label: 'الكل', icon: '🗂️' },
  { key: 'education', label: 'تعليم', icon: '📚' },
  { key: 'community', label: 'مجتمع', icon: '🤝' },
  { key: 'digital', label: 'رقمي', icon: '💻' },
  { key: 'creative', label: 'إبداعي', icon: '🎨' },
  { key: 'emergency', label: 'طوارئ', icon: '🚨' },
]
const activeCategory = ref('all')

function categoryLabel(key) {
  return categories.find(c => c.key === key)?.label || key
}
function difficultyLabel(d) {
  return { easy: 'سهل', medium: 'متوسط', hard: 'صعب', critical: 'عاجل' }[d] || d
}

// ===== المهام (تجريبية) =====
const missions = ref([
  {
    id: 'm1', category: 'education', difficulty: 'medium',
    title: 'مساعدة في دروس التقوية',
    desc: 'تقديم دروس تقوية لطلاب المدارس المصغرة في المواد الأساسية',
    beneficiaries: 15, hours: 3, xp: 50,
    image: '/images/donate/donate-1.jpg',
  },
  {
    id: 'm2', category: 'community', difficulty: 'easy',
    title: 'توزيع السلال الغذائية',
    desc: 'المشاركة في تجهيز وتوزيع السلال الغذائية على الأسر المحتاجة',
    beneficiaries: 20, hours: 2, xp: 40,
    image: '/images/donate/donate-5.jpg',
  },
  {
    id: 'm3', category: 'digital', difficulty: 'hard',
    title: 'تصميم محتوى توعوي للمؤسسة',
    desc: 'تصميم منشورات ومحتوى رقمي لحملات المؤسسة على وسائل التواصل',
    beneficiaries: 5, hours: 6, xp: 100,
    image: '/images/donate/donate-3.jpg',
  },
  {
    id: 'm4', category: 'creative', difficulty: 'medium',
    title: 'توثيق قصص الأثر بالتصوير',
    desc: 'تصوير الفعاليات والمبادرات لتوثيق قصص الأثر الحقيقية',
    beneficiaries: 10, hours: 4, xp: 60,
    image: '/images/donate/donate-1.jpg',
  },
  {
    id: 'm5', category: 'emergency', difficulty: 'critical',
    title: 'الدعم في حالات الطوارئ',
    desc: 'المشاركة الفورية في فرق الدعم خلال الحالات الطارئة والكوارث',
    beneficiaries: 50, hours: 6, xp: 120,
    image: '/images/donate/donate-5.jpg',
  },
  {
    id: 'm6', category: 'education', difficulty: 'easy',
    title: 'تدريب رقمي للأطفال',
    desc: 'تعليم المهارات الرقمية الأساسية للأطفال في مراكز المؤسسة',
    beneficiaries: 20, hours: 2, xp: 45,
    image: '/images/donate/donate-3.jpg',
  },
])

const filteredMissions = computed(() => {
  if (activeCategory.value === 'all') return missions.value
  return missions.value.filter(m => m.category === activeCategory.value)
})

// ===== الانضمام للمهمة + التفاعل =====
const joinedMissions = ref([])
const toast = reactive({ show: false, xp: 0, msg: '' })
const levelUpToast = ref(false)

function joinMission(m) {
  if (joinedMissions.value.includes(m.id)) return
  joinedMissions.value.push(m.id)

  const prevLevel = level.value
  xp.value += m.xp
  completedMissions.value += 1
  volunteerHours.value += m.hours

  toast.xp = m.xp
  toast.msg = `أنجزت مهمة "${m.title}"`
  toast.show = true
  setTimeout(() => { toast.show = false }, 3200)

  if (level.value > prevLevel) {
    setTimeout(() => {
      levelUpToast.value = true
      setTimeout(() => { levelUpToast.value = false }, 3200)
    }, 600)
  }
}

function scrollToMissions() {
  document.getElementById('missions')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
* { box-sizing: border-box; }

.vol-page {
  font-family: 'Tajawal', sans-serif;
  background: #f4f6f7;
  color: #3c3950;
  min-height: 100vh;
}

/* شريط التنويه */
.demo-banner {
  background: #212331;
  color: #ffd54f;
  text-align: center;
  font-size: 13px;
  font-weight: 700;
  padding: 8px 16px;
}

/* Header */
.vol-header {
  background: white;
  border-bottom: 1px solid #eceff1;
  position: sticky;
  top: 0;
  z-index: 50;
}
.vol-header-inner {
  max-width: 1180px;
  margin: 0 auto;
  padding: 12px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}
.brand { display: flex; align-items: center; gap: 10px; }
.brand-logo { height: 44px; }
.brand-text { display: flex; flex-direction: column; line-height: 1.3; }
.brand-text strong { font-size: 14px; color: #3c3950; }
.brand-text span { font-size: 11px; color: #99a9b5; }

.user-chip {
  display: flex;
  align-items: center;
  gap: 10px;
  background: #f4f6f7;
  border-radius: 40px;
  padding: 6px 16px 6px 6px;
}
.user-avatar { width: 36px; height: 36px; border-radius: 50%; object-fit: cover; }
.user-meta { display: flex; flex-direction: column; line-height: 1.25; }
.user-meta strong { font-size: 13px; }
.user-meta span { font-size: 11px; color: #99a9b5; }
.user-xp {
  background: #E31C26;
  color: white;
  font-size: 12px;
  font-weight: 700;
  padding: 5px 12px;
  border-radius: 20px;
}

/* Main wrapper */
.vol-main { max-width: 1180px; margin: 0 auto; padding: 32px 24px 60px; }

/* Hero */
.hero {
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: 32px;
  align-items: stretch;
  margin-bottom: 40px;
}
.hero-text {
  background: linear-gradient(135deg, #E31C26 0%, #8B0000 100%);
  border-radius: 16px;
  padding: 44px 36px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.eyebrow {
  display: inline-block;
  background: rgba(255,255,255,0.18);
  font-size: 12px;
  font-weight: 700;
  padding: 5px 14px;
  border-radius: 20px;
  width: fit-content;
  margin-bottom: 16px;
}
.hero-text h1 { font-size: 30px; font-weight: 900; line-height: 1.4; margin-bottom: 14px; }
.hero-text p { font-size: 15px; line-height: 1.8; opacity: 0.92; max-width: 480px; margin-bottom: 26px; }
.hero-actions { display: flex; gap: 12px; flex-wrap: wrap; }

.btn {
  border: none;
  padding: 12px 26px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  font-family: inherit;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  transition: transform 0.15s, opacity 0.15s;
}
.btn:active { transform: scale(0.97); }
.btn-primary { background: white; color: #E31C26; }
.btn-primary:hover { opacity: 0.92; }
.btn-ghost { background: rgba(255,255,255,0.12); color: white; border: 1.5px solid rgba(255,255,255,0.5); }
.btn-ghost:hover { background: rgba(255,255,255,0.22); }

/* بطاقة الملف الجانبية */
.profile-card {
  background: white;
  border-radius: 16px;
  padding: 28px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.06);
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.profile-top { display: flex; align-items: center; justify-content: space-between; }
.profile-avatar { width: 64px; height: 64px; border-radius: 50%; object-fit: cover; border: 3px solid #ffe0b2; }
.level-pill {
  background: #fff3e0;
  color: #c8972a;
  font-size: 12px;
  font-weight: 800;
  padding: 5px 14px;
  border-radius: 20px;
}
.profile-card h3 { font-size: 17px; font-weight: 800; }
.profile-sub { font-size: 12px; color: #99a9b5; margin-top: -8px; }

.xp-block { display: flex; flex-direction: column; gap: 6px; }
.xp-labels { display: flex; justify-content: space-between; font-size: 12px; color: #5f727f; font-weight: 600; }
.xp-bar { height: 10px; background: #f0f3f2; border-radius: 10px; overflow: hidden; }
.xp-fill {
  height: 100%;
  background: linear-gradient(90deg, #E31C26, #ff6b6b);
  border-radius: 10px;
  transition: width 0.6s ease;
}
.xp-block small { color: #99a9b5; font-size: 11px; }

.profile-stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  border-top: 1px solid #f0f3f2;
  border-bottom: 1px solid #f0f3f2;
  padding: 14px 0;
}
.profile-stats > div { text-align: center; display: flex; flex-direction: column; gap: 2px; }
.profile-stats strong { font-size: 20px; color: #3c3950; }
.profile-stats span { font-size: 11px; color: #99a9b5; }

.streak-row {
  display: flex;
  align-items: center;
  gap: 10px;
  background: #fff5f5;
  border-radius: 10px;
  padding: 10px 14px;
}
.streak-icon { font-size: 22px; }
.streak-row strong { font-size: 13px; display: block; }
.streak-row span { font-size: 11px; color: #99a9b5; }

/* إحصائيات شريط */
.stats-strip {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-bottom: 48px;
}
.stat-item {
  background: white;
  border-radius: 12px;
  padding: 22px 16px;
  text-align: center;
  box-shadow: 0 2px 12px rgba(0,0,0,0.05);
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.stat-icon { font-size: 24px; }
.stat-item strong { font-size: 22px; color: #3c3950; font-weight: 900; }
.stat-item span { font-size: 12px; color: #99a9b5; }

/* عناوين الأقسام */
.section-head { margin-bottom: 22px; }
.section-head h2 { font-size: 22px; font-weight: 900; color: #3c3950; }
.section-sub { font-size: 13px; color: #99a9b5; }

/* الشارات */
.badges-preview { margin-bottom: 48px; }
.badges-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 14px;
}
.badge-card {
  background: white;
  border-radius: 12px;
  padding: 18px 12px;
  text-align: center;
  box-shadow: 0 2px 12px rgba(0,0,0,0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
}
.badge-card.locked { opacity: 0.55; }
.badge-icon { font-size: 30px; }
.badge-card strong { font-size: 12px; color: #3c3950; }
.badge-card span { font-size: 10px; color: #99a9b5; line-height: 1.4; }
.badge-status { font-size: 10px; font-weight: 700; margin-top: 4px; padding: 3px 8px; border-radius: 10px; }
.badge-status.unlocked { background: #e8f5e9; color: #2e7d32; }
.badge-status.locked { background: #f0f0f0; color: #99a9b5; }

/* فلاتر */
.filters { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 24px; }
.filter-chip {
  background: white;
  border: 1.5px solid #dfe5e8;
  color: #3c3950;
  padding: 8px 18px;
  border-radius: 30px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  font-family: inherit;
  transition: all 0.15s;
}
.filter-chip:hover { border-color: #E31C26; color: #E31C26; }
.filter-chip.active { background: #E31C26; color: white; border-color: #E31C26; }

/* بطاقات المهام */
.missions-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.mission-card {
  background: white;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
  display: flex;
  flex-direction: column;
  transition: transform 0.2s, box-shadow 0.2s;
}
.mission-card:hover { transform: translateY(-4px); box-shadow: 0 10px 28px rgba(0,0,0,0.1); }

.mission-img { position: relative; height: 150px; }
.mission-img img { width: 100%; height: 100%; object-fit: cover; }
.mission-tag {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 11px;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 20px;
  color: white;
}
.tag-easy { background: #2e7d32; }
.tag-medium { background: #c8972a; }
.tag-hard { background: #6a1b9a; }
.tag-critical { background: #E31C26; }
.mission-cat {
  position: absolute;
  bottom: 10px;
  right: 10px;
  background: rgba(0,0,0,0.55);
  color: white;
  font-size: 11px;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 20px;
}

.mission-body { padding: 18px; display: flex; flex-direction: column; gap: 10px; flex: 1; }
.mission-body h3 { font-size: 15px; font-weight: 800; color: #3c3950; }
.mission-body p { font-size: 12px; color: #5f727f; line-height: 1.6; flex: 1; }
.mission-meta { display: flex; gap: 12px; flex-wrap: wrap; font-size: 11px; color: #99a9b5; }
.mission-xp { color: #E31C26 !important; font-weight: 700 !important; }

.btn-join {
  margin-top: auto;
  background: #E31C26;
  color: white;
  border: none;
  padding: 11px;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  font-family: inherit;
  transition: background 0.2s;
}
.btn-join:hover:not(:disabled) { background: #b5151e; }
.btn-join.joined { background: #2e7d32; cursor: default; }
.btn-join:disabled { opacity: 0.9; }

/* إشعارات XP */
.xp-toast, .levelup-toast {
  position: fixed;
  bottom: 28px;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  border-radius: 14px;
  box-shadow: 0 12px 36px rgba(0,0,0,0.18);
  padding: 14px 22px;
  display: flex;
  align-items: center;
  gap: 12px;
  z-index: 200;
  border-inline-start: 5px solid #E31C26;
}
.levelup-toast { border-inline-start-color: #c8972a; bottom: 96px; }
.toast-icon { font-size: 26px; }
.xp-toast strong, .levelup-toast strong { display: block; font-size: 14px; color: #3c3950; }
.xp-toast span, .levelup-toast span { font-size: 12px; color: #99a9b5; }

.pop-enter-active, .pop-leave-active { transition: all 0.3s ease; }
.pop-enter-from, .pop-leave-to { opacity: 0; transform: translateX(-50%) translateY(20px); }

/* Footer */
.vol-footer { text-align: center; padding: 24px; font-size: 11px; color: #99a9b5; }

/* Responsive */
@media (max-width: 980px) {
  .hero { grid-template-columns: 1fr; }
  .stats-strip { grid-template-columns: repeat(2, 1fr); }
  .badges-grid { grid-template-columns: repeat(3, 1fr); }
  .missions-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 640px) {
  .badges-grid { grid-template-columns: repeat(2, 1fr); }
  .missions-grid { grid-template-columns: 1fr; }
  .vol-header-inner { justify-content: center; }
}
</style>
