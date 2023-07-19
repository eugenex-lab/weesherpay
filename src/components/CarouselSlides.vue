<script >


import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
import { ref } from 'vue'



export default {
  name: "CarouselSlides",
    components: { VueperSlides, VueperSlide },


  setup() {
      const currentSlide = ref(4)


      const slides = [
          // {
          //     title: 'Slide #1',
          //     content: 'Slide 1 content.'
          // },
          // {
          //     title: 'Slide #2',
          //     content: 'Slide 2 content.'
          // }

          { image: 'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aGFwcHklMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60' },
          { image: 'https://images.unsplash.com/photo-1527628217451-b2414a1ee733?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhhcHB5JTIwbW9kZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'},


          { image: 'https://images.unsplash.com/photo-1593878024377-b38927fc7689?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60'},
          { image: 'https://images.unsplash.com/photo-1545291730-faff8ca1d4b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60'},
          { image: 'https://images.unsplash.com/photo-1506956191951-7a88da4435e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60'},
      ]


    return {
slides,
        currentSlide

    };
  },
};


</script>

<template>

  <div class="container">
<!--    <h1>CarouselSlides</h1>-->

      <div class="topGallery">
          <div class="bigThing container">
              <div class="contain left">Rexy .T</div>
              <div class="contain right">Jul 28</div>
          </div>
          <vueper-slides
                  ref="vueperslides1"
                  :touchable="false"
                  :autoplay="false"
                  :bullets="false"
                  :arrows="false"
                  @slide="$refs.vueperslides2.goToSlide($event.currentSlide.index, { emit: false })"
                  fixed-height="100%"

          >

              <vueper-slide
                      v-for="(slide, i) in slides"
                      :key="i"
                      :image="slide.image"

              >
              </vueper-slide>

          </vueper-slides>

      </div>

      <div class="bottomGallery">

      <vueper-slides
              class="no-shadow thumbnails"
              ref="vueperslides2"
              @slide="$refs.vueperslides1.goToSlide($event.currentSlide.index, { emit: false })"
              :visible-slides="slides.length"
              fixed-height="75px"
              :bullets="true"
              :touchable="false"
              :gap="2.5"
              :arrows="false"


      >
          <vueper-slide
                  v-for="(slide, i) in slides"
                  :key="i"
                  :image="slide.image"
                  @click="$refs.vueperslides2.goToSlide(i)">
          </vueper-slide>
      </vueper-slides>


</div>


  </div>

</template>

<style scoped lang="scss">




.thumbnails {
  margin: auto;
  //max-width: 300px;
}

.thumbnails .vueperslide {
  box-sizing: border-box;
  border-radius: 10px;
  border: 1px solid #fff;
  transition: 0.3s ease-in-out;
  opacity: 0.7;
  cursor: pointer;
}

.thumbnails .vueperslide--active {
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
  opacity: 1;
  border-color: #000;
}
button.vueperslides__arrow.vueperslides__arrow--prev {
  display: none;
}

button.vueperslides__arrow.vueperslides__arrow--prev {
  display: none;
}

button.vueperslides__arrow.vueperslides__arrow--next {
  display: none;
}

button.vueperslides__arrow.vueperslides__arrow--next {
  display: none;
}

.vueperslides__inner {
  position: relative;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  width: 190rem;
}


.vueperslides__parallax-wrapper {
  width: 306rem;
}

.topGallery{
  //max-width: 20rem;
  height: 20rem;
  z-index: 9999;
  position: relative;
}
.bottomGallery{
  padding-top: 10px;
}

.container {
  width: 100%;
  max-width: 36rem;
  //padding-top: 2rem;
}

.thumbnails .vueperslide {
  box-sizing: border-box;
  border: 1px solid #fff;
  transition: 0.3s ease-in-out;
  opacity: 0.7;
  cursor: pointer;
  border-radius: 10px;
  height: 3rem;
  width: 45px;
  /* height: 104px; */
  width: 2rem;
  padding-top: 3.5rem;
}

.vueper-slides {
  border-radius: 10px; /* Replace 10px with the desired border radius value */
}

:focus-visible {
  outline: -webkit-focus-ring-color auto 1px;
  outline-color: red;
  //outline-style: ;
  //outline-width: ;
}

.vueperslide.vueperslide--active.vueperslide--visible {

  border: 1px solid #EBCE7E;
  border-radius: 10px;
}

.vueperslides__parallax-wrapper {
  border-radius: 10px;
}

/* corosuel cards subsection  */

.contain {
  padding: 0 29px 0 29px;
}

.contain.right {
  color: var(--primary-blue-60, rgba(2, 7, 33, 0.6));
  text-align: right;
  font: 400 14px/18px "Outfit", sans-serif;
  position: relative;
}

.contain.left {
  color: var(--primary-blue, #020721);
  font-size: 16px;
  font-family: Outfit;
  font-weight: 500;
  /* height: 6rem; */
  color: var(--primary-blue, #020721);
  text-align: left;
  font: 500 16px "Outfit", sans-serif;
  position: relative;

}

/* corosuel cards subsection  end */

/* the css handling the image content name and deadline */
.bigThing {
  position: absolute;
  display: flex;
  bottom: 0;
  width: 100%;
  height: 40px;
  background-color: azure;
  z-index: 9999;
  //border-radius: 0px 0px 10px 10px;
  background: rgba(248, 249, 255, 0.7);
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  justify-content: space-between;
  align-items: center;
}

img{
  object-fit: cover;
}

.vueperslide {
  white-space: normal;
  background-size: cover;
  flex-shrink: 0;
  display: block;
  width: 100%;
  position: relative;
  background-position: inherit;
}
.vueperslide, .vueperslide__image {
  /* background-position: center; */
}

//.vueperslides--fixed-height .vueperslides__inner, .vueperslides--fixed-height .vueperslides__parallax-wrapper, .vueperslides--fixed-height .vueperslide {
//  height: inherit;
//  border-radius: 0px 0px 10px 10px;
//}

// .vueperslides--fixed-height .vueperslide {
//  height: inherit;
//  border-radius: 10px 10px 10px 10px;
//}



</style>