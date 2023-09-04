import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";


function Header() {
    const [btn, setBtn] = useState(true)
    const [btn2, setBtn2] = useState(true)
    function btnChanger() {
        setBtn2(true)
        setBtn(true)
        /* console.log(Date.now()) */
    }
    function btnChanger2() {
        setBtn(false)
        setBtn2(false)
    }
    return (
        <div>
            <div className="head">
                <div>
                    <Link onClick={btnChanger} className={btn?"header-link2":"header-link"} to="/">Create New</Link>
                </div>
                <div>
                    <Link onClick={btnChanger2} className={btn2?"header-link":"header-link2"} to="/flashcardlist">My FlashCard</Link>
                </div>
            </div>
            <div className="hr">

            </div>
        </div>
    )
}

export default Header