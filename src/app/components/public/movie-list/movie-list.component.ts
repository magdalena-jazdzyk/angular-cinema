import {Component, OnInit} from '@angular/core';
import {Store, Select} from '@ngxs/store';
import {Observable} from 'rxjs';
import {PageMovieDto, UserDto} from 'src/api/models';
import {LoadMovieAction, RemoveMovieAction} from '../movie.state';
import {MatDialog} from '@angular/material';
import {ReservationComponent} from '../reservation/reservation.component';
import {RepertoireCreateComponent} from '../../private/repertoire-create/repertoire-create.component';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'title', 'genre', 'price', 'films'];
  @Select(state => state.user.jwtToken)
  token$: Observable<string>;

  @Select(state => state.movie.moviePageDto)
  moviesPage$: Observable<PageMovieDto>;

  @Select(state => state.user.currentUser)
  currentUser$: Observable<UserDto>;

  constructor(public store: Store, public matDialog: MatDialog) {
  }

  ngOnInit() {
    this.store.dispatch(new LoadMovieAction(0, 5));
    this.token$.subscribe(r => {
      console.log(r);

      if (r) {
        this.displayedColumns.push('reservation');
      }
    }).unsubscribe();

    this.currentUser$.subscribe(r => {
      console.log(r);

      if (r && r.roles.includes('ROLE_ADMIN')) {
        this.displayedColumns.push('remove');
        this.displayedColumns.push('dodaj');

      }
    }).unsubscribe();
  }

  changePage(event) {
    console.log(event);
    this.store.dispatch(new LoadMovieAction(event.pageIndex, event.pageSize));
  }

  reserve(element) {
    this.matDialog.open(ReservationComponent, {
      width: '80%', data: element, height: '100%'
    });
    //   this.store.dispatch(new CreateReservationAction({
    //   movieId: element.id
  }


  remove(element: any) {
    this.store.dispatch(new RemoveMovieAction(element.id));
  }

  addRepertoire(element: any) {
    this.matDialog.open(RepertoireCreateComponent, {  // do otwierania modalu
      width: '80%', data: element, height: '100%'
    });
  }
}
