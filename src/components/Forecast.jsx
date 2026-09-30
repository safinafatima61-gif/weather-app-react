function getWeatherIcon(code) {
  if (code === 0) return "☀️";
  if (code <= 3) return "⛅";
  if (code <= 48) return "🌫️";
  if (code <= 67) return "🌧️";
  if (code <= 77) return "❄️";
  if (code <= 82) return "🌦️";
  if (code <= 99) return "⛈️";

  return "🌤️";
}

function getWeatherText(code) {
  if (code === 0) return "Clear";
  if (code <= 3) return "Cloudy";
  if (code <= 48) return "Foggy";
  if (code <= 67) return "Rain";
  if (code <= 77) return "Snow";
  if (code <= 82) return "Rain Showers";
  if (code <= 99) return "Thunderstorm";

  return "Weather";
}

function Forecast({ weather }) {
  if (!weather) return null;

  return (
    <div className="forecast-section">
      <h2>7-Day Forecast</h2>

      <div className="forecast-grid">
        {weather.daily.time.map((date, index) => {
          const day = new Date(date).toLocaleDateString("en-US", {
            weekday: "short",
          });

          const code = weather.daily.weather_code[index];

          return (
            <div className="forecast-card" key={date}>
              <h3>{day}</h3>

              <div className="forecast-icon">
                {getWeatherIcon(code)}
              </div>

              <p>{getWeatherText(code)}</p>

              <strong>
                {Math.round(weather.daily.temperature_2m_max[index])}°
              </strong>

              <span>
                {Math.round(weather.daily.temperature_2m_min[index])}°
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Forecast;