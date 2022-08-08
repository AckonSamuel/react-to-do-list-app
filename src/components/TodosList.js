import React from "react"

class TodosList extends  React.Component {
  render() {
    return (
     <ul>
       {this.props.todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
       ))}
     </ul>
    )
  }
}

export default TodosList