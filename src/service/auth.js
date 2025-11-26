import { api } from "./createapi";

export const login = api.injectEndpoints({
    endpoints: ( builder)=> ({
        userlogin: builder.mutation({
            query: (user)=>({
                url: '/login',
                method:"POST",
                body:user
            })
        })
    })
})