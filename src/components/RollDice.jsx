import React, { Component } from 'react'
import Die from './Die';
import './RollDice.css';

export class RollDice extends Component {
  static defaultProps = {
    number: ['one', 'two', 'three', 'four', 'five', 'six']
  };
  constructor(props) {
    super(props)

    this.state = {
      isRolling: false,
      die1: 'one',
      die2: 'one',
    }
    this.roll = this.roll.bind(this);
  }
  roll() {
    const newDie1 = this.props.number[Math.floor(Math.random() * this.props.number.length)];
    const newDie2 = this.props.number[Math.floor(Math.random() * this.props.number.length)];
    this.setState({die1: newDie1, die2: newDie2, isRolling: true})
    setTimeout(() => {
      this.setState({isRolling: false})
    }, 1000);
  }
  render() {
    return (
      <div className='RollDice'>
        <div className='RollDice-container'>
          <Die number={this.state.die1} isRolling={this.state.isRolling} />
          <Die number={this.state.die2} isRolling={this.state.isRolling}/>
        </div>
        <button onClick={this.roll} disabled={this.state.isRolling}>
          {this.state.isRolling ? 'rolling...' : 'Roll Dice!'}
        </button>
      </div>
    )
  }
}

export default RollDice
