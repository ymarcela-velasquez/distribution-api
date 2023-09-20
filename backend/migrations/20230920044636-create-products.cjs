const { Sequelize } = require('sequelize')

const tableName = 'products'
const attributes = {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    allowNull: false,
    defaultValue: Sequelize.UUIDV4,
    field: 'id',
  },
  name: {
    allowNull: false,
    type: Sequelize.STRING,
    field: 'name',
  },
  description: {
    allowNull: false,
    type: Sequelize.STRING,
    field: 'description',
  },
  quantity: {
    allowNull: false,
    type: Sequelize.INTEGER,
    field: 'quantity',
  },
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE,
    field: 'created_at',
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE,
    field: 'updated_at',
  },
  deletedAt: {
    allowNull: true,
    type: Sequelize.DATE,
    field: 'deleted_at',
  },
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(tableName, attributes)
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable(tableName)
  },
}
