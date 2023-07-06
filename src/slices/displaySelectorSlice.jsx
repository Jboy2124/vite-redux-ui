import { createSlice } from "@reduxjs/toolkit";

export const displaySlice = createSlice({
  name: "displaySelector",
  initialState: {
    display: 0,
  },
  reducers: {
    selectDisplay: (state, action) => {
      state.display = action.payload;
    },
  },
});

export const { selectDisplay } = displaySlice.actions;

export default displaySlice.reducer;
