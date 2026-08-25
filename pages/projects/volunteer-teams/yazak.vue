<template>
  <div class="project-page">

    <!-- Hero -->
    <div class="page-hero">
      <div class="container">
        <img src="/images/projects/volunteer-teams/yazak/logo.png" alt="Yazak Team" class="hero-logo" />
        <span class="hero-eyebrow">{{ locale === 'ar' ? 'خدمة المجتمع' : 'Community Service' }}</span>
        <h1>{{ locale === 'ar' ? 'فريق يزاك' : 'Yazak Team' }}</h1>
        <p>{{ locale === 'ar'
          ? 'تأسس 2023 — الجامعة الأمريكية بمملكة البحرين'
          : 'Founded 2023 — American University of Bahrain' }}</p>
      </div>
    </div>

    <!-- Intro -->
    <div class="container section">
      <p class="lead-text fade-up">{{ locale === 'ar'
        ? 'فريق تطوعي شبابي انطلق من الجامعة الأمريكية بمملكة البحرين، معنيّ بمشاريع مؤسسة بحرين ترست داخل وخارج المملكة — من رحلات الخير الدولية إلى المبادرات المجتمعية المحلية.'
        : "A youth volunteer team launched from the American University of Bahrain, involved in Bahrain Trust Foundation's projects both inside and outside the Kingdom — from international Good Will Trips to local community initiatives." }}</p>

      <div class="socials-row">
        <a href="https://www.instagram.com/yzak.bh" target="_blank" rel="noopener" class="btn btn-outline">
          📷 {{ locale === 'ar' ? 'إنستغرام فريق يزاك' : "Yazak Team's Instagram" }}
        </a>
      </div>
    </div>

    <!-- Key Achievements -->
    <section class="achievements-section">
      <div class="container">
        <h2 class="section-title center">{{ locale === 'ar' ? 'أبرز الإنجازات' : 'Key Achievements' }}</h2>
        <div class="achievements-list">
          <div v-for="(a, i) in keyAchievements" :key="i" class="achievement-item fade-up">
            <span class="achievement-num">{{ i + 1 }}</span>
            <p>{{ locale === 'ar' ? a.ar : a.en }}</p>
          </div>
        </div>

        <h3 class="progress-title">{{ locale === 'ar' ? 'مؤشرات الأداء' : 'Performance Indicators' }}</h3>
        <div class="progress-grid">
          <div v-for="(p, i) in progress" :key="i" class="progress-card">
            <div class="progress-header">
              <span class="progress-pct">{{ p.pct }}%</span>
              <p>{{ locale === 'ar' ? p.ar : p.en }}</p>
            </div>
            <div class="progress-bar"><div class="progress-fill" :style="{ width: p.pct + '%' }" /></div>
          </div>
        </div>
      </div>
    </section>

    <!-- 2025 Initiatives -->
    <div class="container section">
      <h2 class="section-title center">{{ locale === 'ar' ? 'مبادرات فريق يزاك لعام 2025' : 'YZAK Initiatives in 2025' }}</h2>
      <div class="bullet-grid">
        <div v-for="(item, i) in initiatives2025" :key="i" class="bullet-item fade-up">
          <span class="bullet-dot" />
          <p>{{ locale === 'ar' ? item.ar : item.en }}</p>
        </div>
      </div>
    </div>

    <!-- 2026 Achievements -->
    <section class="achievements-section-alt">
      <div class="container">
        <h2 class="section-title center">{{ locale === 'ar' ? 'إنجازات فريق يزاك لعام 2026' : 'YZAK Team Achievements in 2026' }}</h2>
        <div class="bullet-grid">
          <div v-for="(item, i) in achievements2026" :key="i" class="bullet-item fade-up">
            <span class="bullet-dot" />
            <p>{{ locale === 'ar' ? item.ar : item.en }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Gallery -->
    <section class="gallery-section">
      <div class="container">
        <h2 class="section-title center">{{ locale === 'ar' ? 'من أنشطة الفريق' : "From the Team's Activities" }}</h2>
        <div class="photo-grid">
          <div v-for="img in photos" :key="img" class="photo-item">
            <img :src="img" :alt="locale === 'ar' ? 'فريق يزاك' : 'Yazak Team'" loading="lazy" />
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-section">
      <div class="container cta-inner">
        <h2>{{ locale === 'ar' ? 'انضم لفريق يزاك' : 'Join Yazak' }}</h2>
        <div class="cta-buttons">
          <NuxtLink :to="localePath('/volunteer/apply')" class="btn btn-primary">{{ locale === 'ar' ? 'سجّل كمتطوع' : 'Register as a Volunteer' }}</NuxtLink>
          <NuxtLink :to="localePath('/projects/volunteer-teams')" class="btn btn-outline-white">{{ locale === 'ar' ? 'كل الفرق التطوعية' : 'All Volunteer Teams' }}</NuxtLink>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
const { locale } = useI18n()
const localePath = useLocalePath()

useHead({
  title: locale.value === 'ar' ? 'فريق يزاك | مؤسسة البحرين ترست' : 'Yazak Team | Bahrain Trust Foundation',
})

const photos = Array.from({ length: 15 }, (_, i) => `/images/projects/volunteer-teams/yazak/photo-${i + 1}.jpg`)

const keyAchievements = [
  { ar: 'تنفيذ مبادرة خاصة داخل الجامعة الأمريكية في البحرين بعنوان «نشر الخير، رسالة واحدة في كل مرة».', en: 'Implemented a dedicated initiative at the American University of Bahrain titled "Spread Goodness, One Message at a Time."' },
  { ar: 'تنفيذ أول مبادرة عامة لكتابة الرسائل في الجامعة الأمريكية في البحرين و Water Garden City.', en: "Launched the team's first public letter-writing initiative at the American University of Bahrain and Water Garden City." },
  { ar: 'تنفيذ المبادرة العامة الثانية في الجامعة الأمريكية في البحرين و Water Garden City والليوان.', en: 'Implemented the second public letter-writing initiative at the American University of Bahrain, Water Garden City, and Al Liwan.' },
  { ar: 'جمع أكثر من 1,200 رسالة إنسانية.', en: 'Collected more than 1,200 heartfelt messages.' },
  { ar: 'تنظيم جلسة لتجهيز وتغليف الهدايا والبطاقات البريدية في Artly، تم خلالها تغليف أكثر من 70 هدية.', en: 'Organized a gift and postcard preparation and wrapping session at Artly, where more than 70 gifts were wrapped.' },
  { ar: 'تنظيم جلسة أخرى في الجامعة الأمريكية في البحرين، تم خلالها تغليف أكثر من 200 هدية، ليصل إجمالي الهدايا المغلفة إلى أكثر من 250 هدية.', en: 'Organized another wrapping session at the American University of Bahrain, wrapping more than 200 gifts, bringing the total to over 250 gifts.' },
  { ar: 'زيارة الأطفال المرضى في مجمع السلمانية الطبي ومستشفى الملك حمد الجامعي.', en: 'Visited children receiving treatment at Salmaniya Medical Complex and King Hamad University Hospital.' },
  { ar: 'توزيع الرسائل والهدايا على الأطفال المرضى، كمرحلة ختامية من المبادرة الأولى للفريق.', en: "Distributed messages and gifts to hospitalized children as the final stage of the team's first initiative." },
  { ar: 'تنظيم حملة للتبرع بالدم بعنوان «دم البطل»، بمشاركة 70 متبرعًا من الجامعة الأمريكية في البحرين.', en: 'Organized a blood donation campaign titled "Hero Blood," with 70 donors from the American University of Bahrain.' },
  { ar: 'تنفيذ مبادرة «30 يومًا من العطاء» ضمن مشروع إفطار صائم.', en: 'Implemented the "30 Days of Giving" initiative as part of the Iftar Meals Project.' },
  { ar: 'جمع 3,000 دينار بحريني لصالح مبادرة إفطار صائم.', en: 'Raised BHD 3,000 in support of the Iftar Meals initiative.' },
  { ar: 'توزيع 4,200 وجبة إفطار صائم.', en: 'Distributed 4,200 Iftar meals.' },
  { ar: 'تنفيذ المبادرة في مشروع «فضاء للجميع» في الرفاع، المعروف سابقاً باسم «فضاء عائشة».', en: 'Implemented the initiative at the "Space for All" project in Riffa, formerly known as "Aisha Space."' },
  { ar: 'توزيع 33 صندوقاً رمضانياً وقسيمة شرائية على الأسر المحتاجة.', en: 'Distributed 33 Ramadan food boxes and shopping vouchers to families in need.' },
  { ar: 'تنظيم فعالية القرقاعون في مركز صفية علي كانو للفنون.', en: 'Organized a Gergaoon celebration at the Safeya Ali Kanoo Hub for Arts.' },
  { ar: 'تنظيم فعالية عيد للأطفال الأيتام والأشخاص من ذوي متلازمة داون في يابيلا.', en: 'Organized an Eid celebration for orphans and individuals with Down syndrome at Yabeela.' },
]

const progress = [
  { pct: 40, ar: 'من هدف توزيع أكثر من 8,000 وجبة وهدية', en: 'of the target of distributing more than 8,000 meals and gifts' },
  { pct: 61, ar: 'من هدف الوصول إلى أكثر من 2,000 متابع على إنستغرام', en: 'of the target of reaching more than 2,000 Instagram followers' },
  { pct: 70, ar: 'من هدف تسجيل 10,000 ساعة تطوعية', en: 'of the target of recording 10,000 volunteer hours' },
  { pct: 42, ar: 'من هدف نشر أكثر من 80 منشوراً', en: 'of the target of publishing more than 80 posts' },
  { pct: 80, ar: 'من هدف إشراك 500 متطوع', en: 'of the target of engaging 500 volunteers' },
]

const initiatives2025 = [
  { ar: 'تنفيذ رحلة خيرية إلى المغرب.', en: 'Organized a humanitarian trip to Morocco.' },
  { ar: 'تطوير وتجهيز الفصول الدراسية في المغرب.', en: 'Developed and equipped classrooms in Morocco.' },
  { ar: 'إنشاء ملعب آمن وتفاعلي للأطفال.', en: 'Established a safe and interactive playground for children.' },
  { ar: 'توزيع الصناديق الرمضانية والحقائب المدرسية.', en: 'Distributed Ramadan food boxes and school bags.' },
  { ar: 'تنظيم مبادرة Out and About لزيارة المستشفيات ومراكز كبار السن.', en: 'Organized the "Out and About" initiative, including visits to hospitals and elderly care centers.' },
  { ar: 'تنظيم فعاليات مجتمعية صغيرة لخدمة مختلف فئات المجتمع.', en: 'Organized small-scale community events serving different segments of society.' },
  { ar: 'تنفيذ مبادرة رمضانية لمدة 30 يوماً.', en: 'Implemented a 30-day Ramadan initiative.' },
  { ar: 'تنظيم حملات لجمع التبرعات ووجبات إفطار صائم والاحتفالات المجتمعية خلال شهر رمضان.', en: 'Organized fundraising campaigns, Iftar meal distributions, and community celebrations during Ramadan.' },
  { ar: 'تنفيذ مبادرة للمنح الدراسية لدعم الطلبة المحتاجين بناءً على جهودهم خلال العام الأكاديمي.', en: 'Implemented a scholarship initiative to support students in need based on their efforts throughout the academic year.' },
  { ar: 'تنفيذ مبادرة «وفد يزاك» لتعليم الشباب وإلهامهم في مجالات العمل الخيري وجمع التبرعات من خلال الورش والحملات.', en: 'Implemented the "YZAK Delegation" initiative to educate and inspire young people in charitable work and fundraising.' },
  { ar: 'تنفيذ مبادرة «تنافس للعطاء»، التي تشجع الطلبة على ابتكار وتنفيذ مشاريع خيرية مؤثرة.', en: 'Implemented the "Compete to Give" initiative, encouraging students to create impactful charitable projects.' },
  { ar: 'تنظيم فعالية للتوعية بسرطان الثدي وجمع التبرعات بالتعاون مع مجلس طلبة الجامعة الأمريكية في البحرين في 7 نوفمبر 2025، تضمنت تلوين الفخار وبيع المخبوزات والرسم على الوجوه.', en: 'Organized a breast cancer awareness and fundraising event with AUBH Student Council on November 7, 2025, including pottery painting, bake sales, and face painting.' },
  { ar: 'تنظيم زيارة ترفيهية إلى «مراعي» بالتعاون مع جمعية التوحديين البحرينية في 24 ديسمبر 2025.', en: 'Organized an entertainment visit to "Maraei" with the Bahrain Autism Society on December 24, 2025.' },
]

const achievements2026 = [
  { ar: 'تنظيم بطولة لكرة القدم بالتعاون مع جمعية السنابل لرعاية الأيتام في 31 يناير 2026.', en: 'Organized a football tournament with Al Sanabel Society for Orphans Care on January 31, 2026.' },
  { ar: 'تنظيم زيارة إلى دار UCO لكبار السن في 17 مارس 2026، تضمنت مشاركة وجبة الإفطار والألعاب مع المقيمين.', en: 'Organized a visit to UCO Elderly Home on March 17, 2026, including sharing Iftar and organizing games with residents.' },
  { ar: 'تنفيذ مبادرة لتوزيع 1,500 وجبة إفطار صائم وهدايا للأطفال في مركز الإيواء بالمحافظة الشمالية في 21 مارس 2026.', en: 'Distributed 1,500 Iftar meals and gifts to children at the Northern Governorate shelter on March 21, 2026.' },
  { ar: 'توزيع 300 وجبة إفطار يومياً لمدة خمسة أيام متتالية، ليصل الإجمالي إلى 1,500 وجبة.', en: 'Distributed 300 Iftar meals daily over five consecutive days, reaching a total of 1,500 meals.' },
  { ar: 'مشاركة أكثر من 150 متطوعاً ومتطوعة في إعداد الوجبات وتوزيعها.', en: 'Engaged more than 150 volunteers in preparing and distributing the meals.' },
  { ar: 'توزيع الهدايا على الأطفال في مركز الإيواء لإدخال الفرح والبهجة ودعم الأسر.', en: 'Distributed gifts to children at the shelter to bring joy and support the families staying there.' },
  { ar: 'تنفيذ مبادرة «30 يوماً من العطاء» خلال شهر رمضان بالتعاون مع فريق «سو خير».', en: 'Implemented the "30 Days of Giving" initiative during Ramadan with the "Sw 5air" team.' },
  { ar: 'توزيع أكثر من 6,500 وجبة إفطار صائم في مختلف مناطق المجتمع.', en: 'Distributed more than 6,500 Iftar meals across different communities.' },
  { ar: 'جمع تبرعات بقيمة 5,079 ديناراً بحرينياً، بما في ذلك التبرعات المقدمة عبر رمز QR.', en: 'Raised BHD 5,079 in donations, including contributions via QR code.' },
  { ar: 'مشاركة أكثر من 80 متطوعاً في تنفيذ المبادرة.', en: 'Engaged more than 80 volunteers in implementing the initiative.' },
  { ar: 'الوصول إلى أربعة مواقع مختلفة ضمن المبادرة الرمضانية.', en: 'Reached four different locations as part of the Ramadan initiative.' },
]
</script>

<style scoped>
.page-hero {
  background: linear-gradient(135deg, var(--red) 0%, #8B0000 100%);
  padding: 60px 0 70px;
  color: white;
  text-align: center;
}
.hero-logo { height: 56px; background: white; padding: 10px 16px; border-radius: 10px; margin-bottom: 20px; }
.hero-eyebrow {
  display: inline-block; font-size: 13px; font-weight: 700; letter-spacing: 1.5px;
  text-transform: uppercase; background: rgba(255,255,255,0.15);
  padding: 5px 16px; border-radius: 20px; margin-bottom: 16px;
}
.page-hero h1 { font-size: clamp(28px,4vw,44px); font-weight: 900; margin-bottom: 10px; }
.page-hero p { font-size: 15px; opacity: 0.9; }

.lead-text { text-align: center; max-width: 700px; margin: 0 auto; font-size: 16px; color: var(--text-light); line-height: 1.9; }
.socials-row { text-align: center; margin-top: 24px; }

.achievements-section { background: var(--off-white); padding: 80px 0; }
.achievements-section-alt { background: white; padding: 80px 0; }

.achievements-list { max-width: 800px; margin: 16px auto 0; display: flex; flex-direction: column; gap: 12px; }
.achievement-item { display: flex; align-items: flex-start; gap: 14px; padding: 14px 18px; background: white; border-radius: var(--radius); box-shadow: 0 2px 8px rgba(0,0,0,0.05); }
.achievements-section-alt .achievement-item { background: var(--off-white); }
.achievement-num {
  flex-shrink: 0; width: 26px; height: 26px; border-radius: 50%; background: var(--red);
  color: white; font-weight: 800; font-size: 12px; display: flex; align-items: center; justify-content: center;
}
.achievement-item p { font-size: 14px; color: var(--dark); line-height: 1.6; }

.progress-title { text-align: center; font-size: 18px; font-weight: 800; color: var(--dark); margin: 48px 0 20px; }
.progress-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; max-width: 800px; margin: 0 auto; }
.progress-card { background: white; border-radius: var(--radius); padding: 16px 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.05); }
.progress-header { display: flex; align-items: baseline; gap: 10px; margin-bottom: 10px; }
.progress-pct { font-size: 22px; font-weight: 900; color: var(--red); flex-shrink: 0; }
.progress-header p { font-size: 13px; color: var(--text-light); line-height: 1.5; }
.progress-bar { height: 8px; background: var(--gray-light); border-radius: 4px; overflow: hidden; }
.progress-fill { height: 100%; background: var(--red); border-radius: 4px; }

