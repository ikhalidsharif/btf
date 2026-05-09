<template>
  <div class="donate-page">
    <div class="page-hero">
      <div class="container">
        <h1>{{ t('donate.title') }}</h1>
        <p>{{ t('donate.subtitle') }}</p>
      </div>
    </div>

    <div class="container section">
      <div class="donate-wrapper">

        <!-- Step 1: Select Project -->
        <div class="step card">
          <div class="step-header">
            <span class="step-num">1</span>
            <h2>{{ t('donate.selectProject') }}</h2>
          </div>
          <div class="projects-list">
            <button
              v-for="proj in donations"
              :key="proj.id"
              class="project-btn"
              :class="{ active: selected?.id === proj.id }"
              @click="selected = proj"
            >
              <span class="proj-title">{{ proj.title }}</span>
              <span v-if="proj.description" class="proj-desc">{{ proj.description }}</span>
            </button>
          </div>
        </div>

        <!-- Step 2: Select Amount -->
        <div class="step card" :class="{ disabled: !selected }">
          <div class="step-header">
            <span class="step-num">2</span>
            <h2>{{ t('donate.selectAmount') }}</h2>
          </div>
          <div class="amounts-grid">
            <button
              v-for="amt in amounts"
              :key="amt"
              class="amount-btn"
              :class="{ active: amount === amt && !customMode }"
              @click="amount = amt; customMode = false"
            >
              {{ amt }} {{ t('donate.currency') }}
            </button>
            <button
              class="amount-btn custom-btn"
              :class="{ active: customMode }"
              @click="customMode = true; amount = null"
            >
              {{ t('donate.customAmount') }}
            </button>
          </div>
          <input
            v-if="customMode"
            v-model.number="customAmount"
            type="number"
            min="1"
            class="custom-input"
            :placeholder="`${t('donate.customAmount')} (${t('donate.currency')})`"
          />
        </div>

        <!-- Proceed button -->
        <div class="donate-action">
          <div v-if="selected && finalAmount" class="donate-summary">
            <span>{{ selected.title }}</span>
            <strong>{{ finalAmount }} {{ t('donate.currency') }}</strong>
          </div>
          <button
            class="btn btn-gold btn-donate"
            :disabled="!selected || !finalAmount || loading"
            @click="startPayment"
          >
            <span v-if="loading">⏳ جاري التحميل...</span>
            <span v-else>❤️ {{ t('donate.proceed') }}</span>
          </button>
          <p class="secure-note">🔒 {{ t('donate.secure') }}</p>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
const { t, locale } = useI18n()
const config = useRuntimeConfig()

useHead({
  title: locale.value === 'ar' ? 'تبرع الآن | مؤسسة البحرين' : 'Donate | Bahrain Trust Foundation',
  script: [{ src: 'https://goSell.gotapai.com/web/assets/js/gosell.js', defer: true }],
})

// Load donations from JSON
const { data: allDonations } = await useAsyncData('donations', () =>
  queryContent('/donations').findOne()
)

const donations = computed(() =>
  locale.value === 'ar'
    ? allDonations.value?.ar || []
    : allDonations.value?.en || []
)

const amounts = [5, 10, 25, 50, 100]
const selected = ref(null)
const amount = ref(null)
const customMode = ref(false)
const customAmount = ref(null)
const loading = ref(false)

const finalAmount = computed(() => {
  if (customMode.value) return customAmount.value || null
  return amount.value
})

async function startPayment() {
  if (!selected.value || !finalAmount.value) return
  loading.value = true

  // TAP Checkout integration
  // https://developers.tap.company/docs/web-card-sdk
  const handler = window.GoSell?.config({
    gateway: {
      publicKey: config.public.tapPublicKey,
      language: locale.value,
      supportedCurrencies: 'all',
      supportedPaymentMethods: 'all',
      saveCardOption: false,
      customerCards: false,
    },
    customer: {
      currency: 'BHD',
    },
    order: {
      amount: finalAmount.value,
      currency: 'BHD',
      items: [
        {
          id: selected.value.id,
          name: selected.value.title,
          description: selected.value.description || '',
          quantity: 1,
          amount_per_unit: finalAmount.value,
          total_amount: finalAmount.value,
        },
      ],
      shipping: null,
      taxes: null,
    },
    transaction: {
      mode: 'charge',
      charge: {
        saveCard: false,
        threeDSecure: true,
        description: `Donation: ${selected.value.title}`,
        metadata: { project: selected.value.id },
        receipt: { email: true, sms: false },
        redirect: `${window.location.origin}/${locale.value}/donate/success`,
        post: null,
      },
    },
  })

  handler?.openLightBox()
  loading.value = false
}
</script>

<style scoped>
.page-hero {
  background: linear-gradient(135deg, var(--gold) 0%, #a06e15 100%);
  padding: 80px 0 60px;
  color: white;
}
.page-hero h1 {
  font-size: clamp(32px, 4vw, 52px);
  font-weight: 900;
  margin-bottom: 12px;
}
.page-hero p { font-size: 18px; opacity: 0.9; }

.donate-wrapper {
  max-width: 760px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.step {
  padding: 32px;
  transition: opacity 0.3s;
}
.step.disabled { opacity: 0.4; pointer-events: none; }

.step-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
}

.step-num {
  width: 36px;
  height: 36px;
  background: var(--green);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 16px;
  flex-shrink: 0;
}

.step-header h2 {
  font-size: 20px;
  font-weight: 700;
  color: var(--green-dark);
}

.projects-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.project-btn {
  background: var(--gray-light);
  border: 2px solid transparent;
  border-radius: var(--radius);
  padding: 16px 20px;
  text-align: start;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.project-btn:hover { border-color: var(--green-light); background: white; }
.project-btn.active {
  border-color: var(--green);
  background: white;
  box-shadow: 0 0 0 3px rgba(26,107,60,0.1);
}

.proj-title { font-weight: 600; color: var(--text); font-size: 15px; }
.proj-desc { font-size: 13px; color: var(--text-light); }

.amounts-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}

.amount-btn {
  background: var(--gray-light);
  border: 2px solid transparent;
  border-radius: var(--radius);
  padding: 16px;
  font-size: 17px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s;
  color: var(--text);
}
.amount-btn:hover { border-color: var(--gold); }
.amount-btn.active {
  border-color: var(--gold);
  background: white;
  color: var(--gold);
  box-shadow: 0 0 0 3px rgba(200,151,42,0.15);
}
.custom-btn { font-size: 14px; font-weight: 600; }

.custom-input {
  width: 100%;
  margin-top: 16px;
  padding: 14px 18px;
  border: 2px solid var(--gold);
  border-radius: var(--radius);
  font-size: 17px;
  font-weight: 600;
  outline: none;
  background: white;
}

.donate-action {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 8px 0 40px;
}

.donate-summary {
  display: flex;
  justify-content: space-between;
  width: 100%;
  background: white;
  border-radius: var(--radius);
  padding: 16px 24px;
  box-shadow: var(--shadow);
}
.donate-summary span { color: var(--text-light); font-size: 15px; }
.donate-summary strong { color: var(--green-dark); font-size: 20px; }

.btn-donate {
  width: 100%;
  justify-content: center;
  padding: 18px;
  font-size: 18px;
  border-radius: var(--radius);
}
.btn-donate:disabled { opacity: 0.4; cursor: not-allowed; transform: none !important; }

.secure-note {
  font-size: 13px;
  color: var(--text-light);
}

@media (max-width: 600px) {
  .amounts-grid { grid-template-columns: repeat(2, 1fr); }
  .step { padding: 20px; }
}
</style>
