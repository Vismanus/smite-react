import React from 'react'

import Toolbar from 'material-ui/Toolbar'
import Divider from 'material-ui/Divider'

import { Container, SingleText } from '../ListItem'

const MenuItems = () => (
  <div>
    <Toolbar />
    <Divider />
    <Container>
      <SingleText>
        Gods
      </SingleText>
    </Container>
    <Container>
      <SingleText>
        Items
      </SingleText>
    </Container>
    <Container>
      <SingleText>
        Player
      </SingleText>
    </Container>
    <Container>
      <SingleText>
        Devtools
      </SingleText>
    </Container>
  </div>
)

export default MenuItems
