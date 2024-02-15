const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "vehicle",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        unique: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      totalKm: {
        type: DataTypes.NUMBER,
        allowNull: false,
      },
      oilKm: {
        type: DataTypes.NUMBER,
        allowNull: false,
      },
      serviceKm: {
        type: DataTypes.NUMBER,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};