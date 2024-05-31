const { json } = require("body-parser");
const Task= require('../models/task')

async function getallTasks(req, res) {
    try{
        const {user} = req.body;
        console.log(user);
        const tasks = await Task.find({user : user});
        res.status(200).json(tasks);
    }
    catch (err){
        console.log(err);
        res.status(500).json({"messege": err.message});
    }
}

async function addTask(req,  res) {
    try {
        const task = new Task(req.body);
        console.log(task);

        // saving the instance in the collection
        await task.save();
        res.status(200).json({"messege":"task has been added successfully!"})
        
    } catch (err) {
        res.status(500).json(err);
    }
}

async function updateTask(req, res) {
    try {
        const {id} = re.params;
        const { name, completed } = req.body;
        console.log(id, name, completed);

        // Await the update operation
        const updatedTask = await Task.findByIdAndUpdate(id, { name }, { new: true });

        if (!updatedTask) {
            return res.status(404).json({ message: 'Task not found' });
        }

        res.status(200).json(updatedTask); // Send the updated task object
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
}

async function deleteTask(req, res) {
    try {
        const {id} = req.params;
        console.log(id);
        const messege= await Task.findByIdAndDelete(id);
        res.status(200).json({"messege": messege});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}


module.exports = {getallTasks, addTask, updateTask, deleteTask};