const express = require('express');
const router = express.Router();
const reservaController = require('../controllers/reservaController');

router.post("/", reservaController.createReserva);
router.get("/", reservaController.readReservas);
router.put("/:idReserva", reservaController.updateReserva);
router.delete("/:idReserva", reservaController.deleteReserva);

module.exports = router;