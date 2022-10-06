import React from "react";
import "./home.css";

const Home = () => {
  return (
    <div className="container">
      <h1>PFD (Premium Fruit Delivery)</h1>
      <img
        src="https://cdn.dribbble.com/users/2492784/screenshots/7058620/f23_4x.png"
        alt="logo"
        width="200"
        height="200"
      ></img>
      <h3>Our Mission</h3>
      <p>
        We are a direct to consumer premium fruit supplier focused on providing
        holistic and sustainable fruit solutions for our customers.
      </p>
      <h3>Business Strategy</h3>
      <p>
        We ship the freshest and finest hand-picked, gluten-free fruit at the
        time and place customers need. The direct to consumer fruit market is
        ripe for the taking, and we are capitalizing on this untapped space in
        the billion dollar fruit industry.
      </p>
      <h3>To Our Customers</h3>
      <p>
        We strive to provide safe, quality fruit, using modern sustainable
        business practices. 1% of all profits are donated directly towards fruit
        educational awareness.
      </p>
      <img
        src="https://st.depositphotos.com/1812608/1432/i/600/depositphotos_14325279-stock-photo-fruit-cartoon.jpg"
        alt="fruits"
        width="600"
        height="400"
      ></img>
    </div>
  );
};

export default Home;
