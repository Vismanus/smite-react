import React from 'react'

import RaisedButton from '../../../../components/RaisedButton'
import TitledList from '../../../../components/TitledList'
import { Container, DoubleText } from '../../../../components/ListItem'

const Session = () => (
  <TitledList title="Session">
    <Container>
      <DoubleText label="ID" />
    </Container>
    <Container>
      <DoubleText label="Time left" />
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
