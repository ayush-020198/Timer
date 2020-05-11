import React, { Component } from 'react';

class Timer extends React.Component {
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
        <header>You wasted your</header>
        <span>{time}</span>
        <br />
        <footer>Seconds</footer>
      </div>
    );
  }
}

export default Timer;
