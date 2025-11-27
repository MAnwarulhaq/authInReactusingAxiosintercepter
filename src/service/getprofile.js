import { api } from "./createapi"

export const profileAPI = api.injectEndpoints({
    endpoints: (builder) => ({
        getProfile: builder.query({
            query: () => '/profile'
        }),

    })
})

export const { useGetProfileQuery, useLoginMutation } = profileAPI