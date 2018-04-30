import { FETCH_HEROES } from '../types'

export const INITIAL_STATE = {
    list: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_HEROES:
            return { ...state, list: action.payload }
        default:
            return state
    }
}
