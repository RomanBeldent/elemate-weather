<template>
  <div class="mx-auto pt-3 mt-5"
    style="text-align: center; width: 800px; height: 500px; background: #3c558f; border-radius: 15px;">
    <h1 class="mb-3" style="font-size: 3rem; color: white;">What's the weather</h1>
    <b-form @submit.prevent="getWeather" class="text-center">
      <b-form-input class="mx-auto mb-2" style="width: 70%;" v-model="city" placeholder="Enter city name" />
        <b-button variant="info" @click="getWeather">Get Weather</b-button>
    </b-form>
  <b-table class="mt-5" striped bordered hover v-if="weather" :items="[weather]">
    <template #cell(city)="row">
      {{ row.value }}
    </template>
    <template #cell(country)="row">
      {{ row.value }}
    </template>
    <template #cell(region)="row">
      {{ row.value }}
    </template>
    <template #cell(temperature)="row">
      {{ row.value }}°C
    </template>
    <template #cell(description)="row">
      {{ row.value }}
    </template>
    <template #cell(iconUrl)="row">
      <b-avatar v-if="row.value" :src="row.value" size="4rem" alt="Weather Icon"></b-avatar>
    </template>
  </b-table>
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
