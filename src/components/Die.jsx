import React, { Component } from 'react'
import './Die.css';

export class Die extends Component {
  render() {
    return (
      <i className={`Die fas fa-dice-${this.props.number}`}></i>
    )
  }
}

export default Die
