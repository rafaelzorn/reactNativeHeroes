import React from 'react'
import { Provider } from 'react-redux'
import Redux from './configuration/Redux'
import Routes from './configuration/Routes'

const App = () => (
    <Provider store={Redux.createStore()}>
        <Routes />
    </Provider>
)

export default App
