<template>
  <div class="detail-page">

    <!-- Loading -->
    <div v-if="pending" class="container section"><p>{{ locale === 'ar' ? 'جاري التحميل...' : 'Loading...' }}</p></div>

    <!-- Not found -->
    <div v-else-if="!isGeneral && !project" class="container section">
      <p>{{ locale === 'ar' ? 'المشروع غير موجود' : 'Project not found' }}</p>
      <NuxtLink :to="localePath('/donate')" class="btn btn-outline">{{ locale === 'ar' ? 'رجوع لكل المشاريع' : 'Back to Projects' }}</NuxtLink>
    </div>

    <template v-else>
      <!-- Breadcrumb -->
      <div class="container breadcrumb">
        <NuxtLink :to="localePath('/')">{{ locale === 'ar' ? 'الرئيسية' : 'Home' }}</NuxtLink>
        <span>/</span>
        <NuxtLink :to="localePath('/donate')">{{ locale === 'ar' ? 'قائمة المشاريع' : 'Projects' }}</NuxtLink>
        <span>/</span>
        <span>{{ isGeneral ? (locale === 'ar' ? 'تبرع عام' : 'General Donation') : (locale === 'ar' ? project.nameAr : project.nameEn) }}</span>
      </div>

      <!-- Hero: image + info -->
      <div class="container section">
        <div class="detail-grid">
          <div class="detail-image fade-up">
            <img :src="isGeneral ? '/images/donate/donate-1.jpg' : project.image" :alt="isGeneral ? 'General Donation' : project.nameEn" />
            <span v-if="!isGeneral && project.isUrgent" class="badge badge-urgent">{{ locale === 'ar' ? 'عاجل' : 'Urgent' }}</span>
          </div>

          <div class="detail-info fade-up">
            <h1>{{ isGeneral ? (locale === 'ar' ? 'تبرع عام' : 'General Donation') : (locale === 'ar' ? project.nameAr : project.nameEn) }}</h1>
            <p class="detail-desc">{{ isGeneral
              ? (locale === 'ar' ? 'ادعم مؤسسة بحرين ترست بشكل عام، ونحن نوجّه تبرعك لأكثر المشاريع احتياجاً.' : "Support Bahrain Trust Foundation in general — we'll direct your donation to the projects that need it most.")
              : (locale === 'ar' ? (project.longDescAr || project.descAr) : (project.longDescEn || project.descEn)) }}</p>

            <!-- Amount -->
            <div class="form-group">
              <label>{{ locale === 'ar' ? 'مبلغ التبرع (دينار بحريني)' : 'Donation Amount (BHD)' }}</label>
              <div class="amount-presets">
                <button
                  v-for="amt in presets"
                  :key="amt"
                  :class="{ active: amount === amt && !customAmount }"
                  class="preset-btn"
                  type="button"
                  @click="setAmount(amt)"
                >{{ amt }} {{ locale === 'ar' ? 'د.ب' : 'BHD' }}</button>
                <button
                  :class="{ active: customAmount }"
                  class="preset-btn"
                  type="button"
                  @click="enableCustom"
                >{{ locale === 'ar' ? 'مبلغ آخر' : 'Other' }}</button>
              </div>
              <input
                v-if="customAmount"
                v-model="customAmountValue"
                type="number"
                min="1"
                class="form-input"
                :placeholder="locale === 'ar' ? 'أدخل المبلغ' : 'Enter amount'"
              />
            </div>

            <!-- Donor info -->
            <div class="form-group">
              <label>{{ locale === 'ar' ? 'الاسم الكامل' : 'Full Name' }}</label>
              <input v-model="form.name" type="text" class="form-input" :placeholder="locale === 'ar' ? 'أدخل اسمك' : 'Enter your name'" />
            </div>
            <div class="form-group">
              <label>{{ locale === 'ar' ? 'البريد الإلكتروني' : 'Email' }}</label>
              <input v-model="form.email" type="email" class="form-input" :placeholder="locale === 'ar' ? 'أدخل بريدك الإلكتروني' : 'Enter your email'" />
            </div>
            <div class="form-group">
              <label>{{ locale === 'ar' ? 'رقم الهاتف' : 'Phone Number' }}</label>
              <input v-model="form.phone" type="tel" class="form-input" placeholder="+973 XXXX XXXX" />
            </div>

            <div v-if="error" class="error-msg">{{ error }}</div>

            <button class="btn-donate" :disabled="loading || !isValid" type="button" @click="submitDonation">
              <span v-if="loading">⏳ {{ locale === 'ar' ? 'جاري المعالجة...' : 'Processing...' }}</span>
              <span v-else>❤️ {{ locale === 'ar' ? `تبرع بـ ${finalAmount} د.ب` : `Donate ${finalAmount} BHD` }}</span>
            </button>
            <p class="security-note">🔒 {{ locale === 'ar' ? 'دفع آمن عبر TAP Payment' : 'Secure payment via TAP Payment' }}</p>
          </div>
        </div>
      </div>

      <!-- What this project achieves -->
      <section v-if="!isGeneral" class="achieves-section">
        <div class="container achieves-grid">
          <div class="achieves-image fade-up">
            <img :src="project.image" :alt="project.nameEn" />
          </div>
          <div class="achieves-text fade-up">
            <h2>{{ locale === 'ar' ? 'هذا المشروع يحقق' : 'This Project Achieves' }}</h2>
            <p>{{ locale === 'ar' ? (project.longDescAr || project.descAr) : (project.longDescEn || project.descEn) }}</p>
          </div>
        </div>
      </section>
    </template>

  </div>
