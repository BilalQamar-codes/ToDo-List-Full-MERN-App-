const express = require("express")
const bodyparser = require("body-parser")
const taskroutes= require('./routes/todoroutes')
const port = 3005;
const app = express();

app.use(bodyparser.json())

app.use(taskroutes);

app.get("/" ,(req,res)=>{
    res.send("hello")
})

app.listen(port, ()=>{
    console.log(`server is listening to the port ${port}.`)
})