const express = require("express")
const bodyparser = require("body-parser")
const taskroutes= require('./routes/todoroutes')
const port = 3005;
const app = express();

app.use(bodyparser.json())
require("./utils/db")

app.get("/" ,(req,res)=>{
    res.send("hello")
})

app.get("/api", (req,res)=>{
    res.send("you will get the tasks information.")
})
app.use("/api",taskroutes);

app.listen(port, ()=>{
    console.log(`server is listening to the port ${port}.`)
})