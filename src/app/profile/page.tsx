"use client";

import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { withAuthGuard } from "./RouteGuard";

function ProfilePage() {
  const { data: session } = useSession();

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Navigation */}
          <nav className="mb-8">
            <Link
              href="/"
              className="text-blue-600 hover:text-blue-800 font-semibold"
            >
              ← Ana Sayfaya Dön
            </Link>
          </nav>

          {/* Profile Header */}
          <div className="bg-white rounded-lg shadow-xl p-8 mb-8">
            <div className="flex items-center space-x-6">
              {session?.user?.image && (
                <img
                  src={session.user.image}
                  alt={session.user.name || "User"}
                  className="w-24 h-24 rounded-full border-4 border-blue-200"
                />
              )}
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  📋 Profil Sayfası
                </h1>
                <p className="text-gray-600">
                  Bu sayfa{" "}
                  <span className="font-semibold text-green-600">
                    Route Guard (Middleware Pattern) ile korunuyor
                  </span>{" "}
                  🛡️
                </p>
              </div>
            </div>
          </div>

          {/* Protection Status */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-8">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <svg
                  className="h-5 w-5 text-green-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-green-800">
                  Korumalı Sayfa Erişimi Başarılı
                </h3>
                <div className="mt-2 text-sm text-green-700">
                  <p>
                    ✅ Higher Order Component (HOC) ile route koruması aktif
                  </p>
                  <p>✅ Session kontrolü başarılı</p>
                  <p>✅ Yetkisiz erişim engellendi</p>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Details */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* User Info */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">
                👤 Kullanıcı Bilgileri
              </h2>
              <div className="space-y-3">
                <div>
                  <label className="text-sm font-medium text-gray-500">
                    İsim:
                  </label>
                  <p className="text-lg text-gray-900">{session?.user?.name}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">
                    Email:
                  </label>
                  <p className="text-lg text-gray-900">
                    {session?.user?.email}
                  </p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">
                    Kimlik:
                  </label>
                  <p className="text-sm text-gray-600 font-mono break-all">
                    {session?.user ? "Authenticated User" : "N/A"}
                  </p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">
                ⚙️ İşlemler
              </h2>
              <div className="space-y-4">
                <div className="bg-blue-50 border border-blue-200 text-blue-700 px-4 py-3 rounded">
                  <strong>🛡️ Route Guard Pattern</strong>
                  <br />
                  HOC ile sayfa erişimi kontrol ediliyor.
                </div>

                <button
                  onClick={() => signOut()}
                  className="w-full bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
                >
                  🚪 Çıkış Yap
                </button>
              </div>
            </div>
          </div>

          {/* Session Debug Info */}
          <div className="mt-8 bg-gray-100 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-3 text-gray-800">
              🔧 Session Bilgileri (Debug)
            </h3>
            <pre className="text-xs bg-gray-800 text-green-400 p-4 rounded overflow-x-auto">
              {JSON.stringify(session, null, 2)}
            </pre>
          </div>
        </div>
      </div>
    </main>
  );
}


export default withAuthGuard(ProfilePage);
