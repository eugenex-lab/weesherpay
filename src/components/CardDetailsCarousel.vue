<template>

        <Carousel
            id="gallery"
            :items-to-show="1.4"
            :items-to-scroll="3"
            :wrap-around="true"
            :transition="500"
            v-bind="settings"
            v-model="currentSlide"
            @slideChange="onSlideChange"

        >
            <template #addons>
                <Pagination />
            </template>

            <Slide v-for="card in cards" :key="card.id">
                <div class="carousel__item">
                    <h3 class="item__title">{{ card.title }}</h3>
                    <img class="imageCover" :src="card.pic" alt="Product Image" />
                    <div class="carousel__item-content">
                        <div class="price_container">
                            <span class="total_product_price">{{ card.totalPrice }}</span>
                            <span class="left_to_grant">{{ card.leftToGrant }}</span>
                        </div>
                        <div class="sub_price_container">
                            <span class="header_price">price</span>
                            <span class="header_price">to grant weesh</span>
                        </div>

                        <div class="line-10"></div>

                        <div class="gift__details">{{ card.description }}</div>

                        <div class="progress_container">
                            <progress
                                class="green-progress"
                                :value="card.progressValue"
                                :max="card.maxValue"
                            ></progress>
                        </div>
                    </div>
                </div>
            </Slide>
        </Carousel>






</template>

<script setup>
import {
    onMounted,

    // computed,
    reactive, ref, watch
} from 'vue'
import { Carousel, Pagination, Slide } from 'vue3-carousel'
import { useStore } from '@/store'
import 'vue3-carousel/dist/carousel.css'

const store = useStore()

const settings = reactive({
    itemsToShow: 1.4,
    itemsToScroll: 3,
    //  itemsToShow: 3.4,
    //  itemsToScroll: 5,
    transition: 500,

})

const currentSlide = ref(store.cardId)



const cards = store.cards





onMounted(() => {
    // Check if store.cardId is not set
    if (store.cardId === null || store.cardId === undefined) {
        // Set it to 0
        store.cardId = 0;
    }

    // Use the value of store.cardId to call setCurrentSlideData
    store.setCurrentSlideData(cards[store.cardId]);
});





// // Watch for changes in currentSlide
// watch(currentSlide, (newSlideIndex) => {
//     // This code will be executed whenever currentSlide changes
//     store.setCurrentSlideData(cards[newSlideIndex]);
// });

watch(currentSlide, (newSlideIndex) => {
    // Check if currentSlide is not empty
    if (currentSlide.value !== undefined && currentSlide.value !== null) {
        // Call setCurrentSlideData if currentSlide is not empty
        store.setCurrentSlideData(cards[newSlideIndex]);
    }
});




</script>


<style scoped>

/* carousal plugin starts */

.carousel__pagination {
    display: flex;
    justify-content: center;
    list-style: none;
    line-height: 0;
    margin: 10px 0 0;
    padding: 0;
}

.carousel__pagination-button {
    display: block;
    border: 0;
    margin: 0;
    cursor: pointer;
    padding: var(--vc-pgn-margin);
    background: transparent;
}

.carousel__pagination-button::after {
    display: block;
    content: '';
    width: var(--vc-pgn-height); /* Use the same value as height to create a circle */
    height: var(--vc-pgn-height);
    border-radius: 50%; /* Set border-radius to 50% for a circle shape */
    background-color: var(--vc-pgn-background-color);
}

.carousel__pagination-button:hover::after,
.carousel__pagination-button--active::after {
    background-color: var(--vc-pgn-active-color);
}

.carousel__slide {
    padding: 5px;
}

.carousel__viewport {
    perspective: 2000px;
}

.carousel__track {
    transform-style: preserve-3d;
}

.carousel__slide--sliding {
    transition: 0.5s;
}

.carousel__slide {
    opacity: 0.9;
    transform: rotateY(-20deg) scale(2%);
}



.carousel__slide--prev {
    opacity: 1;
    transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
    opacity: 1;
    transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
    opacity: 1;
    transform: rotateY(0) scale(1);
}

.carousel__item {

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: var(--primary-blue, #020721);
    font-family: Outfit;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    border-radius: 8px;
    background: var(--blur-whity, rgba(255, 255, 255, 0.75));
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.05);
    padding: 10px;
    cursor: grab;
    /* width: 21rem; */
    background: var(--blur-whity, rgba(255, 255, 255, 0.75));
    border-radius: 8px;
    /* width: 100%; */
    max-width: 315px;
    /* height: 330px; */
    position: relative;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.05);


}

