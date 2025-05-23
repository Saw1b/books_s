const userModel = (sequelize, Datatypes)=>{
    sequelize.define("user",{
        username:{
            type: Datatypes.STRING,
            allowNull: false,
        },
        password:{
            type: Datatypes.STRING,
            allowNull: false,
        },
        email:{
            type: Datatypes.STRING,
            allowNull: false,
        }
    })
    return userModel
}

module.exports = userModel