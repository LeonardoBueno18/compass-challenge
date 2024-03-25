<template>
    <section class="section-interest">
        <h3 class="titulo">I’m interested in...</h3>
        <div class="buttons">
            <button class="button item" @click="selectInterest('Front-end')" :class="context.frontend">Front-end</button>
            <button class="button item" @click="selectInterest('Back-end')" :class="context.backend">Back-end</button>
            <button class="button item" @click="selectInterest('Mobile')" :class="context.mobile">Mobile</button>
            <button class="button item" @click="selectInterest('AI')" :class="context.ai">AI</button>
            <button class="button item" @click="selectInterest('Other')" :class="context.other">Other</button>
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
            values: ['Front-end', 'Back-end', 'Mobile', 'AI', 'Other'],
            context: {
            frontend: '',
            backend: '',
            mobile: '',
            ai: '',
            other: ''
      }
        }
    },
    methods: {
        selectInterest(value: string) {
            switch (value) {
                case 'Front-end':
                    this.$emit('InterestSelected', value);
                    this.changeButtonStyle(value);
                    break;
                case 'Back-end':
                    this.$emit('InterestSelected', value);
                    this.changeButtonStyle(value);
                    break;
                case 'Mobile':
                    this.$emit('InterestSelected', value);
                    this.changeButtonStyle(value);
                    break;
                case 'AI':
                    this.$emit('InterestSelected', value);
                    this.changeButtonStyle(value);
                    break;
                case 'Other':
                    this.$emit('InterestSelected', value);
                    this.changeButtonStyle(value);
                    break;
                default:
                    confirm('Please select an interest');
                    break;
            }
        },
        changeButtonStyle(value:string) {
            switch (value) {
                case 'Front-end':
                    this.context.frontend = 'frontend-selected';
                    this.context.backend = '';
                    this.context.mobile = '';
                    this.context.ai = '';
                    this.context.other = '';
                    break;
                case 'Back-end':
                    this.context.backend = 'backend-selected';
                    this.context.frontend = '';
                    this.context.mobile = '';
                    this.context.ai = '';
                    this.context.other = '';
                    break;
                break;
                case 'Mobile':
                    this.context.mobile = 'mobile-selected';
                    this.context.frontend = '';
                    this.context.backend = '';
                    this.context.ai = '';
                    this.context.other = '';
                    break;
                break;
                case 'AI':
                    this.context.ai = 'ai-selected';
                    this.context.frontend = '';
                    this.context.backend = '';
                    this.context.mobile = '';
                    this.context.other = '';
                    break;
                break;
                case 'Other':
                    this.context.other = 'other-selected';
                    this.context.frontend = '';
                    this.context.backend = '';
                    this.context.mobile = '';
                    this.context.ai = '';
                    break;
                break;
                default:

            }
        }
    }

});
</script>

<style scoped>
.titulo {
    font-family: Poppins;
    font-size: 1.85em;
    font-weight: 700;
    line-height: 3em;
    text-align: left;
    color: black;
    margin-bottom: 0.05em;
}

.item {
    font-family: Poppins;
    font-size:  1.5em;
    font-weight: 500;
    line-height: 2.25em;
    letter-spacing: 0em;
    text-align: center;
    color: black;
    width: 11.5em fixed;
    height: 4.25em hug;
    padding: 16px 40px 16px 40px;
    gap: 0.625em;
    border-radius: 0.5em 0.5em 0.5em 0.5em;
    border: 2px solid #000000;
    background-color: #FFCE00;
    margin: 0em 3em 0.6em 0em;
}

.frontend-selected{
    background: #000000;
    width: 11.5em fixed;
    height: 4.25em hug;
    padding: 16px 40px 16px 40px;
    gap: 0.625em;
    border-radius: 0.5em 0.5em 0.5em 0.5em;
    color: #FF8000;
    margin: 0em 3em 0.6em 0em;
}
.backend-selected{
    background: #000000;
    width: 11.5em fixed;
    height: 4.25em hug;
    padding: 16px 40px 16px 40px;
    gap: 0.625em;
    border-radius: 0.5em 0.5em 0.5em 0.5em;
    color: #FF8000;
    margin: 0em 3em 0.6em 0em;
}
.mobile-selected{
    background: #000000;
    width: 11.5em fixed;
    height: 4.25em hug;
    padding: 16px 40px 16px 40px;
    gap: 0.625em;
    border-radius: 0.5em 0.5em 0.5em 0.5em;
    color: #FF8000;
    margin: 0em 3em 0.6em 0em;
}
.ai-selected{
    background: #000000;
    width: 11.5em fixed;
    height: 4.25em hug;
    padding: 16px 40px 16px 40px;
    gap: 0.625em;
    border-radius: 0.5em 0.5em 0.5em 0.5em;
    color: #FF8000;
    margin: 0em 3em 0.6em 0em;
}
.other-selected{
    background: #000000;
    width: 11.5em fixed;
    height: 4.25em hug;
    padding: 16px 40px 16px 40px;
    gap: 0.625em;
    border-radius: 0.5em 0.5em 0.5em 0.5em;
    color: #FF8000;
    margin: 0em 3em 0.6em 0em;
}


.section-interest {
    width: 37.5em;
    height: 14em;
    gap:  1.5em;
    margin: 0em 0em 3em 1em;
}
</style>
```