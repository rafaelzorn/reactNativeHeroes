import { http, AUTHENTICATION } from './Http'

export const getHeroes = () => (
    http.get(`characters?${AUTHENTICATION}`)
)

export const getHeroComics = (heroId) => (
    http.get(`characters/${heroId}/comics?${AUTHENTICATION}`)
)
