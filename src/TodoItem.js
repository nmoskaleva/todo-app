import React, { Component } from 'react';
import './TodoItem.css';
import TextareaAutosize from 'react-textarea-autosize';

class TodoItem extends Component {
  state = { text: this.props.text, isEditing: false };

  handleRemove = () => {
    this.props.remove(this.props.id);
  };

  toggleEdit = () => {
    this.setState({ isEditing: !this.state.isEditing });
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleEdit = e => {
    e.preventDefault();
    this.props.edit(this.props.id, this.state.text);
    this.setState({ isEditing: !this.state.isEditing });
  };

  handleComplete = () => {
    this.props.complete(this.props.id);
  };

  render() {
    return (
      <div className='Todo'>
        {this.state.isEditing ? (
          <form className='Todo-edit' onSubmit={this.handleEdit}>
            <TextareaAutosize
              type='text'
              name='text'
              value={this.state.text}
              onChange={this.handleChange}
            ></TextareaAutosize>
            <button type='submit'>
              <i className='fas fa-save'></i>
            </button>
          </form>
        ) : (
          <div>
            <li
              className={
                this.props.completed ? 'Todo-item Completed' : 'Todo-item'
              }
              onClick={this.handleEdit}
            >
              {this.props.text}
            </li>
          </div>
        )}
        <div className='Todo-buttons'>
          <button onClick={this.handleComplete}>
            <i className='fas fa-check' />
          </button>
          <button onClick={this.toggleEdit}>
            <i className='fas fa-pen' />
          </button>
          <button onClick={this.handleRemove}>
            <i className='fas fa-trash'></i>
          </button>
        </div>
      </div>
    );
  }
}

export default TodoItem;
