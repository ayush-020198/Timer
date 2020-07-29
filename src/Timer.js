import React, { Component } from 'react';
import './App.css';

class Timer extends Component {
  componentDidMount() {
    this.timer = setInterval(this.ticktock, 1000);
  }

  ticktock() {
    this.setState({ clock: new Date() - this.props.start });
  }

  constructor(props) {
    super(props);

    this.state = {
      clock: 0,
    };
    this.ticktock = this.ticktock.bind(this);
  }

  render() {
    var time = Math.round(this.state.clock / 1000);
    return (
      <div className="Timer">
        <h1 className="upper">You wasted your</h1>
        <span>{time}</span>
        <br />
        <h1 className="lower">Seconds</h1>
      </div>
    );
  }
}

export default Timer;
