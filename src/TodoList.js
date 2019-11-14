import React, { Component } from 'react';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';
import './TodoList.css';
import uuid from 'uuid';

class TodoList extends Component {
  state = {
    todos: []
  };

  addTask = item => {
    let newItem = { ...item, id: uuid(), completed: false };
    this.setState({ todos: [...this.state.todos, newItem] });
  };

  removeTask = id => {
    this.setState({ todos: this.state.todos.filter(item => item.id !== id) });
  };

  editTask = (id, newText) => {
    const newTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.content = newText;
        return todo;
      } else return todo;
    });
    this.setState({ todos: newTodos });
  };

  completeTask = id => {
    const newItems = this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      } else return todo;
    });
    this.setState({ todos: newItems });
  };

  render() {
    let todos = this.state.todos.map(todo => (
      <TodoItem
        key={todo.id}
        id={todo.id}
        text={todo.content}
        remove={this.removeTask}
        edit={this.editTask}
        complete={this.completeTask}
        completed={todo.completed}
      />
    ));

    return (
      <div className='TodoList'>
        <h1>To-Do List</h1>
        <h2>a simple React app </h2>
        <TodoForm addTask={this.addTask} />
        <ul>{todos}</ul>
      </div>
    );
  }
}

export default TodoList;
