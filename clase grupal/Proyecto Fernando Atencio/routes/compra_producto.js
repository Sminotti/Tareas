var express = require('express');
var router = express.Router();

const compraProducto = [
    {id: 1,
    idCompra: 1,
    idProducto: 1,
    cantidad: 7,
    ts_create: '2020-10-21 21:11:42',
    ts_update: '2020-10-21 21:11:42'
}
];

router.get('/', (req, res) => {
    res.json(compraProducto);
  });


module.exports = router;
