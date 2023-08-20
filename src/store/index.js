import { createPinia, defineStore } from 'pinia'
// import Cookies from 'js-cookie';

export const useStore = defineStore('storePay', {

  state: () => {
    return {
      currentSlideData: [],
      cardId: parseInt(localStorage.getItem('cardId') || '0', 10), // Initialize from localStorage

      cards: [
        {
          id: 1,
          title: "Brand New iPhone 13",
          totalPrice: "$300.00",
          leftToGrant: "$42.50",
          progressValue: 10,
          maxValue: 100,
          pic: "https://images.unsplash.com/photo-1596558450255-7c0b7be9d56a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
          description: "The latest iPhone with advanced features and stunning design.",
          color: "Space Gray"
        },
        {
          id: 2,
          title: "Smartwatch",
          totalPrice: "$150.00",
          leftToGrant: "$25.00",
          progressValue: 25,
          maxValue: 100,
          pic: "https://images.unsplash.com/photo-1631281956016-3cdc1b2fe5fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",
          description: "A smartwatch with various health and fitness tracking features.",
          color: "Black"
        },
        {
          id: 3,
          title: "Wireless Earbuds",
          totalPrice: "$80.00",
          leftToGrant: "$15.00",
          progressValue: 18,
          maxValue: 100,
          pic: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
          description: "High-quality wireless earbuds for an immersive audio experience.",
          color: "White"
        },
        {
          id: 4,
          title: "Gift Card",
          totalPrice: "$50.00",
          leftToGrant: "$10.00",
          progressValue: 20,
          maxValue: 100,
          pic: "https://plus.unsplash.com/premium_photo-1670509045675-af9f249b1bbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGdpZnQlMjBjYXJkfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
          description: "A versatile gift card to use for various online and offline purchases.",
          color: "N/A"
        }
        ,
        {
          id: 5,
          title: "Bluetooth Speaker",
          totalPrice: "$120.00",
          leftToGrant: "$60.00",
          progressValue: 50,
          maxValue: 100,
          pic: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1631&q=80",
          description: "A portable Bluetooth speaker for enjoying music on the go.",
          color: "Black"
        },
      ]
    }
  },

  mutations: {
    // setCurrentSlideData(data) {
    //   this.currentSlideData = data;
    // },
  },

  actions: {
    setCardId(cardId) {
      this.cardId = cardId - 1;

      // Update localStorage
      localStorage.setItem('cardId', this.cardId.toString());
    },

    setCurrentSlideData(data) {
      this.currentSlideData = data;
    },
  },


})


// Create the Pinia app
const pinia = createPinia();
export default pinia;