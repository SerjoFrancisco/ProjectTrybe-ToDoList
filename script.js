const button = document.getElementById('criar-tarefa');
const form = document.getElementById('texto-tarefa');
const list = document.getElementById('lista-tarefas');
function getTask(){
    console.log(form.value);
    let newTask = document.createElement("li");
    list.appendChild(newTask);
    newTask.innerText = form.value;

}
button.addEventListener('click', getTask);