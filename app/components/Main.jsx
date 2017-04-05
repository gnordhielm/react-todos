var React = require('react'),
	Form = require('Form'),
	Todo = require('Todo')


var todos = [
	{
		"id": 1,
		"task": "Learn React",
		"done": false
	},
	{
		"id": 2,
		"task": "Kick rocks",
		"done": true
	},
	{
		"id": 3,
		"task": "Finish Bootsy lab",
		"done": true
	},
]

var Main = React.createClass({
	getInitialState: function(){
		return {
			todos: todos
		}
	},
	handleNewTodo: function(todo){
		var currentTodos = this.state.todos.slice()
		currentTodos.push({'task': todo, 'id': (currentTodos.length + 1), 'done':false})
		console.log(currentTodos)
		this.setState({
			todos: currentTodos
		})
	},
  render: function() {
    return (
      <div>
        <h1>Main component</h1>
        <Form onNewTodo={this.handleNewTodo}/>
        <ul>
	        {this.state.todos.map(function(todo){
	        	return (
	        		<Todo key={todo.id} task={todo.task} done={todo.done}/>
	        	)
	        })}
        </ul>
      </div>
    )
  }
})

module.exports = Main