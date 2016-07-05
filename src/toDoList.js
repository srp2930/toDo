var ToDo = require('../src/toDo');

var ToDoList = function() {
  this.tasks = [];
};

ToDoList.prototype = {
	addToDo: function(task) {
    var toDo = new ToDo(task);
    this.tasks.push(toDo);

	}

};

module.exports = ToDoList;
