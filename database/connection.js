const {Sequelize,DataTypes} = require("sequelize");

// const sequelize = require("sequelize");
// const Sequelize = sequelize.Sequelize;
// const DataTypes = sequelize.DataTypes;  


// const sequelize = new Sequelize("postgresql://postgres.fqvdtxaretbfeksidnix:aS1binop10%23@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres")
const sequelize = new Sequelize("postgresql://postgres.zvzzilcnpfibgvdqghww:cOp31121@up@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres", {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false
    }
  }
});


sequelize.authenticate()
.then(()=>{
    console.log("connection is succesful")
})
.catch((err)=>{
    console.log("Error" + err)
})

const info ={
    name : "John Doe",
    age : 30
}

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

db.hello = require("./models/book.model.js")(sequelize, DataTypes);
db.user = require("./models/user.model.js")(sequelize, DataTypes);
db.products = require("./models/product.model.js")(sequelize, DataTypes);


sequelize.sync({alter: false}).then(()=>{
    console.log("table created")
})

module.exports = db
