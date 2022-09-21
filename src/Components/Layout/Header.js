import React, { Fragment } from "react";

import CartBtn from "./CartBtn";
import mealsImage from "../../assets/freshMeals.jpg";
import classes from "./Header.module.css";

const header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>eMeals</h1>
        <CartBtn onClick={props.onCartOpen} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="Table full of different meals" />
      </div>
    </Fragment>
  );
};

export default header;
