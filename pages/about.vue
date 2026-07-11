<template>
  <div class="about-page">

    <!-- Hero -->
    <div class="page-hero">
      <div class="container">
        <span class="hero-eyebrow">{{ locale === 'ar' ? 'عن المؤسسة' : 'About Us' }}</span>
        <h1>{{ locale === 'ar' ? 'حكاية مؤسسة بحرين ترست' : "Bahrain Trust Foundation's Story" }}</h1>
        <p>{{ locale === 'ar'
          ? 'مؤسسة خيرية بحرينية غير ربحية تأسست عام 2010 ومسجّلة لدى وزارة التنمية الاجتماعية'
          : 'A Bahraini non-profit foundation, established in 2010 and registered with the Ministry of Social Development' }}</p>
        <div class="hero-badge">
          <span class="badge-year">2010</span>
          <span class="badge-label">{{ locale === 'ar' ? 'سنة التأسيس' : 'Est.' }}</span>
        </div>
      </div>
    </div>

    <!-- Stats -->
    <div class="stats-bar">
      <div class="container stats-inner">
        <div class="stat">
          <strong>20,508</strong>
          <span>{{ locale === 'ar' ? 'طالب مستفيد من مدارسنا' : 'Beneficiary students from our micro schools' }}</span>
        </div>
        <div class="stat">
          <strong>2,353</strong>
          <span>{{ locale === 'ar' ? 'حقيبة مدرسية وزعت' : 'School bags distributed to students' }}</span>
        </div>
        <div class="stat">
          <strong>1,996</strong>
          <span>{{ locale === 'ar' ? 'صندوق رمضان وزع' : 'Ramadan boxes distributed inside & outside Bahrain' }}</span>
        </div>
      </div>
    </div>

    <!-- Who we are -->
    <div class="container section">
      <div class="who-grid">
        <div class="who-text fade-up">
          <h2 class="section-title">{{ locale === 'ar' ? 'من نحن' : 'Who We Are' }}</h2>
          <p>{{ locale === 'ar'
            ? 'مؤسسة بحرين ترست مؤسسة خيرية غير ربحية تهدف إلى تحسين جودة حياة الناس وإحداث أثر إيجابي محلياً وعالمياً. نؤمن أن التعليم والتدريب عنصران أساسيان لتمكين الأفراد، ونسعى لتطوير حلول عملية وذكية تسهم في التنمية المستدامة للمجتمع.'
            : "Bahrain Trust Foundation is a non-profit organization that aims to improve the quality of people's lives and create a positive impact locally and globally. We believe that education and training are crucial in empowering individuals, and we strive to develop practical and smart solutions that contribute to the sustainable development of the community." }}</p>
          <p>{{ locale === 'ar'
            ? 'تأسست المؤسسة عام 2010 ومسجّلة رسمياً لدى وزارة التنمية الاجتماعية بمملكة البحرين، ونعمل بالشراكة مع مؤسسات القطاعين العام والخاص لتوسيع أثرنا.'
            : 'The Foundation was founded in 2010 and is officially registered with the Ministry of Social Development in the Kingdom of Bahrain. We work in partnership with public and private institutions to expand our impact.' }}</p>
          <div class="who-ctas">
            <NuxtLink :to="localePath('/donate')" class="btn btn-primary">
              ❤️ {{ locale === 'ar' ? 'ادعم مشاريعنا' : 'Support Our Projects' }}
            </NuxtLink>
            <NuxtLink :to="localePath('/volunteer')" class="btn btn-outline">
              {{ locale === 'ar' ? 'انضم كمتطوع' : 'Become a Volunteer' }}
            </NuxtLink>
          </div>
        </div>
        <div class="who-image fade-up">
          <img src="/images/projects/community.jpg" :alt="locale === 'ar' ? 'بحرين ترست' : 'Bahrain Trust Foundation'" />
        </div>
      </div>
    </div>

    <!-- Mission & Vision -->
    <section class="mission-section">
      <div class="container">
        <div class="mission-vision">
          <div class="mv-block">
            <h2>{{ locale === 'ar' ? 'رسالتنا' : 'OUR MISSION' }}</h2>
            <p>{{ locale === 'ar'
              ? 'إيجاد حلول ذكية وعملية لحياة أفضل للأفراد في المجتمع'
              : 'To create smart and practical solutions for a better life for people in the community' }}</p>
          </div>
          <div class="mv-divider" />
          <div class="mv-block">
            <h2>{{ locale === 'ar' ? 'رؤيتنا' : 'OUR VISION' }}</h2>
            <p>{{ locale === 'ar'
              ? 'أن يتمكن أفراد المجتمع من تغيير حياتهم نحو الأفضل من خلال خدمات التنمية المستدامة، مثل التعليم وخدمة المجتمع والاقتصاد الإبداعي.'
              : 'People in the community are able to change their lives for the better through sustainable development services, such as Education, Community Service, and Creative Economy.' }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Pillars -->
    <div class="container section">
      <h2 class="section-title center">{{ locale === 'ar' ? 'ركائزنا' : 'Our Pillars' }}</h2>
      <p class="section-subtitle center">{{ locale === 'ar' ? 'ثلاثة محاور تقود عملنا في المجتمع' : 'Three pillars that guide our work in the community' }}</p>
      <div class="pillars-grid">
        <div class="pillar-card card fade-up">
          <div class="pillar-icon">🎓</div>
          <h3>{{ locale === 'ar' ? 'التعليم' : 'Education' }}</h3>
          <p>{{ locale === 'ar'
            ? 'تعزيز التعليم الشامل والمستدام محلياً وإقليمياً من خلال برامج مبتكرة'
            : 'Enhancing inclusive and sustainable education locally and regionally through innovative programs' }}</p>
        </div>
        <div class="pillar-card card fade-up">
          <div class="pillar-icon">🤝</div>
          <h3>{{ locale === 'ar' ? 'خدمة المجتمع' : 'Community Service' }}</h3>
          <p>{{ locale === 'ar'
            ? 'تحسين جودة الحياة من خلال تعزيز مبادرات المجتمع والشراكات المستدامة'
            : 'Improving quality of life by enhancing community initiatives and sustainable partnerships' }}</p>
        </div>
        <div class="pillar-card card fade-up">
          <div class="pillar-icon">💡</div>
          <h3>{{ locale === 'ar' ? 'الاقتصاد الإبداعي' : 'Creative Economy' }}</h3>
          <p>{{ locale === 'ar'
            ? 'تمكين الأفراد من الاستفادة من الاقتصاد الإبداعي من خلال الحلول المبتكرة والتدريب المهني'
            : 'Empowering individuals to benefit from the creative economy through innovative solutions and vocational training' }}</p>
        </div>
      </div>
    </div>

    <!-- Board of Trustees -->
    <section class="board-section">
      <div class="container">
        <h2 class="section-title center">{{ locale === 'ar' ? 'مجلس الإدارة' : 'Board of Trustees' }}</h2>
        <p class="section-subtitle center">{{ locale === 'ar'
          ? 'نخبة من القيادات البحرينية المتطوعة تقود رؤية المؤسسة ومسيرتها'
          : "A group of dedicated Bahraini leaders volunteering their time to guide the Foundation's vision" }}</p>

        <!-- Chairman — featured -->
        <div class="board-featured card fade-up">
          <div class="board-avatar board-avatar-lg" :style="{ background: chairman.color }">{{ chairman.initial }}</div>
          <h3>{{ locale === 'ar' ? chairman.nameAr : chairman.nameEn }}</h3>
          <span class="board-title">{{ locale === 'ar' ? chairman.titleAr : chairman.titleEn }}</span>
        </div>

        <!-- Rest of the board -->
        <div class="board-grid">
          <div v-for="m in boardMembers" :key="m.nameEn" class="board-card card fade-up">
            <div class="board-avatar" :style="{ background: m.color }">{{ m.initial }}</div>
            <h3>{{ locale === 'ar' ? m.nameAr : m.nameEn }}</h3>
            <span class="board-title">{{ locale === 'ar' ? m.titleAr : m.titleEn }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Where we work -->
    <section class="location-section">
      <div class="container location-inner">
        <div class="location-card card">
          <div class="location-icon">📍</div>
          <div>
            <h3>{{ locale === 'ar' ? 'مقرنا' : 'Our Home' }}</h3>
            <p>{{ locale === 'ar'
              ? 'مركز صفية علي كانو للفنون، بوغزال، مملكة البحرين'
              : 'Safiya Ali Kanoo Arts Centre, Bughazal, Kingdom of Bahrain' }}</p>
          </div>
        </div>
        <div class="location-card card">
          <div class="location-icon">📞</div>
          <div>
            <h3>{{ locale === 'ar' ? 'تواصل معنا' : 'Get in Touch' }}</h3>
            <p>(+973) 1722 3781 · info@bahraintrust.org</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-section">
      <div class="container cta-inner">
        <h2>{{ locale === 'ar' ? 'كن جزءاً من القصة' : 'Be Part of the Story' }}</h2>
        <p>{{ locale === 'ar' ? 'تبرعك أو تطوعك يصنع فرقاً حقيقياً في حياة الأسر البحرينية' : 'Your donation or volunteering makes a real difference in Bahraini families\' lives' }}</p>
        <div class="cta-buttons">
          <NuxtLink :to="localePath('/donate')" class="btn btn-primary">❤️ {{ locale === 'ar' ? 'تبرع الآن' : 'Donate Now' }}</NuxtLink>
          <NuxtLink :to="localePath('/projects')" class="btn btn-outline-white">{{ locale === 'ar' ? 'تصفح مشاريعنا' : 'Browse Our Projects' }}</NuxtLink>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
const { locale } = useI18n()
const localePath = useLocalePath()

useHead({
  title: locale.value === 'ar' ? 'عن المؤسسة | مؤسسة البحرين ترست' : 'About Us | Bahrain Trust Foundation',
})

// Board of Trustees — placeholder initials used in place of photos.
// Swap in real board member photos when available.
const chairman = {
  initial: 'ف', color: '#E31C26',
  nameAr: 'د. فاطمة البلوشي', nameEn: 'Dr. Fatima Al Baloochi',
  titleAr: 'رئيسة مجلس الإدارة (مؤسِّسة)', titleEn: 'Chairman of the Board (Founder)',
}

const boardMembers = [
  {
    initial: 'ع', color: '#3c3950',
    nameAr: 'د. عبدالرحمن العطاوي', nameEn: 'Dr. Abdulrahman Al Attawi',
    titleAr: 'عضو مؤسس', titleEn: 'Founder',
  },
  {
    initial: 'ف', color: '#c8972a',
    nameAr: 'د. فاتن المؤيد', nameEn: 'Dr. Faten Almoayyed',
    titleAr: 'نائبة الرئيس', titleEn: 'Vice President',
  },
  {
    initial: 'ل', color: '#00bcd4',
    nameAr: 'الشيخة لبنى آل خليفة', nameEn: 'Sh. Lubna Al Khalifa',
    titleAr: 'أمينة السر (مؤسِّسة)', titleEn: 'Secretary (Founder)',
  },
  {
    initial: 'س', color: '#8B0000',
    nameAr: 'السيدة سوزي كانو', nameEn: 'Mrs. Suzy Kanoo',
    titleAr: 'عضو مجلس الإدارة', titleEn: 'Board Member',
  },
  {
    initial: 'ح', color: '#5f727f',
    nameAr: 'السيد الحارث العطاوي', nameEn: 'Mr. Al Harith Al Attawi',
    titleAr: 'أمين الصندوق', titleEn: 'Financial Secretary',
  },
]
</script>

<style scoped>
.page-hero {
  background: linear-gradient(135deg, var(--red) 0%, #8B0000 100%);
  padding: 90px 0 70px;
  color: white;
  text-align: center;
}
.hero-eyebrow {
  display: inline-block;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  background: rgba(255,255,255,0.15);
  padding: 5px 16px;
  border-radius: 20px;
  margin-bottom: 16px;
}
.page-hero h1 { font-size: clamp(32px,4vw,52px); font-weight: 900; margin-bottom: 14px; }
.page-hero p { font-size: 17px; opacity: 0.9; max-width: 640px; margin: 0 auto; }

.hero-badge {
  display: inline-flex; flex-direction: column; align-items: center;
  margin-top: 28px; padding: 14px 26px; border-radius: 14px;
  background: rgba(255,255,255,0.12); border: 1px solid rgba(255,255,255,0.25);
  backdrop-filter: blur(4px);
}
.badge-year { font-size: 24px; font-weight: 900; line-height: 1; }
.badge-label { font-size: 11px; letter-spacing: 1px; text-transform: uppercase; opacity: 0.85; margin-top: 4px; }

/* Stats */
.stats-bar { background: var(--dark); }
.stats-inner {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  padding: 36px 0;
}
.stat { text-align: center; color: white; }
.stat strong { display: block; font-size: 34px; font-weight: 900; color: var(--red-light); }
.stat span { font-size: 13px; opacity: 0.8; }

/* Who we are */
.who-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 48px;
  align-items: center;
}
.who-text p { color: var(--text-light); margin-bottom: 16px; font-size: 16px; line-height: 1.9; }
.who-ctas { display: flex; gap: 14px; margin-top: 24px; flex-wrap: wrap; }
.who-image img { border-radius: var(--radius); box-shadow: var(--shadow-lg); width: 100%; aspect-ratio: 4/3; object-fit: cover; }

/* Mission & Vision */
.mission-section { background: var(--off-white); padding: 64px 0; }
.mission-vision { display: flex; align-items: stretch; gap: 48px; }
.mv-block { flex: 1; }
.mv-block h2 { font-size: 15px; font-weight: 800; letter-spacing: 1.5px; color: var(--red); margin-bottom: 12px; }
.mv-block p { font-size: 18px; color: var(--dark); line-height: 1.8; font-weight: 500; }
.mv-divider { width: 1px; background: var(--gray-light); }

/* Pillars */
.section-title.center, .section-subtitle.center { text-align: center; }
.pillars-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-top: 16px; }
.pillar-card { padding: 36px 28px; text-align: center; }
.pillar-icon { font-size: 40px; margin-bottom: 16px; }
.pillar-card h3 { font-size: 18px; color: var(--dark); margin-bottom: 10px; }
.pillar-card p { font-size: 14px; color: var(--text-light); line-height: 1.8; }

/* Board of Trustees */
.board-section { background: white; padding: 80px 0; }

.board-featured {
  max-width: 320px;
  margin: 36px auto 40px;
  text-align: center;
  padding: 40px 28px;
  border: 2px solid var(--red);
  position: relative;
}
.board-featured::before {
  content: '★';
  position: absolute;
  top: -14px; left: 50%; transform: translateX(-50%);
  background: var(--red); color: white;
  width: 28px; height: 28px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 13px;
}
.board-featured h3 { font-size: 18px; color: var(--dark); margin: 4px 0 6px; }

.board-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 24px;
}
.board-card { padding: 28px 18px; text-align: center; }
.board-card h3 { font-size: 15px; color: var(--dark); margin: 4px 0 6px; line-height: 1.4; }

