<template>
    <v-container fluid>
        <v-row justify="center" align="center">
            <v-col justify="center" align="center" cols="12" sm="12" md="12" lg="12">
                <h1 class="mb-6 mt-5 titulos">
                    CONTACTÁNOS
                </h1>
            </v-col>
        </v-row>
        <v-row justify="center" align="center">
            <v-col justify="center" align="center" cols="12" sm="12" md="10" lg="7">
                <v-form ref="formContact" autocomplete="off">

                    <v-row justify="center" align="center">
                        <v-col  cols="12" sm="12" md="4" lg="4">
                            <v-text-field
                                :rules="nameRules"
                                v-model="name"
                                color="#395730"    
                                class="input"    
                                label="Nombre: " 
                                outlined
                                single-line
                                dense
                            ></v-text-field>
                        </v-col>
                        <v-col  cols="12" sm="12" md="4" lg="4">
                            <v-text-field
                                v-model="number"
                                :rules="nameRules"
                                type="number"
                                color="#395730"    
                                class="input"
                                label="Numero de teléfono: " 
                                outlined
                                dense
                            ></v-text-field>
                        </v-col>
                        <v-col  cols="12" sm="12" md="4" lg="4">
                            <v-text-field
                                v-model="email"
                                :rules="emailRules"
                                color="#395730"    
                                class="input"    
                                label="Correo electróníco: " 
                                outlined
                                dense
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row justify="center" align="center">
                        <v-col  cols="12" sm="12" md="4" lg="4">
                            <v-text-field
                                v-model="city"
                                :rules="nameRules"
                                color="#395730"    
                                class="input"    
                                label="Ciudad: " 
                                outlined
                                dense
                            ></v-text-field>
                        </v-col>
                        <v-col  cols="12" sm="12" md="4" lg="4">
                            <v-text-field
                                v-model="municipality"
                                :rules="nameRules"
                                color="#395730"    
                                class="input"    
                                label="Municipio:  " 
                                outlined
                                dense
                            ></v-text-field>
                        </v-col>
                        <v-col  cols="12" sm="12" md="4" lg="4">
                            <v-text-field
                                v-model="service"
                                :rules="nameRules"
                                color="#395730"    
                                class="input"      
                                label="Servicio de interés: " 
                                outlined
                                dense
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row justify="center" align="center">
                        <v-col  cols="12" sm="12" md="12" lg="12">
                            <v-textarea
                                v-model="messageText"
                                :rules="nameRules"
                                outlined
                                dense
                                color="#395730"
                                class="input"
                                label="Mensaje:"
                            ></v-textarea>
                        </v-col>
                    </v-row>
                    <v-row justify="start" align="center">
                        <v-col  cols="12" sm="12" md="6" lg="6">
                            <v-checkbox
                                v-model="terms"
                                label="Acepto Terminos y condiciones *"
                                color="#395730"
                                class="input"
                                value="red"
                                dense
                            ></v-checkbox>
                        </v-col>
                        <v-col>
                            <v-dialog
                                transition="dialog-bottom-transition"
                                max-width="600"
                            >
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn
                                        class="rounded-lg white--text"
                                        color="#95bd20"
                                        v-bind="attrs"
                                        v-on="on"
                                    >Ver politicas</v-btn>
                                </template>
                                <template v-slot:default="dialog">
                                <v-card>
                                    <v-toolbar
                                    color="#95bd20"
                                    dark
                                    >Politicas de tratamiento de datos</v-toolbar>
                                    <v-card-text>
                                    <div class=" pa-12">De acuerdo con la Ley Estatutaria 1581 de 2.012 de Protección de Datos y el Decreto 1377 de 2.013, le informamos que sus
                                        datos consignados en el presente formulario serán incorporados en una base de datos de responsabilidad de HACIENDA
                                        CANAIMA 1, siendo tratados con las siguientes finalidades: históricos, científicos, estadísticos, gestión administrativa,
                                        gestión de clientes, encuestas de opinión, prospección comercial, venta a distancia, gestión de cobros y pagos, gestión
                                        económica y contable. De igual modo, se le informa que la base de datos en la que se encuentran sus datos personales es
                                        tratada cumpliendo con las medidas de seguridad definidas en la política de tratamiento desarrollada por HACIENDA
                                        CANAIMA 1 a la cual se puede tener acceso a través de la página web www.haciendacanaima1.com. Usted puede ejercitar
                                        los derechos de acceso, corrección, supresión, revocación o reclamo por infracción sobre sus datos, mediante escrito
                                        dirigido a HACIENDA CANAIMA 1 por correo electrónico haciendacanaima1@gmail.com, indicando en el asunto el derecho
                                        que desea ejercitar, o mediante correo ordinario remitido a la dirección: Km 38 via Puerto Lopez -vereda Indostan
                                        Villavicencio, Meta, Colombia
                                    </div>
                                    </v-card-text>
                                    <v-card-actions class="justify-end">
                                    <v-btn
                                        text
                                        @click="dialog.value = false"
                                    >Close</v-btn>
                                    </v-card-actions>
                                </v-card>
                                </template>
                            </v-dialog>
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
                        <v-btn class="rounded-lg white--text" color="#95bd20" @click="SendMessage">Enivar formulario</v-btn>
                    </div>
                </v-form>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import Post from "./Post/Post"
export default {
    data(){
        return{
            name:'',
            number:'',
            email:'',
            city:'',
            municipality:'',
            service:'',
            messageText:'',
            terms:false,
            emailRules: [
                v => /.+@.+\..+/.test(v) || '',
            ],
            nameRules: [
                v => !!v || 'Campo requerido',
            ],
            snackbar: false,
            message: '',
            colorSnack: '',
            loading: false,
        }
    },
    methods:{
        async SendMessage(){
            this.loading = true
            this.snackbar = true
            this.colorSnack = 'green accent-4'
            this.message = 'Se esta procesando su informacion por favor espere...'
            if(this.name !== '' && this.number !== '' && this.email !== '' && this.city !== '' && this.municipality !== '' && this.service !== '' && this.message !== '' && this.terms){
                const data ={
                    name: this.name,
                    number: this.number,
                    email: this.email,
                    city: this.city,
                    municipality: this.municipality,
                    service: this.service,
                    messageText: this.messageText,
                }
                const response = await Post.SendMailer(data)
                if(response.error === false)
                {
                    this.loading = false
                    this.snackbar = true
                    this.colorSnack = 'green accent-4'
                    this.message = 'Su Formualrio fue enviado exitosamente'
                    setTimeout(()=>{ this.snackbar = false },5000)
                    this.$refs.formContact.reset()
                }
                else{
                    this.loading = false
                    this.snackbar = true
                    this.colorSnack = 'green accent-4'
                    this.message = 'Por favor intente nuevamente'
                    setTimeout(()=>{ this.snackbar = false },5000)
                }
            }else{
                this.loading = false
                this.snackbar = true
                this.colorSnack = 'red accent-3'
                this.message = 'Asegurate de diligenciar todos los campos incluyendo el captcha'
                setTimeout(()=>{ this.snackbar = false },3000)
            }
        }
    }
}

</script>