const express = require('express');

const app = express();

app.use(express.static(__dirname + "/views")) ;



app.listen( 3000 , 
     console.log("app listening on port 3000")

);

app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/views/index.html");
})

app.post("/add", (req , res)=>{
    
} )

