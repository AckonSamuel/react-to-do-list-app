import React from "react";
import TodosList from "./TodosList";
import Header from "./Header";
import InputTodo from "./InputTodo";
import { v4 as uuidv4 } from "uuid";

const TodoContainer = () => {

  const [ task, updateTask ] = useState({
    todos: [],
  })

  const handleChange = (id) => {
    updateTask(prevState => ({
      todos: prevState.todos.map(todo => {
        if ( todo.id === id ) {
          return {
            ...todo,
            completed: !todo.completed,
          }
        }
        return todo;
      }),
    }))
  };

  const delTodo = id => {
    updateTask({
      todos: [
        ...task.todos.filter(todo => {
          return todo.id !== id;
        })
      ]
    });
  };

  const addTodoItem = title => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false
    }
  }

  return (
    <div className="container">
      <div className="inner">
      <Header />
      <InputTodo addTodoProps={addTodoItem} />
      <TodosList 
      todos = {task.todos} 
      handleChangeProps={handleChange}
      deleteTodoProps={delTodo} 
      setUpdate={setUpdate}
      />
    </div>
    </div>
   )
 }
}