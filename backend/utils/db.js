const mongoose = require('mongoose');
mongoose.set('strictQuery',true)

mongoose.connect("mongodb://127.0.0.1:27017/tasks-apis");

const db = mongoose.connection;
db.on('error',(err) =>{
    console.log(err.messege);
})

db.once('open',() =>{
    console.log('Connected with DB');
});