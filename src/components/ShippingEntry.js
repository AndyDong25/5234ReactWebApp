import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ShippingEntry = () => {
  let title = "Shipping Details";

  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    navigate("/purchase/viewOrder", { state: { order: location.state.order } });
  };

  return (
    <div>
      <h1>{title}</h1>
      <form onSubmit={handleSubmit}>
        <label>Name </label>
        <input
          type="string"
          required
          onChange={(e) => {
            location.state.order.shippingName = e.target.value;
          }}
        />
        <br />
        <label>Address Line 1 </label>
        <input
          type="string"
          required
          onChange={(e) => {
            location.state.order.address1 = e.target.value;
          }}
        />
        <br />
        <label>Address Line 2 </label>
        <input
          type="string"
          required
          onChange={(e) => {
            location.state.order.address2 = e.target.value;
          }}
        />
        <br />
        <label>City </label>
        <input
          type="string"
          required
          onChange={(e) => {
            location.state.order.city = e.target.value;
          }}
        />
        <br />
        <label>State </label>
        <input
          type="string"
          required
          onChange={(e) => {
            location.state.order.state = e.target.value;
          }}
        />
        <br />
        <label>Zip </label>
        <input
          type="Number"
          required
          onChange={(e) => {
            location.state.order.zip = e.target.value;
          }}
        />
        <br />
        <button className="button">Place Order</button>
      </form>
    </div>
  );
};

export default ShippingEntry;
