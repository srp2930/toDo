var list = document.getElementById('classlist');
var tasklist = new List(Task);
var submitform = document.getElementById('taskform');

function loadDoc(url, callback) {var xhttp;
  xhttp=new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      callback(xhttp);
    };
  }
  xhttp.open("GET", url, true);
  xhttp.send();
}

loadDoc("http://quiet-beach-24792.herokuapp.com/todos.json", function(xhttp) {
  var response = JSON.parse(xhttp.response)
  response.forEach(function (task){
    tasklist.addToDo(task.text)
    list.innerHTML = tasklist.printHTML();
  })
})


submitform.addEventListener('submit', function(event) {
  event.preventDefault();
  tasklist.addToDo(document.getElementById('task-text').value);
  list.innerHTML = tasklist.printHTML();
  document.getElementById('task-text').value = "";
});

list.addEventListener('click', function(event) {
  tasklist.tasks[event.target.id.slice(-1)].finished();
  list.innerHTML = tasklist.printHTML();
});
