"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function BuilderRedirect() {
    const router = useRouter();

    useEffect(() => {
        router.replace("/admin/posts");
    }, [router]);

    return (
        <div className="h-screen flex items-center justify-center bg-black text-white">
            <p>Redirecting to Posts...</p>
        </div>
    );
}
