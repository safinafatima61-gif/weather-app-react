const API_URL = "/api/weather";

export const getWeather = async (city) => {
  try {
    const response = await fetch(
      `${API_URL}?city=${encodeURIComponent(city)}`
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Unable to fetch weather");
    }

    return data;
  } catch (error) {
    throw new Error(error.message || "Something went wrong");
  }
};

export const getWeatherByLocation = async (latitude, longitude) => {
  try {
    const response = await fetch(
      `/api/weather/location?latitude=${latitude}&longitude=${longitude}`
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.message || "Unable to get your location weather."
      );
    }

    return data;
  } catch (error) {
    throw new Error(error.message || "Something went wrong");
  }
};