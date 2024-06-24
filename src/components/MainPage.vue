<template>
  <div>
    <h1>What's the weather</h1>
    <div v-if="weather">
      <p>City: {{ weather.city }}</p>
      <p>Temperature: {{ weather.temperature }}°C</p>
      <p>Weather Description: {{ weather.description }}</p>
      <img v-if="weather.iconUrl" :src="weather.iconUrl" alt="Weather Icon">
    </div>
    <button @click="getWeather">Get Weather</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';
import { Weather } from '../models/Weather';

export default defineComponent({
  name: 'MainPage',
  data() {
    return {
      weather: null as Weather | null
    };
  },
  methods: {
    async getWeather() {
      const apiKey = '0cfdef24c20f0ff4595cfd5778fbe8f6';

      const options = {
        method: 'GET',
        url: 'http://api.weatherstack.com/current',
        params: {
          access_key: apiKey,
          query: 'Bordeaux',
        },
      };

      try {
        const response = await axios.request(options);
        const weatherData = response.data;

        this.weather = {
          city: weatherData.location.name,
          temperature: weatherData.current.temperature,
          description: weatherData.current.weather_descriptions[0],
          iconUrl: weatherData.current.weather_icons.length > 0 ? weatherData.current.weather_icons[0] : undefined,
        };
        console.log('Weather Data:', this.weather);
      } catch (error) {
        console.error('Error fetching weather:', error);
      }
    },
  },
});
</script>

<style scoped></style>
