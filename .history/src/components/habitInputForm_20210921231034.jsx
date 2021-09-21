import React, { Component } from 'react';

class HabitInputForm extends Component {
  inputRef = React.useRef();

  onSubmit = (event) => {
    event.preventDefault();
    console.log('Submit!!');
  };

  render() {
    return (
      <form className='add-form' onSubmit={this.onSubmit}>
        <input type='text' className='form-input' id='' placeholder='Habit' />
        <button className='button-input'>Add</button>
      </form>
    );
  }
}

export default HabitInputForm;
