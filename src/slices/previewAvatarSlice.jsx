import { createSlice } from "@reduxjs/toolkit";

export const previewAvatarSlice = createSlice({
  name: "previewAvatar",
  initialState: {
    image: null,
  },
  reducers: {
    setImage: (state, action) => {
      state.image = action.payload;
    },
  },
});

export const { setImage } = previewAvatarSlice.actions;
export default previewAvatarSlice.reducer;
