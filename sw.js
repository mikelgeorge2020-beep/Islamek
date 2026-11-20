// ===================================================================
// ملف عامل الخدمة Service Worker لتطبيق «نُور» الإسلامي
// اسم الملف: sw.js
// الوظيفة: العمل بدون إنترنت (Offline Caching) وإدارة إشعارات الأذكار
// ===================================================================

const CACHE_NAME = 'noor-islamic-v1';

// قائمة الملفات المطلوب حفظها مؤقتاً للعمل بدون اتصال بالإنترنت
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './quran.html',
  './azkar.html',
  './ramadan.html',
  './m-home.html',
  './m-quran.html',
  './m-azkar.html',
  './m-qibla.html',
  './m-settings.html',
  './m-ramadan.html',
  './manifest.json',
  'https://cdn.tailwindcss.com',
  'https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400&family=Tajawal:wght@300;400;500;700;800&display=swap'
];

// 1. مرحلة التثبيت: حفظ الموارد في التخزين المؤقت
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[Service Worker] جاري تخزين ملفات تطبيق نور...');
      return cache.addAll(ASSETS_TO_CACHE);
    }).then(() => self.skipWaiting())
  );
});

// 2. مرحلة التفعيل: مسح وحذف الكاش القديم عند التحديث
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log('[Service Worker] حذف الكاش القديم:', cache);
            return caches.delete(cache);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// 3. استراتيجية جلب البيانات: Network First مع التحويل للكاش عند انقطاع الإنترنت
self.addEventListener('fetch', (event) => {
  // استثناء إعلانات Google AdSense وشبكات الإعلانات من التخزين المؤقت
  if (event.request.url.includes('googlesyndication.com') || 
      event.request.url.includes('doubleclick.net') ||
      event.request.url.includes('googleads')) {
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then((networkResponse) => {
        // تحديث الكاش بنسخة طازجة طالما أن الاستجابة ناجحة
        if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      })
      .catch(() => {
        // عند عدم وجود إنترنت يتم فتح الملف من الكاش المحفوظ
        return caches.match(event.request).then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }
          if (event.request.mode === 'navigate') {
            return caches.match('./index.html');
          }
        });
      })
  );
});

// 4. استجابة النقر على إشعارات الأذكار الدورية
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      if (clientList.length > 0) {
        return clientList[0].focus();
      }
      return clients.openWindow('./index.html');
    })
  );
});
