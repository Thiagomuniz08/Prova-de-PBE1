const express = require('express');
const router = express.Router();
const quartoController = require('../controllers/quartoController');

router.post("/", quartoController.createQuarto);
router.get("/", quartoController.readQuartos);
router.put("/:idQuarto", quartoController.updateQuarto);
router.delete("/:idQuarto", quartoController.deleteQuarto);

module.exports = router;