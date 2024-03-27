<template>
    <section class="section__interest">
        <h3 class="interests__title">I’m interested in...</h3>
        <div class="buttons">
            <button class="button interest__item" @click="selectInterest('Front-end')"
                :class="context.frontend">Front-end</button>
            <button class="button interest__item" @click="selectInterest('Back-end')"
                :class="context.backend">Back-end</button>
            <button class="button interest__item" @click="selectInterest('Mobile')"
                :class="context.mobile">Mobile</button>
            <button class="button interest__item" @click="selectInterest('AI')"
                :class="context.ai">AI</button>
            <button class="button interest__item" @click="selectInterest('Other')"
                :class="context.other">Other</button>
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
        changeButtonStyle(value: string) {
            switch (value) {
                case 'Front-end':
                    this.context.frontend = 'frontend__selected';
                    this.context.backend = '';
                    this.context.mobile = '';
                    this.context.ai = '';
                    this.context.other = '';
                    break;
                case 'Back-end':
                    this.context.backend = 'backend__selected';
                    this.context.frontend = '';
                    this.context.mobile = '';
                    this.context.ai = '';
                    this.context.other = '';
                    break;
                case 'Mobile':
                    this.context.mobile = 'mobile__selected';
                    this.context.frontend = '';
                    this.context.backend = '';
                    this.context.ai = '';
                    this.context.other = '';
                    break;
                case 'AI':
                    this.context.ai = 'ai__selected';
                    this.context.frontend = '';
                    this.context.backend = '';
                    this.context.mobile = '';
                    this.context.other = '';
                    break;
                case 'Other':
                    this.context.other = 'other__selected';
                    this.context.frontend = '';
                    this.context.backend = '';
                    this.context.mobile = '';
                    this.context.ai = '';
                    break;
                default:
                    this.context.other = '';
                    this.context.frontend = '';
                    this.context.backend = '';
                    this.context.mobile = '';
                    this.context.ai = '';

            }
        }
    }

});
</script>

<style scoped>
.interests__title {
    font-family: Poppins;
    font-size: 1.85em;
    font-weight: 700;
    line-height: 3em;
    text-align: left;
    color: black;
    margin-bottom: 0.05em;
}

.interest__item {
    font-family: Poppins;
    font-size: 1.5em;
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

.frontend__selected {
    background: #000000;
    width: 11.5em fixed;
    height: 4.25em hug;
    padding: 16px 40px 16px 40px;
    gap: 0.625em;
    border-radius: 0.5em 0.5em 0.5em 0.5em;
    color: #FF8000;
    margin: 0em 3em 0.6em 0em;
}

.backend__selected {
    background: #000000;
    width: 11.5em fixed;
    height: 4.25em hug;
    padding: 16px 40px 16px 40px;
    gap: 0.625em;
    border-radius: 0.5em 0.5em 0.5em 0.5em;
    color: #FF8000;
    margin: 0em 3em 0.6em 0em;
}

.mobile__selected {
    background: #000000;
    width: 11.5em fixed;
    height: 4.25em hug;
    padding: 16px 40px 16px 40px;
    gap: 0.625em;
    border-radius: 0.5em 0.5em 0.5em 0.5em;
    color: #FF8000;
    margin: 0em 3em 0.6em 0em;
}

.ai__selected {
    background: #000000;
    width: 11.5em fixed;
    height: 4.25em hug;
    padding: 16px 40px 16px 40px;
    gap: 0.625em;
    border-radius: 0.5em 0.5em 0.5em 0.5em;
    color: #FF8000;
    margin: 0em 3em 0.6em 0em;
}

.other__selected {
    background: #000000;
    width: 11.5em fixed;
    height: 4.25em hug;
    padding: 16px 40px 16px 40px;
    gap: 0.625em;
    border-radius: 0.5em 0.5em 0.5em 0.5em;
    color: #FF8000;
    margin: 0em 3em 0.6em 0em;
}

.section__interest {
    width: 37.5em;
    height: 14em;
    gap: 1.5em;
    margin: 1.5em 0em 2.5em 1em;
}
</style>
```