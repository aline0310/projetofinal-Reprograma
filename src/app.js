const express = require("express");
const cors = require("cors");
const index = require("./routes/index")
const routesVendedores = require("./routes/vendedoresRoutes")
const routesProdutos = require("./routes/produtosRoutes")
const routesClientes = require("./routes/clientesRoutes")
const app = express();


app.use(cors());
app.use(express.json());


app.use("/", index)
//app.use("/clientes", routesClientes);
//app.use("/vendedores", routesProdutos);
//app.use("/produtos", routesVendedores);



module.exports = app;