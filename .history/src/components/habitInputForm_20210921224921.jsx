import React, { Component } from 'react';

class HabitInputForm extends Component {
  render() {
    return (
      <form className='add-form' action=''>
        <input type='text' className='form-input' id='' placeholder='Habit' />
        <button className='button-input'>Add</button>
      </form>
    );
  }
}

export default HabitInputForm;
