// src/components/PostList.tsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "@/store/rootReducer";
import { addPost } from "@/store/posts/actions";
import { Post } from "@/store/posts/types";

const PostList: React.FC = () => {
  const posts = useSelector((state: AppState) => state.posts.posts);
  console.log(posts, "获取的内容");
  const dispatch = useDispatch();

  const handleAddPost = () => {
    const newPost: Post = {
      id: posts.length + 1,
      title: "New Post",
      content: "This is a new post",
    };
    dispatch(addPost(newPost));
  };

  return (
    <div>
      <h1>Posts</h1>
      <button onClick={handleAddPost}>Add Post</button>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
