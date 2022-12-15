<template>
    <div>
        <v-btn
            class="v-btn--politicas elevation-5"
            fab
            dark
            color="#395730"
            @click="dialogPoliticas= true" 
            >
          <v-icon >
            mdi-cookie-outline  mdi-36px
          </v-icon>
        </v-btn>
        <v-dialog
            v-model="dialogPoliticas"
            transition="dialog-bottom-transition"
            max-width="700"
        >
            <v-card class="pa-5"> 
                <v-row justify="center" align="center">
                    <v-col>
                        <h2 class="titulos">Politica de tratamiento de datos</h2>
                        <div class="pa-5">De acuerdo con la Ley Estatutaria 1581 de 2.012 de Protección de Datos y el Decreto 1377 de 2.013, le informamos que sus
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
                    </v-col>
                </v-row>
                <v-row justify="center" align="center">
                    <v-col >
                        <h2 class="titulos">Politica de Cancelacion de reserva</h2>
                        <div class="pa-5">Se aplica la política para cancelación de reservas  previamente garantizadas:En caso de incumplimiento por parte del CLIENTE y cancelación de la reservación y garantizado por la Hacienda Canaima 1 
                            Agroturística se aplicarán las siguientes penalizaciones que el CLIENTE se compromete a reconocer y pagar
                        </div>
                        <div justify="center" align="center">
                            <img  src="../static/Images/politicasCancelacion.png" width="80%" alt="" srcset="">
                        </div>
                    </v-col>
                </v-row>
            </v-card>
        </v-dialog>
    </div>
</template>
<script>
export default ({
    data: () => ({
        dialogPoliticas: false,
    })
})
</script>


<style>
  /* This is for documentation purposes and will not be needed in your application */
  .v-btn--politicas {
    bottom: 20px;
    position: fixed;
    z-index: 10; 
    right: 10px; 
  }
</style>