.item__title{
    color: var(--primary-blue, #020721);
    text-align: left;
    font: 550 14px "Outfit", sans-serif;
    position: relative;
    width: 100%;
}

.carousel__item img {
    width: 100%;
    /* max-width: 300px; */
    height: auto;
    margin-bottom: 10px;
    border-radius: 6px;
    border-style: solid;
    border-color: var(--blur-whity, rgba(255, 255, 255, 0.75));
    border-width: 1px;
    /* width: 295px; */
    /* height: 155px; */
    position: relative;

    position: relative;
    max-width: 295px;
    height: 155px;
}

.carousel__slide--prev[data-v-07920f37] {
    opacity: 1;
    transform: rotateY(-10deg) scale(0.95);
    padding-right: 20px;
    /* height: 100%; */
}

@media (min-width: 576px) {
    .carousel__item {
        flex-direction: column;
        text-align: left;
        display: flex;
        align-items: center;
    }

    .carousel__item img {
        //max-width: 200px;
        margin-bottom: 0;
        //margin-right: 10px;
    }

    .carousel__item-content {
        flex: 1;
    }

    .carousel__item-content h3 {
        font-size: 1.2rem;
        margin-bottom: 5px;
    }

    .carousel__item-content p {
        font-size: 1rem;
        margin-bottom: 5px;
    }
}


/*  carousel plugin  ends */



.price_container {
    display: flex;
    padding-top: 0.8rem;
    justify-content: space-between;
}

span.total_product_price {
    font-family: 'Outfit';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    color: rgba(2, 7, 33, 0.5);
}
span.left_to_grant {
    font-family: 'Outfit';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    text-align: right;
    color: #020721;
}

.sub_price_container {
    display: flex;
    justify-content: space-between;
    padding-top: 0.3rem;
}
.header_price {
    font-family: 'Outfit';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: rgba(2, 7, 33, 0.5);
}

/* Progress bar */

.progress_container {
    padding-top: 0.3rem;
}

.green-progress {
    appearance: none;
    height: 5px;
    width: 100%;
    background-color: rgba(52, 56, 155, 0.1);; /* Set the background color of the unfilled portion to blue */
    border: none;
    border-radius: 10px;
}

.green-progress::-webkit-progress-value {
    background-color:   var(--primary-blue, #020721); /* Set the background color of the filled portion to red */
    border-radius: 5px;
}

.green-progress::-webkit-progress-bar {
    background-color: rgba(52, 56, 155, 0.1); /* Set the background color of the unfilled portion to blue */
    border-radius: 10px;
}

.green-progress::-moz-progress-bar {
    background-color:   var(--primary-blue, #020721); /* Set the background color of the filled portion to red */
    border-radius: 5px;
}

.green-progress::-ms-fill {
    background-color:  var(--primary-blue, #020721); /* Set the background color of the filled portion to red for Internet Explorer */
}

.green-progress::-ms-fill-lower {
//background: rgba(52, 56, 155, 0.1);
    border-radius: 10px;
    background-color: rgba(52, 56, 155, 0.1) ; /* Set the background color of the unfilled portion to blue for Internet Explorer */
}


.carousel__item-content {
    width: 100%;
    padding-bottom: 17px;
}


.carousel__pagination {
    display: flex;
    justify-content: flex-end;
    list-style: none;
    line-height: 0;
    padding: 0;
    width: 100%;
    flex-direction: row;
    padding-right: 69px;
    padding-top: 7px;
}

.line-10 {
    border-style: solid;
    border-color: var(--card-white, #eceef5);
    border-width: 1px 0 0 0;
    //width: 295px;
    height: 0px;
    position: relative;
    transform-origin: 0 0;
    transform: rotate(0deg) scale(1, 1);
    margin-top: 1rem;
}

.gift__details{
    color: var(--primary-blue, #020721);
    text-align: left;
    font: 400 12px/15px "Outfit", sans-serif;
    position: relative;
    width: auto;
    padding-top: 14px;
}

.carousel__viewport {
    width: auto;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.conatiner__format{
    width: 90%;
    display: flex;
}



</style>
