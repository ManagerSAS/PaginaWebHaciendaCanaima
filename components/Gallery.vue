<template>
    <v-container fluid id="galeria">
        <div justify="center" align="center" >
            <h1 class="mb-5 titulos" >
                GALERÍA DE FOTOS
            </h1>
        </div>
        <v-row justify="center" align="center">
            <v-col cols="12" xl="10" lg="10" md="10" sm="12">
                <VueSlickCarousel v-bind="settingsGallery" show-arrows justify="center" align="center">
                    <div justify="center" align="center" v-for="(src, index) in sliderData" :key="index" >
                        <v-img
                            width="80%"
                            class="ma-lg-5 ma-sm-2"
                            :src="src"
                        />
                    </div>
                </VueSlickCarousel>   
                <div justify="center" align="center" class="my-2">
                    <!-- <a  target="_blank" rel="noopener noreferrer"><button aria-label="RESERVA CON NOSOTROS" aria-hidden="true" >Contáctanos</button></a> -->
                    <v-btn color="#95bd20" width="200" class="text--btn white--text text-capitalize pa-1 pl-2 pr-2" href="https://api.whatsapp.com/send?phone=573114851304&text=Hola%2C%20me%20gustar%C3%ADa%20conocer%20m%C3%A1s%20informaci%C3%B3n%20sobre%20la%20Hacienda%20Canaima%201">
                        Contáctanos
                    </v-btn>
                </div>   
            </v-col>
        </v-row>
    </v-container>
</template>
<style lang="scss">
.slick-prev:before {
    content: url('../static/Images/chevron-left.png');
    /* color: #395730 !important; */
  }
.slick-next:before {
    content: url('../static/Images/chevron-right.png');
    /* color: #395730 !important; */
    /* font-size: 30px; */
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
                {src:'./Images/Galeria/1.png'},
                {src:'./Images/Galeria/2.png'},
                {src:'./Images/Galeria/3.png'},
                {src:'./Images/Galeria/4.png'},
                {src:'./Images/Galeria/5.png'},
                {src:'./Images/Galeria/6.png'},
                {src:'./Images/Galeria/7.png'},
                {src:'./Images/Galeria/8.png'},
                {src:'./Images/Galeria/9.png'},
                {src:'./Images/Galeria/10.jpg'},
                {src:'./Images/Galeria/11.jpg'},
                {src:'./Images/Galeria/12.jpg'},
                {src:'./Images/Galeria/13.jpg'},
                {src:'./Images/Galeria/14.jpg'},
                {src:'./Images/Galeria/15.jpg'},
                {src:'./Images/Galeria/16.jpg'},
                {src:'./Images/Galeria/17.jpg'},
            ],
            settingsGallery: {
                "dots": false,
                "autoplay": true,
                "infinite": true,
                "autoplaySpeed": 4000,
                "slidesToShow": 4,
                "slidesToScroll": 1,
                "responsive": [
                    {
                    "breakpoint": 1024,
                        "settings": {
                            "slidesToShow": 1,
                            "slidesToScroll": 1,
                            "infinite": true,
                            "dots": false
                        }
                    },
                    {
                    "breakpoint": 414,
                        "settings": {
                            "arrows": false,
                            "slidesToShow": 1,
                            "slidesToScroll": 1,
                            "infinite": true,
                            "dots": false
                        }
                    },
                    {
                    "breakpoint": 425,
                        "settings": {
                            "arrows": false,
                            "slidesToShow": 1,
                            "slidesToScroll": 1,
                            "infinite": true,
                            "dots": false
                        }
                    },
                    {
                    "breakpoint": 720,
                        "settings": {
                            "slidesToShow": 1,
                            "slidesToScroll": 1,
                            "infinite": true,
                            "dots": false
                        }
                    }
                ]
            },            
        }
     },
  }
</script>