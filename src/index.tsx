import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import CounterHook from "./counter/CounterHook";

ReactDOM.render(
  <React.StrictMode>
    <CounterHook timeTillDate="18:05:30" timeFormat="HH:mm:ss" />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
