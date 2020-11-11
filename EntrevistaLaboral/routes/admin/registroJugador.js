var express = require('express');
var router = express.Router();
const showView = (req, res) => res.render("registroJugadores");

router.get("/", showView);
module.exports = router;
