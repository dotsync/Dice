import React, {Component} from 'react'
import './App.css';
import Die from './components/Die'

class App extends Component{
  render() {
    return (
      <div className="App">
        <Die />
      </div>
    )
  };
}

export default App;
