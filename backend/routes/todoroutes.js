const express=require('express');
const router=express.Router();
const taskControllers= require('../controllers/taskControllers')

router.get("/tasks", taskControllers.getallTasks);

module.exports = router;