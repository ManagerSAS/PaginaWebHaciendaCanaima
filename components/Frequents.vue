<template>
    <v-container fluid  id="Questions">
        <div justify="center" align="center" >
            <h1 class="mb-6 mt-5 titulos" >
                PREGUNTAS FRECUENTES
            </h1>
        </div>
        <v-row justify="center" align="center" class="mt-5">
            <v-col cols="12" lg="7" xl="7" md="10" sm="10">
                <v-expansion-panels popout>
                    <v-expansion-panel 
                        :readonly="readonly"
                        multiple 
                        height="150"
                        v-for="({pregunta,respuesta},index) in preguntas"
                        :key="index"
                        class="mb-4 text-blue-f-1em">
                        <v-expansion-panel-header style="color:#395730;" class="my-2">{{pregunta}}</v-expansion-panel-header>
                        <v-expansion-panel-content>
                            {{respuesta}}
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
export default ({
    data() {
        return{
            readonly: false,
            preguntas: [
                {pregunta:'1. ¿Puede cancelar mi reservación? Si cancelo, ¿Hay alguna multa?', respuesta:'Se aplica la política para cancelación de reservas  previamente garantizadas :En caso de incumplimiento por parte del CLIENTE y cancelación de la reservación y garantizado por la Hacienda Canaima 1 Agroturística (Revisar politicas)'},
                {pregunta:'2. ¿Puedo cancelar por fuerza mayor? ¿Qué debo hacer? ¿Cuanto de anticipación puedo hacerlo?', respuesta:'Las razones consideradas fuerza mayor son: calamidad doméstica, enfermedad o lesión grave, cambio de destino turístico. Para validar este parámetro debe existir evidencia demostrable de la condición. La anticipación depende del tipo de calamidad y el usuario se hará responsable de los costos administrativos.'},
                {pregunta:'3. ¿Cómo puedo acceder a otros planes?', respuesta:'Al momento de realizar contacto con Canaima , estaremos listos para asesorar su experiencia y le suministraremos toda la información.'},
                {pregunta:'4. ¿Cuánto tiempo de anticipación debo reservar? ', respuesta:'Dependiendo de la temporada , el tiempo sugerido es de 24 horas antes de la fecha de llegada.'},
                {pregunta:'5. ¿Cuáles son los requisitos para reservar?', respuesta:'Establecer contacto directo por medio de los canales de comunicación de la Hacienda Canaima 1.Verificar la disponibilidad de la propiedad en la fecha estimada.'},
                {pregunta:'6. ¿Cómo saber si mi reserva fue exitosa? ¿Qué hago si no recibí mi confirmación de reserva?', respuesta:'Recibirá la confirmación de la reserva. Establecer comunicación nuevamente con Canaima 1 para validar el proceso'},
                {pregunta:'7. ¿Cómo puedo ampliar o reducir la estancia en la Hacienda Canaima 1?', respuesta:'Debe realizar la consulta debido a que tanto ampliar o reducir la estadía está sujeto a la disponibilidad de la propiedad'},
                {pregunta:'8. ¿Puedo llevar a mi mascota?', respuesta:'Con previo aviso podrá ser admitida, nos reservamos el derecho a admitir más de una mascota.'},
                {pregunta:'9. ¿Qué es el avistamiento de aves?', respuesta:'Observación respetuosa y responsable de las aves silvestres .Toma de fotografías y videos de las aves silvestres en sus hábitats.'},
                {pregunta:'10. ¿Cuánto debo pagar para reservar?', respuesta:'Una vez realizado el proceso de reserva se suministrarán los medios de pago disponibles para realizar la garantía de la reserva aplicando los plazos y  las políticas correspondientes.'},
                {pregunta:'11. ¿Qué debo hacer si vence mi reserva?', respuesta:'Debe realizar una nueva consulta de fechas para reprogramar la estadía, en caso de que no pueda llegar el día que ha reservado.'},
            ],
        }
    }
})
</script>