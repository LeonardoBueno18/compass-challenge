<template>
    <div class="column is-half">
        <section class="section">
            <img src="../assets/logo.png" />
            <h1 class="titulo">Let’s discuss
                on something <strong class="titulo-cor">COOL</strong> together</h1>
            <ul class="lista">
                <li class="lista-item">
                    <ion-icon name="mail-outline"></ion-icon>
                    <span>challange@compass.com.br</span>
                </li>
                <li class="lista-item">
                    <ion-icon name="call-outline"></ion-icon>
                    <span>12 3456 3789</span>
                </li>
                <li class="lista-item">
                    <ion-icon name="location-outline"></ion-icon>
                    <span>123 Street 456 House</span>
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
.titulo {
    font-size: 56px;
    color: #FFFFFF;
    text-align: left;
    align-items: center;
    font-family: Inter;
    font-weight: 700;
    line-height: 67.77px;
    margin-bottom: 2em;

}

.titulo-cor {
    color: #FFCE00;
}

.lista {
    width: 499px;
    height: 250px;
    gap: 8px;
    align-items: left;
}

.lista-item {
    text-align: left;
    color: #FFFFFF;
    width: 499px;
    height: 78px;
    gap: 16px;
    padding: 24px 128px 24px 24px;
    border-radius: 16px 0px 0px 0px;
}

span {
    width: 293px;
    height: 30px;
    font-family: Poppins;
    font-size: 20px;
    font-weight: 500;
    line-height: 30px;
    text-align: left;
    color: #FFFFFF;
}

ion-icon {
    color: #FFCE00;
    width: 24px;
    height: 24px;
    padding: 3px 0px 3px 0px;
    gap: 0px;
    opacity: 0px;
    margin: 0em 1em 0em 0em;
}

img {
    width: 433px;
    height: 60px;
    margin-bottom: 10em;
}

div {
    width: 499px;
    height: 725px;
    gap: 96px;
}

</style>
```