import {Component, OnInit} from '@angular/core';
import {LoadMovieAction} from '../../public/movie.state';
import {Select, Store} from '@ngxs/store';
import {MatDialog} from '@angular/material';
import {Router} from '@angular/router';
import {LoadUsersAction, UpdateUserAction} from '../../public/user.state';
import {Observable} from 'rxjs';
import {PageMovieDto} from '../../../../api/models/page-movie-dto';
import {UserDto} from '../../../../api/models/user-dto';
import {PageUserDto} from '../../../../api/models/page-user-dto';
import {EditMovieComponent} from '../../public/edit-movie/edit-movie.component';
import {UpdateUserComponent} from '../update-user/update-user.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.sass']
})
export class UserListComponent implements OnInit {

  displayedColumns: string[] = ['username', 'updateUser'];

  @Select(state => state.user.userPageDto)
  userPageDto$: Observable<PageUserDto>;

  @Select(state => state.user.currentUser)
  user$: Observable<UserDto>;

  constructor(public store: Store, public matDialog: MatDialog, public router: Router) {
  }

  ngOnInit() {
    this.store.dispatch(new LoadUsersAction(0, 5));
  }

  changePage(event) {
    console.log(event);
    this.store.dispatch(new LoadUsersAction(event.pageIndex, event.pageSize));
  }

  // edit(element: any) {
  //   this.matDialog.open(UpdateUserComponent, {
  //     width: '80%', data: element, height: '100%'
  //   });
  // }

  updateUser(element: any) {
    this.matDialog.open(UpdateUserComponent, {
      width: '80%', data: element, height: '100%'
    });
  }

}
