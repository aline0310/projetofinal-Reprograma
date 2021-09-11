const express = require("express");
const cors = require("cors");
const index = require("./routes/index");
const db = require("./data/database");
const routesSellers = require("./routes/sellersRoutes");
const routesProducts = require("./routes/productsRoutes");
const routesCostumers = require("./routes/costumersRoutes");
const routesPurchase = require("./routes/purchaseRoutes");
const app = express();

db.connect()
app.use(cors());
app.use(express.json());

app.use("/", index)
app.use("/costumers", routesCostumers);
app.use("/sellers", routesSellers);
app.use("/products", routesProducts);
app.use("/purchase", routesPurchase);



module.exports = app;