const { DataTypes } = require("sequelize");

const database = require("../services/database");

const Paciente = database.define(
  "Paciente",
  {
    pac_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pac_email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pac_nascimento: {
      type: DataTypes.DATE,
      allowNull: false,
    }
  },
  {
    tableName: "pacientes",
    timestamps: false,
  }
);

module.exports = Paciente;


