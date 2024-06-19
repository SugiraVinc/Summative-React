// Setting state for the user

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    //@ts-ignore
    userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            state.userInfo = action.payload
            localStorage.setItem('userInfo', JSON.stringify(action.payload))
        },
        logout: (state, action) => {
            state.userInfo = null
            localStorage.clear()
        }
    }
})

export const {setCredentials, logout} = authSlice.actions

export default authSlice.reducer