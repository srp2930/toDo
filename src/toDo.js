var ToDo = function(task) {
  this.task = task;
  this.isComplete = false;
};

ToDo.prototype = {
  finished: function() {
    this.isComplete = true;
  },
};


module.exports = ToDo
