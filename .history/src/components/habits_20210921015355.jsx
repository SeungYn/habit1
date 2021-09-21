import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
  render() {
    return (
      <ul>
        {this.props.habits.map((habit) => (
          <Habit
            Key={habit.id}
            habit={habit}
            handleIncrement={this.props.onIncrement}
            handleDecrement={this.props.onDecrement}
            handleDelete={this.props.onDelete}
          />
        ))}
      </ul>
    );
  }
}

export default Habits;
