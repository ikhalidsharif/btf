<template>
  <div class="home">
    <!-- Hero with YouTube Video Background -->
    <section class="hero">
      <!-- YouTube background: lightweight poster first, iframe loads after page is idle -->
      <div class="video-bg">
        <img
          v-if="!heroVideoLoaded"
          src="https://img.youtube.com/vi/EGrbZpgYoj8/hqdefault.jpg"
          alt=""
          class="video-poster"
          fetchpriority="high"
        />
        <iframe
          v-else
          src="https://www.youtube.com/embed/EGrbZpgYoj8?autoplay=1&mute=1&loop=1&playlist=EGrbZpgYoj8&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
          title="Bahrain Trust Foundation"
        />
      </div>
      <!-- Dark overlay -->
      <div class="video-overlay" />

      <!-- Content -->
      <div class="container hero-content">
        <div class="hero-text fade-up">
          <h1>{{ locale === "ar" ? "حكاية مؤسسة بحرين ترست" : "Bahrain Trust Foundation's Story" }}</h1>
          <p>{{ locale === "ar" ? "نعمل من أجل تمكين المجتمع البحريني والأجيال القادمة" : "Empowering communities and shaping the next generation" }}</p>
          <div class="hero-ctas">
            <NuxtLink :to="localePath('/donate')" class="btn btn-donate-hero">
              ❤️ {{ locale === "ar" ? "تبرع الآن" : "Donate Now" }}
            </NuxtLink>
            <a href="https://www.youtube.com/watch?v=EGrbZpgYoj8" target="_blank" rel="noopener" class="btn btn-outline-hero">
              ▶ {{ locale === "ar" ? "شاهد الفيديو" : "Watch the Video" }}
            </a>
          </div>
        </div>
      </div>

      <!-- Stats bar -->
      <div class="stats-bar">
        <div class="container stats-inner">
          <div class="stat">
            <strong>20,508</strong>
            <span>{{ locale === "ar" ? "طالب مستفيد من مدارسنا" : "Beneficiary students from our micro schools" }}</span>
          </div>
          <div class="stat">
            <strong>2,353</strong>
            <span>{{ locale === "ar" ? "حقيبة مدرسية وزعت" : "School bags distributed to students" }}</span>
          </div>
          <div class="stat">
            <strong>1,996</strong>
            <span>{{ locale === "ar" ? "صندوق رمضان وزع" : "Ramadan boxes distributed inside & outside Bahrain" }}</span>
          </div>
        </div>
      </div>
    </section>


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
              ? 'أن يتمكن أفراد المجتمع من تغيير حياتهم نحو الأفضل من خلال خدمات التنمية المستدامة'
              : 'People in the community are able to change their lives for the better through sustainable development services (such as Education, Community Service, and Creative Economy)' }}</p>
          </div>
        </div>

        <div class="pillars">
          <div class="pillar">
            <div class="pillar-icon">🤝</div>
            <p>{{ locale === 'ar'
              ? 'تحسين جودة الحياة من خلال تعزيز مبادرات المجتمع والشراكات المستدامة'
              : 'IMPROVING THE QUALITY OF LIFE BY ENHANCING COMMUNITY INITIATIVES AND SUSTAINABLE PARTNERSHIP' }}</p>
          </div>
          <div class="pillar">
            <div class="pillar-icon">💡</div>
            <p>{{ locale === 'ar'
              ? 'تمكين الأفراد من الاستفادة من الاقتصاد الإبداعي من خلال الحلول المبتكرة'
              : 'EMPOWER INDIVIDUALS TO BENEFIT FROM THE CREATIVE ECONOMY THROUGH INNOVATIVE SOLUTIONS AND VOCATIONAL TRAINING' }}</p>
          </div>
          <div class="pillar">
            <div class="pillar-icon">🎓</div>
            <p>{{ locale === 'ar'
              ? 'تعزيز التعليم الشامل والمستدام محلياً وإقليمياً من خلال برامج مبتكرة'
              : 'ENHANCE INCLUSIVE AND SUSTAINABLE EDUCATION LOCALLY AND REGIONALLY THROUGH INNOVATIVE PROGRAMS' }}</p>
          </div>
        </div>

        <div style="text-align:center;margin-top:32px">
          <NuxtLink :to="localePath('/about')" class="btn-learn-more">
            {{ locale === 'ar' ? 'اعرف أكثر عن المؤسسة' : 'LEARN MORE ABOUT BTF' }}
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Programs Section -->
    <section class="programs-section">
      <div class="container">
        <div class="section-header center">
          <h2 class="section-title">{{ locale === "ar" ? "برامجنا" : "Our Programs" }}</h2>
          <p class="section-subtitle">{{ locale === "ar"
            ? "نعمل عبر ثلاثة محاور رئيسية لإحداث أثر مستدام في المجتمع"
            : "We work across three core pillars to create lasting impact in the community" }}</p>
        </div>

        <div class="programs-grid">

          <!-- EDUCATION -->
          <div class="program-card" @touchstart.passive="eduSwipe.onTouchStart" @touchend="eduSwipe.onTouchEnd">
            <div class="slide-track" :style="{ transform: `translate3d(${-eduIndex * 100}%,0,0)` }">
              <div v-for="slide in education" :key="slide.slug" class="slide" :dir="locale === 'ar' ? 'rtl' : 'ltr'">
                <img :src="slide.image" :alt="slide.title" loading="lazy" decoding="async" />
                <div class="slide-overlay">
                  <div class="slide-content">
                    <h3>{{ locale === "ar" ? "التعليم" : "Education" }}</h3>
                    <p>{{ locale === "ar" ? slide.titleAr : slide.title }}</p>
                    <NuxtLink :to="localePath(slide.slug)" class="slide-btn" :aria-label="(locale === 'ar' ? slide.titleAr : slide.title) + (locale === 'ar' ? ' - اضغط هنا' : ' - Click Here')">
                      {{ locale === "ar" ? "اضغط هنا" : "Click Here" }}
                    </NuxtLink>
                  </div>
                </div>
                <div class="slide-dots">
                  <span v-for="(s, i) in education" :key="i"
                    :class="{ active: i === eduIndex }"
                    @click="eduIndex = i" />
                </div>
              </div>
            </div>
            <button class="slide-prev" @click="eduIndex = (eduIndex - 1 + education.length) % education.length" :aria-label="locale === 'ar' ? 'السابق' : 'Previous'">&#8249;</button>
            <button class="slide-next" @click="eduIndex = (eduIndex + 1) % education.length" :aria-label="locale === 'ar' ? 'التالي' : 'Next'">&#8250;</button>
          </div>

          <!-- COMMUNITY SERVICE -->
          <div class="program-card" @touchstart.passive="comSwipe.onTouchStart" @touchend="comSwipe.onTouchEnd">
            <div class="slide-track" :style="{ transform: `translate3d(${-comIndex * 100}%,0,0)` }">
              <div v-for="slide in community" :key="slide.slug" class="slide" :dir="locale === 'ar' ? 'rtl' : 'ltr'">
                <img :src="slide.image" :alt="slide.title" loading="lazy" decoding="async" />
                <div class="slide-overlay">
                  <div class="slide-content">
                    <h3>{{ locale === "ar" ? "خدمة المجتمع" : "Community Service" }}</h3>
                    <p>{{ locale === "ar" ? slide.titleAr : slide.title }}</p>
                    <NuxtLink :to="localePath(slide.slug)" class="slide-btn" :aria-label="(locale === 'ar' ? slide.titleAr : slide.title) + (locale === 'ar' ? ' - اضغط هنا' : ' - Click Here')">
                      {{ locale === "ar" ? "اضغط هنا" : "Click Here" }}
                    </NuxtLink>
                  </div>
                </div>
                <div class="slide-dots">
                  <span v-for="(s, i) in community" :key="i"
                    :class="{ active: i === comIndex }"
                    @click="comIndex = i" />
                </div>
              </div>
            </div>
            <button class="slide-prev" @click="comIndex = (comIndex - 1 + community.length) % community.length" :aria-label="locale === 'ar' ? 'السابق' : 'Previous'">&#8249;</button>
            <button class="slide-next" @click="comIndex = (comIndex + 1) % community.length" :aria-label="locale === 'ar' ? 'التالي' : 'Next'">&#8250;</button>
          </div>

          <!-- CREATIVE ECONOMY -->
          <div class="program-card" @touchstart.passive="creSwipe.onTouchStart" @touchend="creSwipe.onTouchEnd">
            <div class="slide-track" :style="{ transform: `translate3d(${-creIndex * 100}%,0,0)` }">
              <div v-for="slide in creative" :key="slide.slug" class="slide" :dir="locale === 'ar' ? 'rtl' : 'ltr'">
                <img :src="slide.image" :alt="slide.title" loading="lazy" decoding="async" />
                <div class="slide-overlay">
                  <div class="slide-content">
                    <h3>{{ locale === "ar" ? "الاقتصاد الإبداعي" : "Creative Economy" }}</h3>
                    <p>{{ locale === "ar" ? slide.titleAr : slide.title }}</p>
                    <NuxtLink :to="localePath(slide.slug)" class="slide-btn" :aria-label="(locale === 'ar' ? slide.titleAr : slide.title) + (locale === 'ar' ? ' - اضغط هنا' : ' - Click Here')">
                      {{ locale === "ar" ? "اضغط هنا" : "Click Here" }}
                    </NuxtLink>
                  </div>
                </div>
                <div class="slide-dots">
                  <span v-for="(s, i) in creative" :key="i"
                    :class="{ active: i === creIndex }"
                    @click="creIndex = i" />
                </div>
              </div>
            </div>
            <button class="slide-prev" @click="creIndex = (creIndex - 1 + creative.length) % creative.length" :aria-label="locale === 'ar' ? 'السابق' : 'Previous'">&#8249;</button>
            <button class="slide-next" @click="creIndex = (creIndex + 1) % creative.length" :aria-label="locale === 'ar' ? 'التالي' : 'Next'">&#8250;</button>
          </div>

        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="testimonials-section">
      <div class="container">
        <div class="section-header center">
          <h2 class="section-title">{{ locale === "ar" ? "قصص ملهمة" : "Testimonials" }}</h2>
          <p class="section-subtitle">{{ locale === "ar"
            ? "ماذا يقول المستفيدون والمتطوعون والشركاء عن تجربتهم معنا"
            : "What beneficiaries, volunteers, and partners say about their experience with us" }}</p>
        </div>

        <div class="testimonials-carousel" ref="testiCarouselRef">
          <div class="testimonials-track" ref="testiTrackRef">
            <div
              v-for="(item, i) in testimonialGroups"
              :key="i"
              :ref="(el) => setTestiSlideRef(el, i)"
              class="testimonial-slide"
              :style="{ gridTemplateColumns: `repeat(${item.length}, 1fr)` }"
            >
              <div v-for="t in item" :key="t.nameEn" class="testimonial-card">
                <div class="quote-mark">&ldquo;</div>
                <p class="testimonial-quote">{{ locale === "ar" ? t.quoteAr : t.quoteEn }}</p>
                <div class="testimonial-person">
                  <div class="avatar" :style="{ background: t.color }">{{ t.initial }}</div>
                  <div>
                    <strong>{{ locale === "ar" ? t.nameAr : t.nameEn }}</strong>
                    <span>{{ locale === "ar" ? t.roleAr : t.roleEn }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button
            v-if="testimonialGroups.length > 1"
            class="testi-prev"
            :aria-label="locale === 'ar' ? 'السابق' : 'Previous'"
            @click="prevTesti"
          >&#8249;</button>
          <button
            v-if="testimonialGroups.length > 1"
            class="testi-next"
            :aria-label="locale === 'ar' ? 'التالي' : 'Next'"
            @click="nextTesti"
          >&#8250;</button>

          <div class="testimonial-dots">
            <span v-for="(item, i) in testimonialGroups" :key="i"
              :class="{ active: i === testiIndex }"
              @click="goToTesti(i)" />
          </div>
        </div>
      </div>
    </section>


    <!-- Stories Banner -->
    <section class="stories-banner">
      <NuxtLink :to="localePath('/stories')" class="stories-banner-link">
        <img src="/images/read-our-stories.png" alt="Read Our Stories" class="stories-banner-full-img" loading="lazy" decoding="async" />
      </NuxtLink>
    </section>

    <!-- Latest News -->
    <section class="news-section">
      <div class="container">
        <div class="news-header">
          <div>
            <h2 class="section-title">{{ locale === "ar" ? "آخر الأخبار" : "LATEST NEWS" }}</h2>
            <p class="section-subtitle">{{ locale === "ar" ? "تابع نشراتنا الإخبارية الأخيرة" : "Follow our latest newsletters" }}</p>
          </div>
          <NuxtLink :to="localePath('/news')" class="btn-view-all">
            {{ locale === "ar" ? "عرض الكل" : "VIEW ALL" }} →
          </NuxtLink>
        </div>

        <div class="news-grid">
          <a
            v-for="post in latestNews"
            :key="post._path"
            :href="post.link || localePath(post._path)"
            :target="post.link ? '_blank' : '_self'"
            rel="noopener"
            class="news-card"
          >
            <!-- Issue number badge -->
            <div class="news-issue-badge">
              {{ locale === "ar" ? "العدد" : "Issue" }} {{ locale === "ar" ? post.issue : String(post.issue || "").replace(/[٠-٩]/g, d => String("٠١٢٣٤٥٦٧٨٩".indexOf(d))) }}
            </div>
            <!-- Card content -->
            <div class="news-card-body">
              <div class="news-date">{{ (post.title || "").split(/[-–]/).pop()?.trim() || formatDate(post.date) }}</div>
              <h3>{{ post.title }}</h3>
              <span class="news-read-more">{{ locale === "ar" ? "اقرأ النشرة ←" : "Read Newsletter ←" }}</span>
            </div>
          </a>
        </div>
      </div>
    </section>

    <!-- Donate CTA -->
    <section class="donate-cta">
      <div class="container donate-cta-inner">
        <div class="donate-cta-text">
          <h2>{{ t('home.donate.title') }}</h2>
          <p>{{ t('home.donate.subtitle') }}</p>
        </div>
        <NuxtLink :to="localePath('/donate')" class="btn btn-gold btn-lg">
          ❤️ {{ t('home.donate.cta') }}
        </NuxtLink>
      </div>
    </section>

    <!-- Our Partners -->
    <section class="partners-section">
      <div class="container">
        <div class="section-header center">
          <h2 class="section-title">{{ locale === "ar" ? "شركاؤنا" : "Our Partners" }}</h2>
          <p class="section-subtitle">{{ locale === "ar"
            ? "نفخر بشراكتنا مع مؤسسات تؤمن بأثر العمل المجتمعي"
            : "Proud to partner with organizations that believe in community impact" }}</p>
        </div>
        <div class="partners-grid">
          <div v-for="p in partners" :key="p.name" class="partner-logo">
            <img :src="p.image" :alt="p.name" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const { t, locale } = useI18n()
const localePath = useLocalePath()

useHead({
  title: locale.value === 'ar' ? 'مؤسسة البحرين للتنمية والتطوير' : 'Bahrain Trust Foundation',
})

// ── Hero video (performance) ──
// Show a static YouTube thumbnail immediately; swap in the real iframe only
// once the page is idle/interactive, so the YouTube player's heavy JS never
// blocks first paint / LCP.
const heroVideoLoaded = ref(false)
onMounted(() => {
  const loadHeroVideo = () => { heroVideoLoaded.value = true }
  if ('requestIdleCallback' in window) {
    requestIdleCallback(loadHeroVideo, { timeout: 3000 })
  } else {
    setTimeout(loadHeroVideo, 1500)
  }
})

const stats = [
  { value: '50+', label: 'home.stats.projects' },
  { value: '15+', label: 'home.stats.years' },
  { value: '5000+', label: 'home.stats.beneficiaries' },
  { value: '200+', label: 'home.stats.volunteers' },
]

const projects = [
  {
    labelEn: 'EDUCATION',
    labelAr: 'التعليم',
    slug: '/projects/education',
    image: '/images/projects/education.jpg',
    desc: { ar: 'مشاريع التعليم', en: 'Education Projects' }
  },
  {
    labelEn: 'MICRO-SCHOOLS',
    labelAr: 'المدارس المصغرة',
    slug: '/projects/micro-schools',
    image: '/images/projects/micro-schools.jpg',
    desc: { ar: 'المدارس المصغرة', en: 'Micro-Schools' }
  },
  {
    labelEn: 'COMMUNITY SERVICE',
    labelAr: 'خدمة المجتمع',
    slug: '/projects/community',
    image: '/images/projects/community.jpg',
    desc: { ar: 'خدمة المجتمع', en: 'Community Service' }
  },
  {
    labelEn: 'STORY WRITING',
    labelAr: 'مسابقة تأليف القصص',
    slug: '/projects/story-writing',
    image: '/images/projects/story.jpg',
    desc: { ar: 'مسابقة تأليف القصص', en: 'Story Writing Competition' }
  },
]

const eduIndex = ref(0)
const comIndex = ref(0)
const creIndex = ref(0)

const education = [
  { title: 'SPACE FOR ALL', titleAr: 'فضاء للجميع', slug: '/projects/space-for-all', image: '/images/projects/education-space.jpg' },
  { title: 'DA VINCI TRAINING PROGRAM', titleAr: 'برنامج دافنشي التدريبي', slug: '/projects/da-vinci', image: '/images/projects/education-davinci.jpg' },
  { title: 'STORY WRITING COMPETITION', titleAr: 'مسابقة تأليف القصص', slug: '/projects/story-writing', image: '/images/projects/education-story.jpg' },
  { title: 'MICRO-SCHOOLS', titleAr: 'المدارس المصغرة', slug: '/projects/micro-schools', image: '/images/projects/education-micro.jpg' },
  { title: 'HOSPITAL MICRO SCHOOLS', titleAr: 'مدارس المستشفيات', slug: '/projects/hospital-micro-schools', image: '/images/projects/education-hospital.jpg' },
]

const community = [
  { title: 'GOOD WILL TRIPS', titleAr: 'رحلات الخير', slug: '/projects/good-will-trips', image: '/images/projects/community-goodwill.jpg' },
  { title: 'VOLUNTEER TEAMS', titleAr: 'فرق التطوع', slug: '/projects/volunteer-teams', image: '/images/projects/community-volunteer.jpg' },
  { title: 'IN-KIND SUPPORT', titleAr: 'الدعم العيني', slug: '/projects/in-kind-support', image: '/images/projects/community-inkind.jpg' },
]

const creative = [
  { title: 'SAFEYA ALI KANOO HUB', titleAr: 'مركز صفية علي كانو', slug: '/projects/safeya-kanoo-hub', image: '/images/projects/community.jpg' },
  { title: 'GIFT SHOP', titleAr: 'المتجر', slug: '/gift-shop', image: '/images/projects/creative-giftshop.jpg' },
]

// ── Touch swipe (mobile) ──
// Generic helper: swipe left → next, swipe right → prev.
// Ignores mostly-vertical touches so page scrolling still works normally.
function useSwipe(onNext, onPrev) {
  let startX = 0
  let startY = 0
  return {
    onTouchStart(e) {
      startX = e.touches[0].clientX
      startY = e.touches[0].clientY
    },
    onTouchEnd(e) {
      const dx = e.changedTouches[0].clientX - startX
      const dy = e.changedTouches[0].clientY - startY
      if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) {
        if (dx < 0) onNext()
        else onPrev()
      }
    },
  }
}

