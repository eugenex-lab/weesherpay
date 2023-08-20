<script setup>
import {ref} from "vue";

const magicWande = ref(require('@/assets/infoImg.png'))
// const cardText = 'Weeshr ensures that Felixont gets the fulfilled wishes delivered on the d-day with desired preference. You can outrightly grant the wish or just contribute towards it.';



</script>

<template>
    <div class="layout__format">
        <div class="card">
            <div class="card__container">
                <img class="info_image" :src="magicWande" alt="Alert img ">

            <p class="line">           Weeshr ensures that <strong>Felixont</strong> gets the fulfilled wishes delivered on the d-day with desired preference. You can outrightly grant the wish or just contribute towards it.
            </p>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">

.card {
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  margin: 20px;
  display: flex;
  width: 335px;
  /* height: 73px; */
  border-radius: 10px;
  background: var(--card-white, #ECEEF5);
  flex-shrink: 0;
    width: 80%;
    max-width: 335px;

}

.content {
  display: flex;
  align-items: center;
}

.image {
  //margin-right: 10px;
}

.image img {
  border-radius: 5px;
  width: 14px;
  height: 14px;
}

.line {
  margin: 0;
  font-size: 16px;
  line-height: 1.5;
  color: var(--primary-blue, #020721);
  //font-family: Outfit;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 15px;
  text-align: justify;
}

.info_image{
  width: 14px;
  height: 14px;
  flex-shrink: 0;
  margin-top: 1px;
  padding-right: 6px;
}

.card__container {
  display: flex;
  flex-direction: row;
}

.layout__format{
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

</style>