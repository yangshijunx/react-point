// src/modules/posts/reducers.ts
import { PostsState, ADD_POST, PostsActionTypes } from "./types";

const initialState: PostsState = {
  posts: [],
};

export const postsReducer = (
  state = initialState,
  action: PostsActionTypes
): PostsState => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    default:
      return state;
  }
};
