<template>
  <div class="result-page">
    <div class="container">

      <!-- Success -->
      <div v-if="isSuccess" class="result-box success">
        <div class="result-icon">🎉</div>
        <h1>{{ locale === 'ar' ? 'شكراً لتبرعك!' : 'Thank You for Your Donation!' }}</h1>
        <p>{{ locale === 'ar'
          ? 'تم استلام تبرعك بنجاح. تبرعك يصنع فرقاً حقيقياً في حياة الأسر البحرينية.'
          : 'Your donation has been received successfully. Your generosity makes a real difference in Bahraini families lives.'
        }}</p>
        <div v-if="tapId" class="transaction-id">
          {{ locale === 'ar' ? 'رقم المعاملة:' : 'Transaction ID:' }} {{ tapId }}
        </div>
        <div class="result-actions">
          <NuxtLink :to="localePath('/')" class="btn-primary">
            {{ locale === 'ar' ? 'العودة للرئيسية' : 'Back to Home' }}
          </NuxtLink>
          <NuxtLink :to="localePath('/donate')" class="btn-secondary">
            {{ locale === 'ar' ? 'تبرع مرة أخرى' : 'Donate Again' }}
          </NuxtLink>
        </div>
      </div>

      <!-- Failed -->
      <div v-else class="result-box failed">
        <div class="result-icon">❌</div>
        <h1>{{ locale === 'ar' ? 'لم تكتمل عملية الدفع' : 'Payment Not Completed' }}</h1>
        <p>{{ locale === 'ar'
          ? 'لم تتم عملية الدفع. يمكنك المحاولة مرة أخرى.'
          : 'The payment was not completed. Please try again.'
        }}</p>
        <div class="result-actions">
          <NuxtLink :to="localePath('/donate')" class="btn-primary">
            {{ locale === 'ar' ? 'حاول مرة أخرى' : 'Try Again' }}
          </NuxtLink>
          <NuxtLink :to="localePath('/')" class="btn-secondary">
            {{ locale === 'ar' ? 'الرئيسية' : 'Home' }}
          </NuxtLink>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n()
const localePath = useLocalePath()
const route = useRoute()

const tapId = route.query.tap_id
const status = route.query.status

// TAP redirects with tap_id on success
const isSuccess = computed(() => !!tapId && status !== 'CANCELLED' && status !== 'FAILED')

useHead({
  title: computed(() => isSuccess.value
    ? (locale.value === 'ar' ? 'شكراً | مؤسسة البحرين' : 'Thank You | Bahrain Trust Foundation')
    : (locale.value === 'ar' ? 'لم يتم الدفع | مؤسسة البحرين' : 'Payment Failed | Bahrain Trust Foundation')
  )
})
</script>

<style scoped>
.result-page {
  min-height: 70vh;
  display: flex;
  align-items: center;
  background: #f4f6f7;
  padding: 60px 0;
}

.result-box {
  max-width: 560px;
  margin: 0 auto;
  background: white;
  border-radius: 8px;
  padding: 56px 40px;
  text-align: center;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
}

.result-icon { font-size: 72px; margin-bottom: 24px; }

h1 {
  font-size: 28px;
  font-weight: 900;
  margin-bottom: 16px;
}

.success h1 { color: #2e7d32; }
.failed h1 { color: #E31C26; }

p {
  font-size: 16px;
  color: #5f727f;
  line-height: 1.7;
  margin-bottom: 24px;
}

.transaction-id {
  background: #f4f6f7;
  padding: 10px 16px;
  border-radius: 4px;
  font-size: 13px;
  color: #5f727f;
  margin-bottom: 32px;
  font-family: monospace;
}

.result-actions {
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-primary {
  background: #E31C26;
  color: white;
  padding: 12px 28px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  transition: background 0.2s;
}
.btn-primary:hover { background: #b5151e; }

.btn-secondary {
  background: white;
  color: #3c3950;
  padding: 12px 28px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  border: 1.5px solid #dfe5e8;
  transition: border-color 0.2s;
}
.btn-secondary:hover { border-color: #3c3950; }
</style>
