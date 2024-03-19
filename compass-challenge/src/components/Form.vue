<template>
    <section class="form">
        <div class="column is-full">
            <Interests v-on:-interest-selected="setInterest"/>
            <input type="text" id="name" name="name" placeholder="Your Name" v-model="formData.name">
            <input type="email" id="email" name="email" placeholder="Your email" v-model="formData.email">
            <input type="text" id="message" name="message" placeholder="Your Message" v-model="formData.message">
            <button class="button is-black" @click="sendContact">Send Message
            </button>
        </div>
    </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import IForm from '@/interfaces/IForm';
import { useStore, store } from '@/store';
import { ADD_CONTACT } from '@/store/action-type';
import Interests from '@/components/Interests.vue';

export default defineComponent({
    name: 'Form',
    components: {
        Interests
    },
    data() {
        return {
            formData: [
                {
                    name: '',
                    email: '',
                    message: '',
                    interest: ''
                }
            ] as IForm[]
        }
    },
    methods: {
        sendContact() {
            store.dispatch(ADD_CONTACT, this.formData);
        },
        setInterest(value: string) {
            switch (value) {
                case 'Front-end':
                    this.formData[0].interest = value;
                    console.log('Front-end');
                    break;
                case 'Back-end':
                    this.formData[0].interest = value;
                    console.log('Back-end');
                    break;
                case 'Mobile':
                    this.formData[0].interest = value;
                    console.log('Mobile');
                    break;
                case 'AI':
                    this.formData[0].interest = value;
                    console.log('AI');
                    break;
                case 'Other':
                    this.formData[0].interest = value;
                    console.log('Other');
                    break;
                default:
                    confirm('Please select an interest');
                    break;
            }
        }
    },
    setup() {
        const store = useStore();
        return { store };
    }
});
</script>

<style scoped>
input {
    height: 44px;
    margin-bottom: 3em;
    width: 600px;
    border-bottom: 3px solid #000000;
    background-color: #FFCE00;
    font-weight: 700;
}

button {
    width: 600px;
    height: 78px;
    padding: 24px 64px 24px 64px;
    gap: 16px;
    border-radius: 16px;
    color: #000000;
}

.form {
    background: #FFCE00;
    width: 668px;
    height: 834px;
    padding: 72px 48px 72px 48px;
    gap: 64px;
    border-radius: 32px 0px 32px 2px;
    margin: 7em 0em 0em 3em;
}
</style>
```
