import Task from './modules/class-task.js';
import checkItem from './modules/completed.js';

import './style.css';

const btnAdd = document.getElementById('btn-add');
const btnClearAll = document.querySelector('.clear-btn');
let taskList = [];

// Event for adding a new task, whenever the button add is cliked
btnAdd.addEventListener('click', () => {
  const inputTask = document.querySelector('.input-task').value;
  const newTask = new Task(inputTask);

  newTask.addTask(taskList);
  newTask.displayTask(taskList);

  localStorage.setItem('taskList', JSON.stringify(taskList));
});

// Event for delete all the tasks that are checked
btnClearAll.addEventListener('click', () => {
  taskList = taskList.filter((x) => (x.completed !== true));
  checkItem();
  for (let i = 0; i < taskList.length; i += 1) {
    taskList[i].index = i + 1;
  }
  localStorage.setItem('taskList', JSON.stringify(taskList));
});
