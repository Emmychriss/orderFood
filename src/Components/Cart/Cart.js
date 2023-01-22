import { useContext, useState } from "react";

import Modal from "../UI/Modal/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/CartContext";
import CartItem from "./CartItem/CartItem";
import Checkout from "./Checkout/Checkout";
import swal from "sweetalert";

const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  const cartCtx = useContext(CartContext);

  const totalAmount = `N${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const removeItemsHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const addItemHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

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

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const modalActions = (
    <div className={classes.actions}>
      {hasItems && (
        <button className={classes.button} onClick={orderHandler}>
          Order
        </button>
      )}
      <button className={classes["button--alt"]} onClick={props.onCartClose}>
        Close
      </button>
    </div>
  );

  const confirmOrderHandler = async (userdata) => {
    setIsSubmitting(true);
    await fetch(
      "https://foodorder-dfe69-default-rtdb.firebaseio.com/orderInfo.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userdata,
          orderedItems: cartCtx.items,
        }),
      }
    );
    setIsSubmitting(false);
    setDidSubmit(true);
    cartCtx.clearCart();
  };

  const cartModalContent = (
    <>
      {cartItems}

      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>

      {isCheckout && (
        <Checkout
          cancelOrder={props.onCartClose}
          onConfirm={confirmOrderHandler}
        />
      )}

      {!isCheckout && modalActions}
    </>
  );

  const isSubmittingModalContent = <p>Sending order data</p>;

  return (
    <div>
      <Modal closeModal={props.onCartClose}>
        {!isSubmitting && !didSubmit && cartModalContent}
        {isSubmitting && isSubmittingModalContent}
      </Modal>
      {!isSubmitting &&
        didSubmit &&
        swal({
          title: "Soft!",
          text: "You successfully submitted your order",
          icon: "success",
        })}
    </div>
  );
};

export default Cart;
