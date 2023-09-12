import { createSlice } from "@reduxjs/toolkit";
import { act } from "@testing-library/react";

const ViewFlashCard2Slice = createSlice({
    name: "view2",
    initialState:{},
    reducers: {

        viewAdd2(state, action) {
            return state=action.payload
        }
    }
})

export const { viewAdd2 } = ViewFlashCard2Slice.actions;
export default ViewFlashCard2Slice.reducer;