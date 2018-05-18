import { combineReducers } from 'redux'
import HeroesReducers from './HeroesReducers'
import HeroComicsReducers from './HeroComicsReducers'

export const rootReducer = combineReducers({
    heroes: HeroesReducers,
    heroComics: HeroComicsReducers
})
