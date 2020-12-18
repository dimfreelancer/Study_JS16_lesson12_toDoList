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
    },
    {
        value: 'Сделать домашку сегодня',
        completed: false
    }
];

//пробуем отрендерить
const render = function() {
    //сразу же обнуляем списки листов
    todoList.textContent = '';
    todoCompleted.textContent = '';


    todoData.forEach(function(item) {
        console.log('item: ', item);


        //генерим элементы как в тудушке
        let liTodoItem = document.createElement('li');
        liTodoItem.classList.add('todo-item');
        let spanTextTodo = document.createElement('span');
        spanTextTodo.classList.add('text-todo');
        spanTextTodo.textContent = item.value;
        // spanTextTodo.textContent = 'сварить какого нибудь кофею';
    
        let todoButtons = document.createElement('div');
        todoButtons.classList.add('todo-buttons');
        
        let buttonTodoRemove = document.createElement('button');
        let buttonTodoComplete = document.createElement('button');
        buttonTodoRemove.classList.add('todo-remove');
        buttonTodoComplete.classList.add('todo-complete');
        
        todoButtons.append(buttonTodoRemove, buttonTodoComplete);
        liTodoItem.append(spanTextTodo, todoButtons);

        //сделаем селектор сделано или не сделано
        if (item.completed) {
            //true - нижний список выполненных дел
            todoCompleted.append(liTodoItem);
        } else {
            //false - верхний список еще невыполненных дел
            todoList.append(liTodoItem);
        }
        
        console.log('render done');
    });//forEach

};


//добавляем слушатель события submit
//submit реагирует на клик и на клавишу Enter
todoControl.addEventListener('submit', function(event) {
    event.preventDefault();

    //let value = headerInput.value;
    // let completed = false;  
    
    //проверка на пустой ввод поля
    if (headerInput.value.trim() === '') {

        //пустое поле или пробелы
        ((str) => {
            console.log(str);
            alert(str);
        })('Поле не может быть пустым!');

    } else {

        //новый обект
        let newTodo = {
            value: headerInput.value, //значение в поле input
            completed: false  //false значит событие еще невыполнено
        };
        todoData.push(newTodo);
        // todoData.push({value, completed}); //новый формат es6
    }

    todoControl.reset(); //обнуляем поля формы

    render(); //в конце события запускаем рендер списка
});




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