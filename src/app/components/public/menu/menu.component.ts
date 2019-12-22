import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {map} from 'rxjs/operators';
import {Store, Select} from '@ngxs/store';
import {LogoutAction} from '../user.state';
import {Router} from '@angular/router';
import {UserDto} from '../../../../api/models/user-dto';
import {MovieDto} from '../../../../api/models/movie-dto';
import {SearchMovieAction} from '../movie.state';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, OnDestroy {

  subscription;
  showAdminPanel = false;

  @Select(state => state.user.jwtToken) jwt$: Observable<string>;

  @Select(state => state.user.currentUser) currentUser$: Observable<UserDto>;

  @Select(state => state.movie.movie) movie$: Observable<MovieDto>;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(map(result => result.matches));

  constructor(private breakpointObserver: BreakpointObserver, public store: Store, public router: Router) {
  }

  ngOnInit() {
    this.subscription = this.currentUser$.subscribe(u => {
      console.log(u);
      // this.showAdminPanel = u === null ? false : u.roles.includes('ROLE_ADMIN');
      if (u.roles) {
        console.log('ala');
        this.showAdminPanel = u.roles.includes('ROLE_ADMIN');
      } else {
        this.showAdminPanel = false;
      }
      console.log(this.showAdminPanel);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  logout() {
    this.store.dispatch(new LogoutAction());
    this.router.navigate(['/login']);
  }

  search(title) {
    this.store.dispatch(new SearchMovieAction(title));
  }


}
