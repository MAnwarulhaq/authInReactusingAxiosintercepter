import { api } from "./createapi";

export const login = api.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (credentials) => ({
                url: "/login",
                method: "POST",
                body: credentials,
            }),
        }),
    })
})

export const {useLoginMutation} = login
