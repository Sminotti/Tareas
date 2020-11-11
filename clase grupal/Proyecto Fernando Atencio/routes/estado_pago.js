var express = require('express');
var router = express.Router();

const pago = [
    {id: 1,
    aprobado: 1,
    pendiente: 0,
    rechazado: 0,
    devolucion: 0,
    idCompra: 1,
    ts_create: '2020-10-21 21:11:42',
    ts_update: '2020-10-21 21:11:42'
}
];

router.get('/', (req, res) => {
    res.json(pago);
  });


module.exports = router;
