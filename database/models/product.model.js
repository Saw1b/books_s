

const ProductModel = (sequelize, DataTypes) =>{
    const Product = sequelize.define("product", {
        productName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        productPrice: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        productDescription: {
            type: DataTypes.STRING
        },
        productCategory: {
            type: DataTypes.STRING
        },
    });
    return Product;
}

module.exports = ProductModel;
