<template>
    <section class="section1">
        <h3 class="titulo">I’m interested in...</h3>
        <div class="buttons">
            <button class="button item" v-for="value in values" @click="selectInterest(value)">{{ value }}</button>
        </div>
    </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
    name: 'Interests',
    emits: ['InterestSelected'],
    computed: {
        value: String
    },
    data() {
        return {
            values: ['Front-end', 'Back-end', 'Mobile', 'AI', 'Other']
        }
    },
    methods: {
        selectInterest(value: string) {
            switch (value) {
                case 'Front-end':
                    this.$emit('InterestSelected', value);
                    break;
                case 'Back-end':
                    this.$emit('InterestSelected', value);
                    break;
                case 'Mobile':
                    this.$emit('InterestSelected', value);
                    break;
                case 'AI':
                    this.$emit('InterestSelected', value);
                    break;
                case 'Other':
                    this.$emit('InterestSelected', value);
                    break;
                default:
                    confirm('Please select an interest');
                    break;
            }
        }
    }

});
</script>

<style scoped>
.titulo {
    font-family: Poppins;
    font-size: 32px;
    font-weight: 700;
    line-height: 48px;
    text-align: left;
    color: black;
    margin-bottom: 0.7em;
}

.item {
    width: 184px;
    height: 68px;
    padding: 16px 40px 16px 40px;
    gap: 10px;
    border-radius: 8px;
    font-family: Poppins;
    font-size: 24px;
    font-weight: 500;
    line-height: 36px;
    letter-spacing: 0em;
    text-align: center;
}

.section1 {
    width: 600px;
    height: 224px;
    gap: 24px;
    opacity: 0px;

}
</style>
```