import { apiInstance } from "../instances/apiInstance";

const authEndpoints = apiInstance.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: "/signin",
        method: "POST",
        body: data,
      }),
      transformResponse: (res) => {
        res.length > 0 ? true : false;
      },
      invalidatesTags: ["Login"],
    }),
  }),
});

export const { useLoginMutation } = authEndpoints;
