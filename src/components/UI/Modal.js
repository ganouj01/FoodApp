import React, { Fragment } from 'react'
import classes from './Modal.module.css'
import ReactDOM from 'react-dom'

const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onClose}/>
}

const ModalOverlay = (props) => {
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
}

const Modal = (props) => {
    const domElement = document.getElementById('overlays')
    return <Fragment>
        {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, domElement)}
        {ReactDOM.createPortal(<ModalOverlay> {props.children} </ModalOverlay>, domElement)}
    </Fragment>
}

export default Modal