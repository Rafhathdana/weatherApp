import { APP_GEO_API_KEY } from "../utils/constants";

export const geoApiOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": APP_GEO_API_KEY,
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};
export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo"; //url endpoint for fetching the cities

//Weather api and key from openweathermap.org
export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5"; //url endpoint for fetching current weather and day forecasting
