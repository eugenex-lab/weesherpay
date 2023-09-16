<template>

<div  class="container">

    <div class="col1__row1">
        <h1  class="titleHeader">
            Grant Wish
        </h1>
        <h2 class="subtitle-header">
            You have opted to contribute towards the wishes
        </h2>
    </div>

    <div class="card_product_detail">
        <div class="leftSide">
            <img class="img__format" :src="currentSlideData.pic" alt="product img">
        </div>
        <div class="rightSide">
            <h1 class="card__header">

                {{currentSlideData.title }}



            </h1>

            <h2 class="card__sub__header">

                {{currentSlideData.leftToGrant }}

            </h2>

        </div>

    </div>

    <div class="form__container">
        <form-data-payment></form-data-payment>

    </div>




</div>
</template>

<script setup>

import { useStore } from '@/store';
import {computed, onBeforeMount} from "vue";
import router from "@/router";
import FormDataPayment from "@/components/FormDataPayment.vue";

const store = useStore()

// Initialize currentSlideData to an empty object if it's empty
if (!store.currentSlideData) {
    store.currentSlideData = {};
    router.push({ name: 'DetailView' });
}

onBeforeMount(() => {
    // Check if there is previously stored data in local storage
    const storedData = localStorage.getItem('currentSlideData');
    if (storedData) {
        // If data is found, set it as the currentSlideData in your Pinia store
        store.currentSlideData = JSON.parse(storedData);
    }else {
        // Extract the id from the current route's params
        const idFromRoute = router.currentRoute.value.params.id

        // Push to the payment-form route with the extracted id as a parameter
        router.push({ name: 'DetailView', params: { id: idFromRoute } })
    }
});

// Assign the currentSlideData to a variable that will be used in the template
const currentSlideData = computed(() => {
    // Check if currentSlideData is available in the store
    return store.currentSlideData || {};
});


</script>


<style scoped lang="scss">

.container{
    padding: 20px;
    margin: 20px;
    font-size: 16px;
    color: #333333;
    display: flex;
    flex-direction: column;
    align-items: center;

}

.titleHeader{
    color: var(--primary-blue, #020721);
    font-family: Outfit;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.48px;
}

.subtitle-header{
    color: var(--65-blue, rgba(2, 7, 33, 0.50));
    font-family: Outfit;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
}

.col1__row1{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    padding-bottom: 20px;
}

h1{
    margin: 0;
}

h2{
    margin: 5px 0 0 0;
}

.card_product_detail{
    max-width: 550px;
    width: 100%;
    background: rgba(255, 255, 255, 0.75);
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    /* padding: 15px 15px 7px 15px; */
    /* margin-bottom: 25px; */
    height: 120px;
    display: flex;
    flex-direction: row;




    .leftSide {
        width: 40%;
        display: flex;
        border-radius: 8px 0px 0px 8px;
        align-items: flex-start;
        flex-direction: column;
        justify-content: space-around;
        align-content: center;
        padding-left: 9px;
    }

    .rightSide{

        padding: 10px 20px 30px 20px;
        width: 60%;
        display: flex;
        flex-direction: column;
        align-content: flex-end;
        justify-content: space-around;

    }

}

.card__header{
    color: var(--primary-blue, #020721);
    text-align: left;
    font: 500 16px 'Outfit', sans-serif;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start
}

.card__sub__header{
    color: var(--primary-blue-60, rgba(2, 7, 33, 0.6));
    text-align: left;
    font: 500 14.47px/18.6px "Outfit", sans-serif;
    position: relative;
    display: flex;
    justify-content: flex-start;
    margin-top: -23px;
    flex-direction: row;
}

.img__format{
    height: 102px;
    width: 140px;
    height: 90%;
    width: 90%;
    /* width: 82.67px; */
    /* height: 82.67px; */
    border-radius: 6.2px;
    -o-object-fit: unset;
    object-fit: unset;
}

.form__container{
    padding-top: 50px;
    width: 100%;
}


</style>