<template>
    <div class="intro-slider">
        <VueSlickCarousel v-bind="settings" :arrows="false"  justify="center" align="center">
            <div  v-for="(banner, index) in sliderData" :key="index" >
                <div class="intro-section overlay bg-cover" :style="{ backgroundImage: `url(${banner.bgImgSrc})` }">
                    <div class="container">
                        <v-row justify="center" align="center">
                            <v-col  justify="center" align="center" >
                                <div class="intro-content m-auto text-center">
                                    <div justify="center" align="center"  class="pb-lg-15 mb-lg-15">
                                        <img class="logoBanner" :src="banner.logo" alt="logo hacienda canaima">
                                    </div>
                                    <div class="titulo mt-lg-15 pt-lg-15">
                                        <p style="font-weight: 500">{{banner.text}}</p>
                                    </div>
                                    <button aria-label="RESERVA CON NOSOTROS" aria-hidden="true" to="/" class="ml-lg-15 mt-lg-15 btn-hover pa-1 pl-2 pr-2">RESERVA CON NOSOTROS</button>
                                </div>
                            </v-col>
                        </v-row>
                    </div>
                </div>
                </div>
        </VueSlickCarousel>
    </div>
</template>
<style lang="scss">
.slick-dots {
  background-color: transparent;
  position: relative;
  bottom: 4em;
}
.slick-dots button:before {
  color: white; 
  opacity: .25; 
  background-color: transparent; 
  content: "•"; 
  font-size: 20px; 
}
.slick-dots .slick-active button:before {
     color: white;
     opacity: 1;
     font-size: 20px;
}
</style>
<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
  export default {
     components: { VueSlickCarousel },
     data(){
        return{
            sliderData: [
                {
                    logo: "/Images/LogoGrande.png",
                    text: "DONDE EL BIENESTAR Y LA NATURALEZA SE CONECTAN",
                    bgImgSrc: "/Images/BANNER1.png"

                },
                {
                    logo: "/Images/LogoGrande.png",
                    text: "DONDE EL BIENESTAR Y LA NATURALEZA SE CONECTAN",
                    bgImgSrc: "/Images/BANNER2.png"
                },

            ],
            settings  :{
                "dots": true,
                "autoplay": true,
                "infinite": true,
                "autoplaySpeed": 4000,
                "slidesToShow": 1,
                "slidesToScroll": 1,
            },            
        }
     }
  }
</script>