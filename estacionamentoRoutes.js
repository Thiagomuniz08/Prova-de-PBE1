const express = require('express');
const router = express.Router();
const estacionamentoController = require('../controllers/estacionamentoController');

router.post("/", estacionamentoController.createEstacionamento);
router.get("/", estacionamentoController.readEstacionamentos);
router.put("/:idEstacionamento", estacionamentoController.updateEstacionamento);
router.delete("/:idEstacionamento", estacionamentoController.deleteEstacionamento);

module.exports = router;