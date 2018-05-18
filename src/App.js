import React from 'react'
import { Provider } from 'react-redux'
import { Routes, Redux } from './configuration'

const App = () => (
    <Provider store={Redux.createStore()}>
        <Routes />
    </Provider>
)

export default App
