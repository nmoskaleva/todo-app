import React, { Component } from 'react';
import './TodoForm.css';

class ToDoForm extends Component {
  state = { content: '' };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.content.length > 0) {
      this.props.addTask(this.state);
      this.setState({ content: '' });
    }
  };

  render() {
    return (
      <form className='Todo-form' onSubmit={this.handleSubmit}>
        <input
          type='text'
          id='content'
          name='content'
          value={this.state.content}
          placeholder='Enter new task'
          onChange={this.handleChange}
        ></input>
        <button type='submit'>Add</button>
      </form>
    );
  }
}

export default ToDoForm;
