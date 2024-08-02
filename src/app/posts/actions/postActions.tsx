"use server";

import { createPost, deletePost, updatePost } from "@/db/posts";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// Server action to create new post
export async function createNewPost(formData: FormData) {
  const title = formData.get("title") as string;
  const body = formData.get("body") as string;
  const userId = Number(formData.get("userId"));
  const post = await createPost({ title, body, userId });

  revalidatePath("/posts");
  revalidatePath(`/users/${userId}`);
  redirect(`/posts/${post.id}`);
}

// Server action to create new post
export async function editExistingPost(postId: string, formData: FormData) {
  console.log(postId);
  const title = formData.get("title") as string;
  const body = formData.get("body") as string;
  const userId = Number(formData.get("userId"));
  const post = await updatePost(postId, { title, body, userId });

  revalidatePath("/posts");
  revalidatePath(`/users/${post.userId}`);
  revalidatePath(`/posts/${post.id}`);
  redirect(`/posts/${post.id}`);
}
// Server action to create new post
export async function deletePostAction(postId: string) {
  const post = await deletePost(postId);

  revalidatePath("/posts");
  revalidatePath(`/users/${post.userId}`);
  revalidatePath(`/posts/${post.id}`);
  redirect(`/posts`);
}
