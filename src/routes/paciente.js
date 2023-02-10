const express = require('express');

const pacienteController = require("../controllers/paciente");

const router = express.Router();


router.get("/", pacienteController.getAll);
router.get("/:id", pacienteController.getById);
router.post("/", pacienteController.store);
router.put("/:id", pacienteController.update);
router.delete("/:id", pacienteController.destroy);

module.exports = router;