'use strict';
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('Schedule', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      currentNumber: {
        type: DataTypes.INTEGER
      },
      maxNumber: {
        type: DataTypes.INTEGER
      },
      date: {
        type: DataTypes.DATE
      },
      timeType: {
        type: DataTypes.STRING
      },
      doctorId: {
        type: DataTypes.INTEGER
      },
    });
  },
  down: async (queryInterface, DataTypes) => {
    await queryInterface.dropTable('Schedule');
  }
};