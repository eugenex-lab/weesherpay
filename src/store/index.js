import { createPinia, defineStore } from 'pinia'

export const useStore = defineStore('storePay', {

  state: () => {
    return {
      count: 10,
      cards :[
        {
          id: 1,
          title: "Brand New iPhone 13",
          totalPrice: "$300.00",
          leftToGrant: "$42.50",
          progressValue: 10,
          maxValue: 100,
        },
        {
          id: 2,
          title: "Smartwatch",
          totalPrice: "$150.00",
          leftToGrant: "$25.00",
          progressValue: 25,
          maxValue: 100,
        },
        // Additional card objects
        {
          id: 3,
          title: "Wireless Earbuds",
          totalPrice: "$80.00",
          leftToGrant: "$15.00",
          progressValue: 18,
          maxValue: 100,
        },
        {
          id: 4,
          title: "Gift Card",
          totalPrice: "$50.00",
          leftToGrant: "$10.00",
          progressValue: 20,
          maxValue: 100,
        },

        // Add more card objects as needed
      ]

    }
  },
})


// Create the Pinia app
const pinia = createPinia();
export default pinia;