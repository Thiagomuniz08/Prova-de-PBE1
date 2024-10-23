const express = require('express');
const cors = require("cors");
const clienteRoutes = require('./routes/clienteRoutes');
const telefoneRoutes = require('./routes/telefoneRoutes');
const quartoRoutes = require('./routes/quartoRoutes');
const reservaRoutes = require('./routes/reservaRoutes');
const estacionamentoRoutes = require('./routes/estacionamentoRoutes');

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => res.send("Back-end respondendo"));

app.use("/clientes", clienteRoutes);
app.use("/telefones", telefoneRoutes);
app.use("/quartos", quartoRoutes);
app.use("/reservas", reservaRoutes);
app.use("/estacionamentos", estacionamentoRoutes);

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});

