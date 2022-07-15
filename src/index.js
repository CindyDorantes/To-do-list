import Task from './modules/class-task.js';
import './style.css';

const btnAdd = document.getElementById('btn-add');
const taskList = [];

btnAdd.addEventListener('click', () => {
  const inputTask = document.querySelector('.input-task').value;
  const newTask = new Task(inputTask);

  newTask.addTask(taskList);
  newTask.displayTask(taskList);

  localStorage.setItem('taskList', JSON.stringify(taskList));
});
