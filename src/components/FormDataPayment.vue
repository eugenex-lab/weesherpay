<script setup>
import { Money3 } from 'v-money3'
import { ref, computed } from 'vue';

const amount = ref('0.00');

const config = computed(() => ({

    thousands: ',',
    disabled: false,
    disableNegative: false,
    prefix: '₦',
    precision: 2,

    minimumNumberOfCharacters: 3,
    masked: false, // Doesn't work with directive
}));


let contributionAmount = "";






</script>



<template>
  <div class="container__form">

      <div class="form_title">
          Enter contribution amount
      </div>
      <input    type="text"
                class="input__format"
                v-model="contributionAmount"
                @input="formatInput"
          >




      <money3  class="input__format" v-model="amount" v-bind="config" />






  </div>
</template>

<style scoped lang="scss">
div{

  //background-color: #e73b3b;
}

.form_title{
  width: 100%;
  color: var(--primary-blue-60, rgba(2, 7, 33, 0.6));
  text-align: left;
  font: 500 14px "Outfit", sans-serif;
  position: relative;
}

.input__format{
  background: var(--text-field-white, rgba(0, 0, 0, 0.05));
  border-radius: 10px;
  width: 100%;
  height: 80px;
  position: relative;
  border: none;
  margin-top: 10px;
  max-width: fit-content;
}

input[type=text] {

  box-sizing: border-box;
  border-radius: 4px;
  font-size: 26px;


  background-position: 10px 10px;
  background-repeat: no-repeat;
  padding: 12px 20px 12px 40px;
  transition: width 0.4s ease-in-out;
}

:focus-visible {
  outline: #4145a724 auto 61px;
}











</style>