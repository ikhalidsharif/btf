<template>
  <div class="admin-page" dir="rtl">

    <!-- Login -->
    <div v-if="!authenticated" class="login-wrapper">
      <div class="login-box">
        <img src="/logo.png" alt="BTF" height="60" style="margin-bottom:20px" />
        <h2>لوحة التحكم</h2>
        <p>إدارة المشاريع والتقارير</p>
        <input v-model="password" type="password" placeholder="كلمة المرور" class="form-input" @keyup.enter="login" />
        <button class="btn-login" @click="login">دخول</button>
        <p v-if="loginError" class="error-msg">كلمة مرور خاطئة</p>
      </div>
    </div>

    <!-- Dashboard -->
    <div v-else class="dashboard">
      <div class="dash-header">
        <div class="dash-title">
          <img src="/logo.png" alt="BTF" height="40" />
          <h1>لوحة التحكم</h1>
        </div>
        <button class="btn-logout" @click="authenticated = false">تسجيل الخروج</button>
      </div>

      <!-- Tabs -->
      <div class="dash-tabs">
        <button :class="{ active: activeTab === 'projects' }" @click="activeTab = 'projects'">مشاريع التبرع</button>
        <button :class="{ active: activeTab === 'reports' }" @click="activeTab = 'reports'">التقارير السنوية</button>
      </div>

      <div class="dash-body">

        <!-- ══════════ DONATION PROJECTS TAB ══════════ -->
        <template v-if="activeTab === 'projects'">
          <div class="section-card">
            <h2>{{ editingProject ? 'تعديل مشروع' : 'إضافة مشروع جديد' }}</h2>
            <div class="form-grid">
              <div class="form-group">
                <label>الاسم بالعربي *</label>
                <input v-model="projectForm.name_ar" type="text" class="form-input" placeholder="اسم المشروع بالعربي" />
              </div>
              <div class="form-group">
                <label>الاسم بالإنجليزي *</label>
                <input v-model="projectForm.name_en" type="text" class="form-input" placeholder="Project name in English" />
              </div>
              <div class="form-group">
                <label>الوصف المختصر بالعربي</label>
                <textarea v-model="projectForm.desc_ar" class="form-input" rows="2" placeholder="وصف مختصر يظهر بالبطاقة"></textarea>
              </div>
              <div class="form-group">
                <label>الوصف المختصر بالإنجليزي</label>
                <textarea v-model="projectForm.desc_en" class="form-input" rows="2" placeholder="Short description shown on the card"></textarea>
              </div>
              <div class="form-group full">
                <label>الوصف الكامل بالعربي (يظهر بصفحة المشروع المستقلة)</label>
                <textarea v-model="projectForm.long_desc_ar" class="form-input" rows="3" placeholder="اختياري — لو فاضي بيستخدم الوصف المختصر"></textarea>
              </div>
              <div class="form-group full">
                <label>الوصف الكامل بالإنجليزي</label>
                <textarea v-model="projectForm.long_desc_en" class="form-input" rows="3" placeholder="Optional — falls back to the short description"></textarea>
              </div>
              <div class="form-group full">
                <label>صورة المشروع بالعربي (تظهر بالصفحة العربية)</label>
                <div class="upload-row">
                  <input type="file" accept="image/*" class="form-input" @change="onImageSelect($event, 'ar')" />
                  <span v-if="uploadingAr" class="upload-status">⏳ جاري الرفع...</span>
                  <span v-else-if="projectForm.image_url_ar" class="upload-status upload-ok">✅ تم الرفع</span>
                </div>
                <img v-if="projectForm.image_url_ar" :src="projectForm.image_url_ar" class="upload-preview" />
              </div>
              <div class="form-group full">
                <label>Project Image in English (shown on the English page)</label>
                <div class="upload-row">
                  <input type="file" accept="image/*" class="form-input" @change="onImageSelect($event, 'en')" />
                  <span v-if="uploadingEn" class="upload-status">⏳ Uploading...</span>
                  <span v-else-if="projectForm.image_url_en" class="upload-status upload-ok">✅ Uploaded</span>
                </div>
                <img v-if="projectForm.image_url_en" :src="projectForm.image_url_en" class="upload-preview" />
              </div>
              <div class="form-group">
                <label>المبلغ المقترح (دينار بحريني)</label>
                <input v-model="projectForm.amount" type="number" class="form-input" min="1" />
              </div>
              <div class="form-group">
                <label>التصنيف</label>
                <select v-model="projectForm.category" class="form-input">
                  <option value="general">التبرع العام</option>
                  <option value="education">التعليم المجتمعي</option>
                  <option value="community">خدمة المجتمع</option>
                  <option value="creative">الإبداع والابتكار</option>
                </select>
              </div>
              <div class="form-group">
                <label>عاجل؟</label>
                <select v-model="projectForm.is_urgent" class="form-input">
                  <option :value="false">لا</option>
                  <option :value="true">نعم — يظهر badge عاجل</option>
                </select>
              </div>
              <div class="form-group">
                <label>الترتيب</label>
                <input v-model="projectForm.sort_order" type="number" class="form-input" min="0" />
              </div>
              <div class="form-group">
                <label>الحالة</label>
                <select v-model="projectForm.active" class="form-input">
                  <option :value="true">نشط ✅</option>
                  <option :value="false">مخفي ❌</option>
                </select>
              </div>
            </div>
            <div class="form-actions">
              <button class="btn-save" :disabled="savingProject" @click="saveProject">
                {{ savingProject ? 'جاري الحفظ...' : (editingProject ? 'حفظ التعديلات' : 'إضافة المشروع') }}
              </button>
              <button v-if="editingProject" class="btn-cancel" @click="cancelEditProject">إلغاء</button>
            </div>
            <p v-if="projectSaveMsg" class="success-msg">{{ projectSaveMsg }}</p>
          </div>

          <div class="section-card">
            <h2>المشاريع الحالية ({{ projects.length }})</h2>
            <p v-if="projectLoadError" class="error-msg">{{ projectLoadError }}</p>
            <div v-if="loadingProjects" class="loading-text">جاري التحميل...</div>
            <div v-else class="rows-table">
              <div v-for="proj in projects" :key="proj.id" class="row-item" :class="{ inactive: !proj.active }">
                <div class="row-img">
                  <img v-if="proj.image_url_ar || proj.image_url_en" :src="proj.image_url_ar || proj.image_url_en" :alt="proj.name_ar" />
                  <div v-else class="no-img">📷</div>
                </div>
                <div class="row-info">
                  <strong>{{ proj.name_ar }}</strong>
                  <span>{{ proj.name_en }}</span>
                  <span class="row-amount">{{ proj.amount }} د.ب</span>
                  <span v-if="proj.category" class="badge-category">{{ categoryLabel(proj.category) }}</span>
                  <span v-if="proj.is_urgent" class="badge-urgent">عاجل</span>
                  <span :class="proj.active ? 'badge-active' : 'badge-inactive'">{{ proj.active ? 'نشط' : 'مخفي' }}</span>
                </div>
                <div class="row-actions">
                  <button class="btn-edit" @click="editProject(proj)">✏️ تعديل</button>
                  <button class="btn-toggle" @click="toggleProjectActive(proj)">{{ proj.active ? '🚫 إخفاء' : '✅ تفعيل' }}</button>
                  <button class="btn-delete" @click="deleteProject(proj.id)">🗑️ حذف</button>
                </div>
              </div>
            </div>
          </div>
        </template>

        <!-- ══════════ ANNUAL REPORTS TAB ══════════ -->
        <template v-if="activeTab === 'reports'">
          <div class="section-card">
            <h2>{{ editingReport ? 'تعديل تقرير' : 'إضافة تقرير سنوي جديد' }}</h2>
            <div class="form-grid">
              <div class="form-group">
                <label>السنة *</label>
                <input v-model="reportForm.year" type="text" class="form-input" placeholder="2025" />
              </div>
              <div class="form-group">
                <label>رابط صورة الغلاف</label>
                <input v-model="reportForm.cover_image_url" type="text" class="form-input" placeholder="/images/reports/cover-2025.jpg" />
              </div>
              <div class="form-group full">
                <label>رابط ملف PDF (Google Drive)</label>
                <input v-model="reportForm.pdf_url" type="text" class="form-input" placeholder="https://drive.google.com/file/d/.../view" />
              </div>
              <div class="form-group">
                <label>الوصف بالعربي</label>
                <textarea v-model="reportForm.desc_ar" class="form-input" rows="2" placeholder="ملخص شامل لأنشطة ومشاريع المؤسسة"></textarea>
              </div>
              <div class="form-group">
                <label>الوصف بالإنجليزي</label>
                <textarea v-model="reportForm.desc_en" class="form-input" rows="2" placeholder="A comprehensive summary of the Foundation's activities"></textarea>
              </div>
              <div class="form-group">
                <label>الترتيب</label>
                <input v-model="reportForm.sort_order" type="number" class="form-input" min="0" />
              </div>
            </div>
            <div class="form-actions">
              <button class="btn-save" :disabled="savingReport" @click="saveReport">
                {{ savingReport ? 'جاري الحفظ...' : (editingReport ? 'حفظ التعديلات' : 'إضافة التقرير') }}
              </button>
              <button v-if="editingReport" class="btn-cancel" @click="cancelEditReport">إلغاء</button>
            </div>
            <p v-if="reportSaveMsg" class="success-msg">{{ reportSaveMsg }}</p>
          </div>

          <div class="section-card">
            <h2>التقارير الحالية ({{ reports.length }})</h2>
            <p v-if="reportLoadError" class="error-msg">{{ reportLoadError }}</p>
            <div v-if="loadingReports" class="loading-text">جاري التحميل...</div>
            <div v-else class="rows-table">
              <div v-for="rep in reports" :key="rep.id" class="row-item">
                <div class="row-img">
                  <img v-if="rep.cover_image_url" :src="rep.cover_image_url" :alt="rep.year" />
                  <div v-else class="no-img">📄</div>
                </div>
                <div class="row-info">
                  <strong>التقرير السنوي {{ rep.year }}</strong>
                  <span v-if="rep.pdf_url" class="row-link">✅ رابط PDF موجود</span>
                  <span v-else class="row-link-missing">⚠️ ما فيه رابط PDF</span>
                </div>
                <div class="row-actions">
                  <button class="btn-edit" @click="editReport(rep)">✏️ تعديل</button>
                  <button class="btn-delete" @click="deleteReport(rep.id)">🗑️ حذف</button>
                </div>
              </div>
              <p v-if="!reports.length" class="loading-text">ما فيه تقارير مضافة بعد</p>
            </div>
          </div>
        </template>

      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({ layout: false })

