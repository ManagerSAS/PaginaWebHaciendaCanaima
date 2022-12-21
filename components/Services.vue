<template>
    <v-container fluid id="services">
        <v-row justify="center" align="center">
            <v-col cols="12" xl="8" lg="10s" md="11" sm="12">
                <VueSlickCarousel class="ma-10 mt-xl-8 mt-md-5 containerService" v-bind="settingsServices"  justify="center" align="center">
                    <div  justify="center" align="center" v-for="({src,NameService,Name1,adicional,Desc}, index) in sliderData" :key="index" >
                        <v-row justify="center" align="center" >
                            <v-col class="mt-8" cols="12" sm="12" md="6" lg="6">
                                <v-img
                                    width="350" 
                                    :src="src"
                                />
                            </v-col>
                            <v-col class="textServices" justify="center" align="start" cols="12" sm="12" md="6" lg="6">
                                <p class="text-capitalize titulosPlans mx-4 mr-2" >{{NameService}}<br> {{Name1}}</p><br>
                                <p>{{adicional}}</p>
                                <h4>Incluye</h4><br>
                                <p>{{Desc}}</p>
                            </v-col>
                        </v-row>
                    </div>
                </VueSlickCarousel>   
                <div justify="start" align="center" class="mb-5">
                    <v-btn class="text--btn white--text text-capitalize pa-1 pl-2 pr-2" width="200" color="#95bd20" href="https://api.whatsapp.com/send?phone=573114851304&text=Hola%2C%20me%20gustar%C3%ADa%20conocer%20m%C3%A1s%20informaci%C3%B3n%20sobre%20la%20Hacienda%20Canaima%201" >Reservar</v-btn>
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
                {src: '/Images/Plans/BirdingAlojamiento.png', NameService:'PLAN ALOJAMIENTO',Name1:' CANAIMA FAMILIAR',adicional:'Disfruta del plan que tenemos para tu familia. Disponible para grupos entre 5 y 13 personas.', Desc:'Piscina, cancha de microfútbol, cancha de voleibol, WIFI, parqueadero, tarjeta de asistencia médica y servicio de auxiliar de cocina (costo adicional).'},
                {src: '/Images/Plans/Parejas.png', NameService:'PLAN ALOJAMIENTO',Name1:' CANAIMA PAREJAS',adicional:'Celebra con la persona que más quieres rodeado de naturaleza: Disponible para grupos entre 2 y 4 personas. ', Desc:'Desayuno, piscina, cancha de microfútbol, cancha de voley, WIFI, parqueadero, tarjeta de asistencia médica y servicio de auxiliar de cocina (costo adicional).'},
                {src: '/Images/Plans/BirdingTour.png', NameService:'BIRDING TOUR ',Name1:'CON ALOJAMIENTO',adicional:'Creamos este plan para que disfrutes la experiencia completa con nosotros', Desc:'Alojamiento 1 día + 1 noche, desayuno + refrigerios + almuerzo, tour de observación y fotografía en caminata por los senderos, recorrido en tractor hasta la reserva, piscina, cancha de microfútbol, cancha de voley, WIFI, parqueadero y tarjeta de asistencia médica.'},
                {src: '/Images/Plans/Planfamiliar.png', NameService:'PASADÍA BIRDING TOUR',adicional:'Acompáñanos en este espacio para conocer las aves más representativas del Oriente Llanero. Disponible para grupos entre 10 y 20 personas.', Desc:'Refrigerios + almuerzo + hidratación, tour de observación y fotografía en caminata por los senderos, recorrido en tractor hasta la reserva, piscina, cancha de microfútbol, cancha de voley, WIFI, parqueadero y tarjeta de asistencia médica.'},
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