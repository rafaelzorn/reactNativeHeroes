import { FETCH_HEROES, FETCH_HERO_COMICS } from '../types'

export const INITIAL_STATE = {
    list: [],
    comics: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_HEROES:
            return { ...state, list: action.payload }
        case FETCH_HERO_COMICS:
            return { ...state, comics: action.payload }
        default:
            return state
    }
}
