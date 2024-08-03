// src/store/rootReducer.ts
import { combineReducers } from "redux";
import { userReducer } from "./user/reducers";
import { postsReducer } from "./posts/reducers";

export const rootReducer = combineReducers({
  user: userReducer,
  posts: postsReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
