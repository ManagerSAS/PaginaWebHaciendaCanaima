<template>
    <div>

        <div class="intro-slider d-none d-md-block d-lg-block d-xl-block">
            <VueSlickCarousel v-bind="settingsWelcome" :arrows="false"  justify="center" align="center"> -->
                <div  v-for="({bgImgSrc}, index) in sliderData" :key="index" >
                    <div class="intro-section bg-cover" :style="{backgroundImage: `url(${bgImgSrc})`,imageRendering: 'auto'}">
                        <div class="container">
                            <!-- <v-row justify="center" align="center">
                                <v-col  justify="center" align="center" >
                                    <div class="intro-content m-auto text-center">
                                        <div justify="center" align="center" >
                                            <img class="logoBanner" src="/Images/LogoGrande.png" alt="logo hacienda canaima">
                                        </div>
                                        <div justify="center" align="center" class="titulo">
                                            <p style="font-weight: 500">DONDE EL BIENESTAR Y LA NATURALEZA SE CONECTAN</p>
                                            <a href="https://api.whatsapp.com/send?phone=573114851304&text=Hola%2C%20me%20gustar%C3%ADa%20conocer%20m%C3%A1s%20informaci%C3%B3n%20sobre%20la%20Hacienda%20Canaima%201" target="_blank" rel="noopener noreferrer"><button aria-label="RESERVA CON NOSOTROS" aria-hidden="true"  class="mt-lg-15 btn-hover text-capitalize pa-1 pl-2 pr-2">Reserva con nosotros</button></a>
                                        </div>
                                    </div>
                                </v-col>
                            </v-row> -->
                        </div>
                    </div>
                    </div>
            </VueSlickCarousel>
        </div>
        <div class="intro-slider d-block d-md-none d-lg-none d-xl-none">
            <VueSlickCarousel v-bind="settingsWelcome" :arrows="false"  justify="center" align="center"> -->
                <div  v-for="({bgImgSrc}, index) in sliderDataCel" :key="index" >
                    <div class="intro-section bg-cover" :style="{backgroundImage: `url(${bgImgSrc})`,imageRendering: 'auto'}">
                        <div class="container">
                            <!-- <v-row justify="center" align="center">
                                <v-col  justify="center" align="center" >
                                    <div class="intro-content m-auto text-center">
                                        <div justify="center" align="center" >
                                            <img class="logoBanner" src="/Images/LogoGrande.png" alt="logo hacienda canaima">
                                        </div>
                                        <div justify="center" align="center" class="titulo">
                                            <p style="font-weight: 500">DONDE EL BIENESTAR Y LA NATURALEZA SE CONECTAN</p>
                                            <a href="https://api.whatsapp.com/send?phone=573114851304&text=Hola%2C%20me%20gustar%C3%ADa%20conocer%20m%C3%A1s%20informaci%C3%B3n%20sobre%20la%20Hacienda%20Canaima%201" target="_blank" rel="noopener noreferrer"><button aria-label="RESERVA CON NOSOTROS" aria-hidden="true"  class="mt-lg-15 btn-hover text-capitalize pa-1 pl-2 pr-2">Reserva con nosotros</button></a>
                                        </div>
                                    </div>
                                </v-col>
                            </v-row> -->
                        </div>
                    </div>
                    </div>
            </VueSlickCarousel>
        </div>
    </div>
</template>
<style >
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
                    bgImgSrc: "/Images/banners/BannerPc1.jpg"

                },
                {
                    bgImgSrc: "/Images/banners/BannerPc2.png"
                },
                {
                    bgImgSrc: "/Images/banners/BannerPc3.png"
                },
            ],
            sliderDataCel: [
                {
                    bgImgSrc: "/Images/banners/BannerCel1.png"
                },
                {
                    bgImgSrc: "/Images/banners/BannerCel2.png"
                },
                {
                    bgImgSrc: "/Images/banners/BannerCel3.png"
                },

            ],
            settingsWelcome:{
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