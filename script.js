document.addEventListener("DOMContentLoaded", function() {


    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    function addTask(){
        taskText = taskInput.value.trim();
        console.log(taskText);
        if(taskText != ""){
            const liElement = document.createElement("li");
            liElement.textContent = taskText;
            const btnElement = document.createElement("button");
            btnElement.textContent = "Remove";
            btnElement.className = "remove-btn";
            btnElement.onclick = function(){
                btnElement.parentElement.remove();
            }
            liElement.appendChild(btnElement);
            taskList.appendChild(liElement);
            taskInput.value="";
        }

        else {
        alert("Task Should not be empty");
        }

    }

     addButton.addEventListener("click", addTask);
     addButton.addEventListener("keypress", addTask);

})