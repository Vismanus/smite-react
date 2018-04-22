import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux'

import theme from './theme'
import TopPanel from './components/MUI/TopPanel'
import InfoBox from './components/MUI/InfoBox'
import Setup from './components/MUI/Setup'
import reducers from './combinedReducers'
import sagas from './components/sagas'
import './App.css'

const sagaMiddleware = createSagaMiddleware()
/* eslint-disable no-underscore-dangle */
const store = createStore(
  reducers,
  {},
  applyMiddleware(sagaMiddleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
/* eslint-enable */

const App = () => (
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <TopPanel>Hi</TopPanel>
      <div id="hirez-api">
        <Setup />
        <InfoBox />
      </div>
    </MuiThemeProvider>
  </Provider>
)
sagaMiddleware.run(sagas)

export default App
