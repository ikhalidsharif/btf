<template>
  <div :dir="dir" :lang="locale">
    <!-- Header -->
    <header class="site-header" :class="{ scrolled: isScrolled }">
      <div class="container header-inner">
        <!-- Logo -->
        <NuxtLink :to="localePath('/')" class="logo">
          <img src="/logo.png" alt="Bahrain Trust Foundation" height="52" />
        </NuxtLink>

        <!-- Nav -->
        <nav class="nav-links" :class="{ open: menuOpen }">
          <NuxtLink :to="localePath('/')" @click="menuOpen = false">
            {{ t('nav.home') }}
          </NuxtLink>
          <NuxtLink :to="localePath('/about')" @click="menuOpen = false">
            {{ t('nav.about') }}
          </NuxtLink>
          <NuxtLink :to="localePath('/projects')" @click="menuOpen = false">
            {{ t('nav.projects') }}
          </NuxtLink>
          <NuxtLink :to="localePath('/news')" @click="menuOpen = false">
            {{ t('nav.news') }}
          </NuxtLink>
          <NuxtLink :to="localePath('/contact')" @click="menuOpen = false">
            {{ t('nav.contact') }}
          </NuxtLink>
          <NuxtLink :to="localePath('/donate')" class="btn btn-gold donate-btn" @click="menuOpen = false">
            {{ t('nav.donate') }}
          </NuxtLink>
        </nav>

        <div class="header-actions">
          <!-- Language switcher -->
          <button class="lang-btn" @click="switchLocale">
            {{ locale === 'ar' ? 'EN' : 'ع' }}
          </button>
          <!-- Hamburger -->
          <button class="hamburger" @click="menuOpen = !menuOpen" :aria-label="t('nav.menu')">
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>

    <!-- Main content -->
    <main>
      <slot />
    </main>

    <!-- Footer -->
    <footer class="site-footer">
      <div class="container footer-inner">
        <div class="footer-brand">
          <img src="/logo-white.png" alt="Bahrain Trust Foundation" height="48" />
          <p>{{ t('footer.tagline') }}</p>
        </div>

        <div class="footer-links">
          <h4>{{ t('footer.quickLinks') }}</h4>
          <NuxtLink :to="localePath('/about')">{{ t('nav.about') }}</NuxtLink>
          <NuxtLink :to="localePath('/projects')">{{ t('nav.projects') }}</NuxtLink>
          <NuxtLink :to="localePath('/news')">{{ t('nav.news') }}</NuxtLink>
          <NuxtLink :to="localePath('/contact')">{{ t('nav.contact') }}</NuxtLink>
        </div>

        <div class="footer-contact">
          <h4>{{ t('footer.contact') }}</h4>
          <p>📍 {{ t('footer.address') }}</p>
          <p>📧 info@bahraintrust.org</p>
        </div>

        <div class="footer-newsletter">
          <h4>{{ t('footer.newsletter') }}</h4>
          <p>{{ t('footer.newsletterDesc') }}</p>
          <NuxtLink :to="localePath('/news')" class="btn btn-outline" style="margin-top:12px">
            {{ t('footer.readNews') }}
          </NuxtLink>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="container">
          <p>© {{ new Date().getFullYear() }} Bahrain Trust Foundation. {{ t('footer.rights') }}</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
const { locale, t } = useI18n()
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()

const dir = computed(() => locale.value === 'ar' ? 'rtl' : 'ltr')
const menuOpen = ref(false)
const isScrolled = ref(false)

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
/* ── Header ── */
.site-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(255,255,255,0.95);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid transparent;
  transition: all 0.3s ease;
}
.site-header.scrolled {
  border-bottom-color: var(--gray-light);
  box-shadow: 0 2px 20px rgba(0,0,0,0.08);
}

.header-inner {
  display: flex;
  align-items: center;
  gap: 32px;
  height: 72px;
}

.logo img { height: 52px; width: auto; }

.nav-links {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-inline-start: auto;
  flex-wrap: wrap;
}

.nav-links a {
  padding: 8px 14px;
  border-radius: 8px;
  font-weight: 500;
  font-size: 15px;
  color: var(--text);
  transition: all 0.2s;
}
.nav-links a:hover,
.nav-links a.router-link-active {
  color: var(--green);
  background: rgba(26,107,60,0.07);
}
.nav-links .donate-btn {
  padding: 10px 22px;
  font-size: 14px;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.lang-btn {
  background: var(--gray-light);
  border: none;
  border-radius: 8px;
  padding: 6px 14px;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;
  color: var(--green-dark);
}
.lang-btn:hover { background: var(--green); color: white; }

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
  width: 24px;
  height: 2px;
  background: var(--text);
  border-radius: 2px;
  transition: all 0.2s;
  display: block;
}

/* ── Footer ── */
.site-footer {
  background: var(--green-dark);
  color: rgba(255,255,255,0.85);
  padding-top: 64px;
}

.footer-inner {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.5fr;
  gap: 48px;
  padding-bottom: 48px;
  border-bottom: 1px solid rgba(255,255,255,0.1);
}

.footer-brand img { height: 48px; margin-bottom: 16px; }
.footer-brand p { font-size: 14px; line-height: 1.8; opacity: 0.8; }

.footer-links h4,
.footer-contact h4,
.footer-newsletter h4 {
  font-size: 16px;
  font-weight: 700;
  color: var(--gold-light);
  margin-bottom: 16px;
}

.footer-links {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.footer-links a {
  font-size: 14px;
  opacity: 0.8;
  transition: opacity 0.2s;
}
.footer-links a:hover { opacity: 1; color: var(--gold-light); }

.footer-contact p { font-size: 14px; margin-bottom: 8px; opacity: 0.8; }

.footer-newsletter p { font-size: 14px; opacity: 0.8; }

.footer-bottom {
  padding: 20px 0;
}
.footer-bottom p {
  font-size: 13px;
  opacity: 0.5;
  text-align: center;
}

/* ── Mobile ── */
@media (max-width: 768px) {
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
    padding: 16px 24px 24px;
    box-shadow: 0 8px 24px rgba(0,0,0,0.1);
    gap: 4px;
  }
  .nav-links.open { display: flex; }
  .nav-links a { width: 100%; }

  .footer-inner {
    grid-template-columns: 1fr;
    gap: 32px;
  }
}
</style>
