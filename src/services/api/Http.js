import axios from 'axios'
import md5 from 'blueimp-md5'
import { API_KEY, PRIVATE_KEY } from 'react-native-dotenv'

const authentication = () => {
    const ts = Math.round(+new Date() / 1000)
    const hash = md5(ts + PRIVATE_KEY + API_KEY)
    
    return `ts=${ts}&apikey=${API_KEY}&hash=${hash}`
}

export const AUTHENTICATION = authentication()

export const http = axios.create({
    baseURL: 'https://gateway.marvel.com/v1/public/'
})
