# مؤسسة البحرين للتنمية والتطوير — Bahrain Trust Foundation

موقع مبني بـ **Nuxt 3** — سريع، آمن، لا يحتاج صيانة متكررة.

---

## هيكل المشروع

```
content/
  ar/news/          ← النشرات الإخبارية بالعربي (Markdown)
  en/news/          ← النشرات الإخبارية بالإنجليزي
  donations.json    ← مشاريع التبرع (TAP Payment)

pages/
  index.vue         ← الصفحة الرئيسية
  news/             ← صفحة الأخبار
  donate/           ← صفحة التبرع (TAP)
  about/
  projects/
  contact/

.github/
  workflows/fetch-rss.yml    ← يجلب الأخبار من MailChimp تلقائياً يومياً
  scripts/fetch-rss.js       ← السكريبت
```

---

## الإعداد

### 1. متطلبات
- Node.js 20+
- حساب Vercel (مجاني)
- حساب GitHub

### 2. المتغيرات البيئية
انسخ `.env.example` إلى `.env` وأضف:
```
TAP_PUBLIC_KEY=pk_test_xxxx
MAILCHIMP_RSS_URL=https://...
```

### 3. التشغيل محلياً
```bash
npm install
npm run dev
```

### 4. النشر على Vercel
```bash
npx vercel --prod
```
أو اربط الـ GitHub repo بـ Vercel وسيُنشر تلقائياً عند كل commit.

---

## إضافة محتوى جديد

### إضافة خبر يدوياً
أنشئ ملف في `content/ar/news/` أو `content/en/news/`:

```markdown
---
title: "عنوان الخبر"
date: "2026-05-01"
lang: "ar"
---

محتوى الخبر هنا...
```

### الأخبار من MailChimp
تلقائية — تُجلب كل يوم عبر GitHub Action.

### إضافة مشروع تبرع جديد
افتح `content/donations.json` وأضف للقائمة المناسبة.

---

## التبرعات (TAP Payment)

- استخدم `pk_test_xxx` للاختبار
- استبدلها بـ `pk_live_xxx` عند الإطلاق الرسمي
- يدعم البطاقات البنكية، KNET، Apple Pay، مدى

---

## الصيانة

| المهمة | التكرار |
|---|---|
| تحديث Nuxt | كل 6 أشهر (أمر واحد) |
| الأخبار من MailChimp | تلقائي يومياً |
| إضافة مشروع/خبر يدوي | عند الحاجة — ملف Markdown بسيط |
| تجديد الـ SSL | تلقائي عبر Vercel |
| تحديثات أمنية | لا يوجد — الموقع static |
