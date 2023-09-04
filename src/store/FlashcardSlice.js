import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const FlashCardSlice=createSlice({
    name:"flash",
    initialState:[],
    reducers:{

        add(state,action){
            state.push(action.payload)
        },
        remove(state,action){
            return state.filter((e)=>e.description!==action.payload)
        }
    }
})

export const {add,remove}=FlashCardSlice.actions;
export default FlashCardSlice.reducer;