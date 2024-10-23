const express = require('express');
const router = express.Router();
const telefoneController = require('../controllers/telefoneController');

router.post("/", telefoneController.createTelefone);
router.get("/", telefoneController.readTelefones);
router.put("/:idTelefone", telefoneController.updateTelefone);
router.delete("/:idTelefone", telefoneController.deleteTelefone);

module.exports = router;