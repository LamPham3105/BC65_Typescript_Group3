import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  setDataJsonStorage,
  USER_LOGIN,
  getDataJsonStorage,
  setDataTextStorage,
  removeDataJsonStorage,
  removeDataTextStorage,
} from "../../util/utilMethod";
import { UserLogin } from "../../Model/Model";
import { string } from "yup";

interface UserReducerType {
  userLogin: UserLogin | null;
}

const initialState: UserReducerType = {
  userLogin: getDataJsonStorage(USER_LOGIN),
};

const authReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    logout: (state) => {
      state.userLogin = null;
      removeDataTextStorage(USER_LOGIN);
      removeDataJsonStorage(USER_LOGIN);
    },
  },
});

export const { logout } = authReducer.actions;
export default authReducer.reducer;
