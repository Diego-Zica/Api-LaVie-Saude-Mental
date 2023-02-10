const express = require('express');

const psicologoController = require("../controllers/psicologo");

const router = express.Router();


router.get("/", psicologoController.getAll);
router.get("/:id", psicologoController.getById);
router.post("/", psicologoController.store);
router.put("/:id", psicologoController.update);
router.delete("/:id", psicologoController.destroy);

module.exports = router;