
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const message = document.getElementById("message");

addBtn.addEventListener("click", function () {
  const task = taskInput.value.trim();

  if (task === "") {
    message.textContent = "Please enter a task";
    return;
  }

  const li = document.createElement("li");
  li.textContent = task;

  taskList.appendChild(li);
  taskInput.value = "";
  message.textContent = "Task added successfully";
});

  taskList.innerHTML = "";
