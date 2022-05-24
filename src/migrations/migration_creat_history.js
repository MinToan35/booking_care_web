'use strict';
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('History', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      patientId: {
        type: DataTypes.INTEGER
      },
      doctorId: {
        type: DataTypes.INTEGER
      },
      description: {
        type: DataTypes.TEXT
      },
      files: {
        type: DataTypes.TEXT
      },
    });
  },
  down: async (queryInterface, DataTypes) => {
    await queryInterface.dropTable('History');
  }
};