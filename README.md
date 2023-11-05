# WeatherApp: Real-time Weather and News Updates

WeatherApp is a web application that provides real-time weather updates and news articles. It utilizes React for the frontend and Node.js for the backend. The app integrates multiple APIs, including OpenWeatherMap, RapidAPI, NewsAPI, and GNews, to deliver accurate weather data and the latest news articles.

## Key Features

- **Real-time Weather Updates:** Get current weather conditions, temperature, humidity, and wind speed for any location worldwide using OpenWeatherMap API.

- **Up-to-date News:** Stay informed with the latest news articles from various sources using RapidAPI, NewsAPI, and GNews.

## Technologies Used

- **React.js** 
- **Custom Hooks**
- **React-accessible-accordion**
- **React Redux**
- **React-router-dom**
- **React-select-async-paginate**
- **React-spinners**
- **APIs:**
  - OpenWeatherMap API (weather data)
  - RapidAPI (news articles)
  - NewsAPI (news articles)

## Installation

To run WeatherApp locally, follow these steps:

1. Clone the repository: `git clone https://github.com/rafhathdana/weatherApp`
2. Install dependencies ` npm install`
3. Create a `.env` file in the `backend` directory and add your API keys:
   

    `VITE_WEATHER_API_KEY=<your-openweathermap-api-key>`
   
   `VITE_NEWS_API_KEY=<your-newsapi-key>`
    
    `VITE_APP_GEO_API_KEY=<your-rapidapi-key>`
5. Start the development server: ` npm start`
6. Open your browser and access the app at `http://localhost:3000`

## Usage

1. Enter a location or city name to retrieve real-time weather information.
2. Browse and read the latest news articles from various sources.
3. Stay informed about the weather and news updates.

## Contributing

Contributions to WeatherApp are welcome! If you have any bug reports, feature requests, or suggestions, please open an issue or submit a pull request.

## License

This project is open-source and available under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries or support, please reach out to our team at [danarafha@gmail.com](mailto:danarafha@gmail.com).
