import { useRef } from "react";
import "./Checkout.css";

const Checkout = (props) => {
  const nameInputRef = useRef();
  const adressInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredAddress = adressInputRef.current.value;
    const enteredPostalCode = postalCodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;
  };

  return (
    <form onSubmit={confirmHandler}>
      <div className="control">
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef}></input>
      </div>

      <div className="control">
        <label htmlFor="street">Address</label>
        <input type="text" id="street" ref={adressInputRef}></input>
      </div>

      <div className="control">
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalCodeInputRef}></input>
      </div>

      <div className="control">
        <label htmlFor="city">City/State</label>
        <input type="text" id="city" ref={cityInputRef}></input>
      </div>

      <div className="actions">
        <button type="button" onClick={props.cancelOrder}>
          Cancel
        </button>
        <button>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
