import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const search = async () => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=Mumbai&appid=${import.meta.env.VITE_APP_ID}`;
      const res = await fetch(url);
      const data = await res.json();

      const feelsLikeCelsius = data.main.feels_like - 273.15;
      const tempMinCelsius = data.main.temp_min - 273.15;

      console.log(`Feels like: ${feelsLikeCelsius.toFixed(2)}°C`);
      console.log(`Temp min: ${tempMinCelsius.toFixed(2)}°C`);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <>
      <h1>Hi</h1>
      <button onClick={search}>Get Weather</button>
    </>
  );
}

export default App;
