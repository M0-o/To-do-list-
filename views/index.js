
const taskContainer = document.querySelector("#taskContainer");
const taskInput = document.querySelector("#task");

async function fill(){
    const newData = await getNewData() ;
    if(newData) insertCards(newData);
    return newData ;
}

function cardConstructor(task  ){

    let htmlElement = `
    <div id="${task._id}" class="task-card" > 
        <span>${task.toDo} </span>
        <button onclick="deleteTask('${task._id}')" class="task-btn">X</button>
    </div>`
    return htmlElement ;
}


 function getNewData(){
   const newData = fetch("/todos" , {
        method: "GET"
    }).then(data => data.json());

    return newData ;
}

function insertCards(data){

    data = data.map(task => cardConstructor(task));
    taskContainer.innerHTML='';

    for(let i of data )
        taskContainer.innerHTML+= i ;


}


async function deleteTask(id){

    await fetch(`/delete/${id}` , {
        method :"DELETE" 
    });

    location.reload();

}

async function addTask(){

    if(!taskInput.value ){
        alert("you didnt enter a task");
        return ;
    }

     await fetch("/add" , {
        method: "POST" ,
        headers: {
            "Content-type":"application/json"
        },
        body: JSON.stringify({
            task : taskInput.value 
        })
    });
    
}
 
const dataList = fill();
