<template>
    <v-container fluid>
        <div justify="center" align="center" >
            <h1 class="mb-6 mt-5 titulos" >
                EXPERIENCIAS DE LOS CLIENTES
            </h1>
        </div>
        <v-row justify="center" align="center">
            <v-col cols="12" xl="7" lg="7" md="10" sm="12">
                <VueSlickCarousel class="container" v-bind="settings"  justify="center" align="center">
                    <div  justify="center" align="center" v-for="({src,Name,Desc}, index) in sliderData" :key="index" >
                        <v-row  justify="center" align="center">
                            <v-col cols="12" sm="12" md="10" lg="10">
                                <div class="FondoFotoExperiences">
                                    <v-img
                                        class="Foto"
                                        :src="src"
                                    ></v-img>
                                    <h3 class="white--text nameExperiens" >{{Name}}</h3>
                                </div>
                                <p class="Testiminio mt-2">{{Desc}}</p>
                            </v-col>
                        </v-row>
                    </div>
                </VueSlickCarousel>   
                <div justify="center" align="center">
                    <v-btn class="rounded-lg white--text" color="#95bd20" >COTIZACON NOSOTROS</v-btn>
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
                {src: "/Images/Galeria/foto1.png",Name:'PLANES Y ACTIVIDADES', Desc:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam'},
                {src: "/Images/Galeria/foto1.png",Name:'PLANES Y ACTIVIDADES', Desc:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam'},
                {src: "/Images/Galeria/foto1.png",Name:'PLANES Y ACTIVIDADES', Desc:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam'},
    
            ],
            settings  :{
                arrows: true,
                dots: false,
                autoplay: true,
                infinite: true,
                autoplaySpeed: 4000,
                slidesToShow: 2,
                slidesToScroll: 1,
                responsive: [
                    {
                    "breakpoint": 1024,
                        "settings": {
                            "slidesToShow": 1,
                            "slidesToScroll": 1,
                            "infinite": true,
                            "dots": true
                        }
                    },
                    {
                    "breakpoint": 414,
                        "settings": {
                            arrows: false,
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
                            "dots": true
                        }
                    }
                ]
            },            
        }
     },
  }
</script>