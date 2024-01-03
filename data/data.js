const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    toDo : String ,
    dueIn : Number 
});

const Task = new mongoose.model('Task', taskSchema );

function createAndSaveTask( enteredTask , timeDue= -1 ){
    const task = new Task({
        toDo : enteredTask ,
        dueIn : timeDue
    })
    task.save()
    .then(((doc)=>console.log(doc)))
    .catch((err)=>console.log(err));
    return task ;
}

function deleteTask(taskId ){
    Task.findByIdAndDelete(taskId);

}






module.exports = {createAndSaveTask , deleteTask , Task }