</template>

<script setup>
const { locale } = useI18n()
const localePath = useLocalePath()
const route = useRoute()
const { query } = useSupabase()

const routeId = route.params.id
const isGeneral = computed(() => routeId === 'general')

const { data: rawProjects, pending } = await useAsyncData('donation-projects-detail', () =>
  query('donation_projects', '?active=eq.true')
)

const project = computed(() => {
  if (isGeneral.value) return null
  const p = (rawProjects.value || []).find((x) => String(x.id) === String(routeId))
  if (!p) return null
  return {
    id: p.id,
    image: p.image_url,
    nameAr: p.name_ar,
    nameEn: p.name_en,
    descAr: p.desc_ar,
    descEn: p.desc_en,
    longDescAr: p.long_desc_ar,
    longDescEn: p.long_desc_en,
    amount: p.amount,
    isUrgent: !!p.is_urgent,
  }
})

useHead({
  title: computed(() => {
    const name = isGeneral.value
      ? (locale.value === 'ar' ? 'تبرع عام' : 'General Donation')
      : (project.value ? (locale.value === 'ar' ? project.value.nameAr : project.value.nameEn) : '')
    return `${name} | ${locale.value === 'ar' ? 'مؤسسة البحرين ترست' : 'Bahrain Trust Foundation'}`
  }),
})

const presets = [5, 10, 20, 50, 100]
const amount = ref(Number(route.query.amount) || 10)
const customAmount = ref(false)
const customAmountValue = ref('')
const loading = ref(false)
const error = ref('')

const form = reactive({ name: '', email: '', phone: '' })

const finalAmount = computed(() => {
  if (customAmount.value && customAmountValue.value) return Number(customAmountValue.value)
  return amount.value
})

const isValid = computed(() => form.name && form.email && finalAmount.value > 0)

function setAmount(amt) {
  amount.value = amt
  customAmount.value = false
  customAmountValue.value = ''
}
function enableCustom() {
  customAmount.value = true
  amount.value = 0
}

