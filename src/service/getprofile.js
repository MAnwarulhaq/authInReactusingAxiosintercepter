import { api } from "./createapi"

export const profileAPI = api.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (credentials) => ({
                url: "/login",
                method: "POST",
                body: credentials,
            }),
        }),
        getProfile: builder.query({
            query: () => '/profile'
        }),

    })
})

export const { useGetProfileQuery,useLoginMutation } = profileAPI