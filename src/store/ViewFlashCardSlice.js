import { createSlice } from "@reduxjs/toolkit";
import { act } from "@testing-library/react";

const ViewFlashCardSlice = createSlice({
    name: "view",
    initialState:{},
    reducers: {

        viewAdd(state, action) {
            return state=action.payload
            /* state.push(action.payload) */
        }
    }
})

export const { viewAdd } = ViewFlashCardSlice.actions;
export default ViewFlashCardSlice.reducer;