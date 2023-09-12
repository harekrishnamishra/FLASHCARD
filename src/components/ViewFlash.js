import React, { useState } from 'react'
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';
import { BsPrinterFill } from "react-icons/bs";
import { BiSolidDownload } from "react-icons/bi";
import { MdKeyboardBackspace } from "react-icons/md";
import { Link, json } from 'react-router-dom';
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import Example from '../model/Share';



function ViewFlash() {
    const val = useSelector(store => store.view)
    const val2 = useSelector(store => store.view2)
    const [pt, setPt] = useState([])
    const [df, setDf]=useState([])
    const [defaultR,setDefaultR]=useState(true)
    const componentRef = useRef()
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: "Flash Card",
        onAfterPrint: () => alert("Print Successfully")
    })

    function prnt(e){
        setDefaultR(false)
        Object.values(val2.one.tImg).map((obj, i) => {
            if(i==e){
            return (
                setPt(obj)
            )}else if(e==-1){
                return(
                    setPt(val.image2)
                )
            }
        })
    }
    function prnt2(e){
        setDefaultR(false)
        Object.values(val2.two.tDifinition).map((obj, i) => {
            if(i==e){
            return (
                setDf(obj)
            )}else if(e==-1){
                return(
                    setDf(val.difinition)
                )
            }
        })
    }

    return (<>
        <div>
            <div className='d-flex'>
                <div>
                    <Link className='nav-link' to="/flashcardlist"><h4 id='back2'><MdKeyboardBackspace /></h4></Link>
                </div>
                <div className='container'>
                    <h4>{val.name}</h4>
                    <p>{val.description}</p>
                </div>
            </div>
            <div ref={componentRef} className='row container'>
                <div className='view-baba col-xl-3 col-lg-12 col-md-12'>
                    <h4>Flashcards</h4>
                    <hr></hr>
                    <h5 id='red'> {
                        Object.values(val.terms).map((obj, i) => {
                            return (
                                <Link onClick={(event)=>{
                                        prnt(i-1);
                                        prnt2(i-1);
                                    }} 
                                    id='view' className='nav-link'><div> <span id="black"><AiOutlineRight /></span><span id='view2'>{obj}</span></div></Link>
                            )
                        })
                    }
                    </h5>
                </div>
                <div className='view-baba col-xl-8 col-lg-12 col-md-12'>
                    <div id="cont" className="row cont col-xl-12 col-lg-12 col-md-12">
                        <div>
                            <div className='d-flex row cont'>
                                <div className="col-xl-8 col-lg-12 col-md-12 for">
                                    <div className="">
                                        {
                                            defaultR ? <img className="img-fluid"  src={val.image2} />:
                                            <img className="img-fluid"  src={pt} />
                                        }
                                    </div>
                                </div>
                                <div className="dif col-xl-4 col-lg-12 col-md-12">
                                    <div className="">
                                        {
                                            defaultR?<span id="black"><AiOutlineRight/>{val.difinition} </span>:
                                            <div> <span id="black"> <AiOutlineRight/> </span>{df}</div>
                                        }
                                    </div>
                                </div>
                            </div>
                            {/* <div className='pagination'>
                                <h5 id='h4'><span id="bold"><AiOutlineLeft /></span> 1/3 <span id="bold"><AiOutlineRight /></span> </h5>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className='share'>
                <button onClick={handlePrint} className='submit last'> <BsPrinterFill /> Print</button>
                <button className=' submit last'><BiSolidDownload /> Download</button>
                <Example />
            </div>
        </div>
    </>)
}

export default ViewFlash;


