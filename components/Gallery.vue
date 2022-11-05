<template>
    <v-container fluid >
        <div justify="center" align="center" >
            <h1 class="mb-6 mt-5 titulos" >
                GALERÍA DE FOTOS
            </h1>
        </div>
        <v-row justify="center" align="center">
            <v-col cols="12" xl="10" lg="8" md="10" sm="12">
                <VueSlickCarousel v-bind="settings"  justify="center" align="center">
                    <div justify="center" align="center" v-for="(src, index) in sliderData" :key="index" >
                        <v-img
                             width="80%" 
                            :src="src"
                        ></v-img>
                    </div>
                </VueSlickCarousel>   
                <div justify="center" align="center">
                    <button aria-label="RESERVA CON NOSOTROS" aria-hidden="true" to="/" class="ml-lg-15 mt-lg-15 btn-hover pa-1 pl-2 pr-2">RESERVA CON NOSOTROS</button>
                </div>   
            </v-col>
        </v-row>
    </v-container>
</template>
<style >
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
  export default {
     components: { VueSlickCarousel },
     data(){
        return{
            sliderData: [
                {src: "/Images/Galeria/foto1.png"},
                {src: "/Images/Galeria/foto2.png"},
                {src: "/Images/Galeria/foto3.png"},
                {src: "/Images/Galeria/foto4.png"},
                {src: "/Images/Galeria/foto1.png"},
                {src: "/Images/Galeria/foto2.png"},
                {src: "/Images/Galeria/foto3.png"},
                {src: "/Images/Galeria/foto4.png"},
            ],
            settings  :{
                dots: false,
                autoplay: true,
                infinite: true,
                autoplaySpeed: 4000,
                slidesToShow: 4,
                slidesToScroll: 1,
                responsive: [
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
                            arrows: false,
                            "slidesToShow": 1,
                            "slidesToScroll": 1,
                            "infinite": true,
                            "dots": true
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