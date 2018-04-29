import React from 'react'

import RaisedButton from '../../../../components/RaisedButton'
import TitledList from '../../../../components/TitledList'
import { Container, Text } from '../../../../components/ListItem'

const Session = () => (
  <TitledList title="Session">
    <Container>
      <Text label="ID" />
    </Container>
    <Container>
      <Text label="Time left" />
    </Container>
    <Container>
      <RaisedButton
        color="primary"
      >
        create
      </RaisedButton>
    </Container>
  </TitledList>
)

export default Session
