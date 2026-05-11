<template>
  <div class="admin-page" dir="rtl">

    <!-- Login -->
    <div v-if="!authenticated" class="login-wrapper">
      <div class="login-box">
        <img src="/logo.png" alt="BTF" height="60" style="margin-bottom:20px" />
        <h2>لوحة التحكم</h2>
        <p>إدارة مشاريع التبرع</p>
        <input v-model="password" type="password" placeholder="كلمة المرور" class="form-input" @keyup.enter="login" />
        <button @click="login" class="btn-login">دخول</button>
        <p v-if="loginError" class="error-msg">كلمة مرور خاطئة</p>
      </div>
    </div>

    <!-- Dashboard -->
    <div v-else class="dashboard">
      <div class="dash-header">
        <div class="dash-title">
          <img src="/logo.png" alt="BTF" height="40" />
          <h1>إدارة مشاريع التبرع</h1>
        </div>
        <button @click="authenticated = false" class="btn-logout">تسجيل الخروج</button>
      </div>

      <div class="dash-body">

        <!-- Add New -->
        <div class="section-card">
          <h2>{{ editing ? 'تعديل مشروع' : 'إضافة مشروع جديد' }}</h2>
          <div class="form-grid">
            <div class="form-group">
              <label>الاسم بالعربي *</label>
              <input v-model="form.name_ar" type="text" class="form-input" placeholder="اسم المشروع بالعربي" />
            </div>
            <div class="form-group">
              <label>الاسم بالإنجليزي *</label>
              <input v-model="form.name_en" type="text" class="form-input" placeholder="Project name in English" />
            </div>
            <div class="form-group">
              <label>الوصف بالعربي</label>
              <textarea v-model="form.desc_ar" class="form-input" rows="2" placeholder="وصف المشروع بالعربي"></textarea>
            </div>
            <div class="form-group">
              <label>الوصف بالإنجليزي</label>
              <textarea v-model="form.desc_en" class="form-input" rows="2" placeholder="Project description in English"></textarea>
            </div>
            <div class="form-group">
              <label>رابط الصورة</label>
              <input v-model="form.image_url" type="text" class="form-input" placeholder="/images/donate/donate-1.jpg" />
            </div>
            <div class="form-group">
              <label>المبلغ المقترح (دينار بحريني)</label>
              <input v-model="form.amount" type="number" class="form-input" min="1" />
            </div>
            <div class="form-group">
              <label>الترتيب</label>
              <input v-model="form.sort_order" type="number" class="form-input" min="0" />
            </div>
            <div class="form-group">
              <label>الحالة</label>
              <select v-model="form.active" class="form-input">
                <option :value="true">نشط ✅</option>
                <option :value="false">مخفي ❌</option>
              </select>
            </div>
          </div>
          <div class="form-actions">
            <button @click="saveProject" :disabled="saving" class="btn-save">
              {{ saving ? 'جاري الحفظ...' : (editing ? 'حفظ التعديلات' : 'إضافة المشروع') }}
            </button>
            <button v-if="editing" @click="cancelEdit" class="btn-cancel">إلغاء</button>
          </div>
          <p v-if="saveMsg" class="success-msg">{{ saveMsg }}</p>
        </div>

        <!-- Projects List -->
        <div class="section-card">
          <h2>المشاريع الحالية ({{ projects.length }})</h2>
          <div v-if="loading" class="loading-text">جاري التحميل...</div>
          <div v-else class="projects-table">
            <div v-for="proj in projects" :key="proj.id" class="project-row" :class="{ inactive: !proj.active }">
              <div class="proj-img">
                <img v-if="proj.image_url" :src="proj.image_url" :alt="proj.name_ar" />
                <div v-else class="no-img">📷</div>
              </div>
              <div class="proj-info">
                <strong>{{ proj.name_ar }}</strong>
                <span>{{ proj.name_en }}</span>
                <span class="proj-amount">{{ proj.amount }} د.ب</span>
                <span :class="proj.active ? 'badge-active' : 'badge-inactive'">
                  {{ proj.active ? 'نشط' : 'مخفي' }}
                </span>
              </div>
              <div class="proj-actions">
                <button @click="editProject(proj)" class="btn-edit">✏️ تعديل</button>
                <button @click="toggleActive(proj)" class="btn-toggle">
                  {{ proj.active ? '🚫 إخفاء' : '✅ تفعيل' }}
                </button>
                <button @click="deleteProject(proj.id)" class="btn-delete">🗑️ حذف</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({ layout: false })

const { query, insert, update, remove } = useSupabase()

const ADMIN_PASSWORD = 'BTF@Admin2026'

const authenticated = ref(false)
const password = ref('')
const loginError = ref(false)

const projects = ref([])
const loading = ref(false)
const saving = ref(false)
const editing = ref(null)
const saveMsg = ref('')

const defaultForm = {
  name_ar: '', name_en: '',
  desc_ar: '', desc_en: '',
  image_url: '', amount: 10,
  sort_order: 0, active: true
}

const form = reactive({ ...defaultForm })

function login() {
  if (password.value === ADMIN_PASSWORD) {
    authenticated.value = true
    loginError.value = false
    loadProjects()
  } else {
    loginError.value = true
  }
}

async function loadProjects() {
  loading.value = true
  const data = await query('donation_projects', '?order=sort_order.asc&active=neq.null')
  projects.value = data
  loading.value = false
}

