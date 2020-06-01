import { SET_USERNAME } from "../actionTypes";

export const loginSuccess = userName => ({
  type: SET_USERNAME,
  payload: {
    userName,
  }
});
