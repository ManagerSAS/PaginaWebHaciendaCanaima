<template>
    <v-container fluid id="experiencas">
        <div justify="center" align="center" >
            <h1 class="mb-6 mt-5 titulos" >
                EXPERIENCIAS DE LOS CLIENTES
            </h1>
        </div>
        <v-row justify="center" align="center">
            <v-col cols="12" xl="7" lg="7" md="10" sm="12">
                <VueSlickCarousel class="container" v-bind="settingsExperiences" v-if="experiencia.length" justify="center" align="center">
                    <div  justify="center" align="center" v-for="({Foto,Nombre,comentarios,calificacion}, index) in experiencia" :key="index" >
                        <v-row  justify="center" align="center">
                            <v-col cols="12" sm="12" md="10" lg="10">
                                <div class="FondoFotoExperiences">
                                    <img
                                        v-if="Foto !=='' && Foto !== 'undefined'"
                                        class="Foto"
                                        :src="Foto"
                                    />
                                    <img class="Foto" v-else src="../static/Images/Galeria/foto1.png" alt="" srcset="">
                                    <h3 class="white--text nameExperiens" >{{Nombre}}</h3>
                                    <v-rating
                                        background-color="grey lighten-2"
                                        color="green"
                                        :empty-icon="emptyicon"
                                        :full-icon="fullicon"
                                        :half-icon="halficon"
                                        half-increments
                                        length="5"
                                        size="20"
                                        readonly
                                        :value="calificacion"
                                    ></v-rating>
                                </div>
                                <p class="Testiminio mt-2">{{comentarios}}</p>
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
<style>
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
import Post from "./Post/Post"
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
  export default {
     components: { VueSlickCarousel },
     data(){
        return{
            emptyicon:'mdi-heart-outline',
            fullicon:'mdi-heart',
            halficon:'mdi-heart-half-full',
            experiencia:[],
            settingsExperiences:{
                "arrows": true,
                "dots": false,
                "autoplay": true,
                "infinite": true,
                "autoplaySpeed": 4000,
                "slidesToShow": 2,
                "slidesToScroll": 1,
                "responsive": [
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
                    "breakpoint": 375,
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
                            "dots": true
                        }
                    }
                ]
            },            
        }
     },
     mounted(){
        this.Experiences();
     },
     methods:{
        async Experiences(){
            const response = await Post.ConsultComment(this.city); 
            response.results.forEach((element) => {
                this.experiencia.push({
                    Nombre: element.Nombre,
                    comentarios: element.comentarios,
                    calificacion: element.calificacion,
                    Foto:element.Foto,
                })  
            }); 
            console.log(this.experiencia)

        }
     },
  }
</script>