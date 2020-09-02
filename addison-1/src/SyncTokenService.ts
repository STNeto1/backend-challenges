import _ from 'lodash'
import { credentialsList, ICredentials } from './Credential'

export default class SyncTokenService {
  authenticate(crendential: ICredentials, cb: any, error: any) {
    const cred = credentialsList.find((cre) => _.isEqual(cre, crendential))
    cred ? cb(cred) : error('User not found')
  }

  issueToken(crendential: ICredentials, cb: any, error: any) {
    const token = crendential.username + new Date().toISOString()

    token ? cb(token) : error('Error occured while creating token')
  }
}
