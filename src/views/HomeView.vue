<template xmlns:src="http://www.w3.org/1999/xhtml">
  <div class="home">
      <CardStatusInformation></CardStatusInformation>

      <carousel-slides></carousel-slides>

      <div class="header_weesher">
          My Wishes <span class="align_img_vertical"> <img class="magicStick" src="@/assets/magicStick.png" alt="magic stick"> </span>
      </div>

      <weesh-card></weesh-card>


  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

import CarouselSlides from "@/components/CarouselSlides.vue";
import WeeshCard from "@/components/WeeshCard.vue";
import CardStatusInformation from "@/components/CardStatusInformation.vue";

export default {
  name: 'HomeView',
  components: {
      CardStatusInformation,
      WeeshCard,
      CarouselSlides
      // HelloWorld
  }
}
</script>


<style scoped lang="scss">

.home{

  padding: 0 30px;
  display: flex;
  flex-direction: column;
  align-content: stretch;
  flex-wrap: nowrap;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.header_weesher{

  width: 100%;
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

.magicStick{
  transform: rotate(-90deg);
  width: 20px;
  height: 20px;
}

span.align_img_vertical {
  padding-left: 0.5rem;
}


.align_img_vertical{

}

</style>


