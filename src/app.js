const express = require("express");
const cors = require("cors");
const index = require("./routes/index")
const db = require("./data/database")
const routesVendedores = require("./routes/vendedoresRoutes")
const routesProdutos = require("./routes/produtosRoutes")
const routesClientes = require("./routes/clientesRoutes")
const app = express();

db.connect()
app.use(cors());
app.use(express.json());

app.use("/", index)
//app.use("/clientes", routesClientes);
app.use("/vendedores", routesVendedores);
app.use("/produtos", routesProdutos);



module.exports = app;