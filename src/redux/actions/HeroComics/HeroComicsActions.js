import { getHeroComics } from '../../../services/api/Heroes'
import { FETCH_HERO_COMICS, HAS_MORE, RESET } from '../../../redux/types/HeroComics'

export const fetchHeroComics = (heroId, page) => (
    async (dispatch) => {
        const currentOffset = (20 * (page - 1))

        const comics = await getHeroComics(heroId, currentOffset)

        const totalPages = Math.ceil(comics.data.data.total / 20)

        hasMore(!(totalPages === 0 || page === totalPages), dispatch)
        
        const action = {
            type: FETCH_HERO_COMICS,
            payload: comics.data.data.results
        }

        dispatch(action)
    }
)

export const reset = () => ({
    type: RESET
})

const hasMore = (more, dispatch) => (
    dispatch({
        type: HAS_MORE,
        payload: more
    })
)
