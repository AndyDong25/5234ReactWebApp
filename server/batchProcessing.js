const db = require("./db");
const orderDB = require("./orderDB");

//Puts values into db for demo purposes
// seedDb();

//Update item inventories of new orders
const newOrders = get_new_orders();
process_orders(newOrders);

//Set status of processed orders
orderDB.query("UPDATE ORDERS SET status='processed' WHERE status='new'");

//console.log(db.query('SELECT * FROM ITEM'));
//console.log(orderDB.query('SELECT * from ORDERS'));

function get_new_orders() {
  return orderDB.query("SELECT * FROM ORDERS WHERE status='new'");
}

function process_orders(newOrders) {
  for (const order of newOrders) {
    const updateInventoryItem1 = `UPDATE ITEM SET quantity=quantity-${order["item1Quantity"]} WHERE id=1`;
    const updateInventoryItem2 = `UPDATE ITEM SET quantity=quantity-${order["item2Quantity"]} WHERE id=2`;
    const updateInventoryItem3 = `UPDATE ITEM SET quantity=quantity-${order["item3Quantity"]} WHERE id=3`;
    const updateInventoryItem4 = `UPDATE ITEM SET quantity=quantity-${order["item4Quantity"]} WHERE id=4`;
    const updateInventoryItem5 = `UPDATE ITEM SET quantity=quantity-${order["item5Quantity"]} WHERE id=5`;

    db.query(updateInventoryItem1);
    db.query(updateInventoryItem2);
    db.query(updateInventoryItem3);
    db.query(updateInventoryItem4);
    db.query(updateInventoryItem5);
  }
}

function seedDb() {
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

  const drop_orders = "DROP TABLE IF EXISTS ORDERS";
  const drop_items = "DROP TABLE IF EXISTS ITEM";

  orderDB.query(drop_orders);
  orderDB.query(create_orders);
  const insert_order = `INSERT INTO ORDERS (confNum, item1Quantity, item2Quantity, item3Quantity, item4Quantity, item5Quantity, creditCardNumber, expirationDate, cvv, cardHolderName, shippingName, address1, address2, city, state, zip, status) VALUES ('1', 20, 2, 3, 4, 5, '111222333444', '01/25', '123', 'Bob Joe', 'Bob Joe', 'Sesame St.', '', 'Chicago',  'IL', '44120', 'new')`;
  orderDB.query(insert_order);

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

  db.query(drop_items);
  db.query(create_item);
  db.query(item_add1);
  db.query(item_add2);
  db.query(item_add3);
  db.query(item_add4);
  db.query(item_add5);
}
