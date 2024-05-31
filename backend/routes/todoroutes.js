const express=require('express');
const router=express.Router();
const taskControllers= require('../controllers/taskControllers')

router.get("/tasks", taskControllers.getallTasks);
router.post("/tasks", taskControllers.addTask);
router.patch("/tasks/:id", taskControllers.updateTask);
router.delete("/tasks/:id", taskControllers.deleteTask)
module.exports = router;