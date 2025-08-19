# Next.js Auth0 Authentication Project

NextAuth.js + Auth0 ile güvenli kimlik doğrulama sistemi.

## 🚀 Özellikler

- ✅ Auth0 OAuth entegrasyonu
- ✅ NextAuth.js ile session yönetimi
- ✅ JWT tabanlı kimlik doğrulama
- ✅ Korumalı sayfa erişimi (Route Guard)
- ✅ Responsive TailwindCSS tasarım
- ✅ TypeScript desteği
- ✅ 12-Factor App uyumlu

## 📦 Kurulum

### 1. Repository'yi Klonla

```bash
git clone https://github.com/nmervecifci/next-auth.git
cd next-auth
```

### 2. Bağımlılıkları Yükle

```bash
npm install
```

### 3. Environment Variables Ayarla

```bash
# .env.example dosyasını kopyala
cp .env.example .env.local

# .env.local dosyasını düzenle ve gerçek değerleri gir
```

### 4. Auth0 Konfigürasyonu

1. [Auth0 Dashboard](https://auth0.com)'a git
2. Yeni Application oluştur (Single Page Application)
3. Callback URLs ekle:
   - `http://localhost:3000/api/auth/callback/auth0`
4. Logout URLs ekle:
   - `http://localhost:3000`

### 5. Uygulamayı Başlat

```bash
npm run dev
```

Uygulama http://localhost:3000 adresinde çalışacak.

## 🔧 Kullanılan Teknolojiler

- **Next.js 15** - React framework
- **NextAuth.js** - Authentication library
- **Auth0** - OAuth provider
- **TypeScript** - Type safety
- **TailwindCSS** - Styling
- **JWT** - Token-based authentication

## 📁 Proje Yapısı

```
src/
├── app/
│   ├── api/auth/[...nextauth]/route.ts  # NextAuth API endpoint
│   ├── profile/page.tsx                 # Korumalı profil sayfası
│   ├── layout.tsx                       # Ana layout
│   └── page.tsx                         # Ana sayfa
├── components/
│   └── RouteGuard.tsx                   # Sayfa koruma bileşeni
└── middleware.ts                        # Route middleware
```

## 🛡️ Güvenlik

- JWT tabanlı session yönetimi
- Route Guard ile sayfa koruması
- Environment variables ile hassas bilgi güvenliği
- Auth0 ile güvenli OAuth akışı

## 🚀 Production Deploy

```bash
# Build al
npm run build

# Production'da çalıştır
npm start
```

## 📝 Environment Variables

| Variable              | Açıklama            | Örnek                          |
| --------------------- | ------------------- | ------------------------------ |
| `NEXTAUTH_SECRET`     | NextAuth secret key | `random-secret-key`            |
| `NEXTAUTH_URL`        | Uygulama base URL   | `http://localhost:3000`        |
| `AUTH0_CLIENT_ID`     | Auth0 client ID     | `abc123...`                    |
| `AUTH0_CLIENT_SECRET` | Auth0 client secret | `xyz789...`                    |
| `AUTH0_ISSUER`        | Auth0 domain        | `https://yourdomain.auth0.com` |


### Bilinen Eksikler:
⚠️ Test yazımı (unit/integration testler)
### Neden Bu Eksik Var:
- Süre kısıtlaması nedeniyle öncelik sırasına göre geliştirme yapıldı

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit atın (`git commit -m 'Add amazing feature'`)
4. Push yapın (`git push origin feature/amazing-feature`)
5. Pull Request açın

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## 🐛 Sorun Bildirimi

Sorun yaşıyorsanız [Issues](https://github.com/nmervecifci/next-auth/issues) sayfasından bildirebilirsiniz.

## 👨‍💻 Geliştirici

- Merve Nur Çifci (https://github.com/nmervecifci)
## ��� Project Completed Successfully!
