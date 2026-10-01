# 🌦️ Weather App

A modern and responsive **full-stack Weather Web Application** built with **React.js**, **Node.js**, and **Express.js**, using the free **Open-Meteo Weather API**.

The application allows users to search for any city and view current weather information, detailed weather data, and a 7-day forecast. It also supports fetching weather information based on the user's current location.

The backend is built with **Node.js and Express.js** and acts as an API layer between the React frontend and the Open-Meteo Weather API.

## 🚀 Features

### 🌤️ Weather Features

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

### ⚙️ Backend Features

* 🟢 Node.js backend
* 🚀 Express.js REST API
* 🔗 API integration with Open-Meteo
* 🌍 City-to-coordinates geocoding
* 📡 Weather data fetching through backend
* 🔄 Backend API routes for weather requests
* 🛡️ Error handling for API requests
* 🔐 CORS configuration
* 📦 Environment variable support
* 🔄 Separation of frontend and backend services

## 🛠️ Technologies Used

### Frontend

* **React.js**
* **JavaScript (ES6+)**
* **HTML5**
* **CSS3**
* **Vite**

### Backend

* **Node.js**
* **Express.js**
* **REST API**
* **CORS**
* **dotenv**

### API

* **Open-Meteo Weather API**
* **Open-Meteo Geocoding API**

### Development Tools

* **Git & GitHub**
* **ESLint**
* **VS Code**

## 🏗️ Application Architecture

The application follows a simple **client-server architecture**:

```text
React Frontend
      │
      │ HTTP Request
      ▼
Node.js + Express.js Backend
      │
      │ API Request
      ▼
Open-Meteo API
      │
      │ Weather Data
      ▼
Node.js Backend
      │
      │ JSON Response
      ▼
React Frontend
      │
      ▼
Weather UI
```

This structure keeps the frontend and backend responsibilities separated and makes the application easier to maintain and extend.

## ☁️ API Integration

This project uses the **Open-Meteo API** to retrieve weather information.

Open-Meteo provides free weather data without requiring an API key or user registration.

The application uses:

* **Geocoding API** to find city coordinates
* **Weather API** to retrieve current weather information
* **Daily forecast data** for the 7-day weather forecast

The React frontend communicates with the Express.js backend, while the backend handles requests to the external weather API.

## 🔌 Backend API

The Express.js backend provides API endpoints that are consumed by the React frontend.

Example:

```text
GET /api/weather?city=Lahore
```

The backend:

1. Receives the city name from the frontend.
2. Requests the city's coordinates from the Open-Meteo Geocoding API.
3. Uses the coordinates to request weather data.
4. Processes the response.
5. Sends weather information back to the React frontend in JSON format.

## 📂 Project Structure

```text
Weather-App/
│
├── frontend/
│   ├── public/
│   │
│   ├── src/
│   │   ├── assets/
│   │   │
│   │   ├── components/
│   │   │   ├── Forecast.jsx
│   │   │   ├── SearchBar.jsx
│   │   │   ├── WeatherCard.jsx
│   │   │   └── WeatherDetails.jsx
│   │   │
│   │   ├── services/
│   │   │   └── weatherApi.js
│   │   │
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── routes/
│   │   └── weatherRoutes.js
│   │
│   ├── controllers/
│   │   └── weatherController.js
│   │
│   ├── services/
│   │   └── weatherService.js
│   │
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── .gitignore
└── README.md
```

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Go to the Project Folder

```bash
cd Weather-App
```

### 3. Install Frontend Dependencies

```bash
cd frontend
npm install
```

### 4. Install Backend Dependencies

Open another terminal:

```bash
cd backend
npm install
```

### 5. Configure Environment Variables

Create a `.env` file inside the backend folder:

```env
PORT=5000
```

### 6. Start the Backend Server

```bash
npm run dev
```

The backend will run on:

```text
http://localhost:5000
```

### 7. Start the Frontend

Inside the frontend folder:

```bash
npm run dev
```

Then open the local URL provided by Vite in your browser.

## 📱 Usage

1. Enter a city name in the search box.
2. Click **Search**.
3. React sends the request to the Express.js backend.
4. The backend communicates with Open-Meteo.
5. Weather data is returned to the frontend.
6. View current weather information.
7. Check today's weather details.
8. View the 7-day forecast.
9. Use **Use My Location** to get weather based on your current coordinates.

## 🎯 Project Objective

The objective of this project is to demonstrate the development of a **full-stack weather application** using React.js on the frontend and Node.js with Express.js on the backend.

The project demonstrates:

* React component-based development
* REST API development
* Backend and frontend integration
* Third-party API integration
* Asynchronous JavaScript
* JSON data handling
* Error handling
* Responsive UI development
* Client-server communication

## 📌 Assignment Requirements

* ✅ Full-stack web application
* ✅ React.js frontend
* ✅ Node.js backend
* ✅ Express.js REST API
* ✅ Free Weather API integration
* ✅ API data displayed on the web
* ✅ Frontend-backend communication
* ✅ Responsive and user-friendly interface
* ✅ Error handling
* ✅ Current location support
* ✅ 7-day weather forecast

## 🌐 Data Flow

```text
User
 │
 ▼
React.js Frontend
 │
 │ Search City
 ▼
Express.js Backend
 │
 │ Request Coordinates
 ▼
Open-Meteo Geocoding API
 │
 │ Coordinates
 ▼
Open-Meteo Weather API
 │
 │ Weather Data
 ▼
Express.js Backend
 │
 │ JSON Response
 ▼
React.js Frontend
 │
 ▼
Weather Display
```

## 👩‍💻 Developer

**Safina Fatima**

Software Engineering Student
React.js / MERN Stack Developer

## 📄 License

This project is created for educational and portfolio purposes.

## 🌦️ Weather Data

Weather data is provided by **Open-Meteo**.
