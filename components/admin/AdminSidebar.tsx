"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, TestTube, FileText, LogOut, Users, Briefcase, FlaskConical } from "lucide-react";
import { auth } from "@/lib/firebase";
import { signOut } from "firebase/auth";

interface AdminSidebarProps {
    isSuperAdmin?: boolean;
}

export default function AdminSidebar({ isSuperAdmin = false }: AdminSidebarProps) {
    const pathname = usePathname();

    const links = [
        { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
        { href: "/admin/posts", label: "Projects", icon: Briefcase },
        { href: "/admin/research", label: "Research", icon: FlaskConical },
        { href: "/admin/test", label: "Test Page", icon: TestTube },
    ];

    // Only show User Management to super admin
    if (isSuperAdmin) {
        links.push({ href: "/admin/users", label: "Users", icon: Users });
    }


    const handleLogout = () => {
        signOut(auth);
    };

    return (
        <aside className="w-64 bg-[#111] border-r border-white/10 flex flex-col h-screen fixed left-0 top-0 z-50">
            <div className="p-6 border-b border-white/10">
                <h1 className="text-xl font-bold text-white tracking-widest uppercase">Admin</h1>
            </div>

            <nav className="flex-1 p-4 space-y-2">
                {links.map((link) => {
                    const isActive = pathname === link.href;
                    const Icon = link.icon;
                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive
                                ? "bg-white text-black font-medium"
                                : "text-gray-400 hover:text-white hover:bg-white/5"
                                }`}
                        >
                            <Icon size={20} />
                            <span>{link.label}</span>
                        </Link>
                    );
                })}
            </nav>

            <div className="p-4 border-t border-white/10">
                <button
                    onClick={handleLogout}
                    className="flex items-center gap-3 px-4 py-3 w-full rounded-lg text-red-400 hover:bg-white/5 hover:text-red-300 transition-colors"
                >
                    <LogOut size={20} />
                    <span>Logout</span>
                </button>
            </div>
        </aside>
    );
}
