const express = require("express")
const bodyparser = require("body-parser")
const taskroutes= require('./routes/todoroutes')
const userroutes= require('./routes/userroutes')
require("./utils/db")
const port = 3005;
const app = express();

app.use(bodyparser.json())

app.get("/" ,(req,res)=>{
    res.json("hello")
})

app.get("/api", (req,res)=>{
    res.send("you will get the tasks information.")
})
app.use("/api",taskroutes);
app.use("/api", userroutes);

app.listen(port, ()=>{
    console.log(`server is listening to the port ${port}.`)
})