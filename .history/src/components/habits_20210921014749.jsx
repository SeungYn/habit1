import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
  render() {
    return (
      <ul>
        {this.state.habits.map((habit) => (
          <Habit
            Key={habit.id}
            habit={habit}
            handleIncrement={this.handleIncrement}
            handleDecrement={this.handleDecrement}
            handleDelete={this.handleDelete}
          />
        ))}
      </ul>
    );
  }
}

export default Habits;
