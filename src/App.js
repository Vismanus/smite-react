import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import theme from './theme'
import TopPanel from './components/MUI/TopPanel'
import InfoBox from './components/MUI/InfoBox'
import ControlPanel from './components/MUI/ControlPanel'
import reducers from './combinedReducers'
import './App.css'

const App = () => (
  <Provider
    /* eslint-disable no-underscore-dangle */
    store={createStore(
      reducers,
      {},
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )}
    /* eslint-enable */
  >
    <MuiThemeProvider theme={theme}>
      <TopPanel>Hi</TopPanel>
      <InfoBox />
      <ControlPanel />
    </MuiThemeProvider>
  </Provider>
)

export default App
