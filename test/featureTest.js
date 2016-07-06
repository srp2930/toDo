var app = require('http-server').createServer();
var Browser = require('zombie');
var assert = require('assert');

describe('homepage', function() {
  before(function(){
    this.server = app.listen(3000);
    this.browser = new Browser({site: 'http://localhost:3000'})
  })
  before(function(done) {
    this.browser.visit('/', done);
  });

  it('should show the title', function() {
    this.browser.assert.text('title', 'My task list');
  });

  it('should have a form on the page', function() {
    this.browser.assert.element('form')
  })

  it('should add a task to the page', function() {
    this.browser.fill('task', 'Eat midget gems');
    this.browser.pressButton('Add to list');
    this.browser.assert.text('#classlist', 'Eat midget gems');
  })
});
