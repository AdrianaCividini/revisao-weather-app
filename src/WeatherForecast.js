import React, { useState, useEffect } from "react";

import axios from "axios";

import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleForecastResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function (day, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={day} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = "be4f04372f126ocaa2t8a5df316fc3ab";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?}query=${props.city}&key${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleForecastResponse);
  }
}
