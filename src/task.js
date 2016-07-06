(function(exports) {
  var Task = function(task) {
    this.task = task;
    this.isComplete = false;
  };

  Task.prototype = {
    finished: function() {
      this.isComplete = true;
    },
  };

  exports.Task = Task;
})(this);
