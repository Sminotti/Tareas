var express = require("express");
var router = express.Router();
const usuarios = [
  {
    id: 1,
    username: "franco",
    email: "dileo.francoj@gmail.com",
    password: "1234",
    habilitado: 1,
    eliminado: 0,
    ts_create: "2020-10-21 21:11:42",
    ts_update: "2020-10-21 21:11:42",
  },
  {
    id: 2,
    username: "macarena",
    email: "macarenasromero@gmail.com",
    password: "1234",
    habilitado: 1,
    eliminado: 0,
    ts_create: "2020-10-21 21:11:42",
    ts_update: "2020-10-21 21:11:42",
  },
  {
    id: 3,
    username: "fernando",
    email: "fernando@gmail.com",
    password: "1234",
    habilitado: 1,
    eliminado: 0,
    ts_create: "2020-10-21 21:11:42",
    ts_update: "2020-10-21 21:11:42",
  },
  {
    id: 4,
    username: "virginia",
    email: "virginia@gmail.com",
    password: "1234",
    habilitado: 1,
    eliminado: 0,
    ts_create: "2020-10-21 21:11:42",
    ts_update: "2020-10-21 21:11:42",
  },
  {
    id: 5,
    username: "emiliano",
    email: "emiliano@gmail.com",
    password: "1234",
    habilitado: 1,
    eliminado: 0,
    ts_create: "2020-10-21 21:11:42",
    ts_update: "2020-10-21 21:11:42",
  },
];

router.get("/", (req, res) => {
  res.render("usuarios", { usuarios });
});
module.exports = usuarios;
module.exports = router;
