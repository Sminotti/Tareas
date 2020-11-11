var express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
  res.render("admin");
});

const compra = [
  {
    id: 1,
    nroCompra: 1,
    idUsuario: 1,
    ts_create: "2020-10-21 21:11:42",
    ts_update: "2020-10-21 21:11:42",
  },
  {
    id: 2,
    nroCompra: 2,
    idUsuario: 2,
    ts_create: "2020-10-21 21:11:42",
    ts_update: "2020-10-21 21:11:42",
  },
  {
    id: 3,
    nroCompra: 3,
    idUsuario: 3,
    ts_create: "2020-10-21 21:11:42",
    ts_update: "2020-10-21 21:11:42",
  },
  {
    id: 4,
    nroCompra: 4,
    idUsuario: 4,
    ts_create: "2020-10-21 21:11:42",
    ts_update: "2020-10-21 21:11:42",
  },
  {
    id: 5,
    nroCompra: 5,
    idUsuario: 5,
    ts_create: "2020-10-21 21:11:42",
    ts_update: "2020-10-21 21:11:42",
  },
];

const vista = (req, res) => {
  res.render("compras", { compra });
};

const vistaIndividual = (req, res) => {
  const { id } = req.params;
  const compras = compra.find((ind) => ind.id == id);
  res.render("compra", { compras });
};

router.get("/compras", vista);
router.get("/compras/:id", vistaIndividual);

module.exports = compra;

module.exports = router;
