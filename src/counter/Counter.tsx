import React from "react";
import moment from "moment";
import "./Counter.css";

interface PropTypes {
  timeTillDate: any;
  timeFormat: any;
}

class Countdown extends React.Component<PropTypes> {
  state = {
    days: undefined,
    hours: undefined,
    minutes: undefined,
    seconds: undefined,
  };

  interval: any;

  componentDidMount() {
    this.interval = setInterval(() => {
      const { timeTillDate, timeFormat } = this.props;
      const then: any = moment(timeTillDate, timeFormat);
      const now: any = moment();
      const countdown = moment(then - now);
      const days = countdown.format("D");
      const hours = countdown.format("HH");
      const minutes = countdown.format("mm");
      const seconds = countdown.format("ss");

      this.setState({ days, hours, minutes, seconds });
    }, 1000);
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  render() {
    const { days, hours, minutes, seconds } = this.state;

    return (
      <div>
        <div className="countdown-wrapper">
          <div className="countdown-item">
            {days}
            <span>days</span>
          </div>
          <div className="countdown-item">
            {hours}
            <span>hours</span>
          </div>
          <div className="countdown-item">
            {minutes}
            <span>minutes</span>
          </div>
          <div className="countdown-item">
            {seconds}
            <span>seconds</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Countdown;
