import { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import WeatherDetails from "./components/WeatherDetails";
import Forecast from "./components/Forecast";
import { getWeather } from "./services/weatherApi";
import "./App.css";

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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

          const response = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset&timezone=auto`
          );

          if (!response.ok) {
            throw new Error("Unable to get your location weather.");
          }

          const data = await response.json();

          setWeather({
            location: {
              name: "Your Location",
              country: "",
            },
            current: data.current,
            daily: data.daily,
          });
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      },
      () => {
        setError("Location permission was denied. Please allow location access.");
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

        {error && <div className="error">{error}</div>}

        {loading && (
          <div className="loading">
            <div className="spinner"></div>
            <p>Getting weather information...</p>
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
            <div className="welcome-icon">🌤️</div>

            <h2>Check the Weather</h2>

            <p>
              Enter a city name or use your location to get weather information.
            </p>
          </div>
        )}

        <footer>
          <p>Weather data provided by Open-Meteo</p>
          <p className="footer-note">Frontend React.js Weather Application</p>
        </footer>

      </div>
    </div>
  );
}

export default App;