const eduSwipe = useSwipe(
  () => { eduIndex.value = (eduIndex.value + 1) % education.length },
  () => { eduIndex.value = (eduIndex.value - 1 + education.length) % education.length },
)
const comSwipe = useSwipe(
  () => { comIndex.value = (comIndex.value + 1) % community.length },
  () => { comIndex.value = (comIndex.value - 1 + community.length) % community.length },
)
const creSwipe = useSwipe(
  () => { creIndex.value = (creIndex.value + 1) % creative.length },
  () => { creIndex.value = (creIndex.value - 1 + creative.length) % creative.length },
)

// ── Testimonials ──
// Placeholder testimonials — replace with real beneficiary/volunteer/partner quotes.
const testimonials = [
  {
    initial: 'م', color: '#E31C26',
    nameAr: 'أم عبدالله', nameEn: 'Umm Abdulla',
    roleAr: 'ولية أمر طالب', roleEn: 'Parent of a Beneficiary Student',
    quoteAr: 'مدارس بحرين ترست غيّرت حياة ابني، صار متحمس للتعلم ويحلم بمستقبل أفضل.',
    quoteEn: "Bahrain Trust's schools changed my son's life — he's now excited to learn and dreams of a better future.",
  },
  {
    initial: 'خ', color: '#3c3950',
    nameAr: 'خالد أحمد', nameEn: 'Khalid Ahmed',
    roleAr: 'متطوع', roleEn: 'Volunteer',
    quoteAr: 'التطوع مع بحرين ترست منحني فرصة حقيقية لخدمة مجتمعي ورؤية الأثر بأم عيني.',
    quoteEn: 'Volunteering with Bahrain Trust gave me a real chance to serve my community and see the impact firsthand.',
  },
  {
    initial: 'س', color: '#00bcd4',
    nameAr: 'سارة المري', nameEn: 'Sara Al Marri',
    roleAr: 'شريكة مؤسسة', roleEn: 'Corporate Partner',
    quoteAr: 'شراكتنا مع بحرين ترست من أنجح مبادرات المسؤولية المجتمعية التي دعمناها.',
    quoteEn: "Our partnership with Bahrain Trust is one of the most successful CSR initiatives we've supported.",
  },
  {
    initial: 'ي', color: '#c8972a',
    nameAr: 'يوسف حسن', nameEn: 'Yousif Hassan',
    roleAr: 'مستفيد من برنامج دافنشي', roleEn: 'Da Vinci Program Graduate',
    quoteAr: 'البرنامج التدريبي فتح لي أبواباً مهنية ما كنت أتخيلها، أشكر كل فريق العمل.',
    quoteEn: 'The training program opened professional doors I never imagined. Grateful to the entire team.',
  },
  {
    initial: 'ن', color: '#8B0000',
    nameAr: 'نورة العلي', nameEn: 'Noora Al Ali',
    roleAr: 'ولية أمر متطوعة', roleEn: 'Parent & Volunteer',
    quoteAr: 'أثق بشفافية بحرين ترست ووضوح أثر كل تبرع، لذلك أستمر بالتبرع كل عام.',
    quoteEn: "I trust Bahrain Trust's transparency and the clear impact of every donation, which is why I give every year.",
  },
]

