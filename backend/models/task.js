// models/task.js
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    completed: {
      type: Boolean,
      default: false
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, "please login before you add task!"]
    }
  },
  {
    timestamps: true // This option creates createdAt and updatedAt fields automatically
  }
);

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
