<template>
    <div class="columns principal">
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
</style>