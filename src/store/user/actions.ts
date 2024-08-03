// src/modules/user/actions.ts
import { UserState, SET_USER, UserActionTypes } from "./types";

export const setUser = (user: UserState): UserActionTypes => ({
  type: SET_USER,
  payload: user,
});
