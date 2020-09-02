import _ from 'lodash'

import { credentialsList, ICredentials } from '../Credential'

export default class AsyncTokenService {
  authenticate(credential: ICredentials): Promise<ICredentials | string> {
    return new Promise((resolve, reject) => {
      const cred = credentialsList.find((cre) => _.isEqual(cre, credential))
      cred ? resolve(cred) : reject('User not found')
    })
  }

  issueToken(credentials: ICredentials): Promise<string> {
    return new Promise((resolve, reject) => {
      const token = credentials.username + new Date().toISOString()

      token
        ? resolve(token)
        : reject('Some error occured while creating the token')
    })
  }

  requestToken(credential: ICredentials): Promise<string> {
    return new Promise(async (resolve, reject) => {
      const user = await this.authenticate(credential)
      console.log(user)

      // if (typeof user === undefined) {
      //   reject('User not found')
      // }

      // const token = await this.issueToken(user as ICredentials)

      // token
      //   ? resolve(token)
      //   : reject('Some error occured while creating the token')
    })
  }
}
