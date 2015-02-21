const assign = require('object-assign');
const eventEmitter = require('events').EventEmitter;
const util = require('util');

const CHANGE_EVENT = 'change';
const LOADING_EVENT = 'loading';
const ERROR_EVENT = 'failed';

util.inherits(TodosStore, eventEmitter);

function TodosStore(initialData) {
  if (!(this instanceof TodosStore))
    return new TodosStore(initialData);

  this.todos = assign([], initialData);

  this.eventListeners = [];

  this.getData = function() {
    return assign([], this.todos);
  };

  this.removeTodoItem = function(id) {
    var todo = this.todos.slice().filter(function(todo) {
      return todo.id === id;
    })[0];

    if (!todo) return;

    this.todos.splice(this.todos.indexOf(todo), 1);
    this.emit(CHANGE_EVENT);
  };

  this.addTodoItem = function(todo) {
    this.emit(LOADING_EVENT);

    setTimeout(function() {
      this.todos.push(todo);
      this.emit(CHANGE_EVENT);
    }.bind(this), 2000);
  };

  this.on('add', this.addTodoItem);
  this.on('remove', this.removeTodoItem);
};

module.exports = TodosStore;
