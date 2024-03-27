<template>
    <div class="columns contact__view">
        <Content />
        <Form />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Form from '../../components/Form.vue';
import Content from '../../components/Content.vue';

export default defineComponent({
    name: 'Contact',
    components: {
        Form,
        Content,
    }
});
</script>

<style scoped>
.contact__view{
  margin: -3.75rem -0.5625rem 0em 8.125rem;
}
</style>