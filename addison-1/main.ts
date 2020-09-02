import { Credentials, ICredentials } from './src/Credential'
import AsyncTokenService from './src/AsyncTokenService'
import SyncTokenService from './src/SyncTokenService'

const user = {
  username: 'neto',
  password: 'neto',
}

new Credentials(user)
const atr = new AsyncTokenService()
const str = new SyncTokenService()
