
const toDoContainer = document.getElementById('to-do-list');

export default class {
  constructor(description, completed = false, index = 0) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }

  addTask(taskList) {
    taskList.push(this);
  }

  displayTask(taskList) {
    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item');
    toDoContainer.appendChild(taskItem);

    const taskCheck = document.createElement('input');
    taskCheck.setAttribute('type', 'checkbox');
    taskItem.appendChild(taskCheck);

    const taskDescription = document.createElement('input');
    taskDescription.setAttribute('type', 'text');
    taskDescription.setAttribute('value', this.description);
    taskDescription.classList.add('description');
    taskItem.appendChild(taskDescription);

    const taskMove = document.createElement('button');
    taskMove.classList.add('move-btn');
    taskMove.innerHTML = '<i class="fa-solid fa-ellipsis-vertical"></i>';
    taskItem.appendChild(taskMove);

    const taskDelete = document.createElement('button');
    taskDelete.classList.add('delete-btn', 'hide');
    taskDelete.innerHTML = '<i class="fa-regular fa-trash-can"></i>';
    taskItem.appendChild(taskDelete);

    const lineHr = document.createElement('hr');
    toDoContainer.appendChild(lineHr);

    taskDescription.addEventListener('click', () => {
      taskItem.classList.add('onfocus');
      taskDelete.classList.remove('hide');
      taskMove.classList.add('hide');
    })

    taskDelete.addEventListener('click', () => {
      taskItem.remove();
      lineHr.remove();
    })

    document.body.addEventListener('click', () => {
      taskItem.classList.remove('onfocus');
      taskDelete.classList.add('hide');
      taskMove.classList.remove('hide');
    }, true); 

  }
}
