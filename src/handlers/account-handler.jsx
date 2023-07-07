import { apiInstance } from "../instances/apiInstance";

const accountEnpoints = apiInstance.injectEndpoints({
  endpoints: (builder) => ({
    getAccounts: builder.query({
      query: () => "/account",
      providesTags: ["Accounts"],
    }),
    addAccount: builder.mutation({
      query: (data) => ({
        url: "/account",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Accounts"],
    }),
    addNewAvatar: builder.mutation({
      query: (data) => ({
        url: `/account/avatar/`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Accounts"],
    }),
  }),
});

export const {
  useGetAccountsQuery,
  useAddAccountMutation,
  useAddNewAvatarMutation,
} = accountEnpoints;