async function saveProject() {
  if (!form.name_ar || !form.name_en) return
  saving.value = true
  saveMsg.value = ''

  if (editing.value) {
    await update('donation_projects', editing.value, { ...form })
    saveMsg.value = '✅ تم تعديل المشروع بنجاح'
    cancelEdit()
  } else {
    await insert('donation_projects', { ...form })
    saveMsg.value = '✅ تم إضافة المشروع بنجاح'
    Object.assign(form, defaultForm)
  }

  await loadProjects()
  saving.value = false
  setTimeout(() => saveMsg.value = '', 3000)
}

function editProject(proj) {
  editing.value = proj.id
  Object.assign(form, {
    name_ar: proj.name_ar, name_en: proj.name_en,
    desc_ar: proj.desc_ar || '', desc_en: proj.desc_en || '',
    image_url: proj.image_url || '', amount: proj.amount,
    sort_order: proj.sort_order, active: proj.active
  })
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function cancelEdit() {
  editing.value = null
  Object.assign(form, defaultForm)
}

async function toggleActive(proj) {
  await update('donation_projects', proj.id, { active: !proj.active })
  await loadProjects()
}

async function deleteProject(id) {
  if (!confirm('هل أنت متأكد من حذف هذا المشروع؟')) return
  await remove('donation_projects', id)
  await loadProjects()
}
</script>

<style scoped>
.admin-page { min-height: 100vh; background: #f4f6f7; font-family: 'Tajawal', sans-serif; }

/* Login */
.login-wrapper {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #3c3950, #212331);
}
.login-box {
  background: white;
  padding: 48px 40px;
  border-radius: 8px;
  text-align: center;
  width: 360px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.2);
}
.login-box h2 { font-size: 22px; font-weight: 800; color: #3c3950; margin-bottom: 6px; }
.login-box p { color: #99a9b5; margin-bottom: 24px; }
.btn-login {
  width: 100%;
  background: #E31C26;
  color: white;
  border: none;
  padding: 12px;
  border-radius: 4px;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  margin-top: 10px;
  font-family: inherit;
}

/* Dashboard */
.dash-header {
  background: #3c3950;
  padding: 16px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.dash-title { display: flex; align-items: center; gap: 16px; }
.dash-title h1 { color: white; font-size: 20px; font-weight: 700; }
.btn-logout {
  background: rgba(255,255,255,0.1);
  color: white;
  border: 1px solid rgba(255,255,255,0.2);
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-family: inherit;
}

.dash-body { padding: 24px 32px; max-width: 1000px; margin: 0 auto; display: flex; flex-direction: column; gap: 24px; }

.section-card {
  background: white;
  border-radius: 8px;
  padding: 28px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
}
.section-card h2 { font-size: 18px; font-weight: 700; color: #3c3950; margin-bottom: 20px; }

.form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px; }
.form-group label { display: block; font-size: 13px; font-weight: 600; color: #3c3950; margin-bottom: 6px; }
.form-input {
  width: 100%;
  padding: 9px 12px;
  border: 1.5px solid #dfe5e8;
  border-radius: 4px;
  font-size: 14px;
  font-family: inherit;
  box-sizing: border-box;
}
.form-input:focus { outline: none; border-color: #E31C26; }

.form-actions { display: flex; gap: 12px; }
.btn-save {
  background: #E31C26;
  color: white;
  border: none;
  padding: 10px 24px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  font-family: inherit;
}
.btn-cancel {
  background: #f0f0f0;
  color: #3c3950;
  border: none;
  padding: 10px 24px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  font-family: inherit;
}

.success-msg { color: #2e7d32; font-weight: 600; margin-top: 12px; }
.error-msg { color: #E31C26; font-size: 13px; margin-top: 8px; }

/* Projects table */
.project-row {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 14px 0;
  border-bottom: 1px solid #f0f0f0;
}
.project-row.inactive { opacity: 0.5; }

.proj-img { width: 72px; height: 72px; border-radius: 6px; overflow: hidden; flex-shrink: 0; }
.proj-img img { width: 100%; height: 100%; object-fit: cover; }
.no-img { width: 72px; height: 72px; background: #f0f0f0; border-radius: 6px; display: flex; align-items: center; justify-content: center; font-size: 24px; }

.proj-info { flex: 1; display: flex; flex-direction: column; gap: 2px; }
.proj-info strong { font-size: 14px; color: #3c3950; }
.proj-info span { font-size: 12px; color: #99a9b5; }
.proj-amount { color: #E31C26 !important; font-weight: 700 !important; }

.badge-active { background: #e8f5e9; color: #2e7d32; padding: 2px 10px; border-radius: 20px; font-size: 11px !important; }
.badge-inactive { background: #ffeef0; color: #E31C26; padding: 2px 10px; border-radius: 20px; font-size: 11px !important; }

.proj-actions { display: flex; gap: 8px; }
.btn-edit, .btn-toggle, .btn-delete {
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;
  font-family: inherit;
}
.btn-edit { background: #e3f2fd; color: #1565c0; }
.btn-toggle { background: #f0f0f0; color: #3c3950; }
.btn-delete { background: #ffeef0; color: #E31C26; }

.loading-text { color: #99a9b5; text-align: center; padding: 20px; }
</style>
