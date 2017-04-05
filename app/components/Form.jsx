var React = require('react')

var Form = React.createClass({
	onFormSubmit: function(e) {
		e.preventDefault()
		this.props.onNewTodo(this.refs.newTodo.value)
	},
  render: function() {
    return (
      <div>
        <h1>Add a task</h1>
        <form onSubmit={this.onFormSubmit}>
        	<input type='text' ref='newTodo'/>
        	<input type='submit'/>
        </form>
      </div>
    )
  }
})

module.exports = Form