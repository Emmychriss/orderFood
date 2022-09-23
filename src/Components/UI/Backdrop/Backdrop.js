import classes from "./Backdrop.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.closeModal}></div>;
};

export default Backdrop;
