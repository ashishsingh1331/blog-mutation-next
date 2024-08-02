"use client";
import { deletePost } from "@/db/posts";
import React, { useTransition } from "react";
import { deletePostAction } from "../actions/postActions";

export default function DeleteButton({ postId }: { postId: string }) {
  const [pending, startTransition] = useTransition();

  return (
    <button
      className="btn btn-outline btn-danger"
      disabled={pending}
      onClick={() => {
        startTransition(async () => {
          await deletePostAction(postId);
        });
      }}
    >
      {pending ? "Deleting" : "Delete"}
    </button>
  );
}
