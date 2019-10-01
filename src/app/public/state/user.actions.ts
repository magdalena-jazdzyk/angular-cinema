export class LoginAction {
  static readonly type = '[User] Login';
  constructor(public username: string, public password: string) { }
}


