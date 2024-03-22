import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°`;
  }

  return (
    <div>
      <div className="Forecast-day">{day()}</div>
      <WeatherIcon code={props.data.condition.icon} size={32} />
      <div className="Forecast-day-temperatures">
        <span className="Forecast-day-max">{maxTemperature()} </span>
        <span className="Forecast-day-min">{minTemperature()} </span>
      </div>
    </div>
  );
}
