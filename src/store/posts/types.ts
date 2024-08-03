// src/modules/posts/types.ts
export interface Post {
  id: number;
  title: string;
  content: string;
}

export interface PostsState {
  posts: Post[];
}

export const ADD_POST = "ADD_POST";

interface AddPostAction {
  type: typeof ADD_POST;
  payload: Post;
}

export type PostsActionTypes = AddPostAction;
