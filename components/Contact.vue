<template>
    <div>
        <v-row justify="center" align="center">
            <v-col justify="center" align="center" cols="12" sm="12" md="12" lg="12">
                <h1 class="mb-6 text-raleway" style="color:#003B4C; font-size: 30px; font-weight: 800;">
                    CONTACTÁNOS
                </h1>
            </v-col>
        </v-row>
        <v-row justify="center" align="center">
            <v-col justify="center" align="center" cols="12" sm="12" md="10" lg="7">
                <v-row justify="center" align="center">
                    <v-col  cols="12" sm="12" md="4" lg="4">
                        <v-text-field
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
                            color="#395730"    
                            class="input"
                            label="Numero de teléfono: " 
                            outlined
                            dense
                        ></v-text-field>
                    </v-col>
                    <v-col  cols="12" sm="12" md="4" lg="4">
                        <v-text-field
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
                            color="#395730"    
                            class="input"    
                            label="Ciudad: " 
                            outlined
                            dense
                        ></v-text-field>
                    </v-col>
                    <v-col  cols="12" sm="12" md="4" lg="4">
                        <v-text-field
                            color="#395730"    
                            class="input"    
                            label="Municipio:  " 
                            outlined
                            dense
                        ></v-text-field>
                    </v-col>
                    <v-col  cols="12" sm="12" md="4" lg="4">
                        <v-text-field
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
                            outlined
                            dense
                            color="#395730"
                            class="input"
                            name=""
                            label="Mensaje:"
                        ></v-textarea>
                    </v-col>
                </v-row>
                <v-row justify="start" align="center">
                    <v-col  cols="12" sm="12" md="12" lg="12">
                        <v-checkbox
                            label="Acepto Terminos y condiciones *"
                            color="#395730"
                            class="input"
                            value="red"
                            dense
                        ></v-checkbox>
                        <a href="">Leer terminos y condiciones*</a>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
        
    </div>
</template>