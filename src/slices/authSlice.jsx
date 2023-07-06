import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../utils/axios-instance";

const initialState = { user: [] };

export const signinAuth = createAsyncThunk("signin/auth", async (data) => {
  const response = await axiosInstance({
    method: "POST",
    url: "/signin",
    data: data,
  });
  return response.data;
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLogin: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signinAuth.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(signinAuth.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(signinAuth.rejected, (state, action) => {
        state.loading = false;
        state.error = "Error logging in";
      });
  },
});

export const { userLogin } = authSlice.actions;
export default authSlice.reducer;