const testiIndex = ref(0)
const perView = ref(3)
const testiTrackRef = ref(null)
const testiCarouselRef = ref(null)
const testiSlideRefs = ref([])
const testiInView = ref(false)

function setTestiSlideRef(el, i) {
  if (el) testiSlideRefs.value[i] = el
}

function updatePerView() {
  const w = window.innerWidth
  const next = w <= 640 ? 1 : w <= 960 ? 2 : 3
  if (next !== perView.value) {
    testiIndex.value = 0
    testiSlideRefs.value = []
  }
  perView.value = next
}

const testimonialGroups = computed(() => {
  const perGroup = perView.value
  const groups = []
  for (let i = 0; i < testimonials.length; i += perGroup) {
    groups.push(testimonials.slice(i, i + perGroup))
  }
  return groups
})

// Navigation uses the browser's own scrollIntoView — it's direction-aware
// (works correctly in RTL out of the box, no manual scrollLeft sign math)
// and can never push content outside the horizontal viewport. block:'nearest'
// only affects vertical position if the element isn't already visible, which
// is why auto-advance below is gated on the section actually being on screen.
function goToTesti(i) {
  testiSlideRefs.value[i]?.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' })
}
function nextTesti() {
  goToTesti((testiIndex.value + 1) % testimonialGroups.value.length)
}
function prevTesti() {
  goToTesti((testiIndex.value - 1 + testimonialGroups.value.length) % testimonialGroups.value.length)
}

