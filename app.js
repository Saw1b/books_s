const express = require("express")
// const { books } = require("./database/connection")
const { fetchBooks, addBook, deleteBook, editBook } = require("./controllers/bookController")
const bookRoute = require("./routes/bookRoute")

const app = express()

require("./database/connection")
app.use(express.json())
app.use("",bookRoute)

app.get("/books/:id",fetchBooks)

app.post("/books/:id",addBook)
    
app.delete("/books/:id",deleteBook)
app.patch("/books/:id",editBook)

// postgresql://postgres.zvzzilcnpfibgvdqghww:aS1binop@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres

// app.post("/we",(req,res)=>{
//     res.send("contact")
// })

app.listen(4000,function(){
    console.log("server is running")
})

//read test