<template>
  <div>
    <div class="page-hero">
      <div class="container">
        <h1>{{ locale === 'ar' ? 'مشاريعنا' : 'Our Projects' }}</h1>
      </div>
    </div>
    <div class="container section">
      <div class="projects-grid">
        <div v-for="p in projects" :key="p.id" class="card" style="padding:32px">
          <div style="font-size:40px;margin-bottom:16px">{{ p.icon }}</div>
          <h2 style="color:var(--green-dark);margin-bottom:12px">{{ locale === 'ar' ? p.titleAr : p.titleEn }}</h2>
          <p style="color:var(--text-light)">{{ locale === 'ar' ? p.descAr : p.descEn }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const { locale } = useI18n()
useHead({ title: 'Projects | Bahrain Trust Foundation' })
const projects = [
  { id: 1, icon: '📚', titleAr: 'التعليم', titleEn: 'Education', descAr: 'مدارس مصغرة، كفالة الطلاب، فضاءات تعليمية داخل وخارج البحرين', descEn: 'Micro-schools, student sponsorships, and learning spaces inside and outside Bahrain' },
  { id: 2, icon: '🏥', titleAr: 'الصحة', titleEn: 'Health', descAr: 'دعم مدارس المستشفيات وطلاب الأطفال المرضى وتنمية مواهبهم الفنية', descEn: 'Supporting hospital schools and developing the talents of sick children' },
  { id: 3, icon: '🤝', titleAr: 'خدمة المجتمع', titleEn: 'Community Service', descAr: 'مساعدات عينية، أنشطة ترفيهية، رحلات الخير للأسر المحتاجة', descEn: 'In-kind support, recreational activities, and goodwill trips for families in need' },
  { id: 4, icon: '💡', titleAr: 'دعم المشاريع الصغيرة', titleEn: 'Micro-Business Support', descAr: 'دعم ريادة الأعمال وتمكين الأسر من خلال مشاريع صغيرة مستدامة', descEn: 'Supporting entrepreneurship and empowering families through sustainable small businesses' },
]
</script>
<style scoped>
.page-hero { background: linear-gradient(135deg, var(--green-dark), var(--green)); padding: 80px 0 60px; color: white; }
.page-hero h1 { font-size: clamp(32px,4vw,52px); font-weight: 900; }
.projects-grid { display: grid; grid-template-columns: repeat(2,1fr); gap: 24px; }
@media(max-width:600px){ .projects-grid { grid-template-columns: 1fr; } }
</style>
