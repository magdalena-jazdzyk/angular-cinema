import { State, Action, StateContext } from '@ngxs/store';
import { LoginAction } from './user.actions';
import { HttpClient } from '@angular/common/http';

export class UserStateModel {
  public jwtToken : string 
}



@State<UserStateModel>({
  name: 'user',
  defaults: {
    jwtToken : ''
  }
})
export class UserState {

  constructor(public httpClient: HttpClient) { }



  @Action(LoginAction)
  login(ctx: StateContext<UserStateModel>, {username,password}: LoginAction) {
  }
}
