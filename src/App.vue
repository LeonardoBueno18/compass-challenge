<template>
  <main class="columns is-gapless section__app">
    <router-view></router-view>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
  name: 'App',
  components: {

  }
});
</script>

<style>
#app {
  text-align: center;
  align-items: center;
  background: black;
  width: 100%;
  height: 100%;
  top: 5.9375rem;
  left: 6.75rem;
  gap: 3.625rem;
}
html, body{
  height: 100%;
  margin: 0em;
}

.section__app {
  width: 76.5625rem;
  height: 52.125rem;
  top: 5.9375rem;
  left: 6.75rem;
  gap: 3.625rem;
  margin: 0em 0em 0em 0em;
  align-items: center;
}
</style>
