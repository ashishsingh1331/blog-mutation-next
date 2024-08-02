import { PostForm } from "@/components/PostForm";
import { createPost } from "@/db/posts";
import { createNewPost } from "../actions/postActions";
import { UserSelectOptions } from "../userSelectOptions";

export default function NewPostPage() {
  return (
    <>
      <h1 className="page-title">New Post</h1>
      <PostForm
        userSelectOptions={<UserSelectOptions />}
        action={createNewPost}
      />
    </>
  );
}
