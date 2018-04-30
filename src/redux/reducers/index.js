import { combineReducers } from 'redux'
import HeroesReducers from './HeroesReducers'

export const rootReducer = combineReducers({
    heroes: HeroesReducers
})
