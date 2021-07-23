import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import classes from './Modal.module.css';

const Overlay = (props) => {
  return <div className={classes.overlay} onClick={props.onClose}></div>;
};

const ModalOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </Card>
  );
};

const portalEl = document.getElementById('overlays');

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Overlay onClose={props.onClose} />, portalEl)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalEl
      )}
    </Fragment>
  );
};

export default Modal;
