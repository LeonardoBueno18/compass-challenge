<template>
  <section class="section1">
    <div class="columns is-full">
      <Content />
      <Form />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Form from './components/Form.vue';
import Content from './components/Content.vue';

export default defineComponent({
  name: 'App',
  components: {
    Form,
    Content,
  }
});
</script>

<style>
#app {
  text-align: center;
  align-items: center;
  background-color: black;
  width: 100%;
  height: 110vh;
  top: 95px;
  left: 108px;
  gap: 58px;
  opacity: 0px;
}

.section1 {
  width: 1225px;
  height: 834px;
  top: 95px;
  left: 108px;
  gap: 58px;
  opacity: 0px;
}
</style>
