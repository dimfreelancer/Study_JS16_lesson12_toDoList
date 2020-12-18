'use strict';
//'lesson12'

console.log('hello todo list');


const todoControl = document.querySelector('.todo-control');
const headerInput = document.querySelector('.header-input');
const todoList = document.querySelector('.todo-list');
const todoCompleted = document.querySelector('.todo-completed');

const todoData = [
    {
        value: 'Сварить кофе',
        completed: false
    },
    {
        value: 'Сварить чай',
        completed: true
    }
];

//пробуем отрендерить
const render = function() {

    console.log('todoList: ', todoList);

    let liTodoItem = document.createElement('li');
    liTodoItem.classList.add('todo-item');
    let textTodo = document.createElement('span');
    textTodo.classList.add('text-todo');
    textTodo.textContent = 'сварить какого нибудь кофею';

    let todoButtons = document.createElement('div');
    todoButtons.classList.add('todo-buttons');
    let buttonTodoRemove = document.createElement('button');
    buttonTodoRemove.classList.add('todo-remove');
    let buttonTodoComplete = document.createElement('button');
    buttonTodoComplete.classList.add('todo-complete');
    
    todoButtons.append(buttonTodoRemove, buttonTodoComplete);
    liTodoItem.append(textTodo, todoButtons);
    todoList.append(liTodoItem);
    console.log('render done');
};


// todoControl.addEventListener('submit', function(event) {
//     event.preventDefault();

//     let value = headerInput.value;

//     let newTodo = {
//         value: value,
//         completed: false
//     };

//     // todoData.push({value, completed}); //новый формат es6
//     todoData.push(newTodo);

//     console.log('todoData: ', todoData);

//     todoControl.reset();

//     render();
// });

/* 
todoControl.addEventListener('submit', function(event) {
    event.preventDefault();

    let value = headerInput.value;
    let completed = false;
    console.log('value: ', value);

    todoData.push({value, completed}); //новый формат es6
    console.log('todoData: ', todoData);

    todoControl.reset();

    render();
});
 */

/*
		<!-- <li class="todo-item">
			<span class="text-todo">Сварить кофе</span>
			<div class="todo-buttons">
				<button class="todo-remove"></button>
				<button class="todo-complete"></button>
			</div>
		</li> -->
 */

 /**
		<!-- <li class="todo-item">
			<span class="text-todo">Помыть посуду</span>
			<div class="todo-buttons">
				<button class="todo-remove"></button>
				<button class="todo-complete"></button>
			</div>
		</li> -->
  */



render();