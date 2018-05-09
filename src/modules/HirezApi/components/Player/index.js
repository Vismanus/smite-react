import React from 'react'

import TitledList from '../../../../components/TitledList'
import { Container, DoubleText } from '../../../../components/ListItem'

const Player = () => (
  <TitledList title="Player">
    <Container>
      <DoubleText label="player" value="playerName" />
    </Container>
  </TitledList>
)

export default Player
