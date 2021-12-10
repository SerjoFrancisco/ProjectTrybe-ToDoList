const button = document.getElementById('criar-tarefa');
const form = document.getElementById('texto-tarefa');
const list = document.getElementById('lista-tarefas');
const task = document.getElementsByTagName('li');
function selectTask(event) {
  for (let i = 0; i < task.length; i += 1) {
    task[i].classList.remove('selected');
  }
  event.target.classList.toggle('selected');
}

function listenAllTask() {
  for (let i = 0; i < task.length; i += 1) {
    task[i].addEventListener('click', selectTask);
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
