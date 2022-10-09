import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./purchase.css";

function Purchase() {
  const [order, setOrder] = useState({
    products: {
      banana: {
        name: "Banana",
        cost: 0.5,
        buyQuantity: 0,
      },
      apple: {
        name: "Apple",
        cost: 1.0,
        buyQuanitity: 0,
      },
      premiumApple: {
        name: "Premium Apple",
        cost: 1.5,
        buyQuanitity: 0,
      },
      dragonFruit: {
        name: "Dragon Fruit",
        cost: 3.0,
        buyQuanitity: 0,
      },
      starFruit: {
        name: "Star Fruit",
        cost: 2.0,
        buyQuanitity: 0,
      },
    },
    creditCardNumber: "",
    expirationDate: "",
    cvv: "",
    cardHolderName: "",
    shippingName: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    navigate("/cart", { state: { order: order } });
  };

  return (
    <div>
      <h1> Our Products (Changes Daily!) </h1>
      <form onSubmit={handleSubmit}>
        <table>
          <tr>
            <td>
              <table>
                <tr>
                  <td>
                    <label>
                      {order.products.banana.name} | $
                      {order.products.banana.cost}
                    </label>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      src="https://images.heb.com/is/image/HEBGrocery/000377497"
                      alt="banana"
                      width="100"
                      height="100"
                    ></img>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      type="number"
                      required
                      onChange={(e) => {
                        order.products.banana.buyQuantity = e.target.value;
                      }}
                    />
                  </td>
                </tr>
              </table>
            </td>
            <td>
              <table>
                <tr>
                  <td>
                    {order.products.apple.name} | ${order.products.apple.cost}{" "}
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      src="https://healthjade.com/wp-content/uploads/2017/10/apple-fruit.jpg"
                      alt="apple"
                      width="85"
                      height="100"
                    ></img>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      type="number"
                      required
                      onChange={(e) => {
                        order.products.apple.buyQuantity = e.target.value;
                      }}
                    />
                  </td>
                </tr>
              </table>
            </td>
            <td>
              <table>
                <tr>
                  <td>
                    {order.products.premiumApple.name} | $
                    {order.products.premiumApple.cost}{" "}
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      src="https://media.istockphoto.com/photos/apple-with-googly-eyes-on-white-picture-id611628746?k=20&m=611628746&s=170667a&w=0&h=VHJe7xPLJuUhDn1lQuz0ZAcKxVa2D3vscnMk7oFpkdk="
                      alt="Premium Apple"
                      width="150"
                      height="100"
                    ></img>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      type="number"
                      required
                      onChange={(e) => {
                        order.products.premiumApple.buyQuantity =
                          e.target.value;
                      }}
                    />
                  </td>
                </tr>
              </table>
            </td>
            <td>
              <table>
                <tr>
                  <td>
                    {order.products.dragonFruit.name} | $
                    {order.products.dragonFruit.cost}{" "}
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Hylocereus_undatus_red_pitahaya.jpg/1200px-Hylocereus_undatus_red_pitahaya.jpg"
                      alt="DragonFruit"
                      width="150"
                      height="100"
                    ></img>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      type="number"
                      required
                      onChange={(e) => {
                        order.products.dragonFruit.buyQuantity = e.target.value;
                      }}
                    />
                  </td>
                </tr>
              </table>
            </td>
            <td>
              <table>
                <tr>
                  <td>
                    {order.products.starFruit.name} | $
                    {order.products.starFruit.cost}{" "}
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      src="https://storage.googleapis.com/images-fol-prd-83dd8b8.fol.prd.v8.commerce.mi9cloud.com/product-images/detail/4256.jpg"
                      alt="StarFruit"
                      width="150"
                      height="100"
                    ></img>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      type="number"
                      required
                      onChange={(e) => {
                        order.products.starFruit.buyQuantity = e.target.value;
                      }}
                    />
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
        <button className="button">Add To Cart</button>
      </form>
    </div>
  );
}

export default Purchase;
