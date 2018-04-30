import { getHeroes } from '../../services/api/Heroes'
import { FETCH_HEROES } from '../types'

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
