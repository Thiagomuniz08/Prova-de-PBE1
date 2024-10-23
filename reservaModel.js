const mysql = require("mysql");

const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'hoteis'
});

const createReserva = (data, callback) => {
    const query = 'INSERT INTO reservas (cliente_id, quarto_id, data_reserva, data_entrada, data_saida, valor_total, statusReserva) VALUES (?, ?, ?, ?, ?, ?, ?)';
    con.query(query, [data.cliente_id, data.quarto_id, data.data_reserva, data.data_entrada, data.data_saida, data.valor_total, data.statusReserva], callback);
};

const readReservas = (callback) => {
    const query = "SELECT * FROM reservas";
    con.query(query, callback);
};

const updateReserva = (data, callback) => {
    const query = 'UPDATE reservas SET cliente_id = ?, quarto_id = ?, data_reserva = ?, data_entrada = ?, data_saida = ?, valor_total = ?, statusReserva = ? WHERE reserva_id = ?';
    con.query(query, [data.cliente_id, data.quarto_id, data.data_reserva, data.data_entrada, data.data_saida, data.valor_total, data.statusReserva, data.reserva_id], callback);
};

const deleteReserva = (idReserva, callback) => {
    const query = 'DELETE FROM reservas WHERE reserva_id = ?';
    con.query(query, [idReserva], callback);
};

module.exports = { createReserva, readReservas, updateReserva, deleteReserva };