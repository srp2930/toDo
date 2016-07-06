(function(exports) {
  var List = function(Task) {
    this.Task = Task;
    this.tasks = [];
    this.mustacheList = {tasks: this.tasks }
  };

  List.prototype = {
  	addToDo: function(chore) {
      console.log(chore);
      var task = new this.Task(chore);

      this.tasks.push(task);
  	}
  };
  exports.List = List;
})(this);
