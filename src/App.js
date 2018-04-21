import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import theme from './theme'
import Hirez from './modules/Hirez'
import logo from './logo.png'
import reducers from './combinedReducers'
import './App.css'

const welcome = "Welcome to Sean's experimental Smite app using React!"

const App = () => (
  <Provider
    store={createStore(
      reducers,
      {},
      window.__REDUX_DEVTOOLS_EXTENSION__ && // eslint-disable-line no-underscore-dangle
        window.__REDUX_DEVTOOLS_EXTENSION__() // eslint-disable-line no-underscore-dangle
    )}
  >
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{welcome}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Hirez />
      </div>
    </MuiThemeProvider>
  </Provider>
)

export default App
