// Selectors
const todoInput = document.querySelector('.user-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo')

//Event Listeners
document.addEventListener('DOMContentLoaded', getTodos);
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);

//Functions
function addTodo(e) {
    e.preventDefault();
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
    saveLocalTodos(todoInput.value);
    todoInput.value = '';
}

function deleteCheck(e) {
    const item = e.target;
    // DELETING ITEM
    if(item.classList[0] === 'trash-btn'){
        const todo = item.parentElement;
        todo.classList.add('fall');
        removeLocalTodos(todo);
        todo.addEventListener('transitionend', function (){
            todo.remove()

        })
    }

    //CheckMark
    if(item.classList[0] === 'complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}

function filterTodo(e){
    const todos = todoList.childNodes;
    todos.forEach(function (todo){
        switch (e.target.value){
            case 'all':
                todo.style.display = "flex";
                break;
            case 'Checked':
                if(todo.classList.contains('completed')){
                    todo.style.display= 'flex';
                }
                else {
                    todo.style.display = 'none';
                }
                break
            case 'Unchecked':
                if(!todo.classList.contains('completed')){
                    todo.style.display= 'flex';
                }
                else {
                    todo.style.display = 'none';
                }
                break;
        }
    })
}

function saveLocalTodos(todo){
    // Checking for todos in localstorage:
    let todos;
    if(localStorage.getItem("todos") === null){
    todos = [];
    } else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos(){
    let todos;
    if(localStorage.getItem("todos") === null){
        todos = [];
    } else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.forEach(function (todo){
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");
        //Create Li
        const newTodo = document.createElement('li');
        newTodo.innerText = todo;
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

    })
}

function removeLocalTodos(todo){
    let todos;
    if(localStorage.getItem("todos") === null){
        todos = [];
    } else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem("todos", JSON.stringify(todos));
}

