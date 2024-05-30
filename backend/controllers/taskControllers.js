const { json } = require("body-parser");

async function getallTasks(req, res) {
    try{
        res.status(200).json({"task": "there are not any tasks till now."})
    }
    catch{
        console.log("Something went wrong");
    }
}

module.exports = {getallTasks};