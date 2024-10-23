const mysql = require("mysql");

const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'hoteis'
});

const createEstacionamento = (data, callback) => {
    const query = 'INSERT INTO estacionamento (cliente_id, veiculo_placa, veiculo_marca, veiculo_modelo, data_entrada) VALUES (?, ?, ?, ?, ?)';
    con.query(query, [data.cliente_id, data.veiculo_placa, data.veiculo_marca, data.veiculo_modelo, data.data_entrada], callback);
};

const readEstacionamentos = (callback) => {
    const query = "SELECT * FROM estacionamento";
    con.query(query, callback);
};

const updateEstacionamento = (data, callback) => {
    const query = 'UPDATE estacionamento SET veiculo_placa = ?, veiculo_marca = ?, veiculo_modelo = ?, data_entrada = ?, data_saida = ? WHERE estacionamento_id = ?';
    con.query(query, [data.veiculo_placa, data.veiculo_marca, data.veiculo_modelo, data.data_entrada, data.data_saida, data.estacionamento_id], callback);
};

const deleteEstacionamento = (idEstacionamento, callback) => {
    const query = 'DELETE FROM estacionamento WHERE estacionamento_id = ?';
    con.query(query, [idEstacionamento], callback);
};

module.exports = { createEstacionamento, readEstacionamentos, updateEstacionamento, deleteEstacionamento };