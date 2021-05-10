import React, { Component } from 'react'

export class Die extends Component {
  render() {
    return (
      <div>
        <h1>Die</h1>
        <i className={`fas fa-dice-${this.props.number}`}></i>
      </div>
    )
  }
}

export default Die
