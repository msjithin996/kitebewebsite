"use client";

import { useEffect, useState } from "react";
import { onAuthStateChanged, signInWithPopup, GoogleAuthProvider, User } from "firebase/auth";
import { auth, db } from "@/lib/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import AdminSidebar from "@/components/admin/AdminSidebar";
import { Loader2 } from "lucide-react";

const SUPER_ADMIN_EMAIL = "kitebepvtltd@gmail.com";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const [checkingAccess, setCheckingAccess] = useState(false);
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [error, setError] = useState("");
    const [loginLoading, setLoginLoading] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            setUser(currentUser);

            if (currentUser) {
                setCheckingAccess(true);
                const authorized = await checkUserAccess(currentUser.email);
                setIsAuthorized(authorized);
                setCheckingAccess(false);
            } else {
                setIsAuthorized(false);
            }

            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    const checkUserAccess = async (email: string | null): Promise<boolean> => {
        if (!email) return false;

        // Super admin always has access
        if (email.toLowerCase() === SUPER_ADMIN_EMAIL.toLowerCase()) {
            return true;
        }

        // Check if email is in the admins collection
        try {
            const adminsRef = collection(db, "admins");
            const q = query(adminsRef, where("email", "==", email.toLowerCase()));
            const querySnapshot = await getDocs(q);
            return !querySnapshot.empty;
        } catch (err) {
            console.error("Error checking admin access:", err);
            return false;
        }
    };

    const handleLogin = async () => {
        setLoginLoading(true);
        setError("");
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoginLoading(false);
        }
    };

    if (loading || checkingAccess) {
        return (
            <div className="h-screen bg-black flex items-center justify-center text-white">
                <div className="text-center">
                    <Loader2 className="animate-spin text-white mx-auto mb-4" size={32} />
                    <p className="text-gray-400 text-sm">
                        {checkingAccess ? "Verifying access..." : "Loading..."}
                    </p>
                </div>
            </div>
        );
    }

    if (!user) {
        return (
            <div className="h-screen bg-black flex items-center justify-center px-4">
                <div className="w-full max-w-md bg-[#111] p-8 rounded-xl border border-white/10 text-center">
                    <h1 className="text-2xl font-bold text-white mb-6">Admin Login</h1>

                    {error && <p className="text-red-400 text-sm mb-4">{error}</p>}

                    <button
                        onClick={handleLogin}
                        disabled={loginLoading}
                        className="w-full bg-white text-black font-bold py-3 rounded hover:bg-gray-200 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                        {loginLoading ? (
                            <Loader2 className="animate-spin" size={20} />
                        ) : (
                            <svg className="w-5 h-5" viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                />
                            </svg>
                        )}
                        <span>{loginLoading ? "Signing in..." : "Sign in with Google"}</span>
                    </button>
                </div>
            </div>
        );
    }

    if (!isAuthorized) {
        return (
            <div className="h-screen bg-black flex flex-col items-center justify-center px-4 text-center">
                <h1 className="text-2xl font-bold text-red-500 mb-2">Access Denied</h1>
                <p className="text-gray-400 mb-6">You are signed in as {user.email}, but you are not authorized to view this page.</p>
                <button
                    onClick={() => auth.signOut()}
                    className="px-6 py-2 bg-white/10 rounded hover:bg-white/20 text-white transition-colors"
                >
                    Sign Out
                </button>
            </div>
        );
    }

    // Pass isSuperAdmin to context/sidebar
    const isSuperAdmin = user.email?.toLowerCase() === SUPER_ADMIN_EMAIL.toLowerCase();

    return (
        <div className="flex min-h-screen bg-black">
            <AdminSidebar isSuperAdmin={isSuperAdmin} />
            <main className="flex-1 ml-64 min-h-screen bg-black overflow-x-hidden">
                {children}
            </main>
        </div>
    );
}
