<template>
    <v-container fluid id="services">
        <v-row justify="center" align="center">
            <v-col cols="12" xl="8" lg="8" md="10" sm="12">
                <VueSlickCarousel class="ma-10 containerService" v-bind="settingsServices"  justify="center" align="center">
                    <div  justify="center" align="center" v-for="({src,NameService,Desc}, index) in sliderData" :key="index" >
                        <v-row justify="center" align="center" >
                            <v-col class="mt-8" cols="12" sm="12" md="6" lg="6">
                                <v-img
                                    width="80%" 
                                    :src="src"
                                />
                            </v-col>
                            <v-col class="textServices" justify="center" align="start" cols="12" sm="12" md="6" lg="6">
                                <h2 >{{NameService}}</h2><br>
                                <h4>Incluye</h4><br>
                                <p>{{Desc}}</p>
                            </v-col>
                        </v-row>
                    </div>
                </VueSlickCarousel>   
                <div justify="start" align="center" class="mb-5">
                    <v-btn class="rounded-lg white--text text-capitalize" color="#95bd20" >Reservar</v-btn>
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
                {src: '/Images/Galeria/foto1.png', NameService:'PLAN ALOJAMIENTO CANAIMA FAMILIAR', Desc:'Alojamiento no incluye desayuno, Grupos de  5 a 13 pax, Parqueadero, WIFI, Tarjeta de asistencia médica, Capacidad máxima familiar 13 personas, Uso de piscina, Cancha de micro, Cancha de voley, Servicio de auxiliar de cocina opcional (costo adicional)'},
                {src: '/Images/Galeria/foto2.png', NameService:'PLAN ALOJAMIENTO CANAIMA PAREJAS', Desc:'Alojamiento incluye desayuno, A Partir de 2 a 4 pax, Parqueadero, WIFI, Tarjeta de asistencia médica, Capacidad máxima familiar 13 personas, Uso de piscina, Cancha de micro, Cancha de voley, Servicio de auxiliar de cocina opcional (costo adicional).'},
                {src: '/Images/Galeria/foto3.png', NameService:'BIRDING TOUR CON ALOJAMIENTO', Desc:'Alojamiento 1D +1N ,Desayuno + refrigerios + almuerzo ,Uso de piscina ,Cancha de micro ,Cancha de voley ,Guía especializado ,Tour de observación y fotografía en caminata por los senderos ,Recorrido en tractor hasta la reserva ,Tarjeta de asistencia médica'},
                {src: '/Images/Galeria/foto4.png', NameService:'PASADIA BIRDING TOUR', Desc:'Guianza especializada ,Refrigerio ,Hidratación ,Almuerzo ,Tarjeta de asistencia médica ,Uso de piscina ,Cancha de micro ,Cancha de voley ,Tour de observación y fotografía en caminata por los senderos ,Recorrido en tractor hasta la reserva ,Grupos a partir de 10 pax máximo 20.'},
            ],
            settingsServices:{
                "arrows": true,
                "dots": false,
                "autoplay": true,
                "infinite": true,
                "autoplaySpeed": 4000,
                "slidesToShow": 1,
                "slidesToScroll": 1,
                "responsive": [
                    {
                    "breakpoint": 425,
                        "settings": {
                            "arrows": false,
                            "infinite": true,
                            "dots": false
                        }
                    },
                    {
                    "breakpoint": 375,
                        "settings": {
                            "arrows": false,
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
                    "breakpoint": 720,
                        "settings": {
                            "arrows": false,
                            "arrows": false,
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