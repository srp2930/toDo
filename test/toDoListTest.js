var assert = require('chai').assert;
var expect = require('chai').expect;

var ToDo = require('../src/toDoList')

describe('ToDoList', function() {

  var toDoList;

  beforeEach(function() {
    toDoList = new ToDoList();
  });

  it('can create a new to do list', function() {
    expect(toDoList).to.be.an.instanceof(ToDoList);
  });
});
