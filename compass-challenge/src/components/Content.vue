<template>
    <div class="column is-half">
        <section class="section section-content">
            <img class="compass-img" src="../assets/logo.png" alt="Compass Uol Icon" />
            <h1 class="title">Let’s discuss on something <span class="color-title">COOL </span>together</h1>
            <ul class="list">
                <li class="list-item">
                    <img class="icon-compass" src="../assets/email-icon.png"/>
                    <span class="span-list">challange@compass.com.br</span>
                </li>
                <li class="list-item">
                    <img class="icon-compass" src="../assets/telephone-icon.png"/>
                    <span class="span-list">+12 3456 3789</span>
                </li>
                <li class="list-item">
                    <img class="icon-compass" src="../assets/location-icon.png"/>
                    <span class="span-list">123 Street 456 House</span>
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

.icon-compass{
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

.color-title {
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

.list-item {
    text-align: left;
    color: #FFFFFF;
    width: 31.1875em;
    height: 4.875em;
    gap: 1em;
    padding: 1.5rem 8rem 1.5rem 1.5rem;
    border-radius: 1em 0em 0em 0em;
}

span {
    width: 18.3125rem;
    height: 1.875rem;
    font-family: Poppins;
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 1.875rem;
    text-align: left;
    color: #FFFFFF;
}

.span-list {
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

ion-icon {
    color: #FFCE00;
    width: 24px;
    height: 24px;
    padding: 3px 0px 3px 0px;
    margin: 0em 1em 0em 0em;
}

.compass-img {
    width: 27.0625rem;
    height: 3.75rem;
    margin-top: 10.5em;
    margin-bottom: 5em;
}

div {
    width: 31.1875rem;
    height: 45.3125rem;
    gap: 6rem;
}

.section-content{
    margin: 0em 4em 0em 7em;
    padding: 0em 1em 0em 1em;
}

</style>
```