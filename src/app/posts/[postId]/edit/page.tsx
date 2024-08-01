import { PostForm } from "@/components/PostForm";
import { editExistingPost } from "../../actions/postActions";
import { getPost } from "@/db/posts";
import { notFound } from "next/navigation";

export default async function EditPostPage({
  params: { postId },
}: {
  params: { postId: string };
}) {
  const post = await getPost(postId);

  if (post === null) return notFound();
  return (
    <>
      <h1 className="page-title">New Post</h1>
      <PostForm post={post} action={editExistingPost.bind(null, postId)} />
    </>
  );
}
