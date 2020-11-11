var express = require('express');
var router = express.Router();


const vista = (req, res) => {
    res.render ('registro')
};

const crear = (req, res) => {
    const {username: nombre} = req.body;
    res.render ('nuevo', {nombre})
};

router.get('/', vista);
router.post('/nuevo', crear);


module.exports = router;
