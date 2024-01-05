const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    toDo : String 
});

const Task = new mongoose.model('Task', taskSchema );

function createAndSaveTask( enteredTask ){
    const task = new Task({
        toDo : enteredTask 
    })
    task.save()
    .then(((doc)=>console.log(doc)))
    .catch((err)=>console.log(err));
    return task ;
}

async function deleteTask(taskId){

    let newContent = await Task.findByIdAndDelete(taskId);

    return newContent ;

}






module.exports = {createAndSaveTask , deleteTask , Task }