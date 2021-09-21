import react from 'react';
import './app.css';
import Habits from './components/habits';

import React, { Component } from 'react';
import Header from './components/header';
import Reset from './components/reset';

class App extends Component {
  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Running', count: 0 },
      { id: 3, name: 'Coding', count: 0 },
    ],
  };
  countSum = () => {
    let sum = 0;
    this.state.habits.forEach((h) => {
      sum = h.count > 0 ? sum++ : sum;
    });
    return sum;
  };
  onIncrement = (habit) => {
    const habits = this.state.habits.map((h) => {
      if (habit === h) {
        h.count += 1;
      }
      return h;
    });
    this.setState({ habits });
  };

  onDecrement = (habit) => {
    const habits = this.state.habits.map((h) => {
      if (habit === h) {
        h.count -= 1;
        h.count = h.count < 0 ? 0 : h.count;
      }
      return h;
    });
    this.setState({ habits });
  };

  onDelete = (habit) => {
    const habits = this.state.habits.filter((h) => h !== habit);
    this.setState({ habits });
  };
  render() {
    return (
      <>
        <Header count={this.countSum()} />
        <Habits
          habits={this.state.habits}
          onIncrement={this.onIncrement}
          onDecrement={this.onDecrement}
          onDelete={this.onDelete}
        />
        <Reset />
      </>
    );
  }
}

export default App;
