<script setup>



// import {ref} from "vue";
import { useRouter } from 'vue-router';
import {useStore} from "@/store"



const storePay = useStore()



      const  router = useRouter();
        // const cards = ref([
        //     {
        //         id: 1,
        //         title: "Brand New iPhone 13",
        //         totalPrice: "$300.00",
        //         leftToGrant: "$42.50",
        //         progressValue: 10,
        //         maxValue: 100,
        //     },
        //     {
        //         id: 2,
        //         title: "Smartwatch",
        //         totalPrice: "$150.00",
        //         leftToGrant: "$25.00",
        //         progressValue: 25,
        //         maxValue: 100,
        //     },
        //     // Additional card objects
        //     {
        //         id: 3,
        //         title: "Wireless Earbuds",
        //         totalPrice: "$80.00",
        //         leftToGrant: "$15.00",
        //         progressValue: 18,
        //         maxValue: 100,
        //     },
        //     {
        //         id: 4,
        //         title: "Gift Card",
        //         totalPrice: "$50.00",
        //         leftToGrant: "$10.00",
        //         progressValue: 20,
        //         maxValue: 100,
        //     },
        //
        //     // Add more card objects as needed
        // ]);
        // const navigateToCardDetails = (card) => {

// router.push({ name: 'DetailView', params: { id: card.id } });
        //
        // };

        const navigateToCompleteWish = (card) => {
            storePay.setCardId(card.id)
            router.push({ name: 'DetailView', params: { id: card.id } });
        };

        const navigateToContribute = (card) => {
            storePay.setCardId(card.id)
            router.push({ name: 'DetailView', params: { id: card.id } });
        };










</script>

<template>


            <div class="cardContainer"   v-for="card in storePay.cards" :key="card.id" >
                <h3 class="giftTitle">{{ card.title }}</h3>
                <div class="price_container">
                    <span class="total_product_price">{{ card.totalPrice }}</span>
                    <span class="left_to_grant">{{ card.leftToGrant }}</span>
                </div>
                <div class="sub_price_container">
                    <span class="header_price">price</span>
                    <span class="header_price">to grant weesh</span>
                </div>
                <div class="progress_container">
                    <progress class="green-progress" :value="card.progressValue" :max="card.maxValue"></progress>
                </div>
                <div class="button-container">
                    <button @click="navigateToCompleteWish(card)"  class="button white">Contribute toward</button>
                    <button @click="navigateToContribute(card)" class="button blue">Complete wish</button>
                </div>
            </div>



</template>

<style scoped lang="scss">
h3 {
    margin: 0;
}
.giftTitle{

    width: auto;

    font-family: "Outfit", serif;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    color: #020721;
    text-align: left;

}

.cardContainer{
    max-width: 550px;
    width: 90%;
    height: 165px;
    background: rgba(255, 255, 255, 0.75);
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    padding: 15px 15px 7px 15px;
    margin-bottom: 25px;

}

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
    height: 7px;
    width: 100%;
    background-color: rgba(52, 56, 155, 0.1);; /* Set the background color of the unfilled portion to blue */
    border: none;
    border-radius: 10px;
}

.green-progress::-webkit-progress-value {
    background-color:  rgba(2, 7, 33, 0.6); /* Set the background color of the filled portion to red */
    border-radius: 5px;
}

.green-progress::-webkit-progress-bar {
    background-color: rgba(52, 56, 155, 0.1); /* Set the background color of the unfilled portion to blue */
    border-radius: 10px;
}

.green-progress::-moz-progress-bar {
    background-color:  rgba(2, 7, 33, 0.6); /* Set the background color of the filled portion to red */
    border-radius: 5px;
}

.green-progress::-ms-fill {
    background-color:  rgba(2, 7, 33, 0.6); /* Set the background color of the filled portion to red for Internet Explorer */
}

.green-progress::-ms-fill-lower {
    //background: rgba(52, 56, 155, 0.1);
    border-radius: 10px;
    background-color: rgba(52, 56, 155, 0.1) ; /* Set the background color of the unfilled portion to blue for Internet Explorer */
}

/* progress bar ends here */


//@media (min-width: 768px) {
//    .cardContainer {
//        min-width: 400px;
//    }
//}
//
//@media (min-width: 1024px) {
//    .cardContainer {
//        min-width: 500px;
//    }
//}

/* Buttons */

.button-container {
    display: flex;
    justify-content: space-between;
    padding-top: 1rem;
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

}

//button.button.blue:hover {
//    background: #e1861f;
//    border: 1px solid #000000;
//    border-radius: 35px;
//    color: #F8F9FF;
//    font-weight: 600;
//    cursor: grab;
//}




/* Buttons ends here */




</style>