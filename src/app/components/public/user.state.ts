import {State, Action, StateContext, Selector} from '@ngxs/store';
import {UserControllerService, SecurityControllerService} from 'src/api/services';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';
// import { User } from 'src/api/models';
import {Router} from '@angular/router';
import {UserDto} from 'src/api/models';

const name = '[User]';

export class LoginAction {
  static readonly type = '${name} Login';

  constructor(public userName: string, public password: string) {
  }
}

export class RegisterAction {
  static readonly type = '${name} Register';

  constructor(public user: UserDto) {
  }
}

export class LogoutAction {
  static readonly type = '${name} Logout';

  constructor() {
  }
}

export class GetCurrentUserAction {
  static readonly type = '${name} getUser';

  constructor() {
  }
}

export class GettAllUsersQL {
  static readonly type = '${name} GettAllUsersQL';

  constructor() {
  }
}

export class SaveUsersQL {
  static readonly type = '${name} SaveUsersQL';

  constructor(public user) {
  }
}

export class UserStateModel {
  public jwtToken: string;
  public currentUser: UserDto;
  public users: Array<any>;
}

@State<UserStateModel>({
  name: 'user',
  defaults: {
    jwtToken: null,
    currentUser: {},
    users: []
  }
})
export class UserState {
  constructor(public httpClient: HttpClient, public userService: UserControllerService, public router: Router, public securityControllerService: SecurityControllerService) {

  }

  @Selector()
  static jwtToken(state: UserStateModel) {
    return state.jwtToken;
  }

  @Action(LoginAction)
  login(ctx: StateContext<UserStateModel>, {userName, password}: LoginAction) {
    return this.httpClient.post<{ accessToken, refreshToken }>('http://localhost:8080/login', {
      username: userName,
      password: password
    }).pipe(
      tap(({accessToken, refreshToken}) => {
        ctx.patchState({
          jwtToken: accessToken
        });
        //   ctx.dispatch(new GetCurrentUserAction())
        this.router.navigate(['/movies']);
      })
    );
  }

  @Action(GetCurrentUserAction)
  getCurrentUser(ctx: StateContext<UserStateModel>, GetCurrentUserAction) {
    // return this.userService.getUserInfoUsingGET().pipe(tap(value =>
    //   ctx.patchState({
    //     currentUser: value
    //   })
    // ))
  }

  @Action(RegisterAction)
  register(ctx: StateContext<UserStateModel>, user: RegisterAction) {
    return this.securityControllerService.registerUsingPOST(user.user).pipe(
      tap(value => {
        this.router.navigate(['/login']);
      })
    );
  }

  @Action(LogoutAction)
  logout(ctx: StateContext<UserStateModel>, LogoutAction) {
    ctx.patchState({jwtToken: null});
  }

}
