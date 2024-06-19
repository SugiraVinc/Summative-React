import { configureStore} from '@reduxjs/toolkit'
import authSlice from './slices/authSlice/authSlice'
import {createMyApi} from './slices/apiSlice'

const store = configureStore({

    // Passing states into reducers
 reducer: {
        auth: authSlice,
        [createMyApi.reducerPath]: createMyApi.reducer,
    },
 middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(createMyApi.middleware),
 devTools: true
})

export default store