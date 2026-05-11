<template>
  <div class="donate-page">

    <!-- Hero -->
    <div class="donate-hero">
      <div class="container">
        <h1>{{ locale === 'ar' ? 'تبرع الآن' : 'Donate Now' }}</h1>
        <p>{{ locale === 'ar'
          ? 'تبرعك يصنع فرقاً حقيقياً في حياة الأسر البحرينية'
          : 'Your donation makes a real difference in Bahraini families lives'
        }}</p>
      </div>
    </div>

    <div class="container section">
      <div class="donate-layout">

        <!-- Projects -->
        <div class="projects-col">
          <h2>{{ locale === 'ar' ? 'اختر مشروعاً' : 'Choose a Project' }}</h2>
          <div class="projects-list">
            <div
              v-for="proj in projects"
              :key="proj.id"
              class="project-item"
              :class="{ active: selectedProject?.id === proj.id }"
              @click="selectProject(proj)"
            >
              <div class="project-img-thumb">
                <img :src="proj.image" :alt="proj.nameEn" />
              </div>
              <div class="project-info">
                <h3>{{ locale === 'ar' ? proj.nameAr : proj.nameEn }}</h3>
                <p>{{ locale === 'ar' ? proj.descAr : proj.descEn }}</p>
                <span class="project-amount">{{ locale === 'ar' ? `${proj.amount} د.ب` : `${proj.amount} BHD` }}</span>
              </div>
              <div class="project-check" v-if="selectedProject.value?.id === proj.id">✓</div>
            </div>
          </div>
        </div>

        <!-- Donation Form -->
        <div class="form-col">
          <div class="donate-form card">
            <h2>{{ locale === 'ar' ? 'تفاصيل التبرع' : 'Donation Details' }}</h2>

            <!-- Selected project -->
            <div v-if="selectedProject" class="selected-project-badge">
              {{ selectedProject?.icon }} {{ locale === 'ar' ? selectedProject?.nameAr : selectedProject?.nameEn }}
            </div>

            <!-- Amount -->
            <div class="form-group">
              <label>{{ locale === 'ar' ? 'المبلغ (دينار بحريني)' : 'Amount (BHD)' }}</label>
              <div class="amount-presets">
                <button
                  v-for="amt in presets"
                  :key="amt"
                  :class="{ active: amount === amt && !customAmount }"
                  @click="setAmount(amt)"
                  class="preset-btn"
                >{{ amt }} {{ locale === 'ar' ? 'د.ب' : 'BHD' }}</button>
                <button
                  :class="{ active: customAmount }"
                  @click="enableCustom"
                  class="preset-btn"
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

            <!-- Donor Info -->
            <div class="form-group">
              <label>{{ locale === 'ar' ? 'الاسم الكامل' : 'Full Name' }}</label>
              <input v-model="form.name" type="text" class="form-input"
                :placeholder="locale === 'ar' ? 'أدخل اسمك' : 'Enter your name'" />
            </div>

            <div class="form-group">
              <label>{{ locale === 'ar' ? 'البريد الإلكتروني' : 'Email' }}</label>
              <input v-model="form.email" type="email" class="form-input"
                :placeholder="locale === 'ar' ? 'أدخل بريدك الإلكتروني' : 'Enter your email'" />
            </div>

            <div class="form-group">
              <label>{{ locale === 'ar' ? 'رقم الهاتف' : 'Phone Number' }}</label>
              <input v-model="form.phone" type="tel" class="form-input"
                placeholder="+973 XXXX XXXX" />
            </div>

            <!-- Error -->
            <div v-if="error" class="error-msg">{{ error }}</div>

            <!-- Submit -->
            <button
              @click="submitDonation"
              :disabled="loading || !isValid"
              class="btn-donate"
            >
              <span v-if="loading">⏳ {{ locale === 'ar' ? 'جاري المعالجة...' : 'Processing...' }}</span>
              <span v-else>
                ❤️ {{ locale === 'ar' ? `تبرع بـ ${finalAmount} د.ب` : `Donate ${finalAmount} BHD` }}
              </span>
            </button>

            <!-- Security note -->
            <p class="security-note">
              🔒 {{ locale === 'ar' ? 'دفع آمن عبر TAP Payment' : 'Secure payment via TAP Payment' }}
            </p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
const { locale } = useI18n()
const localePath = useLocalePath()
const { query } = useSupabase()

useHead({
  title: computed(() => locale.value === 'ar' ? 'تبرع | مؤسسة البحرين' : 'Donate | Bahrain Trust Foundation'),
})

// Load projects from Supabase
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
})))

