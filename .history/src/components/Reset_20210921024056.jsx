import React, { Component } from 'react';

class Reset extends Component {
  render() {
    return (
      <button className='button-reset' onClick={this.props.resetAll}>
        Reset All
      </button>
    );
  }
}

export default Reset;
