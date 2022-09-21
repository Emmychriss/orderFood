import { useContext } from "react";

import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/CartContext";
import classes from "./CartBtn.module.css";

const CartBtn = (props) => {
  const cartCtx = useContext(CartContext);

  const cartItemsNumber = cartCtx.items.reduce((curNum, item) => {
    return curNum + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.cartCount}>{cartItemsNumber}</span>
    </button>
  );
};

export default CartBtn;
