import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ViewOrder = () => {
  let title = "Review Order";

  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (e) => {
    navigate("/purchase/confirmation", {
      state: { order: location.state.order },
    });
  };

  let totalPrice = 0.0;

  if (location.state) {
    const products = location.state.order.products;
    for (let key in products) {
      totalPrice += products[key]["cost"] * products[key]["buyQuantity"];
    }
  }

  return (
    <div>
      <h1>{title}</h1>
      <h2>Your Order</h2>
      <p>
        {location.state.order.products.banana.name} x{" "}
        {location.state.order.products.banana.buyQuantity}
      </p>
      <p>
        {" "}
        {location.state.order.products.apple.name} x{" "}
        {location.state.order.products.apple.buyQuantity}
      </p>
      <p>
        {" "}
        {location.state.order.products.premiumApple.name} x{" "}
        {location.state.order.products.premiumApple.buyQuantity}
      </p>
      <p>
        {" "}
        {location.state.order.products.dragonFruit.name} x{" "}
        {location.state.order.products.dragonFruit.buyQuantity}
      </p>
      <p>
        {" "}
        {location.state.order.products.starFruit.name} x{" "}
        {location.state.order.products.starFruit.buyQuantity}
      </p>
      <h3>Total Price: ${totalPrice}</h3>
      <h2>Payment Information</h2>
      <p> Credit Card Number: {location.state.order.creditCardNumber}</p>
      <p> Card Holder Name: {location.state.order.cardHolderName}</p>
      <p> Expiration Date: {location.state.order.expirationDate}</p>
      <p> CVV: {location.state.order.cvv}</p>
      <h2>Shipping Information</h2>
      <p> Name: {location.state.order.shippingName}</p>
      <p> Address Line 1: {location.state.order.address1}</p>
      <p> Address Line 2: {location.state.order.address2}</p>
      <p> City: {location.state.order.city}</p>
      <p> State: {location.state.order.state}</p>
      <p> Zip: {location.state.order.zip}</p>
      <button onClick={handleClick} className="button">
        Confirm your order
      </button>
    </div>
  );
};

export default ViewOrder;
