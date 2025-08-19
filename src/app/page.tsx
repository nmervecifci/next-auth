"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

export default function Home() {
  const { data: session, status } = useSession();

  if (status === "loading")
    return (
      <div className="flex justify-center items-center min-h-screen">
        Loading...
      </div>
    );

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            🔐 NextAuth + Auth0 Demo
          </h1>

          {session ? (
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="mb-6">
                {session.user?.image && (
                  <img
                    src={session.user.image}
                    alt={session.user.name || "User"}
                    className="w-20 h-20 rounded-full mx-auto mb-4"
                  />
                )}
                <h2 className="text-2xl font-semibold text-gray-800">
                  Hoş geldin, {session.user?.name}! 👋
                </h2>
                <p className="text-gray-600 mt-2">{session.user?.email}</p>
              </div>

              <div className="space-y-4">
                <Link
                  href="/profile"
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors mr-4"
                >
                  📋 Profil Sayfası
                </Link>

                <button
                  onClick={() => signOut()}
                  className="bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-colors text-lg font-semibold"
                >
                  🚪 Çıkış Yap
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-lg p-8">
              <p className="text-gray-600 mb-6">
                NextAuth + Auth0 ile güvenli giriş yapın
              </p>
              <button
                onClick={() => signIn("auth0")}
                className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-colors text-lg font-semibold"
              >
                🔑 Auth0 ile Giriş Yap
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
