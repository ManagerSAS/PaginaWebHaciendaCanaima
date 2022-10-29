<template>
    <div class="container">
        <div justify="center" align="center" >
            <h1 class="mb-6 mt-5 titulos" >
                GALERÍA DE FOTOS
            </h1>
        </div>
        <v-row justify="center" align="center">
            <v-col cols="12" xl="8" lg="8" md="10" sm="12">
                <VueSlickCarousel v-bind="settings"  justify="center" align="center">
                    <div  v-for="(src, index) in sliderData" :key="index" >
                        <v-img
                             width="80%" 
                            :src="src"
                        ></v-img>
                    </div>
                    <template #prevArrow="arrowOption">
                        <div class="custom-arrow">
                            {{ arrowOption.currentSlide }}/{{ arrowOption.slideCount }}
                        </div>
                    </template>

                </VueSlickCarousel>
                
            </v-col>
        </v-row>
    </div>
</template>
<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  export default {
     components: { VueSlickCarousel },
     data(){
        return{
            sliderData: [
                {src: "/Images/BANNER1.png"},
                {src: "/Images/BANNER2.png"},
            ],
            settings  :{
                arrows: true,
                dots: false,
                autoplay: true,
                infinite: true,
                autoplaySpeed: 4000,
                slidesToShow: 1,
                slidesToScroll: 1,
            },            
        }
     },
  }
</script>