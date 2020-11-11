var express = require("express");
var router = express.Router();
const T_producto = require("./../Tablas/T_producto");


const list = (req, res) => {
  res.render("productos", { T_producto });
  // res.json(T_producto)
};

const single = (req, res) => {
  const { id } = req.params;
  const producto = T_producto.find((producto) => producto.id == id);
  res.render("producto", { producto });
  
};


router.get("/list", list);
router.get("/single/:id", single);

module.exports = router;
