var React = require('react')

var Todo = React.createClass({
  render: function() {
    return (
      <li>
      	<input type='checkbox'/>
      	<span>{this.props.task}</span>
      </li>
    )
  }
})

module.exports = Todo