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
console.log('todoData: ', todoData);

const render = function() {
    console.log('render');
};


todoControl.addEventListener('submit', function(event) {
    event.preventDefault();

    let value = headerInput.value;
    let completed = false;
    console.log('value: ', value);

    todoData.push({value, completed});
    console.log('todoData: ', todoData);

    todoControl.reset();

    render();
});