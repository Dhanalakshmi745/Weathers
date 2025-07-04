import React, { useState } from "react";
import Weather from "./Weather.jsx";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const apiKey = "8df151e3a42575496816e65434101f06"; // Replace this with your OpenWeather API key

  const getWeather = async () => {
    if (city === "") return;
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      const data = await response.json();
      if (data.cod === 200) {
        setWeatherData(data);
      } else {
        alert("City not found!");
      }
    } catch (error) {
      alert("Error fetching weather data.");
    }
  };

  return (
    <div className="app">
      <img src="https://th.bing.com/th/id/OIP.VrlwzAX7P0ZkWGIuAQKXaQHaEK?w=322&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
      <div className="app_1">
      <h1>🌦️ Weather App</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={getWeather}>Search</button>
      </div>
      {weatherData && <Weather data={weatherData} />}
    </div>
    </div>
  );
}

export default App;