// Keep the dots in sync with whichever slide is actually scrolled into view
// (covers swipe, arrow clicks, and auto-advance uniformly).
let testiObserver
function observeTestiSlides() {
  if (testiObserver) testiObserver.disconnect()
  if (!('IntersectionObserver' in window) || !testiTrackRef.value) return
  testiObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && entry.intersectionRatio > 0.6) {
        const idx = testiSlideRefs.value.indexOf(entry.target)
        if (idx !== -1) testiIndex.value = idx
      }
    })
  }, { root: testiTrackRef.value, threshold: 0.6 })
  testiSlideRefs.value.forEach((el) => el && testiObserver.observe(el))
}

watch(testimonialGroups, () => {
  nextTick(() => observeTestiSlides())
})

// Auto-advance must only run while the section is actually on screen —
// otherwise it silently yanks the whole page back to this section.
let testiVisibilityObserver
let resizeHandler
onMounted(() => {
  updatePerView()
  observeTestiSlides()

  if ('IntersectionObserver' in window && testiCarouselRef.value) {
    testiVisibilityObserver = new IntersectionObserver(
      ([entry]) => { testiInView.value = entry.isIntersecting },
      { threshold: 0.3 },
    )
    testiVisibilityObserver.observe(testiCarouselRef.value)
  } else {
    testiInView.value = true
  }

  setInterval(() => {
    if (testiInView.value) nextTesti()
  }, 6500)

  resizeHandler = () => updatePerView()
  window.addEventListener('resize', resizeHandler)
})
onUnmounted(() => {
  if (resizeHandler) window.removeEventListener('resize', resizeHandler)
  if (testiObserver) testiObserver.disconnect()
  if (testiVisibilityObserver) testiVisibilityObserver.disconnect()
})

