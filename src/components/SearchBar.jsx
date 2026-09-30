import { useState } from "react";

function SearchBar({ onSearch, onLocation, loading }) {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!city.trim()) return;

    onSearch(city.trim());
    setCity("");
  };

  return (
    <div className="search-wrapper">
      <form className="search-bar" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <button type="submit" disabled={loading}>
          {loading ? "Searching..." : "Search"}
        </button>
      </form>

      <button
        className="location-button"
        onClick={onLocation}
        disabled={loading}
      >
        📍 Use My Location
      </button>
    </div>
  );
}

export default SearchBar;