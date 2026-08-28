<template>
  <div :dir="dir" :lang="locale">

    <!-- Top Bar -->
    <div class="top-bar">
      <div class="container top-bar-inner">
        <div class="top-bar-contact">
          <span>📍 {{ locale === 'ar' ? 'مركز صفية علي كانو للفنون، بوغزال، البحرين' : 'Safiya Ali Kanoo Arts Centre, Bughazal, Bahrain' }}</span>
          <span>📞 <span dir="ltr">(+973) 1722 3781</span></span>
        </div>
        <div class="top-bar-actions">
          <a href="https://www.instagram.com/bahraintrust/" target="_blank" class="social-icon">IG</a>
          <a href="https://twitter.com/bahrain_trust" target="_blank" class="social-icon">𝕏</a>
          <a href="https://www.linkedin.com/company/bahrain-trust-foundation/" target="_blank" class="social-icon">IN</a>
          <a href="https://www.facebook.com/BahrainTrustFoundation/" target="_blank" class="social-icon">FB</a>
          <NuxtLink :to="localePath('/volunteer/apply')" class="btn-volunteer">
            {{ locale === 'ar' ? 'انضم كمتطوع' : 'Become a Volunteer' }}
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Header -->
    <header class="site-header" :class="{ scrolled: isScrolled }">
      <div class="container header-inner">

        <!-- Logo -->
        <NuxtLink :to="localePath('/')" class="logo">
          <img src="/logo.png" alt="Bahrain Trust Foundation" height="52" />
        </NuxtLink>

        <!-- Nav -->
        <nav class="nav-links" :class="{ open: menuOpen }">

          <!-- Home -->
          <NuxtLink :to="localePath('/')" class="nav-item" @click="menuOpen = false">
            {{ locale === 'ar' ? 'الرئيسية' : 'Home' }}
          </NuxtLink>

          <!-- About BTF -->
          <div class="nav-item has-dropdown">
            <span>{{ locale === 'ar' ? 'عن المؤسسة' : 'About BTF' }}</span>
            <div class="dropdown">
              <NuxtLink :to="localePath('/about')" @click="menuOpen = false">{{ locale === 'ar' ? 'من نحن' : 'About Us' }}</NuxtLink>
              <NuxtLink :to="localePath('/partners')" @click="menuOpen = false">{{ locale === 'ar' ? 'الشركاء والرعاة' : 'Our Partners & Sponsors' }}</NuxtLink>
              <NuxtLink :to="localePath('/gallery')" @click="menuOpen = false">{{ locale === 'ar' ? 'معرض الصور' : 'Gallery' }}</NuxtLink>
              <NuxtLink :to="localePath('/publications')" @click="menuOpen = false">{{ locale === 'ar' ? 'تقاريرنا السنوية' : 'Our Annual Reports' }}</NuxtLink>
            </div>
          </div>

          <!-- Projects -->
          <div class="nav-item has-dropdown mega">
            <span>{{ locale === 'ar' ? 'المشاريع' : 'Projects' }}</span>
            <div class="dropdown mega-dropdown">
              <div class="mega-col">
                <div class="mega-heading">{{ locale === 'ar' ? 'التعليم المجتمعي' : 'Community Education' }}</div>
                <NuxtLink :to="localePath('/projects/hospital-micro-schools')" @click="menuOpen = false">{{ locale === 'ar' ? 'مدارس المستشفى' : 'Hospital Schools' }}</NuxtLink>
                <NuxtLink :to="localePath('/projects/space-for-all')" @click="menuOpen = false">{{ locale === 'ar' ? 'فضاء للجميع' : 'Space for All' }}</NuxtLink>
                <NuxtLink :to="localePath('/projects/micro-schools')" @click="menuOpen = false">{{ locale === 'ar' ? 'المدارس المصغرة' : 'Micro Schools' }}</NuxtLink>
                <NuxtLink :to="localePath('/projects/ilm-scholarship')" @click="menuOpen = false">{{ locale === 'ar' ? 'منحة علم' : 'Ilm Scholarship' }}</NuxtLink>
                <NuxtLink :to="localePath('/projects/manara-platform')" @click="menuOpen = false">{{ locale === 'ar' ? 'منصة منارة للتعليم' : 'Manara Education Platform' }}</NuxtLink>
                <NuxtLink :to="localePath('/projects/iqraa-platform')" @click="menuOpen = false">{{ locale === 'ar' ? 'منصة إقراء' : 'Iqraa Platform' }}</NuxtLink>
              </div>
              <div class="mega-col">
                <div class="mega-heading">{{ locale === 'ar' ? 'خدمة المجتمع' : 'Community Service' }}</div>
                <NuxtLink :to="localePath('/projects/good-will-trips')" @click="menuOpen = false">{{ locale === 'ar' ? 'رحلات الخير' : 'Good Will Trips' }}</NuxtLink>
                <NuxtLink :to="localePath('/projects/volunteer-teams')" @click="menuOpen = false">{{ locale === 'ar' ? 'الفرق التطوعية' : 'Volunteer Teams' }}</NuxtLink>
                <NuxtLink :to="localePath('/projects/nafea-platform')" @click="menuOpen = false">{{ locale === 'ar' ? 'منصة نافع للمتطوعين' : 'Nafea Volunteer Platform' }}</NuxtLink>
                <NuxtLink :to="localePath('/projects/charity-sustainability-fund')" @click="menuOpen = false">{{ locale === 'ar' ? 'صندوق الاستدامة الخيري' : 'Charity Sustainability Fund' }}</NuxtLink>
                <NuxtLink :to="localePath('/projects/in-kind-support')" @click="menuOpen = false">{{ locale === 'ar' ? 'مبادراتنا مع المجتمع' : 'Our Community Initiatives' }}</NuxtLink>
                <NuxtLink :to="localePath('/events')" @click="menuOpen = false">{{ locale === 'ar' ? 'فعالياتنا' : 'Our Events' }}</NuxtLink>
              </div>
              <div class="mega-col">
                <div class="mega-heading">{{ locale === 'ar' ? 'الإبداع والابتكار' : 'Creativity & Innovation' }}</div>
                <NuxtLink :to="localePath('/projects/safeya-kanoo-hub')" @click="menuOpen = false">{{ locale === 'ar' ? 'مركز صفية علي كانو للفنون' : 'Safeya Ali Kanoo Hub for Arts' }}</NuxtLink>
                <NuxtLink :to="localePath('/gift-shop')" @click="menuOpen = false">{{ locale === 'ar' ? 'متجر الهدايا' : 'Gift Shop' }}</NuxtLink>
                <NuxtLink :to="localePath('/projects/story-writing-competition')" @click="menuOpen = false">{{ locale === 'ar' ? 'مسابقة تأليف قصص الأطفال والناشئة' : 'Children & Youth Story Writing Competition' }}</NuxtLink>
                <NuxtLink :to="localePath('/projects/quran-competition')" @click="menuOpen = false">{{ locale === 'ar' ? 'مسابقة محمد بن يوسف البلوشي لتلاوة وحفظ القرآن الكريم' : 'Mohammed bin Yousif Al Baloushi Quran Competition' }}</NuxtLink>
                <NuxtLink :to="localePath('/projects/3alimny-exhibition')" @click="menuOpen = false">{{ locale === 'ar' ? 'معرض "علّمني" لفن الطفل' : '"3alimny" Child Art Exhibition' }}</NuxtLink>
                <NuxtLink :to="localePath('/projects/bahraini-woman-portrait')" @click="menuOpen = false">{{ locale === 'ar' ? 'معرض "بورتريه المرأة البحرينية"' : '"Portrait of the Bahraini Woman" Exhibition' }}</NuxtLink>
              </div>
            </div>
          </div>

          <!-- News -->
          <NuxtLink :to="localePath('/news')" class="nav-item" @click="menuOpen = false">
            {{ locale === 'ar' ? 'الأخبار' : 'News' }}
          </NuxtLink>

          <!-- Events -->
          <NuxtLink :to="localePath('/events')" class="nav-item" @click="menuOpen = false">
            {{ locale === 'ar' ? 'الفعاليات' : 'Events' }}
          </NuxtLink>

          <!-- Donate -->
          <NuxtLink :to="localePath('/donate')" class="nav-item" @click="menuOpen = false">
            {{ locale === 'ar' ? 'تبرع' : 'Donate' }}
          </NuxtLink>

          <!-- Gift Shop -->
          <NuxtLink :to="localePath('/gift-shop')" class="nav-item" @click="menuOpen = false">
            {{ locale === 'ar' ? 'المتجر' : 'Gift Shop' }}
          </NuxtLink>

          <!-- Volunteer -->
          <NuxtLink :to="localePath('/volunteer/apply')" class="nav-item" @click="menuOpen = false">
            {{ locale === 'ar' ? 'تطوع' : 'Volunteer' }}
          </NuxtLink>

          <!-- Contact -->
          <NuxtLink :to="localePath('/contact')" class="nav-item" @click="menuOpen = false">
            {{ locale === 'ar' ? 'تواصل' : 'Contact' }}
          </NuxtLink>

        </nav>

        <div class="header-actions">
          <!-- Language switcher -->
          <button class="lang-btn" @click="switchLocale">
            {{ locale === 'ar' ? 'EN' : 'ع' }}
          </button>
          <!-- Hamburger -->
          <button class="hamburger" @click="menuOpen = !menuOpen" aria-label="Menu">
            <span /><span /><span />
          </button>
        </div>

      </div>
    </header>

    <!-- Main -->
    <main>
      <slot />
    </main>

    <!-- Footer -->
    <footer class="site-footer">
      <div class="container footer-inner">
        <div class="footer-brand">
          <img src="/logo.png" alt="Bahrain Trust Foundation" height="48" />
          <p>{{ locale === 'ar' ? 'مؤسسة خيرية بحرينية تعمل على تمكين المجتمع وتطوير الإنسان' : 'A Bahraini charitable foundation empowering communities and developing people' }}</p>
          <div class="footer-socials">
            <a href="https://www.facebook.com/BahrainTrustFoundation/" target="_blank">FB</a>
            <a href="https://twitter.com/bahrain_trust" target="_blank">𝕏</a>
            <a href="https://www.linkedin.com/company/bahrain-trust-foundation/" target="_blank">IN</a>
            <a href="https://www.instagram.com/bahraintrust/" target="_blank">IG</a>
          </div>
        </div>

        <div class="footer-links">
          <h3 class="footer-heading">{{ locale === 'ar' ? 'روابط سريعة' : 'Quick Links' }}</h3>
          <NuxtLink :to="localePath('/about')">{{ locale === 'ar' ? 'عن المؤسسة' : 'About Us' }}</NuxtLink>
          <NuxtLink :to="localePath('/projects')">{{ locale === 'ar' ? 'المشاريع' : 'Projects' }}</NuxtLink>
          <NuxtLink :to="localePath('/news')">{{ locale === 'ar' ? 'الأخبار' : 'News' }}</NuxtLink>
          <NuxtLink :to="localePath('/donate')">{{ locale === 'ar' ? 'تبرع' : 'Donate' }}</NuxtLink>
          <NuxtLink :to="localePath('/volunteer/apply')">{{ locale === 'ar' ? 'تطوع' : 'Volunteer' }}</NuxtLink>
          <NuxtLink :to="localePath('/contact')">{{ locale === 'ar' ? 'تواصل معنا' : 'Contact' }}</NuxtLink>
        </div>

        <div class="footer-contact">
          <h3 class="footer-heading">{{ locale === 'ar' ? 'تواصل معنا' : 'Contact Us' }}</h3>
          <p>📍 {{ locale === 'ar' ? 'مركز صفية علي كانو للفنون، بوغزال، البحرين' : 'Safiya Ali Kanoo Hub for Arts, Bughazal, Bahrain' }}</p>
          <p>📞 <span dir="ltr">(+973) 1722 3781</span></p>
          <p>📧 info@bahraintrust.org</p>
          <p>🌐 www.bahraintrust.org</p>
        </div>

        <div class="footer-donate">
          <h3 class="footer-heading">{{ locale === 'ar' ? 'ادعم مشاريعنا' : 'Support Our Projects' }}</h3>
          <p>{{ locale === 'ar' ? 'تبرعك يصنع فرقاً في حياة الأسر البحرينية' : 'Your donation makes a difference in Bahraini families lives' }}</p>
          <NuxtLink :to="localePath('/donate')" class="btn-footer-donate">
            ❤️ {{ locale === 'ar' ? 'تبرع الآن' : 'Donate Now' }}
          </NuxtLink>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="container">
          <p>© {{ new Date().getFullYear() }} Bahrain Trust Foundation. {{ locale === 'ar' ? 'جميع الحقوق محفوظة' : 'All rights reserved' }}</p>
        </div>
      </div>
    </footer>

  </div>