// ── Partners ──
// Real logos hotlinked from the old WordPress site (bahraintrust.org blocks
// automated fetching/robots, so these couldn't be downloaded and re-hosted
// locally — verify they still load correctly and consider self-hosting them
// under /public/images/partners/ for reliability once you have the files).
// Only including files whose names clearly identify them as logos; the
// gallery also had ~19 files named like "Screen-Shot-..." or iPhone photo
// UUIDs (e.g. "894E7800-E0C5-...") that could be event photos rather than
// clean logos — add those in once you confirm what they actually are.
const partners = [
  { name: 'Tamkeen', image: 'https://bahraintrust.org/wp-content/uploads/2021/10/tamkeen.png' },
  { name: 'ONE GCC', image: 'https://bahraintrust.org/wp-content/uploads/2021/10/ONEGCC-logo-150x150-1.png' },
  { name: 'Khutwa', image: 'https://bahraintrust.org/wp-content/uploads/2021/10/KhutwaLogo-blue-150x150-1.jpg' },
  { name: 'Baladeya', image: 'https://bahraintrust.org/wp-content/uploads/2021/10/baladeya-logo-smallerx2-150x150-1.jpg' },
  { name: 'Telp', image: 'https://bahraintrust.org/wp-content/uploads/2021/10/Telp-Logo-scaled.jpg' },
]

