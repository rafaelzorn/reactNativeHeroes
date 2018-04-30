import { http, AUTHENTICATION } from './Http'

export const getHeroes = () => (
    http.get(`characters?${AUTHENTICATION}`)
)
