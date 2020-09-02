const _ = require('lodash')

const { crendetials } = require('./Credential')

class AsyncTokenService {
  authenticate(credential) {
    return new Promise((resolve, reject) => {
      const cred = crendetials.find((cre) => _.isEqual(cre, credential))

      cred ? resolve(cred) : reject('user not found')
    })
  }

  issueToken(crendetials) {
    return new Promise((resolve, reject) => {
      const token = crendetials.username + new Date().toISOString()

      token
        ? resolve(token)
        : reject('Some error occured while creating the token')
    })
  }
}

module.exports = AsyncTokenService
