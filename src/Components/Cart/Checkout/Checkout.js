import { useRef, useState } from "react";
import "./Checkout.css";

const isNotEmpty = (value) => value.trim() !== "";
const sixCharsOrLess = (value) => value.length <= 6;

const Checkout = (props) => {
  const [formInputValidity, setFormInputvalidity] = useState({
    name: true,
    address: true,
    postalcode: true,
    city: true,
  });

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

    const enteredNameIsValid = isNotEmpty(enteredName);
    const enteredAddressIsValid = isNotEmpty(enteredAddress);
    const enteredPostalCodeIsvalid = sixCharsOrLess(enteredPostalCode);
    const enteredCityIsValid = isNotEmpty(enteredCity);

    setFormInputvalidity({
      name: enteredNameIsValid,
      address: enteredAddressIsValid,
      postalcode: enteredPostalCodeIsvalid,
      city: enteredCityIsValid,
    });

    const formIsvalid =
      enteredNameIsValid &&
      enteredAddressIsValid &&
      enteredCityIsValid &&
      enteredPostalCodeIsvalid;

    if (!formIsvalid) {
      return;
    }

    props.onConfirm({
      name: enteredName,
      enteredAddress: enteredAddress,
      enteredCity: enteredCity,
      enteredPostalCode: enteredPostalCode,
    });
  };

  return (
    <form onSubmit={confirmHandler}>
      <div>
        <div className="control">
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" ref={nameInputRef}></input>
          {!formInputValidity.name && (
            <p style={{ color: "red", margin: "0" }}>
              Please enter a valid name
            </p>
          )}
        </div>

        <div className="control">
          <label htmlFor="street">Address</label>
          <input type="text" id="street" ref={adressInputRef}></input>
          {!formInputValidity.address && (
            <p style={{ color: "red", margin: "0" }}>
              Please enter a valid address
            </p>
          )}
        </div>

        <div className="control">
          <label htmlFor="postal">Postal Code</label>
          <input type="text" id="postal" ref={postalCodeInputRef}></input>
          {!formInputValidity.postalcode && (
            <p style={{ color: "red", margin: "0" }}>
              Please enter a valid postal code (1 - 6 characters)
            </p>
          )}
        </div>

        <div className="control">
          <label htmlFor="city">City/State</label>
          <input type="text" id="city" ref={cityInputRef}></input>
          {!formInputValidity.city && (
            <p style={{ color: "red", margin: "0" }}>
              Please enter a valid city
            </p>
          )}
        </div>

        <div className="actions">
          <button type="button" onClick={props.cancelOrder}>
            Cancel
          </button>
          <button>Confirm</button>
        </div>
      </div>
    </form>
  );
};

export default Checkout;
