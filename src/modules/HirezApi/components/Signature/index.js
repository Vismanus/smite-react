import React from 'react'

import RaisedButton from '../../../../components/RaisedButton'
import TitledList from '../../../../components/TitledList'
import { Container } from '../../../../components/ListItem'
import Input from '../../../../components/Input'

const styles = {
  button: {
    marginLeft: 24
  }
}

const Signature = () => (
  <TitledList title="Signature">
    <Container>
      <Input
        label="authKey"
      />
      <RaisedButton
        style={styles.button}
        color="primary"
      >
        save
      </RaisedButton>
    </Container>
  </TitledList>
)

export default Signature
