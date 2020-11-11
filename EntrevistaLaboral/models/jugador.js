const pool = require("./../utils/bd");
const T_JUGADOR = "jugador";
const T_JUGADOR_IMAGEN = "jugadorImagen";


const get = async () => {
  const query =
    "SELECT ju.nombre, ju.id, juImg.uid as nombreImagen  FROM ?? as ju JOIN ?? as juImg on ju.id = jugImg.id where ju.habilitado = ?";
  const params = [T_JUGADOR, T_JUGADOR_IMAGEN, true];
  return await pool.query(query, params);
};
const single = async (id) => {
  const query =
    "SELECT ju.nombre, ju.id, juImg.uid as nombreImagen  FROM ?? as ju JOIN ?? as juImg on ju.id = jugImg.id where ju.habilitado = ? and ju.id = ?";
  const params = [T_JUGADOR, T_JUGADOR_IMAGEN, true, id];
  return await pool.query(query, params);
};

const create = (obj) =>
  pool
    .query("INSERT INTO ?? SET ?", [T_JUGADOR, obj])
    .then((result) => result)
    .catch((e) => e);

module.exports = { get, single, create };

const createImages = (obj) =>
  pool
    .query("INSERT INTO ?? SET ?", [T_JUGADOR_IMAGEN, obj])
    .then((response) => response)
    .catch((e) => console.log(e));

module.exports = { create, createImages, get, single };
