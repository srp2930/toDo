var http = require('http-server')
var Browser = require('zombie');
var assert = require('assert');
var server = http.createServer();

describe('homepage', function() {
  beforeEach(function(done){
    server.listen(3000);
    browser = new Browser({site: 'http://localhost:3000'})
    browser.visit('/', done);
  });

  afterEach(function() {
    server.close();
  });



  it('should show the title', function() {
    browser.assert.text('title', 'My task list');
  });

  it('should have a form on the page', function() {
    browser.assert.element('form')
  })

  it('should add a task to the page', function() {
    browser.fill('task', 'Eat midget gems');
    browser.pressButton('Add to list');
    browser.assert.text('#classlist', 'Eat midget gems - not completed Done');
  })

  it('should show when tasks have been completed', function() {
    browser.fill('task', 'Eat chocolate raisins');
    browser.pressButton('Add to list');
    browser.assert.text('#classlist', 'Eat chocolate raisins - not completed Done');
  })

  it('should show a button to press when task has been completed', function() {
    browser.fill('task', 'Wash clothes');
    browser.pressButton('Add to list');
    browser.assert.text('#classlist', 'Wash clothes - not completed Done');
  })

  it('should show task is completed when the button Done has been pressed', function() {
    browser.fill('task', 'Make food');
    browser.pressButton('Add to list');
    return browser.pressButton('Done');
    browser.assert.text('#classlist', 'Make food - completed Done');
  });

});
