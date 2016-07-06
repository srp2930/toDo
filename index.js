var list = document.getElementById('classlist');
var tasklist = new List(Task);
// tasklist.addToDo('Breakfast')
console.log(tasklist.tasks);
var submitform = document.getElementById('taskform')
submitform.addEventListener('submit', function(event) {
  event.preventDefault();
  tasklist.tasks = [{task: 'bread', anything: 'milk'}];
  console.log('999999999');
  console.log(tasklist.tasks.pop().task);
  console.log('999999999');
  tasklist.addToDo(document.getElementById('task-text').value);
  list.innerHTML = tasklist.printHTML();
  document.getElementById('task-text').value = "";
});
console.log(tasklist.html);
console.log('=================');
console.log(tasklist.tasks);
console.log(tasklist.printHTML());
console.log('+++++++++++++++++');
