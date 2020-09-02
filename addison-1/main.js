const { Credential } = require('./src/Credential')
const AsyncTokenService = require('./src/AsyncTokenService')
const SyncTokenService = require('./src/SyncTokenService')

const c1 = new Credential('neto', 'neto')
const atr = new AsyncTokenService()
const tr = new SyncTokenService()

atr
  .authenticate({ username: 'uahsud', password: 'uhasudhua' })
  .then((user) => {
    console.log('user found', user)
  })
  .catch((err) => {
    console.log('error', err)
  })
