const express=require('express');
const router=express.Router();
const userControllers= require('../controllers/usercontrollers')

router.get("/user", userControllers.verifyUser);
router.post("/user", userControllers.addUser);
router.delete("/user/:id", userControllers.deleteUser)
router.get("/user/:id", userControllers.verifybyID)

module.exports = router;