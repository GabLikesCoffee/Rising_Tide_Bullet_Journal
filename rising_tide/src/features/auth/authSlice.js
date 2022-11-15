import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import authService from "./AuthService"



const user = JSON.parse(localStorage.getItem("user"))

const initialState={
    user: user ? user:null,
    errorDetected: false,
    success: false,
    isLoading: false,
    message:""
}

export const register = createAsyncThunk("http://localhost:5000/users/add", 
    async (user, thunkAPI)=>{
        try{
            return await authService.register(user)
        }
        catch (error){
            const messageError= (error.response && error.response.data.message)|| error.toString()
            return thunkAPI.rejectWithValue(messageError)
        }
    })

export const authSlice= createSlice({
    
    name: "auth",
    initialState,
    reducers:{
        reset: (state)=>{
            state.isLoading=false
            state.success=false
            state.errorDetected=false
            state.message=""
            
        }
    },
    extraReducers:(builder)=>{
        builder
            .addCase(register.pending,(state)=>{
                state.isLoading=true
            })
            .addCase(register.fulfilled,(state,action)=>{
                state.isLoading=false
                state.success=true
                state.user= action.payload
            })
            .addCase(register.rejected,(state,action)=>{
                state.isLoading=false
                state.errorDetected=true
                state.message= action.payload
                state.user=null
            })
    }
})



export const {reset} = authSlice.actions
export default authSlice.reducer