</template>

<script setup>
const { locale } = useI18n()
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()

const dir = computed(() => locale.value === 'ar' ? 'rtl' : 'ltr')
const menuOpen = ref(false)
const isScrolled = ref(false)

useHead({
  htmlAttrs: {
    lang: computed(() => locale.value === 'ar' ? 'ar' : 'en'),
    dir,
  },
})

function switchLocale() {
  const newLocale = locale.value === 'ar' ? 'en' : 'ar'
  navigateTo(switchLocalePath(newLocale))
}

onMounted(() => {
  window.addEventListener('scroll', () => {
    isScrolled.value = window.scrollY > 60
  })
})
</script>

<style scoped>
/* ── Top Bar ── */
.top-bar {
  background: #212331;
  color: #99a9b5;
  font-size: 13px;
  padding: 8px 0;
}
.top-bar-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.top-bar-contact { display: flex; gap: 20px; }
.top-bar-actions { display: flex; align-items: center; gap: 12px; }
.social-icon {
  color: #99a9b5;
  font-size: 11px;
  font-weight: 700;
  text-decoration: none;
  transition: color 0.2s;
}
.social-icon:hover { color: #00bcd4; }
.btn-volunteer {
  background: #00bcd4;
  color: white;
  padding: 5px 14px;
  border-radius: 3px;
  font-size: 11px;
  font-weight: 700;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: background 0.2s;
}
.btn-volunteer:hover { background: #0097a7; }

/* ── Header ── */
.site-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: white;
  border-bottom: 1px solid #f0f0f0;
  transition: box-shadow 0.3s;
}
.site-header.scrolled {
  box-shadow: 0 2px 20px rgba(0,0,0,0.08);
}
.header-inner {
  display: flex;
  align-items: center;
  gap: 8px;
  height: 72px;
}
.logo img { height: 52px; width: auto; }

/* ── Nav ── */
.nav-links {
  display: flex;
  align-items: center;
  gap: 2px;
  margin-inline-start: auto;
}

.nav-item {
  position: relative;
  padding: 8px 12px;
  font-size: 13px;
  font-weight: 700;
  color: #3c3950;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  cursor: pointer;
  transition: color 0.2s;
  white-space: nowrap;
}
.nav-item:hover, .nav-item.router-link-active { color: #E31C26; }

/* Dropdown */
.has-dropdown { position: relative; }
.has-dropdown:hover .dropdown { display: block; }

.dropdown {
  display: none;
  position: absolute;
  top: 100%;
  inset-inline-start: 0;
  background: white;
  min-width: 220px;
  border-top: 3px solid #E31C26;
  box-shadow: 0 8px 24px rgba(0,0,0,0.12);
  z-index: 200;
}
.dropdown a {
  display: block;
  padding: 12px 20px;
  font-size: 12px;
  font-weight: 500;
  color: #5f727f;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border-bottom: 1px solid #f0f0f0;
  transition: all 0.2s;
}
.dropdown a:hover {
  color: #E31C26;
  background: #f8f8f8;
  padding-inline-start: 24px;
}

/* Mega Menu */
.mega-dropdown {
  display: none;
  position: absolute;
  top: 100%;
  inset-inline-start: 0;
  background: white;
  min-width: 600px;
  border-top: 3px solid #E31C26;
  box-shadow: 0 8px 24px rgba(0,0,0,0.12);
  z-index: 200;
  flex-direction: row;
  gap: 0;
}
.has-dropdown.mega:hover .mega-dropdown { display: flex; }

.mega-col {
  flex: 1;
  border-inline-end: 1px solid #f0f0f0;
  padding: 8px 0;
}
.mega-col:last-child { border-inline-end: none; }

.mega-heading {
  padding: 12px 20px 8px;
  font-size: 11px;
  font-weight: 700;
  color: #E31C26;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-bottom: 1px solid #f0f0f0;
}

.mega-col a {
  display: block;
  padding: 10px 20px;
  font-size: 12px;
  font-weight: 500;
  color: #5f727f;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.3px;
  transition: all 0.2s;
  border-bottom: 1px solid #f8f8f8;
}
.mega-col a:hover {
  color: #E31C26;
  background: #f8f8f8;
  padding-inline-start: 26px;
}

/* Header actions */
.header-actions { display: flex; align-items: center; gap: 8px; }
.lang-btn {
  background: #f0f0f0;
  border: none;
  border-radius: 4px;
  padding: 6px 12px;
  font-weight: 700;
  font-size: 13px;
  cursor: pointer;
  color: #3c3950;
  transition: all 0.2s;
}
.lang-btn:hover { background: #E31C26; color: white; }
.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
}
.hamburger span {
  width: 24px; height: 2px;
  background: #3c3950;
  border-radius: 2px;
  display: block;
}

/* ── Footer ── */
.site-footer {
  background: #3c3950;
  color: rgba(255,255,255,0.8);
  padding-top: 56px;
}
.footer-inner {
  display: grid;
  grid-template-columns: 2fr 1fr 1.2fr 1.2fr;
  gap: 40px;
  padding-bottom: 40px;
  border-bottom: 1px solid rgba(255,255,255,0.1);
}
.footer-brand p { font-size: 13px; line-height: 1.8; opacity: 0.7; margin-top: 12px; }
.footer-socials { display: flex; gap: 10px; margin-top: 16px; }
.footer-socials a {
  background: rgba(255,255,255,0.1);
  color: white;
  width: 32px; height: 32px;
  display: flex; align-items: center; justify-content: center;
  border-radius: 4px;
  font-size: 11px;
  font-weight: 700;
  text-decoration: none;
  transition: background 0.2s;
}
.footer-socials a:hover { background: #00bcd4; }

.footer-heading {
  font-size: 13px;
  font-weight: 700;
  color: #00bcd4;
  margin-bottom: 16px;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.footer-links { display: flex; flex-direction: column; gap: 8px; }
.footer-links a { font-size: 13px; opacity: 0.7; text-decoration: none; transition: opacity 0.2s; }
.footer-links a:hover { opacity: 1; color: #00bcd4; }
.footer-contact p { font-size: 13px; opacity: 0.7; margin-bottom: 8px; }
.footer-donate p { font-size: 13px; opacity: 0.7; margin-bottom: 16px; }
.btn-footer-donate {
  display: inline-block;
  background: #E31C26;
  color: white;
  padding: 10px 20px;
  border-radius: 3px;
  font-size: 13px;
  font-weight: 700;
  text-decoration: none;
  text-transform: uppercase;
  transition: background 0.2s;
}
.btn-footer-donate:hover { background: #b5151e; }

.footer-bottom { padding: 20px 0; }
.footer-bottom p { font-size: 12px; color: #b5b3c2; text-align: center; }

/* ── Mobile ── */
@media (max-width: 900px) {
  .top-bar { display: none; }
  .hamburger { display: flex; }
  .nav-links {
    display: none;
    position: absolute;
    top: 72px;
    inset-inline-start: 0;
    inset-inline-end: 0;
    background: white;
    flex-direction: column;
    align-items: flex-start;
    padding: 16px;
    box-shadow: 0 8px 24px rgba(0,0,0,0.1);
    gap: 0;
    max-height: 80vh;
    overflow-y: auto;
  }
  .nav-links.open { display: flex; }
  .nav-item { width: 100%; }
  .dropdown, .mega-dropdown { position: static; display: flex !important; flex-direction: column; box-shadow: none; border: none; padding-inline-start: 16px; }
  .mega-col { border: none; }
  .footer-inner { grid-template-columns: 1fr; gap: 24px; }
}
</style>
