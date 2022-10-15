const express = require("express");
const db = require("./db");
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

app.get("/get_all_items", function (req, res) {
  db.query(qrop_item);
  db.query(create_item);
  db.query(item_add1);
  db.query(item_add2);
  db.query(item_add3);
  db.query(item_add4);
  db.query(item_add5);

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
  var IDs = req.body.names;
  var quantity = req.body.quantity;

  IDs.forEach((id_, index) => {
    const quan = quantity[index];
    const result1 = db.query(
      `UPDATE Item SET quantity = ${quan} WHERE Id = ${id_};`
    );
  });

  return res.send("");
});
