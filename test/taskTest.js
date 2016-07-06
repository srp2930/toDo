var assert = require('chai').assert;
var expect = require('chai').expect;

var Task = require('../src/task').Task;


describe('Task', function() {

	var task;

	beforeEach(function() {
		task = new Task('Eat breakfast');
	});


	it('can create a to do', function() {
		expect(task).to.be.an.instanceof(Task);
	});

  it('can store and retrieve a task string', function() {
    assert.typeOf(task.task, 'string', 'task should be a string');
  });

  it('can store and retrieve a task', function() {
    assert.equal(task.task, 'Eat breakfast');
  });

  it('has initial status of incomplete', function() {
    assert.equal(task.isComplete, false);
  });

  it('once done, has status of complete', function() {
    task.finished();
    assert.equal(task.isComplete, true);
  });

});
