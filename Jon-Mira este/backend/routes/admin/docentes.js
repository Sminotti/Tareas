const express = require("express");
const router = express.Router();
const multer = require("multer"); // agrega al req.file ( el file para poder subir archivos)
const config = { dest: `./public/tmp` };//creo una variable con el destino temporal
const upload = multer(config);//se lo agrego a otra variable llamando a multer
const service = require("./../../services/docentes");

const create = async (req, res) => {
  console.log(req.file);
  const idFile = await service.createDocente(req.body, req.file);
  res.redirect("/admin/docentes/create");
};

// .single o .array()
//tres opciones para subir archivos
//1. a la base de datos
//2. a una carpeta dentro del servidor
//3. a un S3 externo (menos costo de transferencia y mejora la velocidad de rendimiento)
router.get("/create", (req, res) => res.render("admindocentes"));
router.post("/create", upload.single("imagen"), create); //lo pongo en medio del destino y la funcion ,le digo que lo guarde en el archivo temporal
module.exports = router;
