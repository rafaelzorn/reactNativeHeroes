import { getHeroes } from '../../../services/api/Heroes'
import { FETCH_HEROES, SEARCH, HAS_MORE } from '../../types/Heroes'

export const fetchHeroes = (term, page) => (
    async (dispatch) => {
        const currentOffset = (20 * (page - 1))

        const heroes = await getHeroes(term, currentOffset)

        const totalPages = Math.ceil(heroes.data.data.total / 20)

        hasMore(!(totalPages === 0 || page === totalPages), dispatch)
        
        const action = {
            type: FETCH_HEROES,
            payload: heroes.data.data.results
        }

        dispatch(action)
    }
)

export const search = term => ({
    type: SEARCH,
    payload: term
})

const hasMore = (more, dispatch) => (
    dispatch({
        type: HAS_MORE,
        payload: more
    })
)
