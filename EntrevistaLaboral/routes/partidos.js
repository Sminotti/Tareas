const express = require("express");
const router = express.Router();
const model = require("./../models/partidos");

const all = async (req, res) => {
  try {
    const docentes = await model.get(); // [{}]
    //res.json(docentes);
    res.render("docentes", { docentes: docentes });
  } catch (e) {
    res.render("error");
  }
};

const single = async (req, res) => {
  const { id } = req.params;
  const [docente] = await model.single(id);
  //res.json(curso);
  res.render("docente", { docente });
};
router.get("/single/:id", single);
router.get("/all", all);

module.exports = router;