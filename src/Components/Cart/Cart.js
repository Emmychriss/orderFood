import { useContext } from "react";

import Modal from "../UI/Modal/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/CartContext";
import CartItem from "./CartItem/CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const removeItemsHandler = (id) => {};

  const addItemHandler = (item) => {};

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => {
        return (
          <CartItem
            key={item.id}
            name={item.name}
            price={item.price}
            amount={item.amount}
            onRemove={removeItemsHandler.bind(null, item.id)}
            onAdd={addItemHandler.bind(null, item)}
          />
        );
      })}
    </ul>
  );

  return (
    <Modal closeModal={props.onCartClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        {hasItems && <button className={classes.button}>Order</button>}
        <button className={classes["button--alt"]} onClick={props.onCartClose}>
          Close
        </button>
      </div>
    </Modal>
  );
};

export default Cart;
