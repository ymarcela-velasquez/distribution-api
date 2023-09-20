const Customers = (sequelize, DataTypes) => {
  const customerSchema = {
    attributes: {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
        field: 'id',
      },
      identification: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'identification',
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'name',
      },
      address: {
        allowNull: true,
        type: DataTypes.STRING,
        field: 'address',
      },
      phone: {
        allowNull: true,
        type: DataTypes.STRING,
        field: 'phone',
      },
      email: {
        allowNull: true,
        type: DataTypes.STRING,
        field: 'email',
        validate: {
          isEmail: {
            msg: 'Invalid email',
          },
        },
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
      tableName: 'customers',
      paranoid: true,
      timestamps: true,
    },
  }

  const Customer = sequelize.define('Customer', customerSchema.attributes, customerSchema.options)

  Customer.associate = (models) => {
    models.Customer.hasMany(models.Order, { foreignKey: 'customerId', as: 'orders' })
  }

  return Customer
}

export default Customers
