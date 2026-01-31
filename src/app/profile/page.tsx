"use client";

import { useSession, signOut } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useQuery } from "convex/react";
import { api } from "convex/_generated/api";

export default function ProfilePage() {
  const { data: session, isPending } = useSession();
  const router = useRouter();
  const user = useQuery(api.auth.getCurrentUser);

  useEffect(() => {
    // Redirect to signin if not authenticated
    if (!isPending && !session?.user) {
      router.push("/signin");
    }
  }, [session, isPending, router]);

  const handleSignOut = async () => {
    await signOut();
    router.push("/signin");
  };

  if (isPending || !session?.user) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-black border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="mx-auto max-w-2xl">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-black text-black">Profile</h1>
          <button
            onClick={handleSignOut}
            className="rounded-lg bg-black px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-gray-800"
          >
            Sign Out
          </button>
        </div>

        {/* Profile Card */}
        <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
          {/* Profile Image */}
          <div className="h-32 bg-gradient-to-r from-blue-500 to-purple-600"></div>

          <div className="relative px-6 pb-6">
            {/* Avatar */}
            <div className="relative -mt-16 mb-4">
              {session.user.image ? (
                <img
                  src={session.user.image}
                  alt={session.user.name || "User"}
                  className="h-32 w-32 rounded-full border-4 border-white object-cover shadow-lg"
                />
              ) : (
                <div className="flex h-32 w-32 items-center justify-center rounded-full border-4 border-white bg-black shadow-lg">
                  <span className="text-4xl font-bold text-white">
                    {session.user.name?.charAt(0).toUpperCase() || "U"}
                  </span>
                </div>
              )}
            </div>

            {/* User Info */}
            <div className="space-y-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {session.user.name || "Anonymous User"}
                </h2>
                <p className="text-sm text-gray-500">{session.user.email}</p>
              </div>

              {/* Details Grid */}
              <div className="mt-6 grid gap-4 rounded-xl bg-gray-50 p-4">
                <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                  <span className="text-sm font-medium text-gray-600">
                    User ID
                  </span>
                  <span className="font-mono text-sm text-gray-900">
                    {session.user.id}
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                  <span className="text-sm font-medium text-gray-600">
                    Name
                  </span>
                  <span className="text-sm font-semibold text-gray-900">
                    {session.user.name || "Not set"}
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                  <span className="text-sm font-medium text-gray-600">
                    Email
                  </span>
                  <span className="text-sm font-semibold text-gray-900">
                    {session.user.email}
                  </span>
                </div>

                {user && (
                  <>
                    <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                      <span className="text-sm font-medium text-gray-600">
                        Database ID
                      </span>
                      <span className="font-mono text-sm text-gray-900">
                        {user._id}
                      </span>
                    </div>

                    {"username" in user && user.username && (
                      <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                        <span className="text-sm font-medium text-gray-600">
                          Username
                        </span>
                        <span className="text-sm font-semibold text-gray-900">
                          @{(user as any).username}
                        </span>
                      </div>
                    )}

                    {"bio" in user && user.bio && (
                      <div className="flex flex-col gap-2 border-b border-gray-200 pb-3">
                        <span className="text-sm font-medium text-gray-600">
                          Bio
                        </span>
                        <p className="text-sm text-gray-900">{(user as any).bio}</p>
                      </div>
                    )}
                  </>
                )}

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-600">
                    Email Verified
                  </span>
                  <span
                    className={`text-sm font-semibold ${session.user.emailVerified
                      ? "text-green-600"
                      : "text-orange-600"
                      }`}
                  >
                    {session.user.emailVerified ? "Yes" : "No"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-6 rounded-xl bg-blue-50 p-4">
          <p className="text-sm text-blue-900">
            <span className="font-semibold">✨ Welcome to Spotnearr!</span> Your
            profile is now set up. You can explore local deals, services, and
            community updates.
          </p>
        </div>
      </div>
    </div>
  );
}
