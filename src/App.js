import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from './actions/counter'
import logo from './logo.svg';
import './App.css';

class App extends Component {

  incrementCounter = () => {
    this.props.increment()
  }
  decrementCounter = () => {
    this.props.decrement()
  }
  render() {
    console.log(this.props)
    
    return (
      <div className="App">
        <h1>{ this.props.counter } </h1>
        <button onClick={this.incrementCounter}>+</button> 
        <span>Counter</span> 
        <button onClick={this.decrementCounter}>-</button> 
      </div>
    );
  }
}

const mapStateToProps = (state,ownProps) => {
console.log(state, ownProps);
  return {
    counter: state.counter,
  }
}

export default connect(mapStateToProps, { increment, decrement })(App)
