import axios from 'axios';

const API_KEY = 'XX';

const ROOT_URL=`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
  const url = `${ROOT_URL}&q=${city},us`;

  const promise = axios.get(url); // GET request returns a promise

  return {
    type: FETCH_WEATHER,
    payload: promise
  };
}
