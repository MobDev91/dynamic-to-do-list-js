document.addEventListener("DOMContentLoaded", function() {
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");
    

    function loadTasks(){
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false));
    }

    function addTask(taskText, save = true) {
     

        const li = document.createElement("li");
        li.textContent = taskText;

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.classList.add("remove-btn");

        removeBtn.onclick = function(){
            removeFromLocalStorage(taskText)
            taskList.removeChild(li);
        }

        li.appendChild(removeBtn);
        taskList.appendChild(li);  
        if (save){
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
        }
        taskInput.value="";
    }

     addButton.addEventListener("click", function () {
        taskText = taskInput.value.trim();
        if(taskText === ""){
            alert("Task Should not be empty");
        }
        else {
            addTask(taskText);
        }

     });
     taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            taskText = taskInput.value.trim();
            if(taskText === ""){
                alert("Task Should not be empty");
            }
            else {
                addTask(taskText);
            }
        }
    });
    function removeFromLocalStorage(taskText){
        let storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks = storedTasks.filter(task => task != taskText);
        localStorage.setItem('tasks' , JSON.stringify(storedTasks));
    }
    loadTasks();
});