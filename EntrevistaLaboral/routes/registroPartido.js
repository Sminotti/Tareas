var express = require('express');
var router = express.Router();
const showView = (req, res) => res.render("registroPartidos");

router.get("/", showView);
module.exports = router;
