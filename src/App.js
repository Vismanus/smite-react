import React from 'react'
import { createStore, compose } from 'redux'

import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import reducers from './combinedReducers'

import theme from './theme'
import TopPanel from './components/TopPanel'
import SideMenu from './components/SideMenu'
import GeneralInfo from './modules/HirezApi/components/GeneralInfo'
import Signature from './modules/HirezApi/components/Signature'

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  reducers,
  {},
  composeEnhancers()
)
/* eslint-enable */

const styles = {
  container: {
    position: 'relative'
  },
  main: {
    position: 'absolute',
    left: 240,
    top: 64,
    margin: 24,
    width: 'calc(100% - 288px)',
    display: 'flex',
    justifyContent: 'space-around'
  }
}

const App = () => (
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <div id="container" style={styles.container}>
        <TopPanel />
        <SideMenu />
        <div id="main" style={styles.main}>
          <GeneralInfo />
          <Signature />
        </div>
      </div>
    </MuiThemeProvider>
  </Provider>
)

export default App
