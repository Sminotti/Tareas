var express = require("express");
var router = express.Router();
const T_usuario = require("./../Tablas/T_usuario");


const list = (req, res) => {
  res.render("users", { T_usuario });//muestra en la pagina usuarios los datos del usuario en un objeto
  // res.json(users)
};

const single = (req, res) => {
  const { id } = req.params;
  const user = T_usuario.find((user) => user.id == id);//creamos un array de params,que contiene los id
  res.render("user", { user });//muestra en la pagina user solo el usuario seleccionado
  
};


router.get("/list", list);
router.get("/single/:id", single); // 1 2 pure

module.exports = router;
