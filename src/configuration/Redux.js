import { applyMiddleware, createStore as create } from 'redux'
import thunk from 'redux-thunk'
import { rootReducer } from '../redux/reducers'

const initialState = {}

export default {
    createStore: () => {
        const store = create(rootReducer, initialState, applyMiddleware(thunk))
        return store
    }
}
