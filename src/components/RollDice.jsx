import React, { Component } from 'react'
import Die from './Die';

export class RollDice extends Component {
  static defaultProps = {
    number: ['one', 'two', 'three', 'four', 'five', 'six']
  };
  constructor(props) {
    super(props)

    this.state = {
      die1: 'one',
      die2: 'one',
    }
    this.roll = this.roll.bind(this);
  }
  roll() {
    const newDie1 = this.props.number[Math.floor(Math.random() * this.props.number.length)];
    const newDie2 = this.props.number[Math.floor(Math.random() * this.props.number.length)];
    this.setState({die1: newDie1, die2: newDie2})
  }
  render() {
    return (
      <div>
        <Die number={this.state.die1} />
        <Die number={this.state.die2} />
        <button onClick={this.roll}>RollDice</button>
      </div>
    )
  }
}

export default RollDice
