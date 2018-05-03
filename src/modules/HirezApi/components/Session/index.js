import React from 'react'

import RaisedButton from '../../../../components/RaisedButton'
import TitledList from '../../../../components/TitledList'
import { Container, DoubleText } from '../../../../components/ListItem'

const Session = () => (
  <TitledList title="Session">
    <Container>
      <DoubleText label="Current" />
    </Container>
    <Container>
      <DoubleText label="time left" />
    </Container>
    <Container>
      <RaisedButton>
        create new session
      </RaisedButton>
    </Container>
    <Container>
      <DoubleText label="devId" />
    </Container>
    <Container>
      <DoubleText label="Signature" />
    </Container>
    <Container>
      <DoubleText label="timestamp" />
    </Container>
  </TitledList>
)

export default Session
