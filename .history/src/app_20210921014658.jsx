import react from 'react';
import './app.css';
import Habits from './components/habits';

import React, { Component } from 'react';

class App extends Component {
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
      return h;
    });
    this.setState({ habits });
  };

  handleDelete = (habit) => {
    const habits = this.state.habits.filter((h) => h !== habit);
    this.setState({ habits });
  };
  render() {
    return <habits />;
  }
}

export default App;