const selectedProject = ref(null)
watch(projects, (val) => { if (val.length && !selectedProject.value) selectedProject.value = val[0] }, { immediate: true })
const presets = [5, 10, 20, 50, 100]
const amount = ref(10)
const customAmount = ref(false)
const customAmountValue = ref('')
const loading = ref(false)
const error = ref('')

const form = reactive({
  name: '',
  email: '',
  phone: '',
})

const finalAmount = computed(() => {
  if (customAmount.value && customAmountValue.value) return Number(customAmountValue.value)
  return amount.value
})

const isValid = computed(() => {
  return form.name && form.email && finalAmount.value > 0 && selectedProject.value
})

function selectProject(proj) {
  selectedProject.value = proj
  if (proj.amount) {
    amount.value = proj.amount
    customAmount.value = false
  }
}

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
    // Create TAP charge via our server API
    const res = await $fetch('/api/donate', {
      method: 'POST',
      body: {
        amount: finalAmount.value,
        currency: 'BHD',
        project: locale.value === 'ar' ? selectedProject.value.nameAr : selectedProject.value.nameEn,
        customer: {
          name: form.name,
          email: form.email,
          phone: form.phone,
        },
        redirect: `${window.location.origin}/${locale.value}/donate/success`,
      }
    })

    if (res.transaction?.url) {
      // Redirect to TAP payment page
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
.donate-hero {
  background: linear-gradient(135deg, #E31C26, #8B0000);
  padding: 80px 0 60px;
  color: white;
  text-align: center;
}
.donate-hero h1 { font-size: clamp(32px, 4vw, 52px); font-weight: 900; margin-bottom: 12px; }
.donate-hero p { font-size: 17px; opacity: 0.85; }

.donate-layout {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 40px;
  align-items: start;
}

/* Projects */
.projects-col h2 { font-size: 20px; font-weight: 700; color: #3c3950; margin-bottom: 20px; }

.projects-list { display: flex; flex-direction: column; gap: 10px; }

.project-item {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 14px 16px;
  border: 1.5px solid #dfe5e8;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
  background: white;
}
.project-item:hover { border-color: #E31C26; }
.project-item.active { border-color: #E31C26; background: #fff5f5; }

.project-img-thumb {
  width: 72px;
  height: 72px;
  border-radius: 6px;
  overflow: hidden;
  flex-shrink: 0;
}
.project-img-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.project-info { flex: 1; }
.project-info h3 { font-size: 13px; font-weight: 700; color: #3c3950; margin-bottom: 2px; line-height: 1.4; }
.project-info p { font-size: 11px; color: #99a9b5; margin-bottom: 4px; line-height: 1.4; }
.project-amount { font-size: 12px; font-weight: 700; color: #E31C26; }
.project-check { color: #E31C26; font-weight: 700; font-size: 18px; }

/* Form */
.donate-form { padding: 32px; }
.donate-form h2 { font-size: 20px; font-weight: 700; color: #3c3950; margin-bottom: 20px; }

.selected-project-badge {
  background: #fff5f5;
  border: 1px solid #E31C26;
  color: #E31C26;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
  display: inline-block;
  margin-bottom: 20px;
}

.form-group { margin-bottom: 18px; }
.form-group label { display: block; font-size: 13px; font-weight: 600; color: #3c3950; margin-bottom: 8px; }

.form-input {
  width: 100%;
  padding: 10px 14px;
  border: 1.5px solid #dfe5e8;
  border-radius: 4px;
  font-size: 14px;
  font-family: inherit;
  transition: border-color 0.2s;
  box-sizing: border-box;
}
.form-input:focus { outline: none; border-color: #E31C26; }

.amount-presets { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 10px; }

.preset-btn {
  padding: 8px 16px;
  border: 1.5px solid #dfe5e8;
  border-radius: 4px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  background: white;
  color: #3c3950;
  font-family: inherit;
  transition: all 0.2s;
}
.preset-btn:hover { border-color: #E31C26; color: #E31C26; }
.preset-btn.active { background: #E31C26; color: white; border-color: #E31C26; }



.error-msg {
  background: #fff5f5;
  border: 1px solid #E31C26;
  color: #E31C26;
  padding: 10px 14px;
  border-radius: 4px;
  font-size: 13px;
  margin-bottom: 14px;
}

.btn-donate {
  width: 100%;
  background: #E31C26;
  color: white;
  border: none;
  padding: 16px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  font-family: inherit;
  transition: background 0.2s;
  margin-bottom: 12px;
}
.btn-donate:hover:not(:disabled) { background: #b5151e; }
.btn-donate:disabled { opacity: 0.6; cursor: not-allowed; }

.security-note { font-size: 12px; color: #99a9b5; text-align: center; }

@media (max-width: 768px) {
  .donate-layout { grid-template-columns: 1fr; }
}
</style>
