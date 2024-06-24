<template>
  <div>
    <h1>What's the weather</h1>
    <input v-model="city" placeholder="Enter city name" />
    <button @click="getWeather">Get Weather</button>
    <div v-if="weather">
      <p>City: {{ weather.city }}</p>
      <p>Temperature: {{ weather.temperature }}°C</p>
      <p>Weather Description: {{ weather.description }}</p>
      <img v-if="weather.iconUrl" :src="weather.iconUrl" alt="Weather Icon" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Weather } from '../models/WeatherModel'
import { fetchWeather } from '../services/WeatherService';

export default defineComponent({
  name: 'MainPage',
  data() {
    return {
      city: '',
      weather: null as Weather | null,
    };
  },
  methods: {
    async getWeather() {
      if (this.city) {
        this.weather = await fetchWeather(this.city);
        if (this.weather) {
          console.log('Weather Data:', this.weather);
        }
      } else {
        alert('Please enter a city name.');
      }
    },
  },
});
</script>

<style scoped></style>
