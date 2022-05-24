'use strict';
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('Booking', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      statusId: {
        type: DataTypes.STRING
      },
      doctorId: {
        type: DataTypes.STRING
      },
      patientId: {
        type: DataTypes.STRING
      },
      date: {
        type: DataTypes.DATE
      },
      timeType: {
        type: DataTypes.STRING
      },
    });
  },
  down: async (queryInterface, DataTypes) => {
    await queryInterface.dropTable('Booking');
  }
};