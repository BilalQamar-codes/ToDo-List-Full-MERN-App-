const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User= require('../models/user')
const Task = require('../models/task')

async function verifyUser(req, res) {
    try{
        const { username, password } = req.body;

        // Check if the user exists
        const user = await User.findOne({ username });
        if (!user) {
        return res.status(400).json({ message: 'User Does not Exists!' });
        }

        // Check if the password is correct
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
        return res.status(400).json({ message: 'Invalid username or password' });
        }

        // Generate JWT
        const token = jwt.sign({ id: user._id }, 'quantam', { expiresIn: '1h' });
        res.json({ token , user});
    } catch (err) {
      res.status(500).json({ message: 'Server error', error: err.message });
    }
}

async function verifybyID(req, res) {
    try {
        const {id} = req.params;
        console.log(id)
        const user = await User.findById(id);

        if (!user) {
            return res.status(400).json({ message: 'User Does not Exists!' });
        }

        res.status(200).json(user)
    } catch (error) {
        
    }
}

async function addUser(req, res) {
    try {
        const { username, password } = req.body;

        // Check if the user already exists
        const existingUser = await User.findOne({ username });
        if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create new user
        const newUser = new User({
        username,
        password: hashedPassword
        });

        await newUser.save();
        res.status(201).json({ message: 'User created successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
}

async function deleteUser(req, res) {
    try {
        const { id } = req.params;
        console.log(id);

        // Delete all tasks associated with the user
        const tasksDeletionResult = await Task.deleteMany({ user: id });
        
        // Delete the user
        const userDeletionResult = await User.findByIdAndDelete(id);

        // Check if the user was found and deleted
        if (!userDeletionResult) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({
            message: 'User and associated tasks deleted successfully',
            deletedTasksCount: tasksDeletionResult.deletedCount
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
}


module.exports= {verifyUser, addUser, deleteUser, verifybyID};