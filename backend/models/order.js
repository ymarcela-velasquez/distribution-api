const Orders = (sequelize, DataTypes) => {
  const orderSchema = {
    attributes: {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
        field: 'id',
      },
      customerId: {
        allowNull: false,
        type: DataTypes.UUID,
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
        type: DataTypes.UUID,
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
        type: DataTypes.INTEGER,
        field: 'quantity',
      },      
      resquestDate: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'resquest_date',
      },
      deliveryDate: {
        allowNull: true,
        type: DataTypes.DATE,
        field: 'delivery_date',
      },
      address: {
        allowNull: true,
        type: DataTypes.STRING,
        field: 'address',
      },
      postalCode: {
        allowNull: true,
        type: DataTypes.STRING,
        field: 'postal_code',
      }, 
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at',
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'updated_at',
      },
      deletedAt: {
        allowNull: true,
        type: DataTypes.DATE,
        field: 'deleted_at',
      },
    },
    options: {
      tableName: 'orders',
      paranoid: true,
      timestamps: true,
    },
  }

  const Order = sequelize.define('Order', orderSchema.attributes, orderSchema.options)

  Order.associate = (models) => {
    models.Order.belongsTo(models.Customer, { foreignKey: 'customerId', as: 'customer' })
    models.Order.belongsTo(models.Product, { foreignKey: 'orderId', as: 'product' })
  }

  return Order
}

export default Orders
