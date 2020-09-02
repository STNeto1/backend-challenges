import { Credentials, ICredentials } from './src/Credential'
import AsyncTokenService from './src/services/AsyncTokenService'
import SyncTokenService from './src/services/SyncTokenService'

const user = {
  username: 'neto',
  password: 'neto',
}

new Credentials(user)
const atr = new AsyncTokenService()
const str = new SyncTokenService()

atr
  .requestToken({ username: 'asd', password: 'asd' })
  .then((token) => {
    console.log('token', token)
  })
  .catch((err) => {
    console.log(err)
  })
