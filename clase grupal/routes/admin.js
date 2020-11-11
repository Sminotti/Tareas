var express = require("express");
var router = express.Router();
const T_compra = require("../Tablas/T_compra");


const list = (req, res) => {
  res.render("compras", { T_compra });
  // res.json(T_producto)
};

const single = (req, res) => {
  const { id } = req.params;
  const compra = T_compra.find((compra) => compra.id == id);
  res.render("compras", { compra });
  
};


router.get("/list", list);
router.get("/single/:id", single);

module.exports = router;