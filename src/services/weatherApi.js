const GEO_URL = "https://geocoding-api.open-meteo.com/v1/search";
const WEATHER_URL = "https://api.open-meteo.com/v1/forecast";

export const getWeather = async (city) => {
  try {
    // City ko latitude/longitude mein convert karna
    const geoResponse = await fetch(
      `${GEO_URL}?name=${encodeURIComponent(city)}&count=1&language=en&format=json`
    );

    if (!geoResponse.ok) {
      throw new Error("Unable to find city");
    }

    const geoData = await geoResponse.json();

    if (!geoData.results || geoData.results.length === 0) {
      throw new Error("City not found");
    }

    const { latitude, longitude, name, country } = geoData.results[0];

    // Weather data fetch karna
    const weatherResponse = await fetch(
      `${WEATHER_URL}?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset&timezone=auto`
    );

    if (!weatherResponse.ok) {
      throw new Error("Unable to fetch weather");
    }

    const weatherData = await weatherResponse.json();

    return {
      location: {
        name,
        country,
      },
      current: weatherData.current,
      daily: weatherData.daily,
    };
  } catch (error) {
    throw new Error(error.message || "Something went wrong");
  }
};