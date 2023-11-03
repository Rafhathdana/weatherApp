import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import { SearchCountry } from "../../components/searchCountry/SearchCountry";
import { warnings } from "../../cusHook/warning";
import { WEATHER_API_KEY } from "../../utils/constants";
import { WEATHER_API_URL } from "../../api/api";
import { WeatherReport } from "../../components/weatherReport/WeatherReport";
import { ForecastReport } from "../../components/forecastReport/ForecastReport";

export const Weather = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  warnings("Are you sure you want to leave this page?");
  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split("");
    const WeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const foreCastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    Promise.all([WeatherFetch, foreCastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();
        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <>
      <Navbar type="weather" />
      <div className="heading-container">
        <h1 className="heading">WEATHER INFORMATION</h1>
      </div>
      <div className="container">
        <SearchCountry onSearchChange={handleOnSearchChange} />

        {currentWeather && <WeatherReport data={currentWeather} />}
        {forecast && <ForecastReport data={forecast} />}
      </div>
    </>
  );
};
