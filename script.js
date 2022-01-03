const button = document.getElementById('criar-tarefa');
const form = document.getElementById('texto-tarefa');
const list = document.getElementById('lista-tarefas');
const task = document.getElementsByTagName('li');
const cleaner = document.getElementById('apaga-tudo');
const cleanF = document.getElementById('remover-finalizados');
const saver = document.getElementById('salvar-tarefas');
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
function cleanList() {
  list.innerHTML = 'To-do List';
}
function cleanComplete() {
  for (let i = 0; i < task.length; i += 1) {
    if (task[i].classList.contains('completed')) {
      task[i].remove();
    }
  }
}
function saveList (){
  let saved = list.innerHTML;
  localStorage.setItem('lista', saved);
}
function showSaved(){
  let myList = localStorage.getItem('lista');
  list.innerHTML = myList;
}
showSaved();
saver.addEventListener('click', saveList);
cleanF.addEventListener('click', cleanComplete);
button.addEventListener('click', getTask);
cleaner.addEventListener('click', cleanList);
