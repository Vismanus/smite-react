import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import theme from './theme'
import logo from './logo.png'
import Button from './components/MUI/Button'
import HirezText from './components/hirezText'
import './App.css'

const welcome = 'Welcome to Sean\'s experimental Smite app using React!'

const App = () => (
  <MuiThemeProvider theme={theme}>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">{welcome}</h1>
      </header>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      <Button color="primary" />
      <Button color="secondary" />
      <HirezText />
    </div>
  </MuiThemeProvider>
)

export default App
