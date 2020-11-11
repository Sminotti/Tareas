var express = require('express');
var router = express.Router();

const provincia = [
    {id: 1,
    nombreProvincia: 'Tucumán',
    ts_create: '2020-10-21 21:11:42',
    ts_update: '2020-10-21 21:11:42'
}
];

router.get('/', (req, res) => {
    res.json(provincia);
  });


module.exports = router;
