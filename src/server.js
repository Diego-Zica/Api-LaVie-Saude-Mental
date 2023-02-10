const express = require('express');

const database = require('./services/database');

const mainRoutes = require('./routes/main');
const psicologoRoutes = require('./routes/psicologo')
const pacienteRoutes = require('./routes/paciente')

const server = express();
const port = 3000;


server.use(express.json());
server.use("/", mainRoutes);
server.use("/psicologos", psicologoRoutes);
server.use("/pacientes", pacienteRoutes);

try {
  database.authenticate();

  server.listen(port, () =>{
    console.log(`Servidor executando na porta ${port}`);
  });
  
} catch (error) {
  console.error('Não foi possível conectar ao Banco de Dados:', error);
};
