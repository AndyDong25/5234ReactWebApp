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
              {location.state.order.products["1"].name} x{" "}
              {location.state.order.products["1"].buyQuantity}
            </h3>
            <h3>
              {" "}
              {location.state.order.products["2"].name} x{" "}
              {location.state.order.products["2"].buyQuantity}
            </h3>
            <h3>
              {" "}
              {location.state.order.products["3"].name} x{" "}
              {location.state.order.products["3"].buyQuantity}
            </h3>
            <h3>
              {" "}
              {location.state.order.products["4"].name} x{" "}
              {location.state.order.products["4"].buyQuantity}
            </h3>
            <h3>
              {" "}
              {location.state.order.products["5"].name} x{" "}
              {location.state.order.products["5"].buyQuantity}
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
