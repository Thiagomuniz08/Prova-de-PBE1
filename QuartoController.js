const quartoModel = require('../models/quartoModel');

const createQuarto = (req, res) => {
    quartoModel.createQuarto(req.body, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(201).json({ message: 'Quarto criado com sucesso', result });
        }
    });
};

const readQuartos = (req, res) => {
    quartoModel.readQuartos((err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(result);
        }
    });
};

const updateQuarto = (req, res) => {
    quartoModel.updateQuarto(req.body, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: 'Quarto atualizado com sucesso', result });
        }
    });
};

const deleteQuarto = (req, res) => {
    const { idQuarto } = req.params;
    quartoModel.deleteQuarto(idQuarto, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: 'Quarto removido com sucesso', result });
        }
    });
};

module.exports = { createQuarto, readQuartos, updateQuarto, deleteQuarto };