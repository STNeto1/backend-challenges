export interface ICredentials {
  username: string
  password: string
}
export const credentialsList: ICredentials[] = []

export class Credentials {
  constructor(credentials: ICredentials) {
    credentialsList.push(credentials)
  }
}
