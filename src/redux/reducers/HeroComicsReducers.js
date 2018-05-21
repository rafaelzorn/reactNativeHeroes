import { FETCH_HERO_COMICS, HAS_MORE_COMICS, RESET } from '../types/HeroComics'

export const INITIAL_STATE = {
    comics: [],
    loading: true,
    currentPage: 1,
    hasMoreComics: true
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {   
        case FETCH_HERO_COMICS:
            return { 
                ...state, 
                comics: [...state.comics, ...action.payload], 
                loading: false, 
                currentPage: state.currentPage + 1
            }
        case HAS_MORE_COMICS:
            return { ...state, hasMoreComics: action.payload }
        case RESET: 
            return INITIAL_STATE
        default:
            return state
    }
}
