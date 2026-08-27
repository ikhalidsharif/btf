<template>
  <div class="project-page">

    <!-- Hero -->
    <div class="page-hero">
      <div class="container">
        <span class="hero-eyebrow">{{ locale === 'ar' ? 'فن بقلب' : 'Art with Heart' }}</span>
        <h1>{{ locale === 'ar'
          ? 'ليس المهم مقدار ما تقدمه، بل الأهم هو مقدار الحب الذي تغمر به عطائك عند اختيارك لمنتجاتنا.'
          : "It's not about how much you give, but the love you put into your giving when choosing our products." }}</h1>
      </div>
    </div>

    <!-- Intro -->
    <div class="container section">
      <div class="intro-grid">
        <div class="intro-text fade-up">
          <p>{{ locale === 'ar'
            ? 'يعرض متجر الهدايا أعمالاً فنية بحرينية نابعة من التراث والثقافة المحلية، ونعمل على منتجات خاصة يذهب ريعها لمشاريع مؤسسة بحرين ترست الخيرية ولأطفال مرضى السرطان والأمراض المزمنة. ويوفر المتجر منصة تسويق إلكترونية لتلبية احتياجات المتسوقين إلكترونياً أو حضورياً.'
            : "The gift shop showcases Bahraini art, rooted in local culture and heritage. We also offer special products, with proceeds dedicated to Bahrain Trust Foundation's charitable projects, benefiting children with cancer and chronic illnesses. The shop provides an online marketing platform to meet shoppers' needs, whether online or in person." }}</p>
          <div class="intro-ctas">
            <NuxtLink :to="localePath('/donate')" class="btn btn-primary">
              ❤️ {{ locale === 'ar' ? 'ادعم عبر التسوق' : 'Support by Shopping' }}
            </NuxtLink>
            <NuxtLink :to="localePath('/projects/safeya-kanoo-hub')" class="btn btn-outline">
              {{ locale === 'ar' ? 'مركز صفية علي كانو للفنون' : 'Safeya Ali Kanoo Hub for Arts' }}
            </NuxtLink>
            <a href="https://www.instagram.com/btf.giftshop" target="_blank" rel="noopener" class="btn btn-outline">
              📷 {{ locale === 'ar' ? 'إنستغرام' : 'Instagram' }}
            </a>
          </div>
        </div>
        <div class="intro-image fade-up">
          <img src="/images/gift-shop/interior/shop-1.jpg" :alt="locale === 'ar' ? 'متجر الهدايا' : 'Gift Shop'" />
        </div>
      </div>
    </div>

    <!-- What you'll find -->
    <section class="feature-list-section">
      <div class="container">
        <h2 class="section-title center">{{ locale === 'ar' ? 'شنو بتلقى في المتجر؟' : "What You'll Find in the Shop" }}</h2>
        <div class="feature-list-grid">
          <div v-for="f in features" :key="f.titleEn" class="feature-list-card card fade-up">
            <img :src="f.icon" :alt="locale === 'ar' ? f.titleAr : f.titleEn" class="feature-icon-img" loading="lazy" />
            <h3>{{ locale === 'ar' ? f.titleAr : f.titleEn }}</h3>
            <p>{{ locale === 'ar' ? f.textAr : f.textEn }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 3alimny Products -->
    <section class="alimny-section">
      <div class="container">
        <h2 class="section-title center">{{ locale === 'ar' ? 'منتجات معرض "علّمني" لفن الطفل' : '"3alimny" Children\'s Art Exhibition Products' }}</h2>
        <p class="section-subtitle center">{{ locale === 'ar'
          ? 'أعمال فنية للأطفال تعكس إبداعاتهم ومواهبهم، تحوّلت إلى منتجات تدعم استمرار مواهبهم'
          : "Artworks reflecting children's creativity and talent, transformed into products that support their continued growth" }}</p>
        <div class="photo-grid">
          <div v-for="img in alimnyPhotos" :key="img" class="photo-item">
            <img :src="img" :alt="locale === 'ar' ? 'منتجات علّمني' : '3alimny Products'" loading="lazy" />
          </div>
        </div>
        <p class="alimny-note">{{ locale === 'ar'
          ? 'يمكنكم اقتناء منتجاتكم المفضلة من متجرنا بمركز صفية علي كانو للفنون'
          : 'You can shop your favorite products at our Gift Shop, located at Safeya Ali Kanoo Hub for Arts' }}</p>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-section">
      <div class="container cta-inner">
        <h2>{{ locale === 'ar' ? 'كل عملية شراء تحمل قصة' : 'Every Purchase Carries a Story' }}</h2>
        <p>{{ locale === 'ar' ? 'ادعم فناناً، ادعم عائلة، ادعم طفلاً' : 'Support an artist, a family, a child' }}</p>
        <div class="cta-buttons">
          <NuxtLink :to="localePath('/donate')" class="btn btn-primary">❤️ {{ locale === 'ar' ? 'تبرع الآن' : 'Donate Now' }}</NuxtLink>
          <NuxtLink :to="localePath('/projects')" class="btn btn-outline-white">{{ locale === 'ar' ? 'كل المشاريع' : 'All Projects' }}</NuxtLink>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
const { locale } = useI18n()
const localePath = useLocalePath()

useHead({
  title: locale.value === 'ar' ? 'متجر الهدايا | مؤسسة البحرين ترست' : 'Gift Shop | Bahrain Trust Foundation',
})

// Icons self-hosted under /public/images/gift-shop/ (downloaded from the
// old WordPress site before it's decommissioned).
const features = [
  {
    icon: '/images/gift-shop/hospital-schools.png',
    titleAr: 'برنامج علمني', titleEn: '3alimny Program',
    textAr: 'نفخر بدعم الأطفال الموهوبين من مرضى السرطان والأمراض المزمنة، ونحوّل أعمالهم الفنية إلى منتجات تُعرض للبيع بالمتجر.',
    textEn: 'We support talented children with cancer and chronic illnesses, transforming their artwork into products available for sale.',
  },
  {
    icon: '/images/gift-shop/story-writing.png',
    titleAr: 'مسابقة تأليف القصص', titleEn: 'Story Writing Competition',
    textAr: 'قصص المبدعين البحرينيين الفائزة متوفرة بالمتجر وبمكتبات خارجية مثل كشكول الأيام وصوفيا ودار الوقت الثقافي.',
    textEn: 'Winning stories from Bahraini creatives are available in the shop and at bookstores like Kashkool Alayam, Sophia, and Dar Al Waqt.',
  },
  {
    icon: '/images/gift-shop/hub-artists.png',
    titleAr: 'فنانو المركز', titleEn: 'The Hub Artists',
    textAr: 'بالتعاون مع فناني مركز صفية علي كانو للفنون، شارك فنانون بحرينيون بلمساتهم الخاصة لمنتجات المتجر.',
    textEn: 'In collaboration with artists from Safeya Ali Kanoo Hub, Bahraini artists have contributed their unique touches to the shop.',
  },
  {
    icon: '/images/gift-shop/school-backpack.png',
    titleAr: 'الحقيبة المدرسية', titleEn: 'School Backpack',
    textAr: 'كل أرباح الحقيبة المدرسية تذهب لمشاريع المؤسسة الخيرية — بشرائها أنت تكفل طالباً.',
    textEn: 'All backpack profits go to the Foundation\'s charitable projects — by purchasing one, you sponsor a student.',
  },
]

const alimnyPhotos = Array.from({ length: 6 }, (_, i) => `/images/gift-shop/3alimny-products/product-${i + 1}.jpg`)
</script>

<style scoped>
.page-hero {
  background: linear-gradient(135deg, var(--red) 0%, #8B0000 100%);
  padding: 90px 0 70px;
  color: white;
  text-align: center;
}
.hero-eyebrow {
  display: inline-block; font-size: 13px; font-weight: 700; letter-spacing: 1.5px;
  text-transform: uppercase; background: rgba(255,255,255,0.15);
  padding: 5px 16px; border-radius: 20px; margin-bottom: 16px;
}
.page-hero h1 { font-size: clamp(24px,3.2vw,38px); font-weight: 800; line-height: 1.5; max-width: 780px; margin: 0 auto; }

.intro-grid { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 48px; align-items: center; }
.intro-text p { color: var(--text-light); margin-bottom: 16px; font-size: 16px; line-height: 1.9; }
.intro-ctas { display: flex; gap: 14px; margin-top: 24px; flex-wrap: wrap; }
.intro-image img { border-radius: var(--radius); box-shadow: var(--shadow-lg); width: 100%; aspect-ratio: 4/3; object-fit: cover; }

.feature-list-section { background: var(--off-white); padding: 80px 0; }

.alimny-section { background: white; padding: 80px 0; }
.photo-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; margin-top: 16px; }
.photo-item { border-radius: var(--radius); overflow: hidden; aspect-ratio: 4/3; box-shadow: 0 2px 10px rgba(0,0,0,0.06); }
.photo-item img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s; }
.photo-item:hover img { transform: scale(1.06); }
.alimny-note { text-align: center; color: var(--text-light); font-size: 14px; margin-top: 24px; }
.feature-list-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin-top: 16px; }
.feature-list-card { padding: 28px; text-align: center; }
.feature-icon-img { width: 64px; height: 64px; object-fit: contain; display: block; margin: 0 auto 14px; }
.feature-list-card h3 { font-size: 16px; color: var(--dark); margin-bottom: 10px; }
.feature-list-card p { font-size: 13px; color: var(--text-light); line-height: 1.7; }

.cta-section { background: var(--red); padding: 64px 0; }
.cta-inner { text-align: center; color: white; }
.cta-inner h2 { font-size: clamp(24px,3vw,34px); font-weight: 800; margin-bottom: 10px; }
.cta-inner p { opacity: 0.9; margin-bottom: 28px; }
.cta-buttons { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }
.btn-outline-white {
  background: transparent; color: white; border: 2px solid rgba(255,255,255,0.6);
  padding: 12px 28px; border-radius: 4px; font-weight: 700; font-size: 14px;
  text-transform: uppercase; letter-spacing: 0.5px; display: inline-flex; align-items: center; gap: 8px;
  transition: all var(--transition);
}
.btn-outline-white:hover { background: rgba(255,255,255,0.15); border-color: white; }

@media (max-width: 900px) {
  .intro-grid { grid-template-columns: 1fr; }
  .intro-image { order: -1; }
  .feature-list-grid { grid-template-columns: 1fr 1fr; }
  .photo-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 560px) {
  .feature-list-grid { grid-template-columns: 1fr; }
  .photo-grid { grid-template-columns: 1fr; }
}
</style>