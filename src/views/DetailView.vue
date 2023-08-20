<script setup >


import {ref} from "vue";
import AlertNote from "@/components/AlertNote.vue";
import CardDetailsCarousel from "@/components/CardDetailsCarousel.vue";
import { useStore } from '@/store'; // Import the Pinia store

// import {ref} from "vue"
// import {useStore} from "@/store"

const store = useStore();
const magicWande = ref(require('@/assets/magicStick.png'))
const currentSlideData = ref(null);


const contributeTowards = () => {
    // Access the current slide data from the Pinia store
    currentSlideData.value = store.currentSlideData;
    // You can now use currentSlideData.value to display the details or perform any other action
    console.log(JSON.stringify("xxxxxxx " + currentSlideData.value.color ))
};
</script>

<template>
  <div class="containerCenter">
      <div class="top-container">

      <div class="weesherName">
          Felixont Wishes
      </div>
      <div class="magicFormat">
          <img class="magicwande format" :src="magicWande" alt="Image Description"
          >
      </div>






      </div>

      <div class="section__format">
          <CardDetailsCarousel >

          </CardDetailsCarousel>

      </div>













      <div class="button-container">
          <button @click="contributeTowards" class="button blue">Complete wish</button>
          <button @click="completeWish"  class="button white">Contribute toward</button>

      </div>

      <alert-note></alert-note>












  </div>



</template>

<style scoped lang="scss">

.weesherName {
    color: var(--primary-blue, #020721);
    font: 500 16px "Outfit", sans-serif;
    padding-right: 8px;
    padding-left: 24px;

    /* width: 100%; */
    /* height: 34px; */
    font-family: "Outfit", serif;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    color: #020721;
    display: flex;
    flex-direction: row;
    padding-bottom: 1rem;
}


.top-container {
    display: flex;
    width: 100%;
    justify-content: flex-start;
    flex-direction: row;
    padding-bottom: 12px;
    //padding: 0px 20px 0px 20px;



}

img.magicwande.format {
  width: 20px;
  height: 20px;
  position: relative;
  overflow: hidden;
}

div#\31 {
    width: 100%;
    display: flex;
    justify-content: space-around;
    padding-top: 1rem;
    width: 100%;
    display: flex;
    justify-content: space-around;
    padding-top: 1rem;
    align-content: stretch;
    flex-direction: column;
}

img.magicwande.format {
width: 20px;
height: 20px;
position: relative;
overflow: hidden;
top: -4px;
transform: rotate(90deg);
}




/* Buttons */

.button-container {

    display: flex;
    justify-content: space-evenly;
    padding-top: 1rem;
    flex-direction: column;
    width: 100%;
    align-items: center;

}

//.button {
//    padding: 10px 20px;
//    background-color: #e73b3b;
//    color: #fff;
//    border: none;
//    border-radius: 5px;
//}

button.button.white {
    width: 155px;
    height: 40px;
    color: black;
    left: 31px;
    font-weight: 600;
    top: 747px;
    background: rgba(248, 249, 255, 0.65);
    border: 1px solid #000000;
    border-radius: 35px;
    cursor: grab;
    font-size: 12px;
    width: 335px;
    height: 44px;
    width: 85%;
    max-width: 340px;
    height: 44px;
    margin-top: 1rem;
}

//button.button.white:hover {
//    background: rgba(248, 249, 255, 0.65);
//    border: 1px solid #000000;
//    border-radius: 35px;
//    cursor: grab;
//}



button.button.blue {
    width: 155px;
    height: 40px;
    left: 31px;
    top: 747px;
    background: #4145A7;
    border: 1px solid #000000;
    border-radius: 35px;
    color: #F8F9FF;
    font-weight: 600;
    cursor: grab;
    font-size: 12px;
    width: 85%;
    max-width: 340px;
    height: 44px;

}

.section__format{
  //background-color: #e73b3b;
   max-width: 500px;
    width: 100%;
}


.containerCenter {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding-top: 40px;
}


/* Buttons ends here */

</style>