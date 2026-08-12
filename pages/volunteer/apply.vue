<template>
  <div class="apply-page">

    <!-- Hero -->
    <div class="page-hero">
      <div class="container">
        <span class="hero-eyebrow">{{ locale === 'ar' ? 'تطوّع معنا' : 'Volunteer With Us' }}</span>
        <h1>{{ locale === 'ar' ? 'تطوّع ويانا للخير' : 'Volunteer for Good' }}</h1>
        <p>{{ locale === 'ar'
          ? 'في مؤسسة بحرين ترست نؤمن إن العطاء يصنع فرق ❤️ إذا ودّك تكون جزء من مبادراتنا، سجّل معانا كمتطوع 🌟'
          : 'At Bahrain Trust Foundation, we believe that giving makes a difference ❤️ If you would like to be part of our initiatives, register with us as a volunteer 🌟' }}</p>
      </div>
    </div>

    <div class="container section">

      <!-- Success state -->
      <div v-if="submitted" class="success-card card fade-up">
        <div class="success-icon">✓</div>
        <h2>{{ locale === 'ar' ? 'شكراً لتسجيلك معنا!' : 'Thank you for registering!' }}</h2>
        <p>{{ locale === 'ar'
          ? 'وصلنا طلبك وبنتواصل معاك قريباً. بعد التسجيل، انضم لمجموعة الواتساب المخصصة للتطوع:'
          : "We've received your application and will be in touch soon. After registering, please join our volunteering WhatsApp group:" }}</p>
        <a href="https://chat.whatsapp.com/LlUZkG9cD3F3ejmfFGbfJ5" target="_blank" rel="noopener" class="btn btn-primary">
          💬 {{ locale === 'ar' ? 'انضم لمجموعة الواتساب' : 'Join WhatsApp Group' }}
        </a>
        <a href="https://drive.google.com/drive/folders/1AQhersL2m3Ym01XfcenaWIiqg_MPqDER" target="_blank" rel="noopener" class="btn btn-outline">
          {{ locale === 'ar' ? 'اعرف أكثر عن مشاريعنا' : 'Learn More About Our Projects' }}
        </a>
      </div>

      <!-- Form -->
      <form v-else class="apply-form card fade-up" @submit.prevent="handleSubmit">

        <!-- Personal info -->
        <h2 class="form-section-title">{{ locale === 'ar' ? 'البيانات الشخصية' : 'Personal Information' }}</h2>

        <div class="form-row">
          <div class="form-group">
            <label>{{ locale === 'ar' ? 'الاسم الكامل' : 'Full Name' }} *</label>
            <input v-model="form.fullName" type="text" required class="form-input" />
          </div>
          <div class="form-group">
            <label>{{ locale === 'ar' ? 'تاريخ الميلاد' : 'Birth Date' }} *</label>
            <input v-model="form.birthDate" type="date" required class="form-input" />
          </div>
        </div>

        <div class="form-group">
          <label>{{ locale === 'ar' ? 'الجنس' : 'Gender' }} *</label>
          <div class="radio-row">
            <label class="radio-pill"><input v-model="form.gender" type="radio" value="male" required /> {{ locale === 'ar' ? 'ذكر' : 'Male' }}</label>
            <label class="radio-pill"><input v-model="form.gender" type="radio" value="female" required /> {{ locale === 'ar' ? 'أنثى' : 'Female' }}</label>
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label>{{ locale === 'ar' ? 'الجنسية' : 'Nationality' }} *</label>
            <input v-model="form.nationality" type="text" required class="form-input" />
          </div>
          <div class="form-group">
            <label>{{ locale === 'ar' ? 'رقم الهوية (CPR)' : 'CPR Number' }} *</label>
            <input v-model="form.cpr" type="text" required class="form-input" dir="ltr" />
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label>{{ locale === 'ar' ? 'البريد الإلكتروني' : 'Email' }} *</label>
            <input v-model="form.email" type="email" required class="form-input" dir="ltr" />
          </div>
          <div class="form-group">
            <label>{{ locale === 'ar' ? 'رقم الهاتف' : 'Phone Number' }} *</label>
            <input v-model="form.phone" type="tel" required class="form-input" dir="ltr" placeholder="+973 XXXX XXXX" />
          </div>
        </div>

        <div class="form-group">
          <label>{{ locale === 'ar' ? 'المنطقة | العنوان' : 'Region | Address' }} *</label>
          <input v-model="form.address" type="text" required class="form-input" />
        </div>

        <!-- Education -->
        <h2 class="form-section-title">{{ locale === 'ar' ? 'المؤهل العلمي' : 'Education' }}</h2>

        <div class="form-group">
          <label>{{ locale === 'ar' ? 'المؤهل العلمي' : 'Educational Qualification' }} *</label>
          <div class="radio-row">
            <label class="radio-pill"><input v-model="form.qualification" type="radio" value="high_school" required /> {{ locale === 'ar' ? 'ثانوي' : 'High School' }}</label>
            <label class="radio-pill"><input v-model="form.qualification" type="radio" value="bachelors" required /> {{ locale === 'ar' ? 'بكالريوس' : "Bachelor's" }}</label>
            <label class="radio-pill"><input v-model="form.qualification" type="radio" value="phd" required /> {{ locale === 'ar' ? 'دكتوراه' : 'PhD' }}</label>
            <label class="radio-pill"><input v-model="form.qualification" type="radio" value="other" required /> {{ locale === 'ar' ? 'أخرى' : 'Other' }}</label>
          </div>
        </div>

        <div class="form-group">
          <label>{{ locale === 'ar' ? 'ما هو تخصصك الدراسي' : 'What is your field of study' }} *</label>
          <input v-model="form.fieldOfStudy" type="text" required class="form-input" />
        </div>

        <div class="form-group">
          <label>{{ locale === 'ar'
            ? 'هل لديك أي حالات صحية أو ظروف خاصة يجب أخذها بعين الاعتبار؟'
            : 'Do you have any health conditions or special circumstances that should be taken into consideration?' }} *</label>
          <div class="radio-row">
            <label class="radio-pill"><input v-model="form.healthConditions" type="radio" value="yes" required /> {{ locale === 'ar' ? 'نعم' : 'Yes' }}</label>
            <label class="radio-pill"><input v-model="form.healthConditions" type="radio" value="no" required /> {{ locale === 'ar' ? 'لا' : 'No' }}</label>
            <label class="radio-pill"><input v-model="form.healthConditions" type="radio" value="maybe" required /> {{ locale === 'ar' ? 'ربما' : 'Maybe' }}</label>
          </div>
        </div>

        <!-- Volunteer experience -->
        <h2 class="form-section-title">{{ locale === 'ar' ? 'الخبرات التطوعية السابقة' : 'Previous Volunteer Experience' }}</h2>

        <div class="form-group">
          <label>{{ locale === 'ar' ? 'هل سبق لك التطوع من قبل؟' : 'Have you volunteered before?' }} *</label>
          <div class="radio-row">
            <label class="radio-pill"><input v-model="form.volunteeredBefore" type="radio" value="yes" required /> {{ locale === 'ar' ? 'نعم' : 'Yes' }}</label>
            <label class="radio-pill"><input v-model="form.volunteeredBefore" type="radio" value="no" required /> {{ locale === 'ar' ? 'لا' : 'No' }}</label>
          </div>
        </div>

        <div v-if="form.volunteeredBefore === 'yes'" class="form-group">
          <label>{{ locale === 'ar'
            ? 'يرجى ذكر الجهات والأنشطة التي شاركت بها'
            : 'Please mention the organizations and activities you participated in' }} *</label>
          <textarea v-model="form.previousExperience" required rows="3" class="form-input" />
        </div>

        <div class="form-group">
          <label>{{ locale === 'ar'
            ? 'المهارات التي تمتلكها (يمكن اختيار أكثر من واحدة)'
            : 'Skills you possess (you may select more than one)' }} *</label>
          <div class="checkbox-grid">
            <label v-for="s in skillOptions" :key="s.value" class="checkbox-pill">
              <input v-model="form.skills" type="checkbox" :value="s.value" />
              {{ locale === 'ar' ? s.ar : s.en }}
            </label>
          </div>
        </div>

        <div class="form-group">
          <label>{{ locale === 'ar' ? 'لماذا ترغب في التطوع معنا؟' : 'Why would you like to volunteer with us?' }} *</label>
          <textarea v-model="form.motivation" required rows="4" class="form-input" />
        </div>

        <div class="form-group">
          <label>{{ locale === 'ar'
            ? 'ما هي المشاريع أو المجالات التي ترغب في التطوع فيها؟ (يمكنك اختيار أكثر من خيار)'
            : 'Which projects or areas would you like to volunteer in? (You may select more than one option)' }} *</label>
          <div class="checkbox-grid">
            <label v-for="p in projectOptions" :key="p.value" class="checkbox-pill">
              <input v-model="form.projects" type="checkbox" :value="p.value" />
              {{ locale === 'ar' ? p.ar : p.en }}
            </label>
          </div>
          <label class="checkbox-pill other-pill">
            <input v-model="form.projectsHasOther" type="checkbox" />
            {{ locale === 'ar' ? 'أخرى:' : 'Other:' }}
            <input v-if="form.projectsHasOther" v-model="form.projectsOther" type="text" class="other-input" @click.stop />
          </label>
        </div>

        <div v-if="errorMsg" class="form-error">{{ errorMsg }}</div>

        <button type="submit" class="btn btn-primary submit-btn" :disabled="loading">
          <span v-if="loading">{{ locale === 'ar' ? 'جاري الإرسال...' : 'Submitting...' }}</span>
          <span v-else>{{ locale === 'ar' ? 'إرسال التسجيل' : 'Submit Registration' }}</span>
        </button>
      </form>

      <!-- Contact info -->
      <div class="contacts-card card fade-up">
        <h3>{{ locale === 'ar' ? 'للتواصل مع القائمين على المشاريع عبر الواتساب' : 'Contact project coordinators via WhatsApp' }}</h3>
        <ul class="contacts-list">
          <li v-for="c in contacts" :key="c.nameEn">
            <span>{{ locale === 'ar' ? c.nameAr : c.nameEn }}</span>
            <a :href="`https://wa.me/973${c.phone}`" target="_blank" rel="noopener" dir="ltr">{{ c.phone }}</a>
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script setup>
const { locale } = useI18n()

