import axios from "axios"

const END_POINTH = 'https://api.haciendacanaima1.com/'

const ApiHacienda = axios.create({
    baseURL: END_POINTH,
    headers:{
        "Access-Control-Allow-Origin": "*"
    }
})

export default ApiHacienda