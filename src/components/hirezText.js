import React from 'react'
import Hirez from 'hirez.js'

const hirez = new Hirez({
  devId: '2575',
  authKey: 'F87240FCDE3E49B0B8D47EED2E117038'
})

hirez
  .smite('pc')
  .session.generate()
  .then((res) => {
    console.log('sessionId: ', res)
  })

// hirez
//   .smite('pc')
//   .test()
//   .then((response) => {
//     console.log('test response: ', response)
//   })

const HirezText = () => (
  <div>
    Text to confirm hirezText exists
  </div>
)

export default HirezText
