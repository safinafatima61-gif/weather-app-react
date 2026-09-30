# 🌦️ Weather App

A modern and responsive **Weather Web Application** built with **React.js** and the free **Open-Meteo Weather API**.

Users can search for any city and view current weather information, daily details, and a 7-day weather forecast. The application also supports using the user's current location.

## 🚀 Features

* 🔍 Search weather by city name
* 📍 Use current location
* 🌡️ Current temperature
* 🌤️ Weather condition
* 🌡️ Feels-like temperature
* 💧 Humidity
* 💨 Wind speed
* 🌧️ Precipitation
* 🌅 Sunrise and sunset
* 📊 Maximum and minimum temperature
* 📅 7-day weather forecast
* ⏳ Loading state
* ⚠️ Error handling
* 📱 Responsive design for mobile and desktop
* 🎨 Clean and modern user interface

## 🛠️ Technologies Used

* **React.js**
* **JavaScript (ES6+)**
* **HTML5**
* **CSS3**
* **Open-Meteo Weather API**
* **Vite**
* **ESLint**

## ☁️ API Integration

This project uses the **Open-Meteo API** to retrieve weather information.

Open-Meteo provides free weather data without requiring an API key or user registration.

The application uses:

* Geocoding API to find city coordinates
* Weather API to retrieve current weather
* Daily forecast data for the 7-day forecast

## 📂 Project Structure

```text
Weather App/
│
├── public/
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── Forecast.jsx
│   │   ├── SearchBar.jsx
│   │   ├── WeatherCard.jsx
│   │   └── WeatherDetails.jsx
│   │
│   ├── services/
│   │   └── weatherApi.js
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── package.json
└── README.md
```

## ⚙️ Installation

Clone the repository:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Go to the project folder:

```bash
cd Weather-App
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open the local URL provided by Vite in your browser.

## 📱 Usage

1. Enter a city name in the search box.
2. Click **Search**.
3. View the current weather information.
4. Check today's weather details.
5. View the 7-day forecast.
6. Use **Use My Location** to get weather for your current location.

## 🎯 Project Objective

The objective of this project is to demonstrate how a **free public API can be integrated into a React.js frontend application** to retrieve and display real-time weather information in a user-friendly interface.

## 📌 Assignment Requirements

* ✅ Frontend-only application
* ✅ React.js
* ✅ Free Weather API integration
* ✅ API data displayed on the web
* ✅ Responsive and user-friendly interface

## 👩‍💻 Developer

**Safina Fatima**

Software Engineering Student
React.js / MERN Stack Developer

## 📄 License

This project is created for educational and portfolio purposes.

## 🌐 Weather Data

Weather data provided by **Open-Meteo**.

