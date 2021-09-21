import react from 'react';
import './app.css';
import Habits from './components/habits';

import React, { Component } from 'react';
import Header from './components/header';
import Reset from './components/reset';
import HabitInputForm from './components/habitInputForm';

class App extends Component {
  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Running', count: 0 },
      { id: 3, name: 'Coding', count: 0 },
    ],
  };

  onAdd = (name) => {
    const num = this.state.habits.length;
    console.log(num;
  };
  countSum = () => {
    let sum = 0;
    this.state.habits.forEach((h) => {
      sum = h.count > 0 ? sum + 1 : sum;
    });
    return sum;
  };

  resetAll = () => {
    const habits = this.state.habits.map((h) => {
      h.count = 0;
      return h;
    });
    console.log(1);
    this.setState({ habits });
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
        <HabitInputForm onAdd={this.onAdd} />
        <Habits
          habits={this.state.habits}
          onIncrement={this.onIncrement}
          onDecrement={this.onDecrement}
          onDelete={this.onDelete}
        />
        <Reset resetAll={this.resetAll} />
      </>
    );
  }
}

export default App;
