import React from "react";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import { useDispatch } from "react-redux";
import { add } from "../store/FlashcardSlice";
import Alert from 'react-bootstrap/Alert';
import { trueFalse } from "../store/EmpitySlice";
import { BsUpload } from "react-icons/bs";
import { AiOutlineSelect } from "react-icons/ai";
import { viewAdd2 } from "../store/ViewFlashCard2Slice";
/* import { viewAdd } from "../store/ViewFlashCardSlice"; */






function FlashCard() {
    const dispatch = useDispatch()
    const [image, setImage] = useState({ image: "", name: "", description: "", terms: {}, difinition: "", image2:""})
    const [btn, setBtn] = useState(false)
    const [alert, setAlert] = useState(false)
    const [img, setImg] = useState(false)
    const [file, setFile] = useState(true)
    const [imgName, setImgName] = useState()
    const [htmll, setHtml] = useState([])
    const [termsImage, setTermsImage]=useState({tImg:{}})
    const [termsDifinition, setTermsDifinition]=useState({tDifinition:{}})
    const [both, setBoth] =useState()
    const [hide,setHide]=useState(true)



    let nLength = htmll.length
    function addTerm() {
        setHtml((cust) => [...cust, (<> <div id="id" className="row">
            <hr />
            <div className="col-xl-6 col-lg-6 col-md-12">
                    <label>Enter Term <span id="red">*</span></label><br />
                    <input value={image.terms[nLength+1]} className="single-input" onChange={groupTerm2} placeholder="term"></input>
                </div>
                <div className="cont row cont3 col-xl-6 col-lg-6 col-md-12">
                    <div className="cont cont3 col-xl-8 col-lg-6 col-md-6">
                        <form onClick={() => document.querySelector("#img-input"+htmll.length).click()}>
                            <input id={"img-input"+htmll.length} className="input-image input-field" hidden name="uploadimage" type="file" placeholder="image" accept="image/*" onChange={groupImage23} ></input>
                            {/* {
                                file ? <h6 id="h5"> <span><BsUpload /> </span>Select Image</h6> : <h6 id="h5"> <span><AiOutlineSelect /> </span>{imgName}</h6>
                            } */}
                            <h6 id="h5"> <span><BsUpload /> </span>Select Image</h6>
                        </form>
                    </div>
                    <div className="img-preview col-xl-4 col-lg-6 col-md-6">
                        <img className="img-fluid" id="img" src={termsImage.tImg[nLength]} />
                    </div>
                </div>
                <div id="def" className="cont cont3 col-xl-12 col-lg-12 col-md-12">
                    <label>Enter definition <span id="red">*</span></label><br />
                    <input value={termsDifinition.tDifinition[nLength+1]} className="single-input" onChange={groupDifinition2} placeholder="definition"></input>
                </div>
        </div></>)])
    }

    function groupImage(e) {
        setImage({ ...image, image: `${URL.createObjectURL(e.target.files[0])}` })
    }

    function groupImage2(e) {
        setImage({ ...image, image2: `${URL.createObjectURL(e.target.files[0])}` })
        setImgName(e.target.files[0].name)
        setImg(`${URL.createObjectURL(e.target.files[0])}`)
        if (e.target.files[0]) {
            //it should be false
            setFile(true)
        }
    }
    function groupImage23(e) {
        setTermsImage({ ...termsImage, tImg:{...termsImage.tImg,[nLength+1]: `${URL.createObjectURL(e.target.files[0])}` }})

    }

    function groupName(e) {
        setImage({ ...image, name: `${e.target.value}` })
    }

    function groupDescription(e) {
        setImage({ ...image, description: `${e.target.value}` })
        if (e.target.value) {
            setBtn(true)
        } else {
            setBtn(false)
        }
    }


    function groupTerm(e) {
        setImage({ ...image, terms: { ...image.terms, [0]: `${e.target.value}` } })
    }

    function groupTerm2(e) {
        setImage({ ...image, terms: { ...image.terms, [nLength + 1]: `${e.target.value}` } })
        setBoth(e.target.value)
    }

    function groupDifinition(e) {
        setImage({ ...image, difinition: `${e.target.value}` })
    }
    function groupDifinition2(e) {
        setTermsDifinition({ ...termsDifinition, tDifinition:{...termsDifinition.tDifinition,[nLength+1]: `${e.target.value}` }})
    }


    function saveHandler(image) {
        dispatch(add(image))
        dispatch(viewAdd2({one:termsImage,two:termsDifinition}))
        dispatch(trueFalse(false))
        setImage({ image: "", name: "", description: "", terms: {"0":""}, difinition: "", image2: "" })
        setBtn(false)
        setAlert(true)
        setFile(true)
        function alt() {
            setAlert(false)
        }
        setTimeout(alt, 1000);
        console.log(image.terms)
        console.log(termsImage)
        console.log(termsDifinition)
        setHtml([])
    }


    return (
        <div className="container">
            <div className="container alert-div">
                {
                    alert ?
                        <>
                            {[
                                'success',
                            ].map((variant) => (
                                <div className="container">
                                    <Alert key={variant} variant={variant}>
                                        <h6>Successfully Created...!</h6>
                                    </Alert>
                                </div>
                            ))}
                        </>
                        : ""
                }
            </div>
            <div id="cont" className="team-list row">
                <div className="row cont col-xl-12 col-lg-12 col-md-12">
                    <div className="col-xl-6 col-lg-6 col-md-12 for">
                        <div>
                            <label>Create Group <span id="red">*</span></label><br />
                            <input value={image.name} className="single-input" onChange={groupName} placeholder="enter group name"></input>
                        </div>
                    </div>
                    <div className=" row col-xl-6 col-lg-6 col-md-12">
                        <div className="cont cont3 col-xl-8 col-lg-6 col-md-6">
                            <form onClick={() => document.querySelector(".input-field2").click()}>
                                <input id="img-input" className="input-image input-field2" hidden name="uploadimage" type="file" placeholder="image" accept="image/*" onChange={groupImage} ></input>
                                <h6 id="h5"> <span> <BsUpload /> </span> Upload Image</h6>
                            </form>
                        </div>
                        <div className="img-preview col-xl-4 col-lg-6 col-md-6">
                            <img className="img-fluid" id="img" src={image.image} />
                        </div>
                    </div>
                </div>
                <div className="col-xl-12 col-lg-12 col-md-12">
                    <label>Add description <span id="red">*</span></label><br />
                    <textarea value={image.description} className="description" onChange={groupDescription} placeholder="description"></textarea>
                </div>
            </div>
            <div id="cont" className={btn ? "team-list row  " : "disable2 team-list row"}>
                <div className="col-xl-6 col-lg-6 col-md-12">
                    <label>Enter Term <span id="red">*</span></label><br />
                    <input value={image.terms[0]} className="single-input" onChange={groupTerm} placeholder="term"></input>
                </div>
                <div className="cont row cont3 col-xl-6 col-lg-6 col-md-12">
                    <div className="cont cont3 col-xl-8 col-lg-6 col-md-6">
                        <form onClick={() => document.querySelector(".input-field").click()}>
                            <input id="img-input" className="input-image input-field" hidden name="uploadimage" type="file" placeholder="image" accept="image/*" onChange={groupImage2} ></input>
                            {
                                file ? <h6 id="h5"> <span><BsUpload /> </span>Select Image</h6> : <h6 id="h5"> <span><AiOutlineSelect /> </span>{imgName}</h6>
                            }
                        </form>
                    </div>
                    <div className="img-preview col-xl-4 col-lg-6 col-md-6">
                        <img className="img-fluid" id="img" src={image.image2} />
                    </div>
                </div>
                <div id="def" className="cont cont3 col-xl-12 col-lg-12 col-md-12">
                    <label>Enter definition <span id="red">*</span></label><br />
                    <input value={image.difinition} className="single-input" onChange={groupDifinition} placeholder="definition"></input>
                </div>

                {htmll.map(block => block)}

                <div className="">
                    <button onClick={addTerm} id="add-more">+ Add More</button>
                </div>
            </div>
            <div className="submit-btn">
                <button className={btn ? "submit" : "disable"} onClick={() => saveHandler(image)}>Create</button>
            </div>

        </div>
    )
}

export default FlashCard