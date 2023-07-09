import { apiInstance } from "../instances/apiInstance";

const accountEnpoints = apiInstance.injectEndpoints({
  endpoints: (builder) => ({
    getAccounts: builder.query({
      query: (page) => `/account?page=${page}`,
      providesTags: ["Accounts"],
    }),
    getTotalCount: builder.query({
      query: () => "/account/total",
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
  overrideExisting: false,
});

export const {
  useGetTotalCountQuery,
  useGetAccountsQuery,
  useAddAccountMutation,
  useAddNewAvatarMutation,
} = accountEnpoints;
