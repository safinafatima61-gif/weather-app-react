function getWeatherInfo(code) {
  if (code === 0) return { icon: "☀️", text: "Clear Sky" };
  if (code <= 3) return { icon: "⛅", text: "Partly Cloudy" };
  if (code <= 48) return { icon: "🌫️", text: "Foggy" };
  if (code <= 67) return { icon: "🌧️", text: "Rainy" };
  if (code <= 77) return { icon: "❄️", text: "Snowy" };
  if (code <= 82) return { icon: "🌦️", text: "Rain Showers" };
  if (code <= 99) return { icon: "⛈️", text: "Thunderstorm" };

  return { icon: "🌤️", text: "Weather" };
}

function WeatherCard({ weather }) {
  if (!weather) return null;

  const temperature = Math.round(weather.current.temperature_2m);
  const feelsLike = Math.round(weather.current.apparent_temperature);
  const humidity = weather.current.relative_humidity_2m;
  const wind = Math.round(weather.current.wind_speed_10m);

  const weatherInfo = getWeatherInfo(weather.current.weather_code);

  return (
    <section className="weather-card">
      <div className="weather-top">
        <div>
          <p className="location-label">📍 Current Location</p>

          <h2>
            {weather.location.name}, {weather.location.country}
          </h2>

          <p className="condition-text">{weatherInfo.text}</p>
        </div>

        <div className="main-weather-icon">{weatherInfo.icon}</div>
      </div>

      <div className="main-temperature">
        <span>{temperature}</span>
        <sup>°C</sup>
      </div>

      <p className="feels-like">
        Feels like {feelsLike}°C
      </p>

      <div className="weather-info">
        <div className="weather-stat">
          <span className="stat-icon">💧</span>
          <div>
            <strong>{humidity}%</strong>
            <small>Humidity</small>
          </div>
        </div>

        <div className="weather-stat">
          <span className="stat-icon">💨</span>
          <div>
            <strong>{wind} km/h</strong>
            <small>Wind Speed</small>
          </div>
        </div>

        <div className="weather-stat">
          <span className="stat-icon">🌧️</span>
          <div>
            <strong>{weather.current.precipitation} mm</strong>
            <small>Precipitation</small>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WeatherCard;