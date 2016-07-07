var list = document.getElementById('classlist');
var tasklist = new List(Task);
// tasklist.addToDo('Breakfast')
console.log(tasklist.tasks);
var submitform = document.getElementById('taskform')
submitform.addEventListener('submit', function(event) {
  event.preventDefault();
  tasklist.addToDo(document.getElementById('task-text').value);
  list.innerHTML = tasklist.printHTML();
  document.getElementById('task-text').value = "";
});
