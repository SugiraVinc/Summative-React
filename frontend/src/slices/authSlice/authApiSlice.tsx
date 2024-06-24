import { createMyApi } from "../apiSlice";
const BASE_URL = '/users'

export const authApiSlice = createMyApi.injectEndpoints({
    endpoints: (builder) => ({
        // mutation means changing data
        register: builder.mutation({
            query: (data) => ({
                url: `${BASE_URL}/register`,
                method: 'POST',
                body: data
            })
        }),

        login: builder.mutation({
            query: (data) => ({
                url: `${BASE_URL}/login`,
                method: 'POST',
                body: data
            })
        })
    })
})

//@ts-ignore
export const { useLoginMutation, useRegisterMutation } = authApiSlice