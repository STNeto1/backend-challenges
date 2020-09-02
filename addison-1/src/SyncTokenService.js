const _ = require('lodash')

const { crendetials } = require('./Credential')

class SyncTokenService {
  authenticate(credential, cb, error) {
    const cred = crendetials.find((cre) => _.isEqual(cre, credential))

    cred ? cb(cred) : error('Some error occured while authenticating')
  }

  issueToken(crendetials, cb, error) {
    const token = crendetials.username + new Date().toISOString()
    token ? cb(token) : error('Some error occured while creating the token')
  }
}

module.exports = SyncTokenService
