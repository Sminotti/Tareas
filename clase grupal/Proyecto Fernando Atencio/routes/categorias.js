var express = require('express');
var router = express.Router();

const categoria = [
    {id: 5,
    nombreCategoria: 'Remeras',
    ts_create: '2020-10-21 21:11:42',
    ts_update: '2020-10-21 21:11:42'
}
];

router.get('/', (req, res) => {
    res.end();
  });


module.exports = router;