.board-avatar {
  width: 64px; height: 64px; margin: 0 auto 16px;
  border-radius: 50%; color: white; font-weight: 800; font-size: 22px;
  display: flex; align-items: center; justify-content: center;
}
.board-avatar-lg { width: 88px; height: 88px; font-size: 30px; }

.board-title {
  display: inline-block; font-size: 12px; font-weight: 700; color: var(--red);
  letter-spacing: 0.3px;
}

/* Location */
.location-section { padding: 16px 0 64px; }
.location-inner { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
.location-card { display: flex; gap: 18px; align-items: flex-start; padding: 28px; }
.location-icon { font-size: 28px; }
.location-card h3 { font-size: 15px; color: var(--dark); margin-bottom: 6px; }
.location-card p { font-size: 14px; color: var(--text-light); line-height: 1.7; }

/* CTA */
.cta-section { background: var(--dark); padding: 64px 0; }
.cta-inner { text-align: center; color: white; }
.cta-inner h2 { font-size: clamp(24px,3vw,34px); font-weight: 800; margin-bottom: 10px; }
.cta-inner p { opacity: 0.8; margin-bottom: 28px; }
.cta-buttons { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }
.btn-outline-white {
  background: transparent; color: white; border: 2px solid rgba(255,255,255,0.4);
  padding: 12px 28px; border-radius: 4px; font-weight: 700; font-size: 14px;
  text-transform: uppercase; letter-spacing: 0.5px; display: inline-flex; align-items: center; gap: 8px;
  transition: all var(--transition);
}
.btn-outline-white:hover { background: rgba(255,255,255,0.1); border-color: white; }

@media (max-width: 900px) {
  .who-grid { grid-template-columns: 1fr; }
  .who-image { order: -1; }
  .mission-vision { flex-direction: column; gap: 28px; }
  .mv-divider { display: none; }
  .pillars-grid { grid-template-columns: 1fr; }
  .board-grid { grid-template-columns: repeat(3, 1fr); }
  .location-inner { grid-template-columns: 1fr; }
  .stats-inner { grid-template-columns: 1fr; gap: 20px; }
}

@media (max-width: 560px) {
  .board-grid { grid-template-columns: repeat(2, 1fr); }
}
</style>