const { query, insert, update, remove, uploadFile } = useSupabase()

const ADMIN_PASSWORD = 'BTF@Admin2026'

const authenticated = ref(false)
const password = ref('')
const loginError = ref(false)
const activeTab = ref('projects')

function login() {
  if (password.value === ADMIN_PASSWORD) {
    authenticated.value = true
    loginError.value = false
    loadProjects()
    loadReports()
  } else {
    loginError.value = true
  }
}

// ── Donation Projects ──
const projects = ref([])
const loadingProjects = ref(false)
const savingProject = ref(false)
const editingProject = ref(null)
const projectSaveMsg = ref('')
const projectLoadError = ref('')

const defaultProjectForm = {
  name_ar: '', name_en: '',
  desc_ar: '', desc_en: '',
  long_desc_ar: '', long_desc_en: '',
  image_url_ar: '', image_url_en: '', amount: 10,
  category: 'general', is_urgent: false,
  sort_order: 0, active: true,
}
const projectForm = reactive({ ...defaultProjectForm })

const uploadingAr = ref(false)
const uploadingEn = ref(false)

async function onImageSelect(e, lang) {
  const file = e.target.files?.[0]
  if (!file) return
  if (lang === 'ar') uploadingAr.value = true
  else uploadingEn.value = true

  const url = await uploadFile(file, 'donations')
  if (url) {
    if (lang === 'ar') projectForm.image_url_ar = url
    else projectForm.image_url_en = url
  } else {
    alert('فشل رفع الصورة — تأكد إن bucket "donation-images" موجود وعام (public) بـ Supabase Storage')
  }

  if (lang === 'ar') uploadingAr.value = false
  else uploadingEn.value = false
}

