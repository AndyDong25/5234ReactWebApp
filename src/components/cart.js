import React from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Cart = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (e) => {
    navigate("/purchase/paymentEntry", {
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
    <>
      <div className="block">
        <h1>Your Cart</h1>
        <h2> Total Price: ${totalPrice} </h2>
        {location.state && (
          <div>
            <h3>
              {location.state.order.products.banana.name} x{" "}
              {location.state.order.products.banana.buyQuantity}
            </h3>
            <h3>
              {" "}
              {location.state.order.products.apple.name} x{" "}
              {location.state.order.products.apple.buyQuantity}
            </h3>
            <h3>
              {" "}
              {location.state.order.products.premiumApple.name} x{" "}
              {location.state.order.products.premiumApple.buyQuantity}
            </h3>
            <h3>
              {" "}
              {location.state.order.products.dragonFruit.name} x{" "}
              {location.state.order.products.dragonFruit.buyQuantity}
            </h3>
            <h3>
              {" "}
              {location.state.order.products.starFruit.name} x{" "}
              {location.state.order.products.starFruit.buyQuantity}
            </h3>
            <button className="button" onClick={handleClick}>
              Checkout
            </button>
          </div>
        )}
        {!location.state && (
          <div>
            <h5>Your cart is empty.</h5>
            <img
              src="https://img.freepik.com/premium-vector/shopping-cart-3d-vector-icon-cartoon-minimal-style_365941-699.jpg?w=2000"
              alt="cart"
              width="150"
              height="150"
            ></img>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
