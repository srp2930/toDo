var list = document.getElementById('classlist');
var tasklist = new List(Task);
var submitform = document.getElementById('taskform')
submitform.addEventListener('submit', function(event) {
  event.preventDefault();
  tasklist.addToDo(document.getElementById('task-text').value);
  list.innerHTML = tasklist.printHTML();
  document.getElementById('task-text').value = "";
});

list.addEventListener('click', function(event) {
  tasklist.tasks[event.srcElement.id.slice(-1)].finished()
  list.innerHTML = tasklist.printHTML();
})