// Fetch latest 3 news posts
const newsPath = locale.value === 'ar' ? '/ar/news' : '/en/news'
const { data: latestNews } = await useAsyncData('home-news', () =>
  queryContent(newsPath)
    .sort({ date: -1 })
    .limit(3)
    .find()
)

function formatDate(dateStr) {
  if (!dateStr) return ''
  const d = new Date(dateStr)
  return d.toLocaleDateString(locale.value === 'ar' ? 'ar-BH' : 'en-BH', {
    year: 'numeric', month: 'long'
  })
}
</script>

<style scoped>
/* Hero */
.hero {
  position: relative;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: #000;
}

/* YouTube video background */
.video-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
}
.video-bg iframe {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 177.78vh;
  height: 56.25vw;
  min-width: 100%;
  min-height: 100%;
}
.video-poster {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Dark overlay */
.video-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  z-index: 1;
}

.hero-content {
  flex: 1;
  display: flex;
  align-items: center;
  padding-top: 80px;
  padding-bottom: 60px;
  position: relative;
  z-index: 2;
}

.hero-text { max-width: 680px; }

.hero-badge {
  display: inline-block;
  background: rgba(255,255,255,0.15);
  color: rgba(255,255,255,0.9);
  padding: 6px 16px;
  border-radius: 50px;
  font-size: 14px;
  margin-bottom: 24px;
  backdrop-filter: blur(8px);
}

.hero-text h1 {
  font-size: clamp(36px, 5vw, 64px);
  font-weight: 900;
  color: white;
  line-height: 1.15;
  margin-bottom: 20px;
}

.hero-text p {
  font-size: clamp(16px, 2vw, 20px);
  color: rgba(255,255,255,0.85);
  margin-bottom: 36px;
  line-height: 1.8;
}

.hero-ctas { display: flex; gap: 16px; flex-wrap: wrap; }

.btn-donate-hero {
  background: #E31C26;
  color: white;
  padding: 14px 32px;
  border-radius: 3px;
  font-weight: 700;
  font-size: 15px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: all 0.2s;
  border: none;
  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
.btn-donate-hero:hover { background: #b5151e; transform: translateY(-2px); }

.btn-outline-hero {
  background: transparent;
  color: white;
  padding: 14px 32px;
  border-radius: 3px;
  font-weight: 700;
  font-size: 15px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border: 2px solid rgba(255,255,255,0.6);
  transition: all 0.2s;
  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
.btn-outline-hero:hover { background: rgba(255,255,255,0.15); border-color: white; }

/* Stats bar */
.stats-bar {
  background: rgba(0,0,0,0.5);
  backdrop-filter: blur(8px);
  position: relative;
  z-index: 2;
}
.stats-inner {
  display: flex;
  justify-content: space-around;
  padding: 24px 0;
}
.stat {
  text-align: center;
  color: white;
}
.stat strong {
  display: block;
  font-size: 32px;
  font-weight: 900;
  color: var(--gold-light);
}
.stat span { font-size: 14px; opacity: 0.8; }

/* ── News Section ── */
.news-section {
  background: #f4f6f7;
  padding: 80px 0;
}

.news-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 40px;
}

.news-header .section-subtitle { margin-bottom: 0; }

.btn-view-all {
  color: var(--red-dark);
  font-size: 13px;
  font-weight: 700;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: opacity 0.2s;
  white-space: nowrap;
}
.btn-view-all:hover { opacity: 0.7; }

.news-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.news-card {
  background: white;
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  transition: transform 0.2s, box-shadow 0.2s;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
  position: relative;
}

.news-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.12);
}

