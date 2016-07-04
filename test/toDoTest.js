var assert = require('chai').assert;
var expect = require('chai').expect;

var ToDo = require('../src/ToDo')


describe('ToDo', function() {

	var toDo;

	beforeEach(function() {
		toDo = new ToDo();
	});


	it('can create a to do', function() {
		expect(toDo).to.be.an.instanceof(ToDo);
	});

});

