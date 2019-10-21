import React from 'react';
import { connect } from 'react-redux';
import './app.scss';

import Header from './components/Header';
import Footer from './components/Footer';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  handleIncrementClick = e => {
    e.preventDefault();
    this.setState({ counter: this.state.counter + 1 });
  };

  handleDecrementClick = e => {
    e.preventDefault();
    this.setState({ counter: this.state.counter - 1 });
  }

  render() {
    let style = {
      color: 'black'
    }

    let niceStyle = {
      visibility: 'hidden'
    }

    if(this.state.counter === 69) {
      niceStyle.visibility = 'visible';
      style.color = 'blue';
    } else if(this.state.counter > 0) {
      style.color = 'blue';
    } else if(this.state.counter < 0) {
      style.color = 'red';
    }

    return (
      <div>
        <h4 style={style}>{this.state.counter}</h4>
        <h4 id="nice" style={niceStyle}>Nice!</h4>
        <button onClick={this.handleIncrementClick}>Increase</button>
        <button onClick={this.handleDecrementClick}>Decrease</button>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Counter />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
