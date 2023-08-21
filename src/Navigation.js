import React, { Component } from 'react';
import {Link} from 'react-router-dom'

 class Navigation extends Component {
  render() {
    return (
      <div className='nav'>
        <Link to="/">Home</Link>
        <Link to="/About">about</Link>
        <Link to="/contact">Contact</Link>
      </div>
    );
  }
}
export default Navigation;