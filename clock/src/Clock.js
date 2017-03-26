import React, { Component } from 'react';

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.updateTime = this.updateTime.bind(this);
    this.state = {
      time: new Date()
    };
    setInterval(this.updateTime, 1000);
  }

  updateTime() {
    this.setState({
      time: new Date()
    });
  }

  render() {
    let monthName = this.state.time.getMonth();
    switch(monthName) {
      case 0:
        monthName = 'January';
        break;
      case 1:
        monthName = 'February';
        break;
      case 2:
        monthName = 'March';
        break;
      case 3:
        monthName = 'April';
        break;
      case 4:
        monthName = 'May';
        break;
      case 5:
        monthName = 'June';
        break;
      case 6:
        monthName = 'July';
        break;
      case 7:
        monthName = 'August';
        break;
      case 8:
        monthName = 'September';
        break;
      case 9:
        monthName = 'October';
        break;
      case 10:
        monthName = 'November';
        break;
      case 11:
        monthName = 'December';
        break;
      default:
    }
    let period = 'AM';
    let hours = this.state.time.getHours();
    if (hours === 0){
      hours = 12;
      period = 'AM';
    } else if (hours > 12) {
      hours -= 12;
      period = 'PM'
    } else {
      period = 'AM';
    }

    let minutes = this.state.time.getMinutes();
    if (minutes < 10) {
      minutes = '0' + minutes;
    }

    let seconds = this.state.time.getSeconds();
    if (seconds < 10) {
      seconds = '0' + seconds;
    }

    let year = 1900 + this.state.time.getYear();
    let day = this.state.time.getDate();

    return(
      <div>
        <h2>
          {monthName} {day}, {year}
        </h2>

        <p>
          {hours}:{minutes}:{seconds} {period}
        </p>
      </div>
    );
  }
}