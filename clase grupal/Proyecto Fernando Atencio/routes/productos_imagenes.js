var express = require('express');
var router = express.Router();

const img = [
    {id: 1,
    nombreFoto: 'frontal.jpg',
    ts_create: '2020-10-21 21:11:42',
    ts_update: '2020-10-21 21:11:42'
}
];

router.get('/', (req, res) => {
    res.json(img);
  });

module.exports = router;
