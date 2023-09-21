const { Sequelize } = require('sequelize')

const tableName = 'orders'
const attributes = {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    allowNull: false,
    defaultValue: Sequelize.UUIDV4,
    field: 'id',
  },
  customerId: {
    allowNull: false,
    type: Sequelize.UUID,
    field: 'customer_id',
    references: {
      model: {
        tableName: 'customers',
      },
      key: 'id',
    },
  },
  productId: {
    allowNull: false,
    type: Sequelize.UUID,
    field: 'product_id',
    references: {
      model: {
        tableName: 'products',
      },
      key: 'id',
    },
  },
  quantity: {
    allowNull: false,
    type: Sequelize.INTEGER,
    field: 'quantity',
  },      
  resquestDate: {
    allowNull: false,
    type: Sequelize.DATE,
    field: 'resquest_date',
  },
  deliveryDate: {
    allowNull: true,
    type: Sequelize.DATE,
    field: 'delivery_date',
  },
  address: {
    allowNull: true,
    type: Sequelize.STRING,
    field: 'address',
  },
  postalCode: {
    allowNull: true,
    type: Sequelize.STRING,
    field: 'postal_code',
  }, 
  status: {
    allowNull: false,
    type: Sequelize.ENUM,
    values: ['RECEIVED', 'SENT', 'DELIVERED', 'CANCELED'],
    defaultValue: 'RECEIVED',
    field: 'status',
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
