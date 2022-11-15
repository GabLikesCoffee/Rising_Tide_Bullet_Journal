import {configureStore} from "@reduxjs/toolkit"
import authReducer from "../features/auth/authSlice"

export default store = configureStore({
    reducer:{
        auth:authReducer,
    },
})