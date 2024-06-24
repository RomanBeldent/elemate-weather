<template>
  <div id="app">
    <MainPage/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MainPage from './components/MainPage.vue'

export default defineComponent({
  name: 'App',
  components: {
    MainPage
  },
});
</script>

<style>
body {
  margin: 0;
  padding: 0;
  background-image: url('./assets/mountains.svg');
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
