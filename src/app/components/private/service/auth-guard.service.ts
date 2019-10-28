import {Injectable} from '@angular/core';
import {Store} from '@ngxs/store';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {UserState} from '../../public/user.state';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(public store: Store, public router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.store.selectSnapshot(UserState.jwtToken)) {
      if (next.data.role) {
        return this.store.selectSnapshot(UserState.currentUser).roles.includes(next.data.role);
      }
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }

}
