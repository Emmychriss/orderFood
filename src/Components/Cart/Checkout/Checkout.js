import "./Checkout.css";

const Checkout = (props) => {
  const confirmHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={confirmHandler}>
      <div className="control">
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name"></input>
      </div>

      <div className="control">
        <label htmlFor="street">Address</label>
        <input type="text" id="street"></input>
      </div>

      <div className="control">
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal"></input>
      </div>

      <div className="control">
        <label htmlFor="city">City/State</label>
        <input type="text" id="city"></input>
      </div>

      <button type="button" onClick={props.cancelOrder}>
        Cancel
      </button>
      <button>Confirm</button>
    </form>
  );
};

export default Checkout;
