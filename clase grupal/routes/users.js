var express = require("express");
var router = express.Router();

/* GET users listing. */
const users = [
  {
    id: 1,
    nombre: "Virginia",
    apellido: "Sacudato",
    edad: 17,
    nacionalidad: "Argentina",
  },
  {
    id: 2,
    nombre: "Narella",
    apellido: "Sordi",
    edad: 24,
    nacionalidad: "Italiana",
  },
  {
    id: 3,
    nombre: "Sebastian",
    apellido: "Minotti",
    edad: 41,
    nacionalidad: "Argentina",
  },
];

const list = (req, res) => {
  res.render("users", { users });//muestra en la pagina users los datos del usuario en un objeto
  // res.json(users)
};

const single = (req, res) => {
  const { id } = req.params;
  const user = users.find((user) => user.id == id);//creamos un array de params,que contiene los id
  res.render("user", { user });//muestra en la pagina user solo el usuario seleccionado
  console.log(user);
};

const filter = (req, res) => {
  // tarea -> console.log(req.query);
};
/*const paginate = (req,res) => {
// aca habria que poner un promt por ejemplo que diga cuantos registros queres mostrar? 
console.log(req.params.id);
const {id} = req.params
res.end();
};*/
// query
router.get("/list", list);
router.get("/single/:id", single); // 1 2 pure
router.get("/list/filter", filter);
// router.get("/list/paginate/:start/:end", paginate);
module.exports = router;
