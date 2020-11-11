var express = require('express');
var router = express.Router();

const direccion = [
    {id: 1,
    calle: 'Av. Jujuy',
    nro: '741',
    localidad: 'San Miguel de Tucumán',
    CP: 4000,
    idProvincia: 1,
    idEstado_Pago: 1,
    ts_create: '2020-10-21 21:11:42',
    ts_update: '2020-10-21 21:11:42'
}
];

router.get('/', (req, res) => {
    res.json(direccion);
  });

module.exports = direccion;
module.exports = router;
