import { configureStore } from "@reduxjs/toolkit";
import { apiInstance } from "../instances/apiInstance";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import displaySelectorSlice from "../slices/displaySelectorSlice";
import previewAvatarSlice from "../slices/previewAvatarSlice";
import authSlice from "../slices/authSlice";

export const store = configureStore({
  reducer: {
    [apiInstance.reducerPath]: apiInstance.reducer,
    displayComp: displaySelectorSlice,
    previewProfilePic: previewAvatarSlice,
    userAuth: authSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiInstance.middleware),
});

setupListeners(store.dispatch);
