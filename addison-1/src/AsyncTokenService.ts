import _ from 'lodash'

import { credentialsList, ICredentials } from './Credential'

export default class AsyncTokenService {
  authenticate(credential: ICredentials) {
    return new Promise((resolve, reject) => {
      const cred = credentialsList.find((cre) => _.isEqual(cre, credential))

      cred ? resolve(cred) : reject('User not found')
    })
  }

  issueToken(credentials: ICredentials) {
    return new Promise((resolve, reject) => {
      const token = credentials.username + new Date().toISOString()

      token
        ? resolve(token)
        : reject('Some error occured while creating the token')
    })
  }
}
