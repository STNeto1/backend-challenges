import { Credentials } from '../Credential'
import { User } from '../User'
import { UserToken } from '../UserToken'

export interface ISyncTokenService {
  authenticate(credentials: Credentials): User
  requestToken(user: User): UserToken
  issueToken(credentials: Credentials): UserToken
}

export interface IAsyncTokenService {
  authenticate(credentials: Credentials): Promise<User>
  requestToken(user: User): Promise<UserToken>
  issueToken(credentials: Credentials): Promise<UserToken>
}

export class AsyncTokenService implements IAsyncTokenService {
  authenticate(credentails: Credentials): Promise<User | null> {}
}