const categoryLabels = {
  general: 'التبرع العام',
  education: 'التعليم المجتمعي',
  community: 'خدمة المجتمع',
  creative: 'الإبداع والابتكار',
}
function categoryLabel(val) { return categoryLabels[val] || val }

async function loadProjects() {
  loadingProjects.value = true
  projectLoadError.value = ''
  const data = await query('donation_projects', '?order=sort_order.asc')
  if (Array.isArray(data)) {
    projects.value = data
  } else {
    projects.value = []
    projectLoadError.value = data?.message
      ? `⚠️ خطأ من قاعدة البيانات: ${data.message}`
      : '⚠️ تعذّر تحميل المشاريع'
  }
  loadingProjects.value = false
}

async function saveProject() {
  if (!projectForm.name_ar || !projectForm.name_en) return
  savingProject.value = true
  projectSaveMsg.value = ''

  let res
  if (editingProject.value) {
    res = await update('donation_projects', editingProject.value, { ...projectForm })
  } else {
    res = await insert('donation_projects', { ...projectForm })
  }

  if (Array.isArray(res) || (res && !res.message && !res.code)) {
    projectSaveMsg.value = editingProject.value ? '✅ تم تعديل المشروع بنجاح' : '✅ تم إضافة المشروع بنجاح'
    if (editingProject.value) cancelEditProject()
    else Object.assign(projectForm, defaultProjectForm)
  } else {
    projectSaveMsg.value = res?.message
      ? `❌ فشل الحفظ: ${res.message} — تأكد إنك ضفت أعمدة category/is_urgent/long_desc_ar/long_desc_en بجدول donation_projects`
      : '❌ فشل الحفظ'
  }

  await loadProjects()
  savingProject.value = false
  setTimeout(() => projectSaveMsg.value = '', 8000)
}

