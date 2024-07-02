import { configureStore} from '@reduxjs/toolkit'
import authSlice from './slices/authSlice/authSlice'
import bookSlice from './slices/bookSlice/bookSlice'
import {createMyApi} from './slices/apiSlice'

const store = configureStore({

    // Passing states into reducers
 reducer: {
        auth: authSlice,
        book: bookSlice,
        [createMyApi.reducerPath]: createMyApi.reducer,
    },
 middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(createMyApi.middleware),
 devTools: true
})

export default store