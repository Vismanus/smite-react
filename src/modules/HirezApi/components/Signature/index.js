import React from 'react'

import RaisedButton from '../../../../components/RaisedButton'
import TitledList from '../../../../components/TitledList'
import { Container, DoubleText } from '../../../../components/ListItem'

const Signature = () => (
  <TitledList title="Signature">
    <Container>
      <DoubleText label="Current" />
    </Container>
    <Container>
      <RaisedButton>Create new signature</RaisedButton>
    </Container>
    <Container>
      <DoubleText label="devId" />
    </Container>
    <Container>
      <DoubleText label="method" />
    </Container>
    <Container>
      <DoubleText label="authKey" />
    </Container>
    <Container>
      <DoubleText label="timestamp" />
    </Container>
  </TitledList>
)

export default Signature
