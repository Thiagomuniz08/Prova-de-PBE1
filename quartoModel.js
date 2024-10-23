const mysql = require("mysql");

const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'hoteis'
});

const createQuarto = (data, callback) => {
    const query = 'INSERT INTO quartos (numero, andar, tipo, valor_diaria, statusQuarto, cliente_id) VALUES (?, ?, ?, ?, ?, ?)';
    con.query(query, [data.numero, data.andar, data.tipo, data.valor_diaria, data.statusQuarto, data.cliente_id], callback);
};

const readQuartos = (callback) => {
    const query = "SELECT * FROM quartos";
    con.query(query, callback);
};

const updateQuarto = (data, callback) => {
    const query = 'UPDATE quartos SET numero = ?, andar = ?, tipo = ?, valor_diaria = ?, statusQuarto = ?, cliente_id = ? WHERE quarto_id = ?';
    con.query(query, [data.numero, data.andar, data.tipo, data.valor_diaria, data.statusQuarto, data.cliente_id, data.quarto_id], callback);
};

const deleteQuarto = (idQuarto, callback) => {
    const query = 'DELETE FROM quartos WHERE quarto_id = ?';
    con.query(query, [idQuarto], callback);
};

module.exports = { createQuarto, readQuartos, updateQuarto, deleteQuarto };