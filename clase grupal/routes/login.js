const express = require("express");
const router = express.Router();
const T_usuario = require("./../Tablas/T_usuario");
const showView = (req, res) => res.render("login");

const ingreso=(req,res)=>{
    const { body: usuario } = req;
    const { logUsuario,logPassword } = usuario;
    const userAdmin = T_usuario.find((userAdmin) => userAdmin.administrador == 1);// ya tengo el administrador guardado en esta variable
console.log(usuario);
console.log(userAdmin);
    if(usuario.logUsuario == userAdmin.user && usuario.logPassword == userAdmin.password){
        res.render("login", {message:`Bienvenido/a administrador ${logUsuario}`});
    }

    res.render("login", {message:`Bienvenido/a ${logUsuario}`});
}



router.get("/", showView);
router.post("/ingreso", ingreso);
module.exports = router;