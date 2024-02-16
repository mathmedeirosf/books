import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { User } from "../types/types";

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery ({ baseUrl: 'https://reqres.in/api/' }),
    tagTypes: ['User'],
    endpoints: (builder) => ({
        register: builder.mutation<User, Partial<User>>({
            query: (body) => ({
                url: 'register',
                method: 'POST',
                body,
            })
        }),
        login: builder.mutation<User, Partial<User>>({
            query: (body) => ({
                url: 'login',
                method: 'POST',
                body,
            })
        })
    })
})

export const { useRegisterMutation, useLoginMutation } = userApi