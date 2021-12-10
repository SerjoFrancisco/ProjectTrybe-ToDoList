const button = document.getElementById('criar-tarefa');
const form = document.getElementById('texto-tarefa');
const list = document.getElementById('lista-tarefas');
const task = document.getElementsByTagName('li');
function selectTask(event) {
//   if (event.target.classList.contains('selected')) {
//     event.target.classList.toggle('selected');
//   } else {
  for (let i = 0; i < task.length; i += 1) {
    task[i].classList.remove('selected');
  }
  event.target.classList.add('selected');
}
// }

function doneTask(event) {
  event.target.classList.toggle('completed');
}
function listenAllTask() {
  for (let i = 0; i < task.length; i += 1) {
    task[i].addEventListener('click', selectTask);
    task[i].addEventListener('dblclick', doneTask);
  }
}
function getTask() {
  const newTask = document.createElement('li');
  newTask.className = 'tarefa';
  list.appendChild(newTask);
  newTask.innerText = form.value;
  form.value = '';
  listenAllTask();
}
button.addEventListener('click', getTask);
