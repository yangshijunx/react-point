// src/modules/posts/actions.ts
import { Post, ADD_POST, PostsActionTypes } from "./types";

export const addPost = (post: Post): PostsActionTypes => ({
  type: ADD_POST,
  payload: post,
});
