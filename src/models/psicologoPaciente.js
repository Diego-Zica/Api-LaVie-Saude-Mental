const database = require("../services/database");

const PsicologoPaciente = database.define(
    "PsicologoPaciente",
    {},
    { tableName: "psicologo_pacientes", timeStamps: false }
   );

module.exports = PsicologoPaciente;