.bullet-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; margin-top: 24px; }
.bullet-item { display: flex; align-items: flex-start; gap: 12px; }
.bullet-dot { flex-shrink: 0; width: 8px; height: 8px; border-radius: 50%; background: var(--red); margin-top: 7px; }
.bullet-item p { font-size: 14px; color: var(--text-light); line-height: 1.7; }

.gallery-section { background: var(--off-white); padding: 80px 0; }
.photo-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; margin-top: 16px; }
.photo-item { border-radius: var(--radius); overflow: hidden; aspect-ratio: 4/3; box-shadow: 0 2px 10px rgba(0,0,0,0.06); }
.photo-item img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s; }
.photo-item:hover img { transform: scale(1.06); }

.cta-section { background: var(--dark); padding: 64px 0; }
.cta-inner { text-align: center; color: white; }
.cta-inner h2 { font-size: clamp(24px,3vw,34px); font-weight: 800; margin-bottom: 24px; }
.cta-buttons { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }
.btn-outline-white {
  background: transparent; color: white; border: 2px solid rgba(255,255,255,0.4);
  padding: 12px 28px; border-radius: 4px; font-weight: 700; font-size: 14px;
  text-transform: uppercase; letter-spacing: 0.5px; display: inline-flex; align-items: center; gap: 8px;
  transition: all var(--transition);
}
.btn-outline-white:hover { background: rgba(255,255,255,0.1); border-color: white; }

@media (max-width: 900px) {
  .photo-grid { grid-template-columns: repeat(2, 1fr); }
  .progress-grid { grid-template-columns: 1fr; }
  .bullet-grid { grid-template-columns: 1fr; }
}
@media (max-width: 480px) {
  .photo-grid { grid-template-columns: 1fr; }
}
</style>
