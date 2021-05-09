import React, { Component } from 'react'

class Clicker extends Component {
  constructor() {
    super()
    this.state = {
      counter: 0
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick = (e) => {
    console.log('clicked!')
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>click me</button>
        <h1>{this.state.counter}</h1>
      </div>
    )
  }
}

export default Clicker;
