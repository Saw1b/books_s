const bookModel = (sequelize, DataTypes) => {
    sequelize.define("book",{
        bookName:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        bookPrice:{
            type:DataTypes.INTEGER,
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
    return bookModel
}

module.exports = bookModel