async function submitDonation() {
  if (!isValid.value) return
  loading.value = true
  error.value = ''

  try {
    const res = await $fetch('/api/donate', {
      method: 'POST',
      body: {
        amount: finalAmount.value,
        currency: 'BHD',
        project: isGeneral.value
          ? (locale.value === 'ar' ? 'تبرع عام' : 'General Donation')
          : (locale.value === 'ar' ? project.value.nameAr : project.value.nameEn),
        customer: { name: form.name, email: form.email, phone: form.phone },
        redirect: `${window.location.origin}/${locale.value}/donate/success`,
      },
    })

    if (res.transaction?.url) {
      window.location.href = res.transaction.url
    } else {
      error.value = locale.value === 'ar' ? 'حدث خطأ، يرجى المحاولة مرة أخرى' : 'An error occurred, please try again'
    }
  } catch (e) {
    error.value = locale.value === 'ar' ? 'حدث خطأ في الاتصال' : 'Connection error, please try again'
  }
  loading.value = false
}
</script>

<style scoped>
.breadcrumb { padding: 20px 0 0; font-size: 13px; color: var(--text-light); display: flex; gap: 8px; }
.breadcrumb a { color: var(--text-light); }
.breadcrumb a:hover { color: var(--red); }

.detail-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: start; }
.detail-image { position: relative; border-radius: var(--radius); overflow: hidden; box-shadow: var(--shadow-lg); }
.detail-image img { width: 100%; aspect-ratio: 4/3; object-fit: cover; display: block; }
.badge { position: absolute; top: 14px; inset-inline-start: 14px; font-size: 12px; font-weight: 800; padding: 5px 14px; border-radius: 14px; color: white; }
.badge-urgent { background: #E31C26; }

.detail-info h1 { font-size: clamp(24px,3vw,34px); font-weight: 900; color: var(--dark); margin-bottom: 14px; }
.detail-desc { font-size: 15px; color: var(--text-light); line-height: 1.9; margin-bottom: 26px; }

.form-group { margin-bottom: 18px; }
.form-group label { display: block; font-size: 13px; font-weight: 700; color: var(--dark); margin-bottom: 8px; }
.form-input {
  width: 100%; padding: 10px 14px; border: 1.5px solid var(--gray-light); border-radius: 4px;
  font-size: 14px; font-family: inherit; box-sizing: border-box; outline: none; transition: border-color 0.2s;
}
.form-input:focus { border-color: var(--red); }

.amount-presets { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 10px; }
.preset-btn {
  padding: 8px 16px; border: 1.5px solid var(--gray-light); border-radius: 4px; font-size: 13px; font-weight: 700;
  cursor: pointer; background: white; color: var(--dark); font-family: inherit; transition: all 0.2s;
}
.preset-btn:hover { border-color: var(--red); color: var(--red); }
.preset-btn.active { background: var(--red); color: white; border-color: var(--red); }

.error-msg {
  background: #fff5f5; border: 1px solid var(--red); color: var(--red);
  padding: 10px 14px; border-radius: 4px; font-size: 13px; margin-bottom: 14px;
}

.btn-donate {
  width: 100%; background: var(--red); color: white; border: none; padding: 16px;
  border-radius: 4px; font-size: 16px; font-weight: 700; cursor: pointer; font-family: inherit;
  transition: background 0.2s; margin-bottom: 12px;
}
.btn-donate:hover:not(:disabled) { background: var(--red-dark); }
.btn-donate:disabled { opacity: 0.6; cursor: not-allowed; }
.security-note { font-size: 12px; color: var(--text-light); text-align: center; }

.achieves-section { background: var(--off-white); padding: 64px 0; margin-top: 40px; }
.achieves-grid { display: grid; grid-template-columns: 1fr 1.2fr; gap: 40px; align-items: center; }
.achieves-image img { width: 100%; aspect-ratio: 4/3; object-fit: cover; border-radius: var(--radius); box-shadow: var(--shadow-lg); }
.achieves-text h2 { font-size: 24px; font-weight: 800; color: var(--dark); margin-bottom: 14px; }
.achieves-text p { font-size: 15px; color: var(--text-light); line-height: 1.9; }

@media (max-width: 900px) {
  .detail-grid, .achieves-grid { grid-template-columns: 1fr; }
  .achieves-image { order: -1; }
}
</style>
