import { configureStore } from "@reduxjs/toolkit";
import flashSlice from "./FlashcardSlice"
import ViewFlashCard from "./ViewFlashCardSlice"
import EmpitySlice from "./EmpitySlice";
import viewFlashCard2 from "./ViewFlashCard2Slice";

const store=configureStore({
    reducer:{
        flash:flashSlice,
        view:ViewFlashCard,
        truefalse:EmpitySlice,
        view2:viewFlashCard2
    }
})
export default store;