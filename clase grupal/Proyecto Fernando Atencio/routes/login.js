var express = require('express');
var router = express.Router();

const vista = (req, res) => {
    res.render('login')
  };
  
const ingreso = (req, res) => {
  const {username: nombre} = req.body;
  res.render ('ingreso', {nombre})
};
 
  router.get('/', vista);
  router.post('/ingreso', ingreso);
   
  module.exports = router;