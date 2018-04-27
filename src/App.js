import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import theme from './theme'
import TopPanel from './components/TopPanel'
import SideMenu from './components/SideMenu'
import RaisedButton from './components/RaisedButton'

const styles = {
  container: {
    position: 'relative'
  },
  main: {
    position: 'absolute',
    left: 240,
    top: 64
  }
}

const App = () => (
  <MuiThemeProvider theme={theme}>
    <div id="container" style={styles.container}>
      <TopPanel />
      <SideMenu />
      <div id="main" style={styles.main}>
        <RaisedButton>
          Button
        </RaisedButton>
      </div>
    </div>
  </MuiThemeProvider>
)

export default App
