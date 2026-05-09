<template>
  <div>
    <div class="page-hero">
      <div class="container">
        <h1>{{ locale === 'ar' ? 'تواصل معنا' : 'Contact Us' }}</h1>
      </div>
    </div>
    <div class="container section">
      <div class="contact-grid">
        <div class="card" style="padding:40px">
          <h2 style="color:var(--green-dark);margin-bottom:24px">
            {{ locale === 'ar' ? 'معلومات التواصل' : 'Contact Information' }}
          </h2>
          <p>📍 {{ locale === 'ar' ? 'المنامة، مملكة البحرين' : 'Manama, Kingdom of Bahrain' }}</p>
          <p style="margin-top:16px">📧 info@bahraintrust.org</p>
        </div>
        <div class="card" style="padding:40px">
          <h2 style="color:var(--green-dark);margin-bottom:24px">
            {{ locale === 'ar' ? 'أرسل رسالة' : 'Send a Message' }}
          </h2>
          <input class="form-input" :placeholder="locale === 'ar' ? 'الاسم' : 'Name'" />
          <input class="form-input" :placeholder="locale === 'ar' ? 'البريد الإلكتروني' : 'Email'" />
          <textarea class="form-input" rows="4" :placeholder="locale === 'ar' ? 'رسالتك' : 'Your message'" />
          <button class="btn btn-primary" style="width:100%;justify-content:center;margin-top:8px">
            {{ locale === 'ar' ? 'إرسال' : 'Send' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const { locale } = useI18n()
useHead({ title: 'Contact | Bahrain Trust Foundation' })
</script>
<style scoped>
.page-hero { background: linear-gradient(135deg, var(--green-dark), var(--green)); padding: 80px 0 60px; color: white; }
.page-hero h1 { font-size: clamp(32px,4vw,52px); font-weight: 900; }
.contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; max-width: 900px; }
.form-input { width:100%; padding:12px 16px; border:2px solid var(--gray-light); border-radius:var(--radius); font-size:15px; margin-bottom:12px; display:block; outline:none; }
.form-input:focus { border-color:var(--green); }
@media(max-width:600px){ .contact-grid { grid-template-columns: 1fr; } }
</style>
