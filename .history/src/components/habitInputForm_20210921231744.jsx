import React, { Component } from 'react';

class HabitInputForm extends Component {
  inputRef = React.createRef();

  onSubmit = (event) => {
    event.preventDefault();

    this.props.onAdd(this.inputRef.current.value);
  };

  render() {
    return (
      <form className='add-form' onSubmit={this.onSubmit}>
        <input
          ref={this.inputRef}
          type='text'
          className='form-input'
          id=''
          placeholder='Habit'
        />
        <button className='button-input'>Add</button>
      </form>
    );
  }
}

export default HabitInputForm;
