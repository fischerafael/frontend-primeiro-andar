import axios from 'axios'

const api = axios.create({
    baseURL: 'https://primeiro-andar.herokuapp.com'
})

export default api