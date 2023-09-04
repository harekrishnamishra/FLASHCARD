import { createSlice } from "@reduxjs/toolkit";
import { act } from "@testing-library/react";

const EmptySlice = createSlice({
    name: "truefalse",
    initialState:[],
    reducers: {

        trueFalse(state, action) {
            if(state.length==0){
                return false
            }else{
                return false;
            }
        }
    }
})

export const { trueFalse } = EmptySlice .actions;
export default EmptySlice.reducer;