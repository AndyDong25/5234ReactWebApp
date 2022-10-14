const express = require("express");
const db = require('./db');
const app = express();
const port = 7000;
const cors = require('cors');

const corsOptions ={
    origin:'http://localhost:3000',
    credentials:true,
    optionSuccessStatus:200
}

app.use(cors(corsOptions));

// set access port
app.use(express.json());
app.listen(port, () => {
    console.log(`RUN http://localhost:${port}`);
});

app.get("/", function(req, res) {
    res.send("Hello World!")
});

const qrop_item = "DROP TABLE IF EXISTS Item";
const create_item = "CREATE TABLE ITEM ( \
    Id int NOT NULL AUTO_INCREMENT, \
    Item varchar(255), \
    quantity int, \
    PRIMARY KEY (Id) );";
// INSERT default data
const item_add1 = "INSERT INTO Item (Item, quantity) VALUES ('product 1', 10)"
const item_add2 = "INSERT INTO Item (Item, quantity) VALUES ('product 2', 20)"

app.get("/get_item", function(req, res) {
    db.query(qrop_item);
    db.query(create_item);
    db.query(item_add1);
    db.query(item_add2);
    const result = db.query('select * from Item');
    return res.send(result)
});

app.post("/update_quantity", function(req, res) {
    var IDs = req.body.names;
    var quantity = req.body.quantity;

    IDs.forEach((id_, index) => {
        const quan = quantity[index];
        const result1 = db.query(`UPDATE Item SET quantity = ${quan} WHERE Id = ${id_};`);
    });

    return res.send('')
});