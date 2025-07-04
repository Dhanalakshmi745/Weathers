import React from "react";

function Weather({ data }) {
  return (
    <div className="weather-card">
      <h2>{data.name}, {data.sys.country}</h2>
      <p>🌡 Temp: {data.main.temp} °C</p>
      <p>☁ Condition: {data.weather[0].description}</p>
      <p>💨 Wind: {data.wind.speed} m/s</p>
      <p>Humidity: {data.main.humidity} m/s</p>
      <p>Pressure: {data.main.pressure} hPa </p>
    </div>
  );
}

export default Weather;
