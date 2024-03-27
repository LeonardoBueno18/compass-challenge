<template>
    <div class="column is-half">
        <section class="section section__content">
            <img class="compass__img" src="../assets/logo.png" alt="Compass Uol Icon" />
            <h1 class="title">Let’s discuss on something <span class="color__title">COOL </span>together</h1>
            <ul class="list">
                <li class="list__item">
                    <img class="icon__compass" src="../assets/email-icon.png"/>
                    <span class="span__list">challange@compass.com.br</span>
                </li>
                <li class="list__item">
                    <img class="icon__compass" src="../assets/telephone-icon.png"/>
                    <span class="span__list">+12 3456 3789</span>
                </li>
                <li class="list__item">
                    <img class="icon__compass" src="../assets/location-icon.png"/>
                    <span class="span__list">123 Street 456 House</span>
                </li>
            </ul>
        </section>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
    name: 'Content',

});
</script>

<style scoped>

.icon__compass{
    width: 1.5rem;
    height: 1.75rem;
    margin: 0em 1em -1.8em 0em;
}

.title {
    font-size: 3.5em;
    color: #FFFFFF;
    text-align: left;
    font-family: Poppins;
    font-weight: 700;
    line-height: 1.35em;
    margin-bottom: 1.3em;
    padding: 0em -0.9em 0em 0em;
}

.color__title {
    color: #FFCE00;
    font-size: 1em;
    font-family: Poppins;
    font-weight: 700;
    line-height: 1.35em;
}

.list {
    width: 31.1875em;
    height: 15.625em;
    gap: 0.5em;
}

.list__item {
    text-align: left;
    color: #FFFFFF;
    width: 31.1875em;
    height: 4.875em;
    gap: 1em;
    padding: 1.5rem 8rem 1.5rem 1.5rem;
    border-radius: 1em 0em 0em 0em;
}

.span__list {
    width: 18.3125rem;
    height: 1.875rem;
    font-family: Poppins;
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 1.875rem;
    text-align: left;
    color: #FFFFFF;
    margin: 0em 0em 0em 2em;
}

.compass__img {
    width: 27.0625rem;
    height: 3.75rem;
    margin-top: 10.5em;
    margin-bottom: 5em;
}

.section__content{
    margin: 0em 4em 0em 7em;
    padding: 0em 1em 0em 1em;
}

</style>
```