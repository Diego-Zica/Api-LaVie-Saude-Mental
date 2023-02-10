const Psicologo = require("./psicologo");
const Paciente = require("./paciente");
const PsicologoPaciente = require("./psicologoPaciente");

Psicologo.belongsToMany(Paciente, {
  foreignKey: "psicologo_id",
  through: PsicologoPaciente 
});

Paciente.belongsToMany(Psicologo, {
  foreignKey: "paciente_id",
  through: PsicologoPaciente 
});


module.exports = {
  Psicologo,
  Paciente
};