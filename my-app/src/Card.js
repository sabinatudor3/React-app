import React, {useState} from 'react'
import Points from "./point.svg"
import Modal from "./Modal"
import "./Card.css"

function Card(props) {
    const [show, setShow] = useState(false)

    function showModal() {
        setShow(true)
    } 

    function hideModal() {
        setShow(false)
    }

    return (
        <div className="card-container">
            <div className="up">
                <div className="container-img">
                    <img src={props.largeImage} alt="travel" className="learn-more"></img>
                    <div className="middle">                     
                        <button type="button" onClick={showModal} className="learn-btn">Learn more</button>
                    </div>
                </div>
                <img src={Points} alt="point" className="points"></img>
            </div>
            <div className="down">
                <span className="title">{props.title}</span>
                <p>{props.content}</p>
                <div className="down-side">
                    <span className="left">{props.name} - {props.role}</span>
                    <span className="right">{props.date}</span>
                </div>
            </div>
            <Modal show={show} handleClose={hideModal}>
                <br></br>
                <br></br>
                <img src={props.smallImage} alt="travel"></img>
                <div className="modal-body">
                    <span className="title">{props.title}</span>
                    <p>{props.content}</p>
                    <div className="down-side-modal">
                        <img src={props.avatarImage} alt="avatar" className="avatar" style={{display: props.avatarImage ? "block" : "none"}}></img>
                        <span className="left">{props.name} - {props.role}</span>
                    </div>
                </div>
            </Modal>
        </div>
    )
}
export default Card