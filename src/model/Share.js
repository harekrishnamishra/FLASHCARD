import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BsFillShareFill } from "react-icons/bs";
import {FacebookShareButton, FacebookIcon} from "react-share";
import {WhatsappShareButton, WhatsappIcon} from "react-share";
import {LineShareButton, LinkedinIcon} from "react-share";
import {EmailShareButton, EmailIcon} from "react-share";
import {TelegramShareButton, TelegramIcon} from "react-share";

function Example() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const shareUrl="http://localhost:3000/viewflash"

    return (
        <>
            <Button className='submit last' onClick={handleShow}>
                <BsFillShareFill/> Share
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <div >
                            <input className='link-share' value={shareUrl}></input>
                        </div>
                    </Modal.Title>
                </Modal.Header>
                <div className='share-icon'>
                <Modal.Body id='share-icon'>
                    <FacebookShareButton url={shareUrl}>
                        <FacebookIcon size={38}/>
                    </FacebookShareButton>
                    <WhatsappShareButton url={shareUrl}>
                        <WhatsappIcon size={38}/>
                    </WhatsappShareButton>
                    <LineShareButton url={shareUrl}>
                        <LinkedinIcon size={38}/>
                    </LineShareButton>
                    <EmailShareButton url={shareUrl}>
                        <EmailIcon size={38}/>
                    </EmailShareButton>
                    <TelegramShareButton url={shareUrl}>
                        <TelegramIcon size={38}/>
                    </TelegramShareButton>
                </Modal.Body>
                </div>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Example;