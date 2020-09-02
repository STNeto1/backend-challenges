export class UserToken {
  private token: string

  constructor(token: string) {
    this.token = token
  }

  public getToken() {
    return this.token
  }
}
