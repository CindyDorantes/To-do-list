import './style.css';
import Task from './modules/class-task.js';

const toDoContainer = document.getElementById('to-do-list');
// para agregar un elemento, debemos empezar por agregarle acción al boton de agregar
const btnAdd = document.getElementById('btn-add');
//aqui vamos a ir almacenando las tareas
const taskList = [];

btnAdd.addEventListener('click', () => {
  const inputTask = document.querySelector('.input-task').value;
  const newTask = new Task(inputTask);
  newTask.addTask(taskList);
  newTask.displayTask(taskList);
})


const tasks = [
  {
    description: 'wash the dishes',
    completed: false,
    index: 0,
  },
  {
    description: 'do the laundry',
    completed: false,
    index: 1,
  },
  {
    description: 'buy some groceries',
    completed: false,
    index: 2,
  },
];

for (let i = 0; i < tasks.length; i += 1) {
  const taskItem = document.createElement('li');
  taskItem.classList.add('task-item');
  toDoContainer.appendChild(taskItem);

  const taskCheck = document.createElement('input');
  taskCheck.setAttribute('type', 'checkbox');
  taskItem.appendChild(taskCheck);

  const taskDescription = document.createElement('label');
  taskDescription.innerHTML = tasks[i].description;
  taskItem.appendChild(taskDescription);

  const taskMove = document.createElement('button');
  taskMove.classList.add('move-btn');
  taskMove.innerHTML = '<i class="fa-solid fa-ellipsis-vertical"></i>';
  taskItem.appendChild(taskMove);

  const lineHr = document.createElement('hr');
  toDoContainer.appendChild(lineHr);
}