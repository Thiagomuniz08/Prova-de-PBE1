const reservaModel = require('../models/reservaModel');

const createReserva = (req, res) => {
    reservaModel.createReserva(req.body, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(201).json({ message: 'Reserva criada com sucesso', result });
        }
    });
};

const readReservas = (req, res) => {
    reservaModel.readReservas((err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(result);
        }
    });
};

const updateReserva = (req, res) => {
    reservaModel.updateReserva(req.body, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: 'Reserva atualizada com sucesso', result });
        }
    });
};

const deleteReserva = (req, res) => {
    const { idReserva } = req.params;
    reservaModel.deleteReserva(idReserva, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: 'Reserva removida com sucesso', result });
        }
    });
};

module.exports = { createReserva, readReservas, updateReserva, deleteReserva };