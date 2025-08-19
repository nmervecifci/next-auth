"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, ComponentType } from "react";

export function withAuthGuard<T extends object>(
  WrappedComponent: ComponentType<T>
) {
  const AuthGuardComponent = (props: T) => {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
      console.log(
        "🛡️ Route Guard - Checking authentication for protected route"
      );
      console.log("🔑 Session status:", status);
      console.log("👤 Session exists:", !!session);

      if (status === "loading") {
        console.log("⏳ Auth loading...");
        return;
      }

      if (!session) {
        console.log("❌ No session - redirecting to login");
        router.push("/api/auth/signin");
        return;
      }

      console.log("✅ Access granted to protected route");
    }, [session, status, router]);

    if (status === "loading") {
      return (
        <div className="flex justify-center items-center min-h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">
              🔐 Kimlik doğrulaması kontrol ediliyor...
            </p>
          </div>
        </div>
      );
    }

    if (!session) {
      return (
        <div className="flex justify-center items-center min-h-screen">
          <div className="text-center">
            <p className="text-gray-600">
              🚪 Giriş sayfasına yönlendiriliyor...
            </p>
          </div>
        </div>
      );
    }

    return <WrappedComponent {...props} />;
  };

  AuthGuardComponent.displayName = `withAuthGuard(${
    WrappedComponent.displayName || WrappedComponent.name
  })`;

  return AuthGuardComponent;
}
