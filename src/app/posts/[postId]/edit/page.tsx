import { PostForm } from "@/components/PostForm";
import { editExistingPost } from "../../actions/postActions";
import { getPost } from "@/db/posts";
import { notFound } from "next/navigation";
import { UserSelectOptions } from "../../userSelectOptions";
import { getUsers } from "@/db/users";

export default async function EditPostPage({
  params: { postId },
}: {
  params: { postId: string };
}) {
  const [post, users] = await Promise.all([getPost(postId), getUsers()]);

  if (post === null) return notFound();
  return (
    <>
      <h1 className="page-title">New Post</h1>
      <PostForm
        userSelectOptions={<UserSelectOptions users={users} />}
        post={post}
        action={editExistingPost.bind(null, postId)}
      />
    </>
  );
}
