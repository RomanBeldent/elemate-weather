import axios from 'axios';
import { Weather } from '../models/WeatherModel';

const apiKey = '0cfdef24c20f0ff4595cfd5778fbe8f6';

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