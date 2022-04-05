const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");

const todoList = document.querySelector(".todo-list");

// Event Listener

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

// Functions

function addTodo(event) {
  event.preventDefault();

  // TODO DIV
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  // CREATE LI
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

  // COMPLETED BUTTON
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);

  // CHECK TRASH BUTTON
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);

  // APPEND CHILD
  todoList.appendChild(todoDiv);

  // CLEAR TODO INPUT VALUE
  todoInput.value = "";
}

function deleteCheck(e) {
  const item = e.target;
  // DELETE TODO
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    todo.remove();
  }

  // CHECK MARK
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}
