import { createMyApi } from "../apiSlice"
const BASE_URL = "/books"

export const bookApiSlice = createMyApi.injectEndpoints({
    endpoints: (builder) => ({
        getBooks: builder.query({
            query: () => ({
                url: `${BASE_URL}`,
                method: 'GET'
            })
        }),
        getSingleBook: builder.query({
            query: (id) => ({
                url: `${BASE_URL}/${id}`,
                method: 'GET'
            })
        }),
        editBook: builder.mutation({
            query: (book) => ({
                url: `${BASE_URL}/edit/${book.id}`,
                method: 'PUT',
                body: book
            })
        }),
        createBook: builder.mutation({
            query: (book) => ({
                url: `${BASE_URL}/create`,
                method: 'POST',
                body: book
            })
        }),
        deleteBook: builder.mutation({
            query: (id) => ({
                url: `${BASE_URL}/delete/${id}`,
                method: 'POST'
            })
        }),
    })
})

export const { 
    useGetBooksQuery, 
    useGetSingleBookQuery, 
    useEditBookMutation, 
    useCreateBookMutation, 
    useDeleteBookMutation 
} = bookApiSlice