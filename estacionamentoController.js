const estacionamentoModel = require('../models/estacionamentoModel');

const createEstacionamento = (req, res) => {
    estacionamentoModel.createEstacionamento(req.body, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(201).json({ message: 'Estacionamento criado com sucesso', result });
        }
    });
};

const readEstacionamentos = (req, res) => {
    estacionamentoModel.readEstacionamentos((err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(result);
        }
    });
};

const updateEstacionamento = (req, res) => {
    estacionamentoModel.updateEstacionamento(req.body, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: 'Estacionamento atualizado com sucesso', result });
        }
    });
};

const deleteEstacionamento = (req, res) => {
    const { idEstacionamento } = req.params;
    estacionamentoModel.deleteEstacionamento(idEstacionamento, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: 'Estacionamento removido com sucesso', result });
        }
    });
};

module.exports = { createEstacionamento, readEstacionamentos, updateEstacionamento, deleteEstacionamento };