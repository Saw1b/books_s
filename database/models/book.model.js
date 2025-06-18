

const bookModel = (sequelize, DataTypes) => {
  const Book = sequelize.define("book", {
    bookName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    bookPrice: {
      type: DataTypes.DECIMAL(10, 2), // Better for currency
      allowNull: false,
    },
    bookAuthor: {
      type: DataTypes.STRING,
    },
    bookYear: {
      type: DataTypes.INTEGER,
    },
  }, {
    freezeTableName: true, // Optional: prevents pluralization
    timestamps: false,     // Optional: disables createdAt/updatedAt
  });

  console.log("Book model is created");
  return Book;
};

module.exports = bookModel;
