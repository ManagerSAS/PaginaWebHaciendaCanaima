<template>
    <v-container fluid>
        <v-row justify="center" align="center">
            <v-col cols="12" xl="8" lg="8" md="10" sm="12">
                <VueSlickCarousel class="ma-10 containerService" v-bind="settings"  justify="center" align="center">
                    <div  justify="center" align="center" v-for="({src,NameService,Desc}, index) in sliderData" :key="index" >
                        <v-row  >
                            <v-col cols="12" sm="12" md="6" lg="6">
                                <v-img
                                     width="70%" 
                                    :src="src"
                                ></v-img>
                            </v-col>
                            <v-col class="textServices" align="start" cols="12" sm="12" md="6" lg="6">
                                <h2>{{NameService}}</h2>
                                <p>{{Desc}}</p>
                            </v-col>
                        </v-row>
                    </div>
                </VueSlickCarousel>   
                <div justify="center" align="center">
                    <v-btn class="rounded-lg white--text" color="#95bd20" >RESERVA CON NOSOTROS</v-btn>
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
                {src: "/Images/Galeria/foto1.png",NameService:'PLANES Y ACTIVIDADES', Desc:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. x ea commodo consequat'},
                {src: "/Images/Galeria/foto1.png",NameService:'PLANES Y ACTIVIDADES', Desc:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. x ea commodo consequat'},
                {src: "/Images/Galeria/foto1.png",NameService:'PLANES Y ACTIVIDADES', Desc:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. x ea commodo consequat'},
    
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