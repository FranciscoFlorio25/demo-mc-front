import React from 'react';
import './weatherForecast.css';

interface WeatherData {
  date: string;
  temperatureC: number;
  summary: string;
  temperatureF: number;
}

interface WeatherProps {
  data: WeatherData[];
}

const WeatherForecast: React.FC<WeatherProps> = ({ data }) => {
  return (
    <div className="weather-forecast">
      <h2>Weather Forecast</h2>
      <div className="weather-list">
        {data.map((weather, index) => (
          <div key={index} className="weather-item">
            <p>Date: {weather.date}</p>
            <p>Temperature: {weather.temperatureC}°C / {weather.temperatureF}°F</p>
            <p>Summary: {weather.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherForecast;