const express = require("express");
const db = require("./db");
const orderDB = require("./orderDB");
const app = express();
const port = 7000;
const cors = require("cors");

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

// set access port
app.use(express.json());
app.listen(port, () => {
  console.log(`RUN http://localhost:${port}`);
});

app.get("/", function (req, res) {
  res.send("Hello World!");
});

const drop_orders = "DROP TABLE IF EXISTS ORDERS";
const create_orders =
  "CREATE TABLE ORDERS ( \
  id int NOT NULL AUTO_INCREMENT, \
  confNum varchar(255), \
  item1Quantity int,\
  item2Quantity int,\
  item3Quantity int,\
  item4Quantity int,\
  item5Quantity int,\
  creditCardNumber varchar(255), \
  expirationDate varchar(255), \
  cvv varchar(255), \
  cardHolderName varchar(255), \
  shippingName varchar(255), \
  address1 varchar(255), \
  address2 varchar(255), \
  city varchar(255), \
  state varchar(255), \
  zip varchar(255), \
  status varchar(255), \
  PRIMARY KEY (Id) )";

const qrop_item = "DROP TABLE IF EXISTS Item";
const create_item =
  "CREATE TABLE ITEM ( \
    id int NOT NULL AUTO_INCREMENT, \
    name varchar(255), \
    quantity int, \
    price double, \
    image_link varchar(255), \
    PRIMARY KEY (Id) );";

// INSERT default data
const item_add1 =
  "INSERT INTO Item (name, quantity, price, image_link) VALUES ('Banana', 50, 0.5, 'https://images.heb.com/is/image/HEBGrocery/000377497')";
const item_add2 =
  "INSERT INTO Item (name, quantity, price, image_link) VALUES ('Apple', 40, 1, 'https://healthjade.com/wp-content/uploads/2017/10/apple-fruit.jpg')";
const item_add3 =
  "INSERT INTO Item (name, quantity, price, image_link) VALUES ('Premium Apple', 30, 1.5, 'https://media.istockphoto.com/photos/apple-with-googly-eyes-on-white-picture-id611628746?k=20&m=611628746&s=170667a&w=0&h=VHJe7xPLJuUhDn1lQuz0ZAcKxVa2D3vscnMk7oFpkdk=')";
const item_add4 =
  "INSERT INTO Item (name, quantity, price, image_link) VALUES ('Dragon Fruit', 20, 3, 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Hylocereus_undatus_red_pitahaya.jpg/1200px-Hylocereus_undatus_red_pitahaya.jpg')";
const item_add5 =
  "INSERT INTO Item (name, quantity, price, image_link) VALUES ('Star Fruit', 10, 2, 'https://storage.googleapis.com/images-fol-prd-83dd8b8.fol.prd.v8.commerce.mi9cloud.com/product-images/detail/4256.jpg')";

const order_example =
  "INSERT INTO ORDERS (confNum, item1Quantity, item2Quantity, item3Quantity, item4Quantity, item5Quantity, creditCardNumber, expirationDate, cvv, cardHolderName, shippingName, address1, address2, city, state, zip, status) VALUES ('TEST', 1, 1, 2, 2, 3, '1234', '0824', '233', 'Andy', 'Andy', '111 street', '', 'Columbus', 'OH', '43201', 'processed')";

app.get("/get_all_items", function (req, res) {
  // run following queries to initialize all databases when using for first time

  // db.query(qrop_item);
  // db.query(create_item);
  // db.query(item_add1);
  // db.query(item_add2);
  // db.query(item_add3);
  // db.query(item_add4);
  // db.query(item_add5);

  // orderDB.query(drop_orders);
  // orderDB.query(create_orders);
  // orderDB.query(order_example);

  const result = db.query("select * from Item");
  return res.send(result);
});

app.get("/get_item/:id", function (req, res) {
  const result = db.query(
    `select quantity from Item where id = ${req.params.id}`
  );
  return res.send(result);
});

app.post("/update_quantity", function (req, res) {
  const products = req.body.body.products;

  const item1Quantity = products["1"]["buyQuantity"];
  const item2Quantity = products["2"]["buyQuantity"];
  const item3Quantity = products["3"]["buyQuantity"];
  const item4Quantity = products["4"]["buyQuantity"];
  const item5Quantity = products["5"]["buyQuantity"];

  db.query(
    `UPDATE Item SET quantity = quantity - ${item1Quantity} WHERE Id = 1;`
  );
  db.query(
    `UPDATE Item SET quantity = quantity - ${item2Quantity} WHERE Id = 2;`
  );
  db.query(
    `UPDATE Item SET quantity = quantity - ${item3Quantity} WHERE Id = 3;`
  );
  db.query(
    `UPDATE Item SET quantity = quantity - ${item4Quantity} WHERE Id = 4;`
  );
  db.query(
    `UPDATE Item SET quantity = quantity - ${item5Quantity} WHERE Id = 5;`
  );

  return res.send("Successfully updated quantities!");
});

app.post("/process_order", function (req, res) {
  const order = req.body.body.order;

  const confNum = req.body.confNum;
  const item1Quantity = order.products["1"]["buyQuantity"];
  const item2Quantity = order.products["2"]["buyQuantity"];
  const item3Quantity = order.products["3"]["buyQuantity"];
  const item4Quantity = order.products["4"]["buyQuantity"];
  const item5Quantity = order.products["5"]["buyQuantity"];
  const creditCardNumber = order["creditCardNumber"];
  const expirationDate = order["expirationDate"];
  const cvv = order["cvv"];
  const cardHolderName = order["cardHolderName"];
  const shippingName = order["shippingName"];
  const address1 = order["address1"];
  const address2 = order["address2"];
  const city = order["city"];
  const state = order["state"];
  const zip = order["zip"];

  const insert_order = `INSERT INTO ORDERS (confNum, item1Quantity, item2Quantity, item3Quantity, item4Quantity, item5Quantity, creditCardNumber, expirationDate, cvv, cardHolderName, shippingName, address1, address2, city, state, zip, status) VALUES ('${confNum}', ${item1Quantity}, ${item2Quantity}, ${item3Quantity}, ${item4Quantity}, ${item5Quantity}, '${creditCardNumber}', '${expirationDate}', '${cvv}', '${cardHolderName}', '${shippingName}', '${address1}', '${address2}', '${city}',  '${state}', '${zip}', 'new')`;
  orderDB.query(insert_order);

  return res.send("Successfully inserted order!");
});

app.post("/process_payment", function (req, res) {
  const paymentInfo = req.body.order;

  const confirmationNum = "123";
  console.log("Payment Received!");
  return res.send(confirmationNum);
});

app.post("/initiate_shipping", async function (req, res) {
  const message = req.body.message;
  console.log(message);

  const shippingLabel = "A1CD";
  return res.send(shippingLabel);
});
