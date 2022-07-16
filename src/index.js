import Task from './modules/class-task.js';
import deleteCompleted from './modules/completed.js';

import './style.css';

const btnAdd = document.getElementById('btn-add');
const btnClearAll = document.querySelector('.clear-btn');
let taskList = [];

// Event for adding a new task, whenever the button add is cliked
btnAdd.addEventListener('click', () => {
  const inputTask = document.querySelector('.input-task').value;
  const newTask = new Task(inputTask);

  if (localStorage.getItem('taskList')) {
    taskList = JSON.parse(localStorage.getItem('taskList'));
  }
  newTask.addTask(taskList);
  newTask.displayTask(taskList);
  document.querySelector('.input-task').value = '';
  localStorage.setItem('taskList', JSON.stringify(taskList));
});

// Event for delete all the tasks that are checked
btnClearAll.addEventListener('click', () => {
  taskList = JSON.parse(localStorage.getItem('taskList'));
  taskList = taskList.filter((x) => (x.completed !== true));
  deleteCompleted();
  for (let i = 0; i < taskList.length; i += 1) {
    taskList[i].index = i + 1;
  }
  localStorage.setItem('taskList', JSON.stringify(taskList));
});

// Restores information from localStorage when the page is refreshed
if (localStorage.getItem('taskList')) {
  taskList = JSON.parse(localStorage.getItem('taskList'));
  for (let i = 0; i < taskList.length; i += 1) {
    const newTask = new Task(taskList[i].description, taskList[i].completed, taskList[i].index);
    newTask.displayTask(taskList);
  }
}
