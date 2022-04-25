// Selectors
const todoInput = document.querySelector('.user-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//Event Listeners
todoButton.addEventListener("click", addTodo);


//Functions
function addTodo(event) {
    event.preventDefault();
    //Create Div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //Create Li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    console.log(newTodo)
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //Check Mark
    const checkedButton = document.createElement('button');
    checkedButton.innerHTML = '<i class="fas fa-check"></i>';
    checkedButton.classList.add("complete-btn");
    todoDiv.appendChild(checkedButton);
    //TRASH button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn"); //checkem
    todoDiv.appendChild(trashButton);
    todoList.appendChild(todoDiv);
    // CLEAR TODO INPUT VALUE
    todoInput.value = '';
}