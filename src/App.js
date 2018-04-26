import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import theme from './theme'
import TopPanel from './components/MUI/TopPanel'

const App = () => (
  <MuiThemeProvider theme={theme}>
    <TopPanel />
  </MuiThemeProvider>
)

export default App
