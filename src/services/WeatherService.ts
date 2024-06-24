import axios from 'axios';
import { Weather } from '../models/WeatherModel';

const apiKey = process.env.VUE_APP_API_KEY

export async function fetchWeather(city: string): Promise<Weather | null> {
  const options = {
    method: 'GET',
    url: 'http://api.weatherstack.com/current',
    params: {
      access_key: apiKey,
      query: city,
    },
  };

  try {
    const response = await axios.request(options);
    const weatherData = response.data;

    const weather: Weather = {
      city: weatherData.location.name,
      country: weatherData.location.country,
      region: weatherData.location.region,
      temperature: weatherData.current.temperature,
      description: weatherData.current.weather_descriptions[0],
      iconUrl: weatherData.current.weather_icons.length > 0 ? weatherData.current.weather_icons[0] : undefined,
    };

    return weather;
  } catch (error) {
    console.error('Error fetching weather:', error);
    return null;
  }
}