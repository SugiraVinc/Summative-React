// calling API and making requests to the backend.
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query'

const baseQuery = fetchBaseQuery({ baseUrl:'/api',credentials: 'include'})

export const createMyApi = createApi({
    baseQuery,
    tagTypes: ['Books', 'Users'],
    endpoints: (builder) => ({})
})