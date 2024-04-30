const Products = (sequelize, DataTypes) => {
  const productSchema = {
    attributes: {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
        field: 'id',
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'name',
      },
      description: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'description',
      },
      quantity: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'quantity',
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
      tableName: 'products',
      paranoid: true,
      timestamps: true,
    },
  }

  const Product = sequelize.define('Product', productSchema.attributes, productSchema.options)

  return Product
}

export default Products
