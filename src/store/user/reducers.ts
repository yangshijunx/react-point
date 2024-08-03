// src/modules/user/reducers.ts
import { UserState, SET_USER, UserActionTypes } from "./types";

const initialState: UserState = {
  id: 0,
  name: "",
  email: "",
};

export const userReducer = (
  state = initialState,
  action: UserActionTypes
): UserState => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