useHead({
  title: locale.value === 'ar' ? 'تطوّع معنا | مؤسسة البحرين ترست' : 'Volunteer With Us | Bahrain Trust Foundation',
})

const form = reactive({
  fullName: '',
  gender: '',
  birthDate: '',
  nationality: '',
  cpr: '',
  email: '',
  phone: '',
  address: '',
  qualification: '',
  fieldOfStudy: '',
  healthConditions: '',
  volunteeredBefore: '',
  previousExperience: '',
  skills: [],
  motivation: '',
  projects: [],
  projectsHasOther: false,
  projectsOther: '',
})

const skillOptions = [
  { value: 'translation', ar: 'الترجمة', en: 'Translation' },
  { value: 'photography', ar: 'التصوير الفوتوغرافي', en: 'Photography' },
  { value: 'content_design', ar: 'تصميم المحتوى', en: 'Content Design' },
  { value: 'marketing_pr', ar: 'التسويق والعلاقات العامة', en: 'Marketing and Public Relations' },
  { value: 'event_organization', ar: 'تنظيم الفعاليات', en: 'Event Organization' },
  { value: 'teaching_training', ar: 'التدريس أو التدريب', en: 'Teaching or Training' },
  { value: 'logistics', ar: 'الدعم اللوجستي', en: 'Logistical Support' },
  { value: 'drawing_arts', ar: 'الرسم أو الفنون التشكيلية', en: 'Drawing or Visual Arts' },
  { value: 'campaigns_fundraising', ar: 'حملات توعوية وجمع مال', en: 'Awareness Campaigns and Fundraising' },
]

