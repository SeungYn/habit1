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
        h.count += 1;
      }
      return h;
    });
    this.setState({ habits });
  };

  handleDecrement = (habit) => {
    const habits = this.state.habits.map((h) => {
      if (habit === h) {
        h.count -= 1;
        h.count = h.count < 0 ? 0 : h.count;
      }
    });
    this.setState({ habits });
  };

  handleDelete = (habit) => {
    const habits = habits.filter((h) => h !== habit);
    this.setState({ habits });
  };

  render() {
    return (
      <ul>
        {this.state.habits.map((habit) => (
          <Habit
            Key={habit.id}
            habit={habit}
            handleIncrement={this.handleIncrement}
            handleDecrement={this.handleDecrement}
          />
        ))}
      </ul>
    );
  }
}

export default Habits;
