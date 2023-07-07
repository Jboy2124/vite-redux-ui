import { configureStore } from "@reduxjs/toolkit";
import { apiInstance } from "../instances/apiInstance";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import displaySelectorSlice from "../slices/displaySelectorSlice";
import previewAvatarSlice from "../slices/previewAvatarSlice";
import authSlice from "../slices/authSlice";
import loginCredSlice from "../slices/signupCredSlice";
import emailVerificationSlice from "../slices/emailVerificationSlice";

export const store = configureStore({
  reducer: {
    [apiInstance.reducerPath]: apiInstance.reducer,
    displayComp: displaySelectorSlice,
    previewProfilePic: previewAvatarSlice,
    userAuth: authSlice,
    loginCred: loginCredSlice,
    emailVerify: emailVerificationSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiInstance.middleware),
});

setupListeners(store.dispatch);
