import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../utils/axios-instance";

const initialState = {
  existing: [],
};

export const verifyEmail = createAsyncThunk(
  "email/verification",
  async (data) => {
    try {
      const response = await axiosInstance({
        method: "POST",
        url: "/verify/email",
        data: data,
      });

      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const emailVerificationSlice = createSlice({
  name: "verification",
  initialState,
  reducers: {
    verify: (state, action) => {
      state.existing = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(verifyEmail.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(verifyEmail.fulfilled, (state, action) => {
        state.existing = action.payload;
      })
      .addCase(verifyEmail.rejected, (state, action) => {
        state.error = "Something went wrong!";
        state.loading = false;
      });
  },
});

export const { verify } = emailVerificationSlice.actions;

export default emailVerificationSlice.reducer;
