"use client";

import { Suspense } from "react";
import PostEditor from "@/components/admin/PostEditor";

export default function NewPostPage() {
    return (
        <Suspense fallback={<div>Loading editor...</div>}>
            <PostEditor />
        </Suspense>
    );
}
