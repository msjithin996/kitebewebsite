"use client";

import { useState, useEffect } from "react";
import { collection, getDocs, addDoc, deleteDoc, doc, query, where } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Plus, Trash2, Users, Shield, Loader2 } from "lucide-react";

interface AdminUser {
    id: string;
    email: string;
    addedAt: string;
    addedBy: string;
}

const SUPER_ADMIN_EMAIL = "kitebepvtltd@gmail.com";

export default function UserManagementPage() {
    const [admins, setAdmins] = useState<AdminUser[]>([]);
    const [newEmail, setNewEmail] = useState("");
    const [loading, setLoading] = useState(true);
    const [adding, setAdding] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        loadAdmins();
    }, []);

    const loadAdmins = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "admins"));
            const adminList: AdminUser[] = [];
            querySnapshot.forEach((doc) => {
                adminList.push({ id: doc.id, ...doc.data() } as AdminUser);
            });
            setAdmins(adminList);
        } catch (err: any) {
            console.error("Error loading admins:", err);
            setError("Failed to load admin users");
        } finally {
            setLoading(false);
        }
    };

    const addAdmin = async () => {
        if (!newEmail.trim()) return;

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(newEmail)) {
            setError("Please enter a valid email address");
            return;
        }

        // Check if already exists
        if (newEmail.toLowerCase() === SUPER_ADMIN_EMAIL.toLowerCase()) {
            setError("This is the super admin email");
            return;
        }

        if (admins.some(a => a.email.toLowerCase() === newEmail.toLowerCase())) {
            setError("This email is already an admin");
            return;
        }

        setAdding(true);
        setError("");

        try {
            await addDoc(collection(db, "admins"), {
                email: newEmail.toLowerCase().trim(),
                addedAt: new Date().toISOString(),
                addedBy: SUPER_ADMIN_EMAIL,
            });
            setNewEmail("");
            await loadAdmins();
        } catch (err: any) {
            console.error("Error adding admin:", err);
            setError("Failed to add admin: " + err.message);
        } finally {
            setAdding(false);
        }
    };

    const removeAdmin = async (adminId: string, email: string) => {
        if (!confirm(`Are you sure you want to remove ${email} from admins?`)) return;

        try {
            await deleteDoc(doc(db, "admins", adminId));
            await loadAdmins();
        } catch (err: any) {
            console.error("Error removing admin:", err);
            setError("Failed to remove admin: " + err.message);
        }
    };

    if (loading) {
        return (
            <div className="p-8 flex items-center justify-center min-h-[400px]">
                <Loader2 className="animate-spin text-white" size={32} />
            </div>
        );
    }

    return (
        <div className="p-8 max-w-4xl">
            <div className="flex items-center gap-3 mb-8">
                <Users size={28} className="text-blue-400" />
                <h1 className="text-2xl font-bold text-white">User Management</h1>
            </div>

            {/* Super Admin Info */}
            <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-xl p-4 mb-8">
                <div className="flex items-center gap-3">
                    <Shield className="text-purple-400" size={20} />
                    <div>
                        <p className="text-sm text-purple-300">Super Admin</p>
                        <p className="text-white font-medium">{SUPER_ADMIN_EMAIL}</p>
                    </div>
                </div>
            </div>

            {/* Add New Admin */}
            <div className="bg-[#1a1a1a] border border-white/10 rounded-xl p-6 mb-8">
                <h2 className="text-lg font-semibold text-white mb-4">Add New Admin</h2>

                {error && (
                    <div className="bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-2 rounded-lg mb-4 text-sm">
                        {error}
                    </div>
                )}

                <div className="flex gap-3">
                    <input
                        type="email"
                        value={newEmail}
                        onChange={(e) => setNewEmail(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && addAdmin()}
                        placeholder="Enter email address..."
                        className="flex-1 bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500"
                    />
                    <button
                        onClick={addAdmin}
                        disabled={adding || !newEmail.trim()}
                        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {adding ? <Loader2 size={18} className="animate-spin" /> : <Plus size={18} />}
                        Add Admin
                    </button>
                </div>
            </div>

            {/* Admin List */}
            <div className="bg-[#1a1a1a] border border-white/10 rounded-xl overflow-hidden">
                <div className="px-6 py-4 border-b border-white/10">
                    <h2 className="text-lg font-semibold text-white">
                        Admin Users ({admins.length})
                    </h2>
                </div>

                {admins.length === 0 ? (
                    <div className="p-8 text-center text-gray-500">
                        <Users size={40} className="mx-auto mb-3 opacity-50" />
                        <p>No additional admin users yet.</p>
                        <p className="text-sm mt-1">Add email addresses above to grant admin access.</p>
                    </div>
                ) : (
                    <div className="divide-y divide-white/5">
                        {admins.map((admin) => (
                            <div
                                key={admin.id}
                                className="px-6 py-4 flex items-center justify-between hover:bg-white/5 transition-colors"
                            >
                                <div>
                                    <p className="text-white font-medium">{admin.email}</p>
                                    <p className="text-xs text-gray-500 mt-1">
                                        Added {new Date(admin.addedAt).toLocaleDateString()}
                                    </p>
                                </div>
                                <button
                                    onClick={() => removeAdmin(admin.id, admin.email)}
                                    className="p-2 text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
                                    title="Remove admin"
                                >
                                    <Trash2 size={18} />
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Info Box */}
            <div className="mt-8 bg-blue-500/10 border border-blue-500/20 rounded-xl p-4">
                <p className="text-sm text-blue-300">
                    <strong>Note:</strong> Users added here will be able to access the admin panel using Google Sign-In with their email address.
                    Only the Super Admin can manage user access.
                </p>
            </div>
        </div>
    );
}
