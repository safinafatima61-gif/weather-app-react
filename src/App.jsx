import { useState } from "react";

import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import WeatherDetails from "./components/WeatherDetails";
import Forecast from "./components/Forecast";

import {
  getWeather,
  getWeatherByLocation,
} from "./services/weatherApi";

import "./App.css";

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Search weather by city
  const handleSearch = async (city) => {
    setLoading(true);
    setError("");

    try {
      const data = await getWeather(city);

      setWeather(data);
    } catch (err) {
      setWeather(null);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Weather using user's location
  const handleLocation = () => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      return;
    }

    setLoading(true);
    setError("");

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;

          const data = await getWeatherByLocation(
            latitude,
            longitude
          );

          setWeather(data);
        } catch (err) {
          setWeather(null);
          setError(err.message);
        } finally {
          setLoading(false);
        }
      },
      () => {
        setError(
          "Location permission was denied. Please allow location access."
        );

        setLoading(false);
      }
    );
  };

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="app">
      <div className="container">

        <header className="header">
          <p className="subtitle">LIVE WEATHER</p>

          <h1>Weather App 🌦️</h1>

          <p className="description">
            Search any city or use your location to check the latest weather.
          </p>

          <p className="current-date">
            {today}
          </p>
        </header>

        <SearchBar
          onSearch={handleSearch}
          onLocation={handleLocation}
          loading={loading}
        />

        {error && (
          <div className="error">
            {error}
          </div>
        )}

        {loading && (
          <div className="loading">
            <div className="spinner"></div>

            <p>
              Getting weather information...
            </p>
          </div>
        )}

        {!loading && weather && (
          <main>
            <WeatherCard weather={weather} />

            <WeatherDetails weather={weather} />

            <Forecast weather={weather} />
          </main>
        )}

        {!loading && !weather && !error && (
          <div className="welcome">
            <div className="welcome-icon">
              🌤️
            </div>

            <h2>
              Check the Weather
            </h2>

            <p>
              Enter a city name or use your location to get weather information.
            </p>
          </div>
        )}

        <footer>
          <p>
            Weather data provided by Open-Meteo
          </p>

          <p className="footer-note">
            React.js + Node.js + Express.js Weather Application
          </p>
        </footer>

      </div>
    </div>
  );
}

export default App;