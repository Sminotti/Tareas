var express = require('express');
var router = express.Router();

const productos = [
    {id: 1,
    nombre: 'Remera blanca',
    precio: 700,
    descripcion: 'Remera blanca básica unisex, con bolsillo en el pecho',
    idCategoria: 3,
    idImagen: 7,
    habilitado: 1,
    eliminado: 0,
    ts_create: '2020-10-21 21:11:42',
    ts_update: '2020-10-21 21:11:42'
},
{id: 2,
  nombre: 'Buzo rayado negro',
  precio: 900,
  descripcion: 'Buzo negro con rayas blancas',
  idCategoria: 4,
  idImagen: 2,
  habilitado: 1,
  eliminado: 0,
  ts_create: '2020-10-21 21:11:42',
  ts_update: '2020-10-21 21:11:42'
},
{id: 3,
  nombre: 'Pantalón verde',
  precio: 1100,
  descripcion: 'Pantalón verde con bolsillo estampado',
  idCategoria: 6,
  idImagen: 4,
  habilitado: 1,
  eliminado: 0,
  ts_create: '2020-10-21 21:11:42',
  ts_update: '2020-10-21 21:11:42'
},
{id: 4,
  nombre: 'Campera azul',
  precio: 1500,
  descripcion: 'Campera azul impermeable',
  idCategoria: 2,
  idImagen: 9,
  habilitado: 1,
  eliminado: 0,
  ts_create: '2020-10-21 21:11:42',
  ts_update: '2020-10-21 21:11:42'
},
{id: 5,
  nombre: 'Remera anaranjada',
  precio: 750,
  descripcion: 'Remera anaranjada con estampa en la espalda',
  idCategoria: 3,
  idImagen: 10,
  habilitado: 1,
  eliminado: 0,
  ts_create: '2020-10-21 21:11:42',
  ts_update: '2020-10-21 21:11:42'
}
];

const vista = (req, res) => {
  res.render('productos', {productos})
};

const vistaIndividual = (req, res) => {
  const {id} = req.params;
  const producto = productos.find ((prod) => prod.id == id);
  res.render ('producto', {producto});
}

router.get('/', vista);

router.get('/:id', vistaIndividual);


module.exports = productos;
module.exports = router;
