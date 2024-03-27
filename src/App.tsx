import React, { useState } from 'react';
import './App.css';
import WeatherForecast from './component/weatherForecast';


function App() {
  const [weatherData, setWeatherData] = useState<any[]>([]);

  const fetchData = async () => {
    try {
      const response = await fetch('https://localhost:7208/weatherforecast'); //si hacen deploy, quizas deban cambiar esta URL
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleRefresh = () => {
    fetchData();
  };

  return (
    <div className="app">
      <h1>Weather App</h1>
      <button onClick={handleRefresh}>Refresh</button>
      <WeatherForecast data={weatherData} />
    </div>
  );
}

export default App;
