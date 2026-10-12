const taskInput = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");
const totalDisplay = document.getElementById("total");

function updateTotal() {
    totalDisplay.textContent = taskList.children.length;
}

function addTask() {
    const text = taskInput.value.trim();
    if (text === "") {


        return;
    }

    const li = document.createElement("li");

    const span = document.createElement("span"); 


    span.textContent = text;

    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    completeBtn.addEventListener("click", function () {
        li.classList.toggle("completed");
        if (li.classList.contains("completed")) {
            completeBtn.textContent = "Undo";
        } else {
            completeBtn.textContent = "Complete";
        }
    });

    deleteBtn.addEventListener("click", function () {
        li.remove();
        updateTotal();
    });

    li.appendChild(span);
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = "";
   
    updateTotal();
}

addBtn.addEventListener("click", addTask);



taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});

updateTotal();