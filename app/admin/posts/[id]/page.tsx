"use client";

import { Suspense } from "react";
import PostEditor from "@/components/admin/PostEditor";
import { useParams } from "next/navigation";

export default function EditPostPage() {
    const params = useParams();
    const postId = params.id as string;

    return (
        <Suspense fallback={<div>Loading editor...</div>}>
            <PostEditor postId={postId} />
        </Suspense>
    );
}
