const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const GEO_URL = "https://geocoding-api.open-meteo.com/v1/search";
const WEATHER_URL = "https://api.open-meteo.com/v1/forecast";

// Test route
app.get("/", (req, res) => {
  res.json({
    message: "Weather App Backend is running successfully!",
  });
});

// Weather by city
app.get("/api/weather", async (req, res) => {
  try {
    const { city } = req.query;

    if (!city) {
      return res.status(400).json({
        message: "City name is required.",
      });
    }

    // Step 1: Find city coordinates
    const geoResponse = await fetch(
      `${GEO_URL}?name=${encodeURIComponent(
        city
      )}&count=1&language=en&format=json`
    );

    if (!geoResponse.ok) {
      throw new Error("Unable to find city.");
    }

    const geoData = await geoResponse.json();

    if (!geoData.results || geoData.results.length === 0) {
      return res.status(404).json({
        message: "City not found.",
      });
    }

    const {
      latitude,
      longitude,
      name,
      country,
    } = geoData.results[0];

    // Step 2: Get weather
    const weatherResponse = await fetch(
      `${WEATHER_URL}?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset&timezone=auto`
    );

    if (!weatherResponse.ok) {
      throw new Error("Unable to fetch weather.");
    }

    const weatherData = await weatherResponse.json();

    // Step 3: Send clean response to frontend
    res.json({
      location: {
        name,
        country,
      },
      current: weatherData.current,
      daily: weatherData.daily,
    });
  } catch (error) {
    console.error("Weather API Error:", error.message);

    res.status(500).json({
      message: "Server error while fetching weather.",
    });
  }
});

// Weather by coordinates
app.get("/api/weather/location", async (req, res) => {
  try {
    const { latitude, longitude } = req.query;

    if (!latitude || !longitude) {
      return res.status(400).json({
        message: "Latitude and longitude are required.",
      });
    }

    const weatherResponse = await fetch(
      `${WEATHER_URL}?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset&timezone=auto`
    );

    if (!weatherResponse.ok) {
      throw new Error("Unable to fetch location weather.");
    }

    const weatherData = await weatherResponse.json();

    res.json({
      location: {
        name: "Your Location",
        country: "",
      },
      current: weatherData.current,
      daily: weatherData.daily,
    });
  } catch (error) {
    console.error("Location Weather Error:", error.message);

    res.status(500).json({
      message: "Server error while fetching location weather.",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Weather backend running on http://localhost:${PORT}`);
});