# 🌟 بورتفوليو مصعب أبوبشارة - محفظة ثلاثية الأبعاد

> موقع شخصي تفاعلي مع رسومات ثلاثية الأبعاد مبني بـ React، Three.js، و Tailwind CSS

![Portfolio Preview](./preview.png)

## 📋 نظرة عامة

هذا موقع بورتفوليو شخصي تفاعلي يعرض مشاريعي وخبراتي في تطوير البرمجيات. الموقع مبني بأحدث التقنيات ويتضمن:

- ✨ رسومات ثلاثية الأبعاد تفاعلية
- 🌍 دعم كامل للغة العربية (RTL)
- 📱 تصميم متجاوب لجميع الأجهزة
- 🎨 تأثيرات حركية سلسة
- 📧 نموذج تواصل مباشر

## 🛠️ التقنيات المستخدمة

### Frontend

- **React 18** - مكتبة بناء الواجهات
- **Vite** - أداة البناء السريعة
- **Three.js** - رسومات ثلاثية الأبعاد
- **Framer Motion** - تأثيرات حركية
- **Tailwind CSS** - تنسيق الواجهة

### المكتبات الإضافية

- **React Router** - التنقل بين الصفحات
- **EmailJS** - إرسال الرسائل
- **React Tilt** - تأثيرات الميلان
- **React Vertical Timeline** - عرض الخبرات

## 🚀 التثبيت والتشغيل

### المتطلبات الأساسية

- Node.js 16+ و npm/yarn

### خطوات التثبيت

1. **استنساخ المشروع**

```bash
git clone https://github.com/musab-abu-bshara/3d-portfolio.git
cd 3d-portfolio
```

2. **تثبيت المكتبات**

```bash
npm install
# أو
yarn install
```

3. **تشغيل المشروع محلياً**

```bash
npm run dev
# أو
yarn dev
```

4. **فتح المتصفح**

```
http://localhost:5173
```

### بناء المشروع للنشر

```bash
npm run build
# أو
yarn build
```

الملفات الجاهزة ستكون في مجلد `dist/`

## 📁 هيكل المشروع

```
3d-portfolio/
├── public/
│   ├── desktop_pc/        # موديل الكمبيوتر ثلاثي الأبعاد
│   ├── planet/            # موديل الكرة الأرضية
│   └── logo.svg           # شعار الموقع
├── src/
│   ├── assets/            # الصور والأيقونات
│   ├── components/        # مكونات React
│   │   ├── canvas/        # مكونات Three.js
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Experience.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Tech.jsx
│   │   └── Works.jsx
│   ├── constants/         # البيانات الثابتة
│   │   └── index.js
│   ├── hoc/               # Higher Order Components
│   ├── utils/             # الدوال المساعدة
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── docs/                  # التوثيق
└── package.json
```

## 🎨 الأقسام الرئيسية

### 1. **الصفحة الرئيسية (Hero)**

- عنوان ترحيبي
- نموذج كمبيوتر ثلاثي الأبعاد متحرك
- زر التمرير للأسفل

### 2. **من أنا (About)**

- نبذة عني
- الخدمات التي أقدمها:
  - تطوير مواقع الويب
  - تطبيقات سطح المكتب
  - تطوير واجهات برمجية
  - تصميم متجاوب

### 3. **الخبرة (Experience)**

- جامعة النجاح الوطنية - هندسة الحاسوب
- Grids Apps - تدريب Frontend
- عرض timeline تفاعلي

### 4. **التقنيات (Technologies)**

- كرات ثلاثية الأبعاد دوارة
- عرض التقنيات المستخدمة:
  - HTML5, CSS3, JavaScript
  - React, TypeScript, Redux
  - Node.js, MongoDB, PostgreSQL
  - Tailwind, Git, Docker

### 5. **المشاريع (Projects)**

10 مشاريع متنوعة:

1. منصة ثرى - React + Node.js
2. موقع القرى الفلسطينية
3. قالب لوحة التحكم
4. قالب Elzero
5. قالب Kasper
6. قالب Leon
7. مولد كلمات المرور
8. آلة حاسبة
9. لعبة الذاكرة
10. تطبيق Quizzy (Desktop App)

### 6. **آراء العملاء (Testimonials)**

- عرض آراء وتقييمات
- تصميم بطاقات احترافي

### 7. **تواصل معي (Contact)**

- نموذج إرسال رسائل مباشر
- نموذج كرة أرضية ثلاثية الأبعاد
- تكامل مع EmailJS

## ⚙️ إعدادات EmailJS

لتفعيل نموذج التواصل، قم بما يلي:

1. سجّل حساب في [EmailJS](https://www.emailjs.com/)
2. احصل على:
   - Service ID
   - Template ID
   - Public Key
3. حدّث الملف `src/components/Contact.jsx`:

```javascript
emailjs.send(
  "YOUR_SERVICE_ID",
  "YOUR_TEMPLATE_ID",
  templateParams,
  "YOUR_PUBLIC_KEY"
);
```

أو استخدم متغيرات البيئة (أنشئ ملف `.env`):

```env
VITE_APP_EMAILJS_SERVICE_ID=your_service_id
VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

## 🎯 التخصيص

### تغيير المحتوى

جميع البيانات موجودة في `src/constants/index.js`:

- `navLinks` - روابط التنقل
- `services` - الخدمات
- `technologies` - التقنيات
- `experiences` - الخبرات
- `projects` - المشاريع
- `testimonials` - آراء العملاء

### تغيير الألوان

الألوان الأساسية في `tailwind.config.cjs`:

```javascript
colors: {
  primary: "#050816",
  secondary: "#aaa6c3",
  tertiary: "#151030",
  "black-100": "#100d25",
  "black-200": "#090325",
  "white-100": "#f3f3f3",
}
```

### تغيير الخطوط

الخطوط في `src/index.css`:

```css
font-family: "Noto Sans Arabic", "Cairo", "Poppins", sans-serif;
```

## 📸 إضافة صور المشاريع

راجع ملف [ADD-PROJECT-IMAGES-GUIDE.md](./docs/ADD-PROJECT-IMAGES-GUIDE.md) للتفاصيل الكاملة.

## 🌐 النشر

### Vercel (موصى به)

```bash
npm run build
vercel --prod
```

### Netlify

```bash
npm run build
netlify deploy --prod --dir=dist
```

### GitHub Pages

```bash
npm run build
# ثم ارفع محتوى مجلد dist
```

## 📱 التوافق

- ✅ Chrome / Edge
- ✅ Firefox
- ✅ Safari
- ✅ Mobile browsers
- ✅ جميع أحجام الشاشات

## 🐛 حل المشاكل الشائعة

### المشكلة: الموديلات ثلاثية الأبعاد لا تظهر

**الحل:** تأكد من وجود ملفات GLTF في `public/desktop_pc/` و `public/planet/`

### المشكلة: الخطوط العربية لا تظهر بشكل صحيح

**الحل:** تأكد من وجود `dir="rtl"` في `index.html` و استيراد الخطوط العربية

### المشكلة: نموذج التواصل لا يعمل

**الحل:** تحقق من إعدادات EmailJS في `Contact.jsx`

## 📝 التوثيق الإضافي

- [دليل تحديث المحتوى العربي](./docs/ARABIC-CONTENT-UPDATE-SUMMARY.md)
- [دليل إضافة صور المشاريع](./docs/ADD-PROJECT-IMAGES-GUIDE.md)
- [دليل الترحيل الأصلي](./docs/Content-Migration-Guide.md)

## 📞 التواصل

- **الاسم:** مصعب أبوبشارة
- **المسمى:** مهندس حاسوب
- **GitHub:** [@musab-abu-bshara](https://github.com/musab-abu-bshara)
- **LinkedIn:** [مصعب أبوبشارة](https://www.linkedin.com/in/musab-abu-bshara-5518b6316/)
- **البريد:** musababubshara@gmail.com

## 📄 الترخيص

هذا المشروع للاستخدام الشخصي. يمكنك استخدامه كمرجع أو قالب لبورتفوليو الخاص بك.

## 🙏 شكر وتقدير

- القالب الأصلي من [JavaScript Mastery](https://www.youtube.com/@javascriptmastery)
- الخطوط من [Google Fonts](https://fonts.google.com/)
- الأيقونات من [Font Awesome](https://fontawesome.com/)
- الموديلات ثلاثية الأبعاد من مجتمع Three.js

---

⭐ إذا أعجبك المشروع، لا تنسَ إعطائه نجمة على GitHub!

**صُنع بـ ❤️ بواسطة مصعب أبوبشارة**
