import React, { Component } from 'react';

class HabitInputForm extends Component {
  render() {
    return (
      <div>
        <input type='text' className='form-input' id='' placeholder='Habit' />
        <button className='button-input'>Add</button>
      </div>
    );
  }
}

export default HabitInputForm;
