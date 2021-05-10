import React, {Component} from 'react'
import './App.css';
import Die from './components/Die'

class App extends Component{
  render() {
    return (
      <div className="App">
        <Die number="five"/>
      </div>
    )
  };
}

export default App;