.news-issue-badge {
  background: #E31C26;
  color: white;
  padding: 6px 16px;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.news-card-body {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
}

.news-date {
  font-size: 12px;
  color: #00bcd4;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.news-card h3 {
  font-size: 16px;
  font-weight: 700;
  color: #3c3950;
  line-height: 1.5;
  flex: 1;
}

.news-read-more {
  font-size: 12px;
  color: #E31C26;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-top: auto;
}

@media (max-width: 768px) {
  .news-grid { grid-template-columns: 1fr; }
  .news-header { flex-direction: column; align-items: flex-start; gap: 12px; }
}

/* Donate CTA */
.donate-cta {
  background: linear-gradient(135deg, var(--gold) 0%, #b5821e 100%);
  padding: 80px 0;
}
.donate-cta-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 32px;
  flex-wrap: wrap;
}
.donate-cta-text h2 {
  font-size: clamp(24px, 3vw, 36px);
  font-weight: 800;
  color: white;
  margin-bottom: 8px;
}
.donate-cta-text p {
  font-size: 17px;
  color: rgba(255,255,255,0.85);
}
.btn-lg { padding: 16px 36px; font-size: 17px; }

/* Mobile */
@media (max-width: 768px) {
  .news-grid { grid-template-columns: 1fr; }
  .stats-inner { flex-wrap: wrap; gap: 24px; }
  .stat { flex: 1 1 40%; }
  .news-header { flex-direction: column; align-items: flex-start; gap: 16px; }
  .donate-cta-inner { flex-direction: column; text-align: center; }
}

/* Mission & Vision */
.mission-section {
  background: white;
  padding: 80px 0;
  text-align: center;
}

.mission-vision {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 48px;
  margin-bottom: 48px;
  flex-wrap: wrap;
}

.mv-block { max-width: 420px; }

.mv-block h2 {
  font-size: 20px;
  font-weight: 800;
  color: #3c3950;
  letter-spacing: 1px;
  margin-bottom: 14px;
  text-transform: uppercase;
}

.mv-block p {
  font-size: 15px;
  color: #5f727f;
  line-height: 1.8;
}

.mv-divider {
  width: 1px;
  background: #dfe5e8;
  min-height: 100px;
  align-self: stretch;
}

.pillars {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin-top: 32px;
  max-width: 900px;
  margin-inline: auto;
}

.pillar {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
}

.pillar-icon {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  background: #f4f6f7;
  border: 2px solid #dfe5e8;
}

.pillar:nth-child(1) .pillar-icon { background: #e8f5e9; border-color: #c8e6c9; }
.pillar:nth-child(2) .pillar-icon { background: #fff3e0; border-color: #ffe0b2; }
.pillar:nth-child(3) .pillar-icon { background: #e3f2fd; border-color: #bbdefb; }

.pillar p {
  font-size: 12px;
  font-weight: 700;
  color: #E31C26;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  line-height: 1.6;
}

.btn-learn-more {
  display: inline-block;
  background: #E31C26;
  color: white;
  padding: 12px 28px;
  border-radius: 3px;
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  text-decoration: none;
  transition: background 0.2s;
}
.btn-learn-more:hover { background: #b5151e; }

@media (max-width: 768px) {
  .pillars { grid-template-columns: 1fr; }
  .mv-divider { display: none; }
  .mission-vision { flex-direction: column; align-items: center; }
}


/* ── Section header (shared) ── */
.section-header.center { text-align: center; max-width: 620px; margin: 0 auto; }
.section-header.center .section-subtitle { margin-bottom: 0; }

/* ── Programs Section ── */
.programs-section {
  background: white;
  padding: 80px 0;
}

.programs-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 44px;
}

.program-card {
  position: relative;
  overflow: hidden;
  height: 420px;
  border-radius: 18px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  transition: transform 0.35s ease, box-shadow 0.35s ease;
  touch-action: pan-y;
}

.program-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 40px rgba(0,0,0,0.18);
}

.slide-track {
  display: flex;
  flex-wrap: nowrap;
  height: 100%;
  transition: transform 0.5s ease;
  will-change: transform;
  backface-visibility: hidden;
  direction: ltr;
}

.slide {
  flex: 0 0 100%;
  width: 100%;
  min-width: 0;
  max-width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  backface-visibility: hidden;
  transform: translateZ(0);
}

.slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.6s ease;
  backface-visibility: hidden;
}

.program-card:hover .slide img {
  transform: scale(1.06);
}

.slide-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0,0,0,0) 30%, rgba(0,0,0,0.55) 70%, rgba(0,0,0,0.85) 100%);
  display: flex;
  align-items: flex-end;
}

.slide-content {
  padding: 26px 24px;
  color: white;
  animation: slideUp 0.5s ease;
  min-height: 140px;
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.slide-content h3 {
  font-size: 20px;
  font-weight: 900;
  letter-spacing: 0.5px;
  margin-bottom: 6px;
  text-shadow: 0 2px 6px rgba(0,0,0,0.4);
}

.slide-content p {
  font-size: 13px;
  letter-spacing: 0.3px;
  margin-bottom: 14px;
  opacity: 0.92;
  line-height: 1.5;
}

.slide-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  border: 1.5px solid rgba(255,255,255,0.8);
  color: white;
  background: rgba(255,255,255,0.08);
  backdrop-filter: blur(4px);
  padding: 9px 22px;
  border-radius: 30px;
  font-size: 12px;
  font-weight: 700;
  text-decoration: none;
  letter-spacing: 0.3px;
  transition: all 0.25s;
}
.slide-btn:hover {
  background: white;
  color: var(--dark);
  border-color: white;
}

