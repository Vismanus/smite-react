import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux'

import theme from './theme'
import TopPanel from './components/MUI/TopPanel'
import Credentials from './modules/HirezApi/components/Credentials'
import Setup from './modules/HirezApi/components/Setup'
import Firestore from './modules/Firestore/components/Firestore'
import reducers from './combinedReducers'
import sagas from './modules/Firestore/sagas'
import './App.css'

const sagaMiddleware = createSagaMiddleware()

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  reducers,
  {},
  composeEnhancers(applyMiddleware(sagaMiddleware))
)
/* eslint-enable */

const App = () => (
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <TopPanel>Hi</TopPanel>
      <div id="list-container">
        <Setup />
        <Credentials />
      </div>
      <div id="list-container">
        <Firestore />
      </div>
    </MuiThemeProvider>
  </Provider>
)
sagaMiddleware.run(sagas)

export default App
