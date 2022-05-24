'use strict';
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('Doctor_clinic_specialty', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      doctotId: {
        type: DataTypes.INTEGER
      },
      clinicId: {
        type: DataTypes.INTEGER
      },
      specialtyId: {
        type: DataTypes.INTEGER
      },
    });
  },
  down: async (queryInterface, DataTypes) => {
    await queryInterface.dropTable('Doctor_clinic_specialty');
  }
};