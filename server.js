const express = require('express');
const mongoose = require('mongoose');
const dbFunctions = require('./data/data');


process.env.MONGO_URI = "mongodb://localhost/task-manager" ;
mongoose.connect(process.env.MONGO_URI )
.then(()=>console.log("database connected successfully"))
.catch((err)=>console.log(err));

const app = express();

app.use(express.static(__dirname + "/views")) ;
app.use(express.json());


app.listen( 3000 ,  console.log("app listening on port 3000"));

app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/views/index.html");
})

app.get("/todos" , async (req,res)=>{

    const tasks = await dbFunctions.Task.find() ;
    res.json(tasks);

})

app.post("/add", async (req , res)=>{

    let task = await dbFunctions.createAndSaveTask( req.body.task );
    res.json(task);
    console.log(task) ;

} )

app.delete("/delete/:id" , async  (req,res)=>{

    const result = await dbFunctions.deleteTask(req.params.id);
    res.json(result);
})


