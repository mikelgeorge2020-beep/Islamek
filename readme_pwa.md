# 📱 دليل ملفات PWA الجاهزة للتنزيل والتشغيل — مشروع «نُور» الإسلامي

تم تجهيز وحفظ ملفات تحويل المشروع إلى **تطبيق ويب تقدمي (PWA)** جاهزة ومستقلة:

---

## 📂 1. الملف الأول: `manifest.json`
* **النوع:** JSON
* **مكان الحفظ:** يوضع مباشرة في المجلد الرئيسي للمشروع بجانب `index.html`.
* **الوظيفة:** يحدد اسم التطبيق، الأيقونات، لون شريط الحالة (`#064e3b`)، اتجاه الشاشة (`portrait-primary`)، واختصارات المصحف والأذكار والإمساكية.

---

## ⚡ 2. الملف الثاني: `sw.js` (عامل الخدمة Service Worker)
* **النوع:** JavaScript / Text
* **مكان الحفظ:** يوضع مباشرة في المجلد الرئيسي للمشروع باسم `sw.js`.
* **الوظيفة:**
  1. تخزين صفحات الموقع وأكواد Tailwind والخطوط للعمل دون اتصال بالإنترنت (Offline Mode).
  2. استثناء إعلانات Google AdSense من التخزين المؤقت لضمان احتساب المشاهدات والأرباح دائماً.
  3. إدارة فتح التطبيق عند النقر على إشعارات الأذكار الدورية الصامتة والصوتية.

---

## 🔗 3. كود التضمين في صفحات HTML (`index.html` وباقي الصفحات)

### أ) أضف داخل وسم `<head>`:
```html
<!-- إعدادات تطبيق الويب التقدمي PWA -->
<link rel="manifest" href="manifest.json">
<meta name="theme-color" content="#064e3b">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="نُور">
<link rel="apple-touch-icon" href="icons/icon-192x192.png">
```

### ب) أضف قبل إغلاق وسم `</body>` مباشرة:
```html
<script>
  // تسجيل Service Worker
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js')
        .then((reg) => console.log('✅ تطبيق نور يعمل بنظام PWA:', reg.scope))
        .catch((err) => console.error('❌ تعذر تسجيل Service Worker:', err));
    });
  }

  // كود التثبيت على الهاتف (Install Banner Prompt)
  let deferredPrompt;
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
  });
</script>
```

---

## 🎨 4. الأيقونات المطلوبة في مجلد `icons/`
أنشئ مجلداً باسم `icons` وضع فيه صورتين لشعار التطبيق:
* `icon-192x192.png`
* `icon-512x512.png`

عند رفع هذه الملفات على استضافتك المجانية (مثل Netlify أو Vercel أو GitHub Pages) التي تدعم HTTPS، سيصبح تطبيقك قابلاً للتثبيت مباشرة على شاشات هواتف أندرويد وآيفون!