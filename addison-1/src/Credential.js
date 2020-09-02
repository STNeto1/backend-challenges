const crendetials = []

class Credential {
  constructor(username, password) {
    this.username = username
    this.password = password

    crendetials.push({ username, password })
  }
}

module.exports = {
  Credential,
  crendetials,
}
