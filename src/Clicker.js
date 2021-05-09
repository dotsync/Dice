import React, { Component } from 'react'

class Clicker extends Component {
  constructor() {
    super()
    this.state = {
      counter: 0
    }
    this.randomNum = this.randomNum.bind(this);
  }
  randomNum = (e) => {
    const rand = Math.floor(Math.random() * 100)
    this.setState({counter: rand})
  }
  render() {
    return (
      <div>
        <button onClick={this.randomNum}>click me</button>
        <h1>{this.state.counter}</h1>
      </div>
    )
  }
}

export default Clicker;
