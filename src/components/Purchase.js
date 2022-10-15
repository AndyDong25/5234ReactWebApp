import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./purchase.css";

function Purchase() {
  const [order, setOrder] = useState({
    products: {
      1: {
        name: "",
        cost: 0,
        buyQuanitity: 0,
        image: "",
      },
      2: {
        name: "",
        cost: 0,
        buyQuanitity: 0,
        image: "",
      },
      3: {
        name: "",
        cost: 0,
        buyQuanitity: 0,
        image: "",
      },
      4: {
        name: "",
        cost: 0,
        buyQuanitity: 0,
        image: "",
      },
      5: {
        name: "",
        cost: 0,
        buyQuanitity: 0,
        image: "",
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

  useEffect(() => {
    axios
      .get("http://localhost:7000/get_all_items", {
        params: {},
      })
      .then((data) => {
        const data_ = JSON.parse(JSON.stringify(data.data));
        data_.forEach((order_) => {
          var product = order.products[order_.id.toString()];
          product["name"] = order_.name;
          product["cost"] = order_.price;
          // we should create separate database to keep track of orders
          // product["buyQuantity"] = order_.quantity;
          product["image"] = order_.image_link;
        });
        setOrder({ ...order });
      });
  }, []);

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
                      {order.products["1"].name} | ${order.products["1"].cost}
                    </label>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      src={order.products["1"].image}
                      alt={order.products["1"].name}
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
                        order.products["1"].buyQuantity = e.target.value;
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
                    {order.products["2"].name} | ${order.products["2"].cost}{" "}
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      src={order.products["2"].image}
                      alt={order.products["2"].name}
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
                        order.products["2"].buyQuantity = e.target.value;
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
                    {order.products["3"].name} | ${order.products["3"].cost}{" "}
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      src={order.products["3"].image}
                      alt={order.products["3"].name}
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
                        order.products["3"].buyQuantity = e.target.value;
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
                    {order.products["4"].name} | ${order.products["4"].cost}{" "}
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      src={order.products["4"].image}
                      alt={order.products["4"].name}
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
                        order.products["4"].buyQuantity = e.target.value;
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
                    {order.products["5"].name} | ${order.products["5"].cost}{" "}
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      src={order.products["5"].image}
                      alt={order.products["5"].name}
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
                        order.products["5"].buyQuantity = e.target.value;
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
