<template>
  <div>
    <div class="page-hero">
      <div class="container">
        <h1>{{ locale === 'ar' ? 'عن المؤسسة' : 'About Us' }}</h1>
      </div>
    </div>
    <div class="container section">
      <p style="font-size:18px;line-height:2">
        {{ locale === 'ar'
          ? 'مؤسسة البحرين للتنمية والتطوير مؤسسة خيرية بحرينية تأسست بهدف تمكين المجتمع وتطوير الإنسان في مجالات التعليم والصحة وخدمة المجتمع.'
          : 'Bahrain Trust Foundation is a Bahraini charitable organization established to empower communities and develop people across education, health, and community service.' }}
      </p>
    </div>
  </div>
</template>
<script setup>
const { locale } = useI18n()
useHead({ title: 'About | Bahrain Trust Foundation' })
</script>
<style scoped>
.page-hero {
  background: linear-gradient(135deg, var(--green-dark), var(--green));
  padding: 80px 0 60px; color: white;
}
.page-hero h1 { font-size: clamp(32px,4vw,52px); font-weight: 900; }
</style>
