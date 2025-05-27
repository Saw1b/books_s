const bookModel = (sequelize, DataTypes) => {
    const Book = sequelize.define("book",{
        bookName:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        bookPrice:{
            type:DataTypes.FLOAT,
            allowNull: false,
        },
        bookAuthor:{
            type: DataTypes.STRING
        },
        bookYear:{
            type: DataTypes.INTEGER
        },

    })
    console.log("book model is created")
    return Book
}

module.exports = bookModel