const projectOptions = [
  { value: 'hospital_schools', ar: 'مشروع مدارس المستشفى', en: 'Hospital Schools Project' },
  { value: 'space_for_all', ar: 'مشروع الفضاء للجميع', en: 'Space for All Project' },
  { value: 'arts_hub', ar: 'مشروع مركز صفية علي كانو للفنون', en: 'Safeya Ali Kanoo Hub for Arts' },
  { value: 'knowledge_scholarship', ar: 'منحة علم', en: 'Knowledge Scholarship' },
  { value: 'gift_shop', ar: 'متجر الهدايا', en: 'Gift Shop' },
  { value: 'media_pr_marketing', ar: 'إعلام وعلاقات عامة وتسويق', en: 'Media, Public Relations, and Marketing' },
]

const contacts = [
  { nameAr: 'مكتب مؤسسة بحرين ترست', nameEn: 'Bahrain Trust Foundation Office', phone: '17223781' },
  { nameAr: 'مدرسة دينا كانو المصغرة', nameEn: 'Deena Kanoo Micro-School', phone: '66622413' },
  { nameAr: 'مدرسة المستشفى العسكري المصغرة', nameEn: 'Military Hospital Micro-School', phone: '66677376' },
  { nameAr: 'فضاء حصة', nameEn: 'Hessa Space', phone: '17478664' },
  { nameAr: 'فضاء عادل سلمان كانو', nameEn: 'Adel Salman Kanoo Space', phone: '17827682' },
  { nameAr: 'فضاء عائشة', nameEn: 'Aysha Space', phone: '77338484' },
  { nameAr: 'رحلات الخير', nameEn: 'Goodwill Trips', phone: '17223781' },
  { nameAr: 'مركز صفية علي كانو للفنون', nameEn: 'Safeya Ali Kanoo Center for Arts', phone: '32224841' },
  { nameAr: 'إعلام وعلاقات عامة وتسويق', nameEn: 'Media, Public Relations & Marketing', phone: '17223781' },
]

