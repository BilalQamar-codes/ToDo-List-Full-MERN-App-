const mongoose=require('mongoose')

const taskSchema = mongoose.Schema({
  Task: String,
  Completed: Boolean
},{})