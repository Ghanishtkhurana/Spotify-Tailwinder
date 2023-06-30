"use client"
import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    isOpen : true
}

const SidebarSlice = createSlice({
    name :"sidebar" ,
    initialState ,
    reducers :{
        handleTheAnimate : (state,action)=>{
            state.isOpen = !state.isOpen
        }
    }
})

export const {handleTheAnimate} = SidebarSlice.actions
export default SidebarSlice.reducer 