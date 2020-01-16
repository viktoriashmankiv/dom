const btnAdd = document.querySelector('.add');
btnAdd.addEventListener('click', addTodo);

function addTodo() {
    const todoText = document.querySelector('.todo').value;
    const item = document.createElement('li');
    item.innerText = todoText;
    const todoContainer = document.querySelector('todos');
    todoContainer.appendChild(item);
}