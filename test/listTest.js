var assert = require('chai').assert;
var expect = require('chai').expect;
var sinon = require('sinon');

var List = require('../src/list').List;
var Task = require('../src/task').Task;

describe('List', function() {

  var list;

  beforeEach(function() {
    list = new List(Task);
  });

  it('can create a new to do list', function() {
    expect(list).to.be.an.instanceof(List);
  });

  it('can store a new task in a to do object', function() {
  	list.addToDo('Eat breakfast');
  	expect(list.tasks[0]).to.contain({task: 'Eat breakfast'});
  });

  it('prints out tasks in html format', function() {
    list.addToDo('Buy chocolate');
    list.addToDo('Eat the chocolate');
    expect(list.printHTML()).to.eql("<li id='task_0'>Buy chocolate - not completed<button id='done_0'> Done</button></li><li id='task_1'>Eat the chocolate - not completed<button id='done_1'> Done</button></li>");
  });

});
