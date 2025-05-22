const express = require("express")
const app = express()

require("./database/connection")


app.get("/",(req,res)=>{
    res.send("hello world")
})

app.get("/about",(req,res)=>{
    res.send("about")
    
})
app.get("/contact",(req,res)=>{
    res.send({
        name:"John Doe",
        email:"johndoe@gmail.com",
    }
    )

})

// postgresql://postgres.zvzzilcnpfibgvdqghww:aS1binop@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres

app.post("/we",(req,res)=>{
    res.send("contact")
})

app.listen(3000,function(){
    console.log("server is running")
})