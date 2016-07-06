(function(exports) {
  var List = function(Task) {
    this.Task = Task;
    this.tasks = [];
    this.mustacheList = {tasks: this.tasks }
    this.html = [];
  };

  List.prototype = {
  	addToDo: function(chore) {
      console.log(chore);
      var task = new this.Task(chore);

      this.tasks.push(task);
  	},

    printHTML: function() {
      console.log(this.tasks);
      for(var i = 0; i < this.tasks.length; i++) {
        this.html.push("<li>"+this.tasks[i].task+"</li>");
      }
      console.log('++++++++++');
      // console.log(this.html);
      console.log('=========');
      return this.html.join('')
    },
  };
  exports.List = List;
})(this);
