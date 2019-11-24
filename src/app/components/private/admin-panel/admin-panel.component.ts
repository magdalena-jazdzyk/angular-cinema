import {Component, OnInit} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {Observable} from 'rxjs';
import {PageMovieDto} from '../../../../api/models/page-movie-dto';
import {UserDto} from '../../../../api/models/user-dto';
import {MatDialog} from '@angular/material';
import {LoadMovieAction, RemoveMovieAction} from '../../public/movie.state';
import {RepertoireCreateComponent} from '../repertoire-create/repertoire-create.component';
import {EditMovieComponent} from '../../public/edit-movie/edit-movie.component';
import {UpdateUserAction} from '../../public/user.state';
import {UpdateUserComponent} from '../update-user/update-user.component';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  displayedColumns: string[] = ['title', 'edytuj', /*'updateUser',*/ 'usuń', 'dodaj'];

  @Select(state => state.movie.moviePageDto)
  moviesPage$: Observable<PageMovieDto>;

  @Select(state => state.user.jwtToken)
  token$: Observable<string>;

  @Select(state => state.user.currentUser)
  user$: Observable<UserDto>;

  constructor(public store: Store, public matDialog: MatDialog) {
  }


  ngOnInit() {
    this.store.dispatch(new LoadMovieAction(0, 5));

  }

  changePage(event) {
    console.log(event);
    this.store.dispatch(new LoadMovieAction(event.pageIndex, event.pageSize));
  }

  remove(element: any) {
    this.store.dispatch(new RemoveMovieAction(element.id));
  }

  addRepertoire(element: any) {
    this.matDialog.open(RepertoireCreateComponent, {  // do otwierania modalu
      width: '80%', data: element, height: '100%'
    });
  }

  edit(element: any) {
    this.matDialog.open(EditMovieComponent, {
      width: '80%', data: element, height: '100%'
    });
  }

  // updateUser(element: any) {
  //   this.matDialog.open(UpdateUserComponent, {
  //     width: '80%', data: element, height: '100%'
  //   });
  // }

}
