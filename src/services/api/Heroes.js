import { http, AUTHENTICATION } from './Http'

export const getHeroes = (term, offset) => {
    let search = `&nameStartsWith=${term}`

    if (term === undefined || term === '') {
        search = null
    }

    return http.get(`characters?${AUTHENTICATION}&limit=20&offset=${offset}${search}`)
}

export const getHeroComics = (heroId, offset) => (
    http.get(`characters/${heroId}/comics?${AUTHENTICATION}&limit=20&offset=${offset}`)
)
