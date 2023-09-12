import React from "react";
import FlashCard from "./FlashCard";
import FlashCardList from "./FlashCardList";
import Header from "./Header";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ViewFlash from "./ViewFlash";

function FlashCardHome() {
    return (
        <div>
            <div className="container">
                <Header/>
                <Routes>
                    <Route path="/" element={<FlashCard/>}></Route>
                    <Route path="/flashcardlist" element={<FlashCardList/>}></Route>
                    <Route path="/viewflash" element={<ViewFlash/>}></Route>
                </Routes>
            </div>
        </div>
    )
}

export default FlashCardHome