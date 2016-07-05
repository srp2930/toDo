// require ToDo

var ToDoList = function(ToDo) {
  this.ToDo = ToDo();
};

ToDoList.prototype = {
	addToDo: function(task) {
    var todo = new this.ToDo(task);
	}

};

module.exports = ToDoList;
