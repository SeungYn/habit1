import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header>
        <i className='fab fa-angellist'></i>
        <span className='header-title'>header</span>
        <span className='header-count'>9</span>
      </header>
    );
  }
}

export default Header;
