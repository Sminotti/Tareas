const pool = require("./../utils/bd"); // referencia de la conexión :D
const T_DOCENTES = "docentes";
const T_DOCENTE_IMAGENES = "docente_imagenes";

const get = async () => {
  const query =
    //"SELECT doc.nombre, doc.apellido, doc.id, docImg.uid FROM ?? as doc JOIN ?? as docImg on doc.id = docImg.idDocente where doc.habilitado = ?";
    "SELECT doc.nombre, doc.apellido, doc.id, doc.cuit FROM ?? as doc where doc.habilitado = ?";
  const params = [T_DOCENTES, true];
  return await pool.query(query, params);
};
const single = async (id) => {
  const query =
  "SELECT doc.nombre, doc.apellido, doc.id, doc.cuit FROM ?? as doc where doc.habilitado = ? and doc.id = ?";
  //"SELECT doc.nombre, doc.apellido, doc.id, docImg.uid FROM ?? as doc JOIN ?? as docImg on doc.id = docImg.idDocente where doc.habilitado = ? and doc.id = ?";
  const params = [T_DOCENTES,true, id];
  return await pool.query(query, params);
};



const create = (obj) =>
  pool
    .query("INSERT INTO ?? SET ?", [T_DOCENTES, obj])
    .then((response) => response)
    .catch((e) => console.log(e));

const createImages = (obj) =>
  pool
    .query("INSERT INTO ?? SET ?", [T_DOCENTE_IMAGENES, obj])
    .then((response) => response)
    .catch((e) => console.log(e));

module.exports = { create, createImages, get, single };