.slide-dots {
  position: absolute;
  bottom: 14px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 6px;
  z-index: 2;
}
.slide-dots span {
  width: 7px; height: 7px;
  border-radius: 50%;
  background: rgba(255,255,255,0.5);
  cursor: pointer;
  transition: background 0.2s, transform 0.2s;
}
.slide-dots span.active { background: white; transform: scale(1.2); }

.slide-prev, .slide-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0,0,0,0.25);
  border: none;
  color: white;
  font-size: 24px;
  width: 34px;
  height: 44px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s, opacity 0.2s;
  z-index: 10;
  opacity: 0;
}
.program-card:hover .slide-prev,
.program-card:hover .slide-next { opacity: 1; }
.slide-prev:hover, .slide-next:hover { background: rgba(0,0,0,0.5); }
.slide-prev { left: 0; border-radius: 0 8px 8px 0; }
.slide-next { right: 0; border-radius: 8px 0 0 8px; }

@media (max-width: 900px) {
  .programs-grid { grid-template-columns: 1fr; }
  .program-card { height: 320px; }
}

/* ── Testimonials ── */
.testimonials-section {
  background: var(--off-white, #f4f6f7);
  padding: 80px 0;
}

.testimonials-carousel {
  position: relative;
  margin-top: 44px;
  touch-action: pan-y;
}

.testimonials-track {
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
}
.testimonials-track::-webkit-scrollbar {
  display: none;
}

.testimonial-slide {
  flex: 0 0 100%;
  width: 100%;
  min-width: 0;
  max-width: 100%;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  display: grid;
  gap: 24px;
  align-items: stretch;
}

.testimonial-card {
  background: white;
  border-radius: 16px;
  padding: 32px 28px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.06);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.testimonial-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0,0,0,0.12);
}

.quote-mark {
  font-size: 48px;
  line-height: 1;
  color: var(--red, #E31C26);
  opacity: 0.25;
  font-family: Georgia, serif;
  margin-bottom: 4px;
}

.testimonial-quote {
  font-size: 15px;
  color: #3c3950;
  line-height: 1.8;
  margin-bottom: 24px;
  flex: 1;
  word-break: break-word;
}

.testimonial-person {
  display: flex;
  align-items: center;
  gap: 14px;
  min-width: 0;
}

.avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  color: white;
  font-weight: 800;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.testimonial-person strong {
  display: block;
  font-size: 14px;
  color: #3c3950;
}
.testimonial-person span {
  font-size: 12px;
  color: #5f727f;
}

/* Prev / Next arrows */
.testi-prev, .testi-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: white;
  border: none;
  color: var(--dark, #3c3950);
  font-size: 22px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 16px rgba(0,0,0,0.14);
  transition: background 0.2s, color 0.2s;
  z-index: 10;
}
.testi-prev:hover, .testi-next:hover { background: var(--red, #E31C26); color: white; }
.testi-prev { inset-inline-start: -20px; }
.testi-next { inset-inline-end: -20px; }

.testimonial-dots {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 32px;
}
.testimonial-dots span {
  width: 9px; height: 9px;
  border-radius: 50%;
  background: #dfe5e8;
  cursor: pointer;
  transition: background 0.2s, transform 0.2s;
}
.testimonial-dots span.active { background: var(--red, #E31C26); transform: scale(1.2); }

@media (max-width: 900px) {
  .testi-prev, .testi-next { display: none; }
}

@media (max-width: 480px) {
  .testimonial-card { padding: 24px 20px; }
  .quote-mark { font-size: 38px; }
  .testimonial-quote { font-size: 14px; margin-bottom: 18px; }
}

/* ── Our Partners ── */
.partners-section {
  background: white;
  padding: 80px 0;
}

.partners-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 24px;
  margin-top: 44px;
  align-items: center;
}

.partner-logo {
  background: var(--off-white, #f4f6f7);
  border-radius: 14px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 88px;
  transition: background 0.25s, transform 0.25s;
}

.partner-logo img {
  max-width: 100%;
  max-height: 40px;
  filter: grayscale(100%);
  opacity: 0.6;
  transition: filter 0.3s, opacity 0.3s;
}

.partner-logo:hover {
  background: white;
  box-shadow: 0 8px 24px rgba(0,0,0,0.08);
  transform: translateY(-3px);
}

.partner-logo:hover img {
  filter: grayscale(0%);
  opacity: 1;
}

@media (max-width: 900px) {
  .partners-grid { grid-template-columns: repeat(3, 1fr); }
}
@media (max-width: 480px) {
  .partners-grid { grid-template-columns: repeat(2, 1fr); }
}


/* ── Stories Banner ── */
.stories-banner {
  line-height: 0;
  margin: 0;
}

.stories-banner-link {
  display: block;
  overflow: hidden;
}

.stories-banner-full-img {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.3s;
}

.stories-banner-link:hover .stories-banner-full-img {
  transform: scale(1.01);
}

</style>
