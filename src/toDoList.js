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


var HTML = function() {

}

HTML.prototype = {
  listTask: function(task) {
    foreach Do
    return "<ul><li><div>"+this.tasks.task+"</ul></li></div>"
    end
  },
}
