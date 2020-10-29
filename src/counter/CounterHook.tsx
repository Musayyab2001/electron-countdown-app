import moment from "moment";
import React, { useState } from "react";
import "./Counter.css";

interface CounterProps {
  timeTillDate: any;
  timeFormat: any;
}

const CounterHook = (props: CounterProps) => {
  const [days, setDays] = useState<number>();
  const [hours, setHours] = useState<number>();
  const [minutes, setMinutes] = useState<number>();
  const [seconds, setSeconds] = useState<number>();
  const [timerColor, setTimerColor] = useState("");
  const [inputHours, setInputHours] = useState<number>(0);
  const [inputMinutes, setInputMinutes] = useState<number>(0);
  const [inputSeconds, setInputSeconds] = useState<number>(0);
  const [counterRunning, setCounterRunning] = useState<boolean>(false);

  let timeInterval = 1;
  let duration = moment.duration({
    hours: inputHours,
    minutes: inputMinutes,
    seconds: inputSeconds,
  });

  let timerInputStyle = {
    color: timerColor,
  };

  let buttonInputStyle = {
    display: counterRunning ? "none" : "block",
  };

  let interval: any;

  const startCountDown = () => {
    interval = setInterval(() => {
      duration = moment.duration(
        duration.asSeconds() - timeInterval,
        "seconds"
      );

      setDays(duration.days());
      setHours(duration.hours());
      setMinutes(duration.minutes());
      setSeconds(duration.seconds());

      if (duration.asSeconds() <= 60) {
        setTimerColor("orange");
      }
      if (duration.asSeconds() <= 10) {
        setTimerColor("red");
      }

      if (duration.asSeconds() === 0) {
        clearInterval(interval);
      }
    }, 1000);
  };

  const handleSubmit = (evt: any) => {
    clearInterval(interval);
    setCounterRunning(true);
    evt.preventDefault();
    // alert(
    //   `Stunden: ${inputHours} : Minuten: ${inputMinutes} : Sekunden: ${inputSeconds}`
    // );
    startCountDown();
  };

  const refreshPage = () => {
    window.location.reload(false);
  };

  return (
    <div>
      <div className="countdown-wrapper">
        {days !== 0 && (
          <div className="countdown-item">
            {days}
            <span>Tage</span>
          </div>
        )}

        {hours !== 0 && (
          <div className="countdown-item">
            {hours}
            <span>Stunden</span>
          </div>
        )}

        {minutes !== 0 && (
          <div className="countdown-item">
            {minutes}
            <span>Minuten</span>
          </div>
        )}

        {seconds !== 0 && (
          <div className="countdown-item" style={timerInputStyle}>
            {seconds}
            <span>Sekunden</span>
          </div>
        )}
      </div>

      <form className="input-container" onSubmit={handleSubmit}>
        <label>
          Stunden:
          <input
            type="number"
            value={inputHours}
            onChange={(e) => setInputHours(Number(e.target.value))}
          />
        </label>

        <label>
          Minuten:
          <input
            type="number"
            value={inputMinutes}
            onChange={(e) => setInputMinutes(Number(e.target.value))}
          />
        </label>

        <label>
          Sekunden:
          <input
            type="number"
            value={inputSeconds}
            onChange={(e) => setInputSeconds(Number(e.target.value))}
          />
        </label>
        <input type="submit" value="Starten" style={buttonInputStyle} />
        <button onClick={refreshPage}>Reset</button>
      </form>
    </div>
  );
};
export default CounterHook;
