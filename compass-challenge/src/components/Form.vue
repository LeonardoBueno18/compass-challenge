<template>
    <div class="column is-half">
        <section class="form">
            <Interests v-on:-interest-selected="setInterest" />
            <form @submit.prevent="sendContact">
                <input type="text" id="name" name="name" placeholder="Your Name" v-model="formData[0].name">
                <input type="email" id="email" name="email" placeholder="Your email" v-model="formData[0].email">
                <textarea class="message" placeholder="Your message" v-model="formData[0].message"></textarea>
                <button class="button is-black" type="submit">
                    <img class="icon-compass" src="../assets/send-message.png"/>
                    Send Message
                </button>
            </form>
        </section>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import IForm from '@/interfaces/IForm';
import { useStore } from '@/store';
import { ADD_CONTACT } from '@/store/action-type';
import Interests from '@/components/Interests.vue';

export default defineComponent({
    name: 'Form',
    components: {
        Interests,
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
            this.store.dispatch(ADD_CONTACT, this.formData[0]);
            this.formData[0] = {
                name: '',
                email: '',
                message: '',
                interest: ''
            };
        },
        setInterest(value: string) {
            switch (value) {
                case 'Front-end':
                    this.formData[0].interest = value;
                    break;
                case 'Back-end':
                    this.formData[0].interest = value;
                    break;
                case 'Mobile':
                    this.formData[0].interest = value;
                    break;
                case 'AI':
                    this.formData[0].interest = value;
                    break;
                case 'Other':
                    this.formData[0].interest = value;
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
.compass-img {
    width: 27.0625rem;
    height: 3.75rem;
    margin-top: 10.5em;
    margin-bottom: 5em;
}
::-webkit-input-placeholder {
    text-decoration: none;
    color: #000000;
    font-family: Poppins;
    font-size: 1.5em;
    font-weight: 500;
    line-height: 2em;
    text-align: left;
}

input {
    height: 3.375em;
    margin: 0em 0em 4em 1em;
    width: 37.5em;
    border-bottom: 0.1875em solid #000000;
    background-color: #FFCE00;
}


textarea {
    height: 3.375em;
    margin: 0em 0em 4em 1em;
    width: 37.5em;
    border-bottom: 0.1875em solid #000000;
    background-color: #FFCE00;
    font-weight: 700;
}

button {
    width: 29.5em;
    height: 3.7em;
    padding: 1.5em 4em 1.5em 4em;
    gap: 16px;
    border-radius: 16px;
    color: #000000;
    font-family: Poppins;
    font-size: 20px;
    font-weight: 500;
    line-height: 30px;
    text-align: center;
    margin-top: 1.3em;
}

.form {
    background: hsl(48, 100%, 50%);
    width: 41.75em;
    height: 49.525em;
    padding: 2em 2em 0em 1.5em;
    gap: 4em;
    border-radius: 1.5em 0em 1.5em 0.125em;
    margin: 7em -10em 0em 3em;
}

div{
    margin: 0em 0em 0em 0em;
}
</style>
```
