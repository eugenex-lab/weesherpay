<script setup>
import { ref, onMounted } from 'vue';

const isIOS = ref(false);

onMounted(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    isIOS.value = /(iphone|ipad|ipod|ios)/i.test(userAgent);
});
</script>

<template>
    <header class="header">
        <div class="logo">
            <img class="companyLogo" src="@/assets/Weeshr_Dark.svg" alt="weesher Logo">
        </div>
        <div class="store-download">
            <a v-if="isIOS" href="ios-download-link">
                <img class="appleStore" src="@/assets/weeshr-applestore.svg" alt="Download on iOS">
            </a>
            <a v-else href="#">
                <img class="androidStore" src="@/assets/weeshr-playstore.svg" alt="Download on Android">
            </a>
        </div>
    </header>
    <div class="container__format">

    </div>
</template>

<style scoped lang="scss">



.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px 0px 20px;
    background: rgba(248, 249, 255, 0.65);
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(20px);
}

.store-download a {
    display: inline-block;
    /* padding: 10px 20px; */
    color: #e73b3b;
    text-decoration: none;
    border-radius: 5px;
    width: 100%;
}

.androidStore {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.appleStore {
    width: 100%;
    height: 100%;
    border-radius: 6px;
    -o-object-fit: cover;
    object-fit: cover;
}

img.companyLogo {
    width: 153px;
    height: 100px;
    object-fit: contain;
}

.logo {
    //padding: 0 0 0 16px;

    display: inline-block;
    /* padding: 10px 20px; */
    color: #e73b3b;
    text-decoration: none;
    border-radius: 5px;
    width: 100%;
    max-width: 114px;
}

.container__format {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-evenly;
}



/* Media query to hide store download below 330px width */

@media (max-width: 330px) {
    .store-download {
        display: none;
    }
}


</style>