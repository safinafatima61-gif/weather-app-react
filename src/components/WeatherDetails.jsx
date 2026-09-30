function WeatherDetails({ weather }) {
  if (!weather) return null;

  const sunrise = new Date(weather.daily.sunrise[0]).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const sunset = new Date(weather.daily.sunset[0]).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="details-card">
      <h2>Today's Details</h2>

      <div className="details-grid">
        <div className="detail-item">
          <span>🌅</span>
          <div>
            <strong>{sunrise}</strong>
            <small>Sunrise</small>
          </div>
        </div>

        <div className="detail-item">
          <span>🌇</span>
          <div>
            <strong>{sunset}</strong>
            <small>Sunset</small>
          </div>
        </div>

        <div className="detail-item">
          <span>🌡️</span>
          <div>
            <strong>{Math.round(weather.daily.temperature_2m_max[0])}°C</strong>
            <small>Maximum</small>
          </div>
        </div>

        <div className="detail-item">
          <span>❄️</span>
          <div>
            <strong>{Math.round(weather.daily.temperature_2m_min[0])}°C</strong>
            <small>Minimum</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherDetails;