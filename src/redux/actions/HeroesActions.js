import { getHeroes, getHeroComics } from '../../services/api/Heroes'
import { FETCH_HEROES, FETCH_HERO_COMICS } from '../types'

export const fetchHeroes = () => (
    async (dispatch) => {
        const heroes = await getHeroes()

        const action = {
            type: FETCH_HEROES,
            payload: heroes.data.data.results
        }

        dispatch(action)
    }
)

export const fetchHeroComics = (heroId) => (
    async (dispatch) => {
        const comics = await getHeroComics(heroId)

        const action = {
            type: FETCH_HERO_COMICS,
            payload: comics.data.data.results
        }

        dispatch(action)
    }
)
