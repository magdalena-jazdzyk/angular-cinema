import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { Store, Select } from '@ngxs/store';
import { LogoutAction } from '../user.state';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {

  @Select(state => state.user.jwtToken) jwt$: Observable<string>

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(map(result => result.matches));

  constructor(private breakpointObserver: BreakpointObserver, public store: Store, public router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.store.dispatch(new LogoutAction())
    this.router.navigate(['/login'])
  }
}
