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
}



console.log(task);