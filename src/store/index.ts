// src/store/index.ts
import { createStore } from "redux";
import { rootReducer } from "./rootReducer";

export const store = createStore(
  rootReducer
  // Add any Redux middleware here, like Redux DevTools or thunk
);

export default store;
