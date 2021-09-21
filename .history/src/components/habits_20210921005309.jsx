import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Running', count: 0 },
      { id: 3, name: 'Coding', count: 0 },
    ],
  };

  handleIncrement = (habit) => {
    const habits = this.state.habits.map((h) => {
      if (habit === h) {
        console.log('true');
      }
      return h;
    });
  };

  handleDecrement = () => {};

  handleDelete = () => {};

  render() {
    return (
      <ul>
        {this.state.habits.map((habit) => (
          <Habit
            Key={habit.id}
            habit={habit}
            handleIncrement={this.handleIncrement}
          />
        ))}
      </ul>
    );
  }
}

export default Habits;
