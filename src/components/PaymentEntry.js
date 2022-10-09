import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./PaymentEntry.css";

function PaymentEntry() {
  const location = useLocation();

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    navigate("/purchase/shippingEntry", {
      state: { order: location.state.order },
    });
  };

  return (
    <div className="block">
      <h1>Your Items</h1>
      <h2>
        {location.state.order.products.banana.name} x{" "}
        {location.state.order.products.banana.buyQuantity}
      </h2>
      <h2>
        {" "}
        {location.state.order.products.apple.name} x{" "}
        {location.state.order.products.apple.buyQuantity}
      </h2>
      <h2>
        {" "}
        {location.state.order.products.premiumApple.name} x{" "}
        {location.state.order.products.premiumApple.buyQuantity}
      </h2>
      <h2>
        {" "}
        {location.state.order.products.dragonFruit.name} x{" "}
        {location.state.order.products.dragonFruit.buyQuantity}
      </h2>
      <h2>
        {" "}
        {location.state.order.products.starFruit.name} x{" "}
        {location.state.order.products.starFruit.buyQuantity}
      </h2>
      <form onSubmit={handleSubmit}>
        <label>Credit Card Number </label>
        <input
          type="text"
          required
          onChange={(e) =>
            (location.state.order.creditCardNumber = e.target.value)
          }
        />
        <br />
        <label>Expiration Date </label>
        <input
          type="text"
          required
          onChange={(e) =>
            (location.state.order.expirationDate = e.target.value)
          }
        />
        <br />
        <label>CVV </label>
        <input
          type="text"
          required
          onChange={(e) => (location.state.order.cvv = e.target.value)}
        />
        <br />
        <label>Cardholder Name </label>
        <input
          type="text"
          required
          onChange={(e) =>
            (location.state.order.cardHolderName = e.target.value)
          }
        />
        <br />
        <button className="button">Go To Shipping</button>
      </form>
    </div>
  );
}

export default PaymentEntry;
