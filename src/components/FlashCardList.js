import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { viewAdd } from "../store/ViewFlashCardSlice";
import { MdDelete } from "react-icons/md";
import { remove } from '../store/FlashcardSlice'
import { useState } from "react";
import { useEffect } from "react";
import { trueFalse } from "../store/EmpitySlice";
import { VscEmptyWindow } from "react-icons/vsc";
import ekk from "../components/img/ekk.png"


function FlashCardList() {
    const item = useSelector(store => store.flash)
    const tf = useSelector(store => store.truefalse)
    const dispatch = useDispatch()
    const [empty, setEmpty] = useState(false);

    useEffect(() => {
        if(item.length==0){
            setEmpty(true)
        }else{
           /*  console.log(false) */
        }
    })

    function viewHandle(e) {
        dispatch(viewAdd(e))
    }
    function deleteCard(e) {
        dispatch(remove(e))
    }
    return (
        <div>
            <div>
                {
                    empty?
                        <div className="empty-btn">
                            {/* <Link to="/"><button class="submit">Create Cards</button></Link> */}
                                <img className="img-fluid empty-img-img" src={ekk}></img>
                            <h2 id="red"><VscEmptyWindow/></h2>
                            <h6 className="empty" id="red">Empty list, Plase Create your Card...!</h6>
                        </div> : (tf? <div className="empty-btn">
                            {/* <Link to="/"><button class="submit">Create Cards</button></Link> */}
                                <img className="img-fluid empty-img-img" src={ekk}></img>
                            <h2 id="red"><VscEmptyWindow/></h2>
                            <h6 className="empty" id="red">Empty list, Plase Create your Card...!</h6>
                        </div>
                            :
                            <div className="row ct">
                                {
                                    item.map(val => (
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-xs-12 flash-list">
                                            <Card className="cls" style={{ width: '18rem' }}>
                                                <img id="icon-img" src={val.image}></img>
                                                <Card.Body>
                                                    <div className="del-icon">
                                                        <h3 onClick={() => deleteCard(val.description)} ><MdDelete /></h3>
                                                    </div>
                                                    <Card.Title>{val.name}</Card.Title>
                                                    <Card.Text>
                                                        {val.description}
                                                    </Card.Text>
                                                    <Link to="/viewflash">
                                                        <Button className="submit" id="view-cards" onClick={() => viewHandle(val)} variant="primary">View Cards</Button>
                                                    </Link>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                    ))
                                }
                            </div>
                        )
                }
            </div>
        </div>
    )
}

export default FlashCardList