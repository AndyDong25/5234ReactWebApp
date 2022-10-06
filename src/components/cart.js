import React from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Cart = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (e) => {
    navigate("/purchase/viewOrder", { state: { order: location.state.order } });
  };

  return (
    <>
      <div className="block">
        <h1>Your Cart</h1>
        {location.state && (
          <div>
            <h2>A x {location.state.order.buyQuantity[0]}</h2>
            <h2>B x {location.state.order.buyQuantity[1]}</h2>
            <h2>C x {location.state.order.buyQuantity[2]}</h2>
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
