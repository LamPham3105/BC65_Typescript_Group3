// notificationSlice.ts
import { createSlice } from "@reduxjs/toolkit";
import { getDataJsonStorage, USER_LOGIN } from "../../util/utilMethod";

interface AvatarReducerType {
  avatar: string;
}

const initialState: AvatarReducerType = {
  avatar: getDataJsonStorage(USER_LOGIN).user.avatar,
};

const avatarReducer = createSlice({
  name: "avatarReducer",
  initialState,
  reducers: {
    updateAvatar: (state, action) => {
      state.avatar = action.payload;
    },
  },
});

export const { updateAvatar } = avatarReducer.actions;

export default avatarReducer.reducer;
