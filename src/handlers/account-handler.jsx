import { apiInstance } from "../instances/apiInstance";

const accountEnpoints = apiInstance.injectEndpoints({
  endpoints: (builder) => ({
    getAccounts: builder.query({
      query: () => "/account",
      providesTags: ["Accoounts"],
    }),
    addNewAvatar: builder.mutation({
      query: (data) => ({
        url: `/account/avatar/`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Account"],
    }),
  }),
});

export const { useGetAccountsQuery, useAddNewAvatarMutation } = accountEnpoints;
