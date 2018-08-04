var toDoApp = toDoApp || {};
(function(app){

    let tasks = [];
    let addTask = function addTaskHandler(){
        let task = document.getElementById('task').value   ;
        tasks.push(task);
        console.log(tasks);
        displayTasks(task); 
    }
    let displayTasks = function(element){
        // tasks.forEach(element => {
            let taskNode = document.createElement('div');
            let taskTextNode = document.createTextNode(element);
            taskNode.appendChild(taskTextNode);

            document.getElementById('tasks').appendChild(taskNode);
        // });
    }

    app.taskManager = {
        tasks: tasks,
        addTask: addTask,
        displayTasks:displayTasks
    }
    


})(toDoApp); 