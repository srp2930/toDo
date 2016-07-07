(function(exports) {
  var Task = function(task) {
    this.task = task;
    this._isComplete = false;
  };

  Task.prototype = {
    isComplete: function() {
      if (this._isComplete===true) {
        return 'completed'
      } else {
        return 'not completed'
      }
    },

    finished: function() {
      this._isComplete = true;
    },
  };

  exports.Task = Task;
})(this);
