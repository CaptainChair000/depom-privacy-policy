# CaptainChair Geliştirici Portalı

Modern ve profesyonel geliştirici portalı. AdMob, Google Play Store ve diğer platform gereksinimlerini karşılamak için tasarlanmıştır.

## Özellikler

✅ **Responsive Tasarım** - Tüm cihazlarda mükemmel görünüm
✅ **Gizlilik Politikası** - Hazır ve özelleştirilebilir
✅ **app-ads.txt** - AdMob gereksinimi
✅ **Modern UI** - Gradient, smooth transitions ve profesyonel görünüm
✅ **Hızlı Navigasyon** - Vanilla JavaScript ile hızlı ve hafif

## Kurulum

### 1. Temel Ayarlama
Bu klasörü bir web sunucusuna yükleyin:
- `index.html` - Ana portal sayfası
- `app-ads.txt` - AdMob tanımlama dosyası

### 2. AdMob Publisher ID Güncelleme
`app-ads.txt` dosyasındaki `pub-0000000000000000` değerini kendi AdMob Publisher ID'niz ile değiştirin:

```
google.com, pub-YOUR_PUBLISHER_ID, DIRECT, f08c47fec0942fa0
```

### 3. İletişim Bilgilerini Güncelleme
`index.html` dosyasında aşağıdaki yerler özelleştirilebilir:

- E-posta adresi: `contactus@captainchair.com`
- GitHub profili linki
- Uygulamalar listesi (apps-section)

### 4. Domain Ayarlaması
- Kendi domain'inize (örn: www.captainchair.com) yönlendirin
- https:// kullanın (SSL/TLS zorunludur)

## Dosya Yapısı

```
developer-portal/
├── index.html          # Ana portal sayfası
├── app-ads.txt         # AdMob tanımlama
└── README.md           # Bu dosya
```

## Kullanılan Teknolojiler

- HTML5
- CSS3 (Gradient, Flexbox, Grid)
- Vanilla JavaScript
- Responsive Design

## Özelleştirme Rehberi

### Renkleri Değiştirme
`index.html` içinde CSS'de:
```css
#6366f1 /* Mavi renk */
#764ba2 /* Mor renk */
```

### Uygulamalar Ekleme
`apps-section` içindeki `.apps-grid` div'ine yeni `.app-card` ekleyin:
```html
<div class="app-card">
    <div class="app-icon">🎯</div>
    <h3>Uygulama Adı</h3>
    <p>Uygulama açıklaması</p>
</div>
```

### Gizlilik Politikası Güncelleme
`#privacy-content` div'indeki metni kendi politikanız ile değiştirin.

## AdMob Uyumluluğu

Bu portal, AdMob tarafından istenen şu gereksinimleri karşılar:

✅ **Gizlilik Politikası** - Erişilebilir ve eksiksiz
✅ **app-ads.txt** - Kök dizinde mevcuttur
✅ **İletişim Bilgileri** - Açık ve anlaşılır
✅ **Uygulamalar Listesi** - Yayınlanan uygulamalar gösterilir
✅ **Mobile Friendly** - Tüm cihazlarda çalışır

## Hosting Seçenekleri

Aşağıdaki hizmetler kullanılabilir:

1. **GitHub Pages** (Ücretsiz)
2. **Netlify** (Ücretsiz)
3. **Vercel** (Ücretsiz)
4. **Your Own Server** (Kendi sunucunuz)

## AdMob İçin Hazırlama Adımları

1. ✅ `app-ads.txt` dosyasını oluştur ve Publisher ID'yi ekle
2. ✅ Gizlilik Politikası sayfasını ekle
3. ✅ İletişim bilgilerini ekle
4. ✅ Domain'i SSL/TLS ile güvenleştir
5. ✅ AdMob konsolunda siteyi doğrula

## İletişim

- E-posta: contactus@captainchair.com
- GitHub: https://github.com/CaptainChair000

## Lisans

Bu portal template'i açıkça kullanılabilir. Kendi uygulamalarınız için özgürce kullanınız.

---

**Son Güncelleme:** 22 Nisan 2026
