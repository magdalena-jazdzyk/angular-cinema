import { State, Action, StateContext } from '@ngxs/store';
//import { LoginAction } from './user.actions';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

export class LoginAction {
  static readonly type = '[User] Login';
  constructor(public username: string, public password: string) { }
}



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

  constructor(public httpClient: HttpClient, public router: Router) { }



  @Action(LoginAction)
  login(ctx: StateContext<UserStateModel>, {username,password}: LoginAction) {
    console.log('ula')

    return this.httpClient.post<{accessToken, refreshToken}>('http://localhost:8080/login',{username:username,password:password}).pipe(
        tap(({accessToken, refreshToken})=>{
          ctx.patchState({
            jwtToken : accessToken
          })
          this.router.navigate([
            '/movies'
          ])
        })
    )

  }
}
