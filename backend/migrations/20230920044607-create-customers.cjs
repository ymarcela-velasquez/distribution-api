const { Sequelize } = require('sequelize')

const tableName = 'customers'
const attributes = {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    allowNull: false,
    defaultValue: Sequelize.UUIDV4,
    field: 'id',
  },
  identification: {
    allowNull: false,
    type: Sequelize.STRING,
    field: 'identification',
  },
  name: {
    allowNull: false,
    type: Sequelize.STRING,
    field: 'name',
  },
  address: {
    allowNull: true,
    type: Sequelize.STRING,
    field: 'address',
  },
  phone: {
    allowNull: true,
    type: Sequelize.STRING,
    field: 'phone',
  },
  email: {
    allowNull: true,
    type: Sequelize.STRING,
    field: 'email',
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
