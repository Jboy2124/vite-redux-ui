import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
    {
      email: "",
      password: "",
    },
  ],
};

export const loginCredSlice = createSlice({
  name: "loginCred",
  initialState,
  reducers: {
    getData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { getData } = loginCredSlice.actions;

export default loginCredSlice.reducer;
