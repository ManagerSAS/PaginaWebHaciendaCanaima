<template>
   <div >
    <v-btn
        class="v-btn--example elevation-5"
        fab
        dark
        color="#395730"
        @click="dialog= true"
    >
      <v-icon dark>
        mdi-comment-text-multiple-outline
      </v-icon>
    </v-btn>
    <v-row justify="center">
    <v-dialog
      v-model="dialog"
      max-width="800px"
      transition="dialog-bottom-transition"
    >
      <v-card >
        <v-row justify="center" align="center">
            <v-col justify="center" align="center">
                <h1 class="mb-6 mt-5 titulos" >
                    Califica tu experiencia
                </h1>
                <v-rating
                    v-model="rating"
                    background-color="grey lighten-2"
                    color="green"
                    :empty-icon="emptyicon"
                    :full-icon="fullicon"
                    :half-icon="halficon"
                    half-increments
                    length="5"
                    size="50"
                ></v-rating>
            </v-col>
        </v-row>
        <v-row justify="center" align="center">
            <v-col cols="12" lg="6" md="6" sm="12">
                <v-text-field
                    :rules="nameRules"
                    v-model="nombre"
                    color="#395730"    
                    class="input"    
                    label="Nombre: " 
                    outlined
                    single-line
                    dense
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row justify="center" align="center">
            <v-col  cols="12" lg="6" md="6" sm="12">
                <v-textarea
                    v-model="comentario"
                    :rules="nameRules"
                    outlined
                    dense
                    :counter="255"
                    :maxlength="255"
                    color="#395730"
                    class="input"
                    label="Mensaje:"
                ></v-textarea>
            </v-col>
        </v-row>
        <v-row justify="center" align="center">
            <v-col  cols="12" lg="6" md="6" sm="12">
                <p>Campo no Obligatorio*</p>
                <v-file-input
                    v-model="file"
                    multiple
                    type="file"
                    accept="image/*"
                    color="teal darken-3"
                    label="Subir una foto"
                    @change="onSelectedFiles(file)"
                ></v-file-input>
                <cropper
                    class="cropper"
                    :src="foto"
                    :stencil-props="{
                        aspectRatio: 1/1
                    }"
                @change="change"
                ></cropper>
            </v-col>
        </v-row>
        <v-row justify="center" align="center">
            <v-col justify="center" align="center" cols="12" sm="12" md="12" lg="12">
                <v-snackbar
                    class="pb-8"
                    :timeout="3000"
                    :value="snackbar"
                    :color="colorSnack"
                    rounded="pill"
                > {{ message }} </v-snackbar>
            </v-col>
        </v-row>
        <v-row justify="center" align="center">
            <v-col justify="center" align="center" cols="12" sm="12" md="12" lg="12">
                <v-progress-circular
                    v-show="loading"
                    indeterminate
                    color="teal darken-3"
                ></v-progress-circular>
            </v-col>
        </v-row>
        <div justify="center" align="center">
            <v-btn class="rounded-lg white--text" color="#95bd20" @click="Enviar">Enivar comentario</v-btn>
        </div>
      </v-card>
    </v-dialog>
  </v-row>
   </div>
</template>
<script>
import Post from "./Post/Post"
import { Cropper } from 'vue-advanced-cropper'
import 'vue-advanced-cropper/dist/style.css';
  export default {
    components: {
        Cropper
    },
    data: () => ({
        snackbar: false,
        message: '',
        colorSnack: '',
        loading: false,
        dialog: false,
        emptyicon:'mdi-heart-outline',
        fullicon:'mdi-heart',
        halficon:'mdi-heart-half-full',
        rating:'',
        nombre:'',
        comentario:'',
        file:'',
        foto:'',
        urlfoto:'',
        foto1:'',
        nameRules: [
                v => !!v || 'Campo requerido',
            ],
    }),

    methods:{
        async onSelectedFiles(file){
            const formdata = new FormData();
                formdata.append("upload_preset", "Imagenes");
                formdata.append("file", file[0]);
                const requestOptions = {
                    method: 'POST',
                    body: formdata,
                    redirect: 'follow'
                };
                await fetch("https://api.cloudinary.com/v1_1/dlizqpewl/image/upload", requestOptions)
                .then(response => response.json())
                .then(data => {
                    this.foto = data.url
                })
        },
        change({ coordinates, canvas }) {
            this.coordinates = coordinates
            this.foto1 = canvas.toDataURL()
            this.enviarImg()
        },
        async enviarImg(){
            const formdata = new FormData();
            formdata.append("upload_preset", "Imagenes");
            formdata.append("file", this.foto1);
            const requestOptions = {
                method: 'POST',
                body: formdata,
                redirect: 'follow'
            };
            await fetch("https://api.cloudinary.com/v1_1/dlizqpewl/image/upload", requestOptions)
            .then(response => response.json())
            .then(data => {
                this.urlfoto = data.url
            })
        },
       async Enviar(){
            this.loading = true
            this.snackbar = true
            this.colorSnack = 'green accent-4'
            this.message = 'Se esta procesando su informacion por favor espere...'
            const data = {
                rating : this.rating,
                nombre : this.nombre,
                comentario : this.comentario,
                foto : this.urlfoto
            }
            console.log(data)
            const response = await Post.SendComment(data)
            if(response!== true){
                this.loading = false
                this.snackbar = true
                this.colorSnack = 'green accent-4'
                this.message = 'Gracias por dejar su comentario'
                this.dialog = false
            }

        }
    }
  }
</script>
<style>
  /* This is for documentation purposes and will not be needed in your application */
  .v-btn--example {
    bottom: 20px;
    position: fixed;
    z-index: 10; 
    left: 10px; 
  }
</style>