import { FETCH_HEROES, SEARCH, HAS_MORE } from '../types/Heroes'

export const INITIAL_STATE = {
    heroes: [],
    loading: true,
    search: '',
    currentPage: 1,
    hasMore: true
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {   
        case FETCH_HEROES:
            return { 
                ...state, 
                heroes: [...state.heroes, ...action.payload], 
                loading: false, 
                currentPage: state.currentPage + 1
            }
        case SEARCH:
            return { 
                ...state, 
                search: action.payload, 
                heroes: [], 
                loading: true, 
                currentPage: 1,
                hasMore: true
            }    
        case HAS_MORE:
            return { ...state, hasMore: action.payload }
        default:
            return state
    }
}
