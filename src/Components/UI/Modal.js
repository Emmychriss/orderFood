import { Fragment } from "react";
import classes from "./Modal.module.css";
import Backdrop from "./Backdrop";

const Modal = (props) => {
  return (
    <Fragment>
      <Backdrop closeModal={props.closeModal}/>
      <div className={classes.modal}>{props.children}</div>;
    </Fragment>
  );
};

export default Modal;
