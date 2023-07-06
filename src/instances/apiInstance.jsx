import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiInstance = createApi({
  reducerPath: "apiInstance",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080",
  }),
  tagTypes: ["Accounts"],
  endpoints: (builder) => ({}),
});
