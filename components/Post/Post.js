import ApiHacienda from '../Api/ApiHacienda'

const forms = '/api/v1/forms'

export default {
    async SendMailer( data ){
        const response = await ApiHacienda.post( forms + '/SendMailer', data)
        return response.data
    },
    
}