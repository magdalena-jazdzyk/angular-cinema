import {State, Action, StateContext, Selector} from '@ngxs/store';
import {UserControllerService, SecurityControllerService} from 'src/api/services';
import {HttpClient} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
// import { User } from 'src/api/models';
import {Router} from '@angular/router';
import {MovieDto, PageMovieDto, PageUserDto, UserDto} from 'src/api/models';
import {EditMovieAction, LoadMovieAction, MovieStateModel, RemoveMovieAction} from './movie.state';
import {of} from 'rxjs';

const name = '[User]';

export class LoginAction {
  static readonly type = '${name} Login';

  constructor(public userName: string, public password: string) {
  }
}

export class UpdateUserAction {
  static readonly type = '[User] updateUser';

  constructor(public id: number, public userDto: UserDto) {
  }
}

export class RemoveUserAction {
  static readonly type = '[User] removeUserAction';

  constructor(public userId: number) {
  }
}

export class RegisterAction {
  static readonly type = '${name} Register';

  constructor(public user: UserDto) {
  }
}

export class AddUserAction {
  static readonly type = '${name} addUser';

  constructor(public user: UserDto) {
  }
}


export class LogoutAction {
  static readonly type = '${name} Logout';

  constructor() {
  }
}

export class LoadUsersAction {
  static readonly type = '[User] loadUsers';

  constructor(public page: number, public size: number) {

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

  public userPageDto: PageUserDto;
  public page: number;
  public size: number;
  public errorLogin: boolean;
  public errorRegister: boolean;
}

@State<UserStateModel>({
  name: 'user',
  defaults: {
    jwtToken: null,
    currentUser: {},
    users: [],
    userPageDto: {},
    page: 0,
    size: 5,
    errorLogin: false,
    errorRegister: false
  }
})

export class UserState {
  constructor(public httpClient: HttpClient, public userService: UserControllerService, public router: Router, public securityControllerService: SecurityControllerService) {

  }

  @Selector()
  static jwtToken(state: UserStateModel) {
    return state.jwtToken;
  }

  @Selector()
  static currentUser(state: UserStateModel) {
    return state.currentUser;
  }

  @Action(LoginAction)
  login(ctx: StateContext<UserStateModel>, {userName, password}: LoginAction) {
    return this.httpClient.post<{ accessToken, refreshToken }>('http://localhost:8080/login', {
      username: userName,
      password
    }).pipe(
      tap(({accessToken, refreshToken}) => {
        ctx.patchState({
          jwtToken: accessToken,
          errorLogin: false,
        });
        ctx.dispatch(new GetCurrentUserAction());
        //   ctx.dispatch(new GetCurrentUserAction())
      }),
      catchError((err, caught) => {
        ctx.patchState({
          errorLogin: true
        });
        return of();
      })
    );
  }

  @Action(GetCurrentUserAction)
  getCurrentUser(ctx: StateContext<UserStateModel>, {}: GetCurrentUserAction) {
    return this.userService.getUserDataUsingGET().pipe(tap(value => {
        ctx.patchState({
          currentUser: value
        });
        this.router.navigate(['/movies']);
      }
    ));

  }

  // @Action(RegisterAction)
  // register(ctx: StateContext<UserStateModel>, user: RegisterAction) {
  //   return this.securityControllerService.registerUsingPOST(user.user).pipe(
  //     tap(value => {
  //       this.router.navigate(['/login']);
  //     })
  //   );
  // }


  @Action(RegisterAction)
  register(ctx: StateContext<UserStateModel>, user: RegisterAction) {
    return this.securityControllerService.registerUsingPOST(user.user).pipe(
      tap((value) => {
        this.router.navigate(['/login']);
      }),
      catchError((err, caught) => {
        ctx.patchState({
          errorRegister: true
        });
        return of();
      })
    );
  }

  @Action(AddUserAction)
  addUser(ctx: StateContext<UserStateModel>, user: AddUserAction) {
    return this.securityControllerService.registerUsingPOST(user.user).pipe(
      tap(value => {
        this.router.navigate(['/users']);
      })
    );
  }

  @Action(LogoutAction)
  logout(ctx: StateContext<UserStateModel>, {}: LogoutAction) {
    ctx.patchState({jwtToken: null, currentUser: {}});
  }

  @Action(UpdateUserAction)
  editUser(ctx: StateContext<UserStateModel>, {id, userDto}: UpdateUserAction) {
    return this.userService.updateUserUsingPUT({id, userDto}).pipe(
      tap(value => {
        ctx.dispatch(new LoadUsersAction(ctx.getState().page, ctx.getState().size)); // przelaowanie strony
      })
    );
  }

  @Action(RemoveUserAction)
  removeUserAction(ctx: StateContext<UserStateModel>, {userId}: RemoveUserAction) {
    return this.userService.deleteUserUsingDELETE(userId).pipe(
      tap(value => {
        ctx.dispatch(new LoadUsersAction(ctx.getState().page, ctx.getState().size));
      })
    );
  }

  @Action(LoadUsersAction)
  loadUser(ctx: StateContext<UserStateModel>, {page, size}: LoadUsersAction) {
    return this.userService.findAllUsersUsingGET({page, size}).pipe(
      tap(value => {
        ctx.patchState({
          userPageDto: value,
          page,
          size
        });
      })
    );
  }

}
