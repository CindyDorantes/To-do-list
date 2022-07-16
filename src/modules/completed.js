export default function () {
  const tasksCompleted = document.querySelectorAll('.checked');
  const arrCompleted = [...tasksCompleted];
  for (let i = 0; i < arrCompleted.length; i += 1) {
    arrCompleted[i].parentElement.remove();
    arrCompleted[i].nextElementSibling.remove();
  }
}
