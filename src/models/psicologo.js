const { DataTypes } = require("sequelize");

const database = require("../services/database");

const Psicologo = database.define(
  "Psicologo",
  {
    psi_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    psi_email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    psi_senha: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    psi_apresentacao: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    tableName: "psicologos",
    timestamps: false,
  }
);

module.exports = Psicologo;