const loading = ref(false)
const submitted = ref(false)
const errorMsg = ref('')

// ── Google Form bridge ──
// Submits straight into the Foundation's existing Google Form/Sheet so
// responses land in the same place as before — no new database needed.
//
// ⚠️ ACTION NEEDED: the entry.XXXXXXX field IDs below are PLACEHOLDERS.
// Get the real ones from Chrome DevTools → Network tab → submit the
// Google Form once with test data → find the "formResponse" request →
// its Payload/Form Data tab lists every entry.XXXXXXX = value pair.
// Replace each placeholder below with the matching real ID.
const GOOGLE_FORM_ACTION = 'https://docs.google.com/forms/d/e/1FAIpQLSfHD7ZQM3kjNITizyhCROSAHESyhI-6SKi2_TzmMQXd982TCA/formResponse'

const ENTRY = {
  fullName: 'entry.PLACEHOLDER_1',
  gender: 'entry.PLACEHOLDER_2',
  birthDate: 'entry.PLACEHOLDER_3', // Google splits dates into _month/_day/_year — see note below
  nationality: 'entry.PLACEHOLDER_4',
  cpr: 'entry.PLACEHOLDER_5',
  email: 'entry.PLACEHOLDER_6',
  phone: 'entry.PLACEHOLDER_7',
  address: 'entry.PLACEHOLDER_8',
  qualification: 'entry.PLACEHOLDER_9',
  fieldOfStudy: 'entry.PLACEHOLDER_10',
  healthConditions: 'entry.PLACEHOLDER_11',
  volunteeredBefore: 'entry.PLACEHOLDER_12',
  previousExperience: 'entry.PLACEHOLDER_13',
  skills: 'entry.PLACEHOLDER_14',
  motivation: 'entry.PLACEHOLDER_15',
  projects: 'entry.PLACEHOLDER_16',
}

const genderLabel = { male: 'ذكر', female: 'أنثى' }
const qualificationLabel = { high_school: 'ثانوي | High School', bachelors: 'بكالريوس | Bachelor’s Degree', phd: 'دكتوراه | PhD', other: 'أخرى | Other' }
const yesNoLabel = { yes: 'نعم', no: 'لا', maybe: 'ربما' }

async function handleSubmit() {
  errorMsg.value = ''
  loading.value = true
  try {
    const fd = new FormData()
    fd.append(ENTRY.fullName, form.fullName)
    fd.append(ENTRY.gender, genderLabel[form.gender] || form.gender)

    // Google date fields are usually split into three inputs:
    // entry.XXXX_month, entry.XXXX_day, entry.XXXX_year
    if (form.birthDate) {
      const [y, m, d] = form.birthDate.split('-')
      fd.append(`${ENTRY.birthDate}_month`, m)
      fd.append(`${ENTRY.birthDate}_day`, d)
      fd.append(`${ENTRY.birthDate}_year`, y)
    }

    fd.append(ENTRY.nationality, form.nationality)
    fd.append(ENTRY.cpr, form.cpr)
    fd.append(ENTRY.email, form.email)
    fd.append(ENTRY.phone, form.phone)
    fd.append(ENTRY.address, form.address)
    fd.append(ENTRY.qualification, qualificationLabel[form.qualification] || form.qualification)
    fd.append(ENTRY.fieldOfStudy, form.fieldOfStudy)
    fd.append(ENTRY.healthConditions, yesNoLabel[form.healthConditions] || form.healthConditions)
    fd.append(ENTRY.volunteeredBefore, yesNoLabel[form.volunteeredBefore] || form.volunteeredBefore)
    if (form.volunteeredBefore === 'yes') fd.append(ENTRY.previousExperience, form.previousExperience)

    form.skills.forEach((s) => {
      const opt = skillOptions.find((o) => o.value === s)
      fd.append(ENTRY.skills, opt ? `${opt.ar} | ${opt.en}` : s)
    })

    fd.append(ENTRY.motivation, form.motivation)

    form.projects.forEach((p) => {
      const opt = projectOptions.find((o) => o.value === p)
      fd.append(ENTRY.projects, opt ? `${opt.ar} | ${opt.en}` : p)
    })
    if (form.projectsHasOther && form.projectsOther) fd.append(ENTRY.projects, form.projectsOther)

    // Google Forms doesn't send CORS headers back, so the response is
    // opaque — we can't read success/failure from it directly. no-cors
    // still delivers the request; this is the standard pattern for
    // posting into Google Forms from a custom UI.
    await fetch(GOOGLE_FORM_ACTION, { method: 'POST', mode: 'no-cors', body: fd })

    submitted.value = true
  } catch (e) {
    errorMsg.value = locale.value === 'ar'
      ? 'حدث خطأ أثناء إرسال الطلب، حاول مرة أخرى'
      : 'Something went wrong while submitting. Please try again.'
  } finally {
    loading.value = false
  }
}
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
.page-hero h1 { font-size: clamp(28px,4vw,44px); font-weight: 900; margin-bottom: 14px; }
.page-hero p { font-size: 16px; opacity: 0.9; max-width: 640px; margin: 0 auto; }

.apply-form { max-width: 680px; margin: 0 auto; padding: 40px; }
.form-section-title {
  font-size: 17px; font-weight: 800; color: var(--dark); margin: 32px 0 18px;
  padding-bottom: 10px; border-bottom: 2px solid var(--gray-light);
}
.form-section-title:first-child { margin-top: 0; }

.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.form-group { margin-bottom: 20px; }
.form-group label { display: block; font-size: 13px; font-weight: 700; color: var(--dark); margin-bottom: 8px; }
.form-input {
  width: 100%; padding: 12px 16px; border: 2px solid var(--gray-light);
  border-radius: var(--radius); font-size: 14px; font-family: inherit;
  outline: none; transition: border-color var(--transition); background: white;
}
.form-input:focus { border-color: var(--red); }
textarea.form-input { resize: vertical; }

.radio-row, .checkbox-grid { display: flex; gap: 10px; flex-wrap: wrap; }
.radio-pill, .checkbox-pill {
  display: flex; align-items: center; gap: 6px; font-size: 13px; color: var(--dark);
  background: var(--off-white); border: 2px solid transparent; border-radius: 30px;
  padding: 9px 16px; cursor: pointer; transition: all var(--transition);
}
.radio-pill:has(input:checked), .checkbox-pill:has(input:checked) {
  border-color: var(--red); background: #fdecea; font-weight: 700;
}
.radio-pill input, .checkbox-pill input { accent-color: var(--red); }
.other-pill { width: 100%; }
.other-input {
  flex: 1; border: none; border-bottom: 1.5px solid var(--gray-light); background: transparent;
  padding: 2px 6px; font-size: 13px; outline: none; font-family: inherit;
}

.form-error {
  background: #fdecea; color: var(--red); border-radius: var(--radius);
  padding: 12px 16px; font-size: 13px; margin-bottom: 16px;
}

.submit-btn { width: 100%; justify-content: center; margin-top: 8px; }
.submit-btn:disabled { opacity: 0.6; cursor: not-allowed; }

.success-card { max-width: 560px; margin: 0 auto; text-align: center; padding: 48px 36px; }
.success-icon {
  width: 64px; height: 64px; border-radius: 50%; background: #e6f7ec; color: #1f9d55;
  font-size: 30px; font-weight: 900; display: flex; align-items: center; justify-content: center;
  margin: 0 auto 20px;
}
.success-card h2 { font-size: 20px; color: var(--dark); margin-bottom: 10px; }
.success-card p { font-size: 14px; color: var(--text-light); margin-bottom: 24px; line-height: 1.7; }
.success-card .btn { margin: 6px; }

.contacts-card { max-width: 680px; margin: 40px auto 0; padding: 32px; }
.contacts-card h3 { font-size: 15px; color: var(--dark); margin-bottom: 16px; }
.contacts-list { list-style: none; padding: 0; margin: 0; }
.contacts-list li {
  display: flex; justify-content: space-between; padding: 10px 0;
  border-bottom: 1px solid var(--gray-light); font-size: 13px;
}
.contacts-list li:last-child { border-bottom: none; }
.contacts-list a { color: var(--red); font-weight: 700; }

@media (max-width: 700px) {
  .apply-form { padding: 24px; }
  .form-row { grid-template-columns: 1fr; }
}
</style>