function editProject(proj) {
  editingProject.value = proj.id
  Object.assign(projectForm, {
    name_ar: proj.name_ar, name_en: proj.name_en,
    desc_ar: proj.desc_ar || '', desc_en: proj.desc_en || '',
    long_desc_ar: proj.long_desc_ar || '', long_desc_en: proj.long_desc_en || '',
    image_url_ar: proj.image_url_ar || '', image_url_en: proj.image_url_en || '', amount: proj.amount,
    category: proj.category || 'general', is_urgent: !!proj.is_urgent,
    sort_order: proj.sort_order, active: proj.active,
  })
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function cancelEditProject() {
  editingProject.value = null
  Object.assign(projectForm, defaultProjectForm)
}

async function toggleProjectActive(proj) {
  await update('donation_projects', proj.id, { active: !proj.active })
  await loadProjects()
}

async function deleteProject(id) {
  if (!confirm('هل أنت متأكد من حذف هذا المشروع؟')) return
  await remove('donation_projects', id)
  await loadProjects()
}

// ── Annual Reports ──
const reports = ref([])
const loadingReports = ref(false)
const savingReport = ref(false)
const editingReport = ref(null)
const reportSaveMsg = ref('')
const reportLoadError = ref('')

const defaultReportForm = {
  year: '', cover_image_url: '', pdf_url: '',
  desc_ar: '', desc_en: '', sort_order: 0,
}
const reportForm = reactive({ ...defaultReportForm })

async function loadReports() {
  loadingReports.value = true
  reportLoadError.value = ''
  const data = await query('annual_reports', '?order=sort_order.asc,year.desc')
  if (Array.isArray(data)) {
    reports.value = data
  } else {
    reports.value = []
    reportLoadError.value = data?.message
      ? `⚠️ خطأ من قاعدة البيانات: ${data.message}`
      : '⚠️ جدول annual_reports غير موجود بعد — شغّل كود SQL لإنشائه بـ Supabase أولاً'
  }
  loadingReports.value = false
}

async function saveReport() {
  if (!reportForm.year) return
  savingReport.value = true
  reportSaveMsg.value = ''

  let res
  if (editingReport.value) {
    res = await update('annual_reports', editingReport.value, { ...reportForm })
  } else {
    res = await insert('annual_reports', { ...reportForm })
  }

  if (Array.isArray(res) || (res && !res.message && !res.code)) {
    reportSaveMsg.value = editingReport.value ? '✅ تم تعديل التقرير بنجاح' : '✅ تم إضافة التقرير بنجاح'
    if (editingReport.value) cancelEditReport()
    else Object.assign(reportForm, defaultReportForm)
  } else {
    reportSaveMsg.value = res?.message
      ? `❌ فشل الحفظ: ${res.message}`
      : '❌ فشل الحفظ — تأكد إن جدول annual_reports موجود بـ Supabase'
  }

  await loadReports()
  savingReport.value = false
  setTimeout(() => reportSaveMsg.value = '', 6000)
}

function editReport(rep) {
  editingReport.value = rep.id
  Object.assign(reportForm, {
    year: rep.year, cover_image_url: rep.cover_image_url || '', pdf_url: rep.pdf_url || '',
    desc_ar: rep.desc_ar || '', desc_en: rep.desc_en || '', sort_order: rep.sort_order || 0,
  })
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function cancelEditReport() {
  editingReport.value = null
  Object.assign(reportForm, defaultReportForm)
}

async function deleteReport(id) {
  if (!confirm('هل أنت متأكد من حذف هذا التقرير؟')) return
  await remove('annual_reports', id)
  await loadReports()
}
</script>

<style scoped>
.admin-page { min-height: 100vh; background: #f4f6f7; font-family: 'Tajawal', sans-serif; }

/* Login */
.login-wrapper { min-height: 100vh; display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg, #3c3950, #212331); }
.login-box { background: white; padding: 48px 40px; border-radius: 8px; text-align: center; width: 360px; box-shadow: 0 8px 32px rgba(0,0,0,0.2); }
.login-box h2 { font-size: 22px; font-weight: 800; color: #3c3950; margin-bottom: 6px; }
.login-box p { color: #99a9b5; margin-bottom: 24px; }
.btn-login { width: 100%; background: #E31C26; color: white; border: none; padding: 12px; border-radius: 4px; font-size: 15px; font-weight: 700; cursor: pointer; margin-top: 10px; font-family: inherit; }

/* Dashboard */
.dash-header { background: #3c3950; padding: 16px 32px; display: flex; justify-content: space-between; align-items: center; }
.dash-title { display: flex; align-items: center; gap: 16px; }
.dash-title h1 { color: white; font-size: 20px; font-weight: 700; }
.btn-logout { background: rgba(255,255,255,0.1); color: white; border: 1px solid rgba(255,255,255,0.2); padding: 8px 16px; border-radius: 4px; cursor: pointer; font-family: inherit; }

.dash-tabs { display: flex; gap: 4px; background: #2c2a3d; padding: 0 32px; }
.dash-tabs button {
  background: none; border: none; color: rgba(255,255,255,0.6); padding: 14px 20px;
  font-size: 14px; font-weight: 700; cursor: pointer; font-family: inherit;
  border-bottom: 3px solid transparent; transition: all 0.2s;
}
.dash-tabs button:hover { color: white; }
.dash-tabs button.active { color: white; border-bottom-color: #E31C26; }

.dash-body { padding: 24px 32px; max-width: 1000px; margin: 0 auto; display: flex; flex-direction: column; gap: 24px; }

.section-card { background: white; border-radius: 8px; padding: 28px; box-shadow: 0 2px 12px rgba(0,0,0,0.06); }
.section-card h2 { font-size: 18px; font-weight: 700; color: #3c3950; margin-bottom: 20px; }

.form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px; }
.form-group.full { grid-column: 1 / -1; }
.form-group label { display: block; font-size: 13px; font-weight: 600; color: #3c3950; margin-bottom: 6px; }
.form-input { width: 100%; padding: 9px 12px; border: 1.5px solid #dfe5e8; border-radius: 4px; font-size: 14px; font-family: inherit; box-sizing: border-box; }
.form-input:focus { outline: none; border-color: #E31C26; }

.upload-row { display: flex; align-items: center; gap: 12px; }
.upload-row .form-input { flex: 1; padding: 8px; }
.upload-status { font-size: 12px; color: #99a9b5; white-space: nowrap; }
.upload-status.upload-ok { color: #2e7d32; font-weight: 600; }
.upload-preview { max-width: 160px; max-height: 200px; object-fit: contain; border-radius: 6px; margin-top: 10px; border: 1px solid #e0e0e0; }

.form-actions { display: flex; gap: 12px; }
.btn-save { background: #E31C26; color: white; border: none; padding: 10px 24px; border-radius: 4px; font-size: 14px; font-weight: 700; cursor: pointer; font-family: inherit; }
.btn-cancel { background: #f0f0f0; color: #3c3950; border: none; padding: 10px 24px; border-radius: 4px; font-size: 14px; font-weight: 700; cursor: pointer; font-family: inherit; }

.success-msg { color: #2e7d32; font-weight: 600; margin-top: 12px; }
.error-msg { color: #E31C26; font-size: 13px; margin-top: 8px; }

/* Rows table (shared by both tabs) */
.row-item { display: flex; align-items: center; gap: 16px; padding: 14px 0; border-bottom: 1px solid #f0f0f0; }
.row-item.inactive { opacity: 0.5; }

.row-img { width: 72px; height: 72px; border-radius: 6px; overflow: hidden; flex-shrink: 0; }
.row-img img { width: 100%; height: 100%; object-fit: cover; }
.no-img { width: 72px; height: 72px; background: #f0f0f0; border-radius: 6px; display: flex; align-items: center; justify-content: center; font-size: 24px; }

.row-info { flex: 1; display: flex; flex-direction: column; gap: 2px; }
.row-info strong { font-size: 14px; color: #3c3950; }
.row-info span { font-size: 12px; color: #99a9b5; }
.row-amount { color: #E31C26 !important; font-weight: 700 !important; }
.row-link { color: #2e7d32 !important; }
.row-link-missing { color: #E31C26 !important; }

.badge-active { background: #e8f5e9; color: #2e7d32; padding: 2px 10px; border-radius: 20px; font-size: 11px !important; display: inline-block; width: fit-content; }
.badge-inactive { background: #ffeef0; color: #E31C26; padding: 2px 10px; border-radius: 20px; font-size: 11px !important; display: inline-block; width: fit-content; }
.badge-category { background: #e3f2fd; color: #1565c0; padding: 2px 10px; border-radius: 20px; font-size: 11px !important; display: inline-block; width: fit-content; }
.badge-urgent { background: #fff0e0; color: #c26a00; padding: 2px 10px; border-radius: 20px; font-size: 11px !important; display: inline-block; width: fit-content; }

.row-actions { display: flex; gap: 8px; flex-shrink: 0; }
.btn-edit, .btn-toggle, .btn-delete { border: none; padding: 6px 12px; border-radius: 4px; font-size: 12px; cursor: pointer; font-family: inherit; }
.btn-edit { background: #e3f2fd; color: #1565c0; }
.btn-toggle { background: #f0f0f0; color: #3c3950; }
.btn-delete { background: #ffeef0; color: #E31C26; }

.loading-text { color: #99a9b5; text-align: center; padding: 20px; }
</style>