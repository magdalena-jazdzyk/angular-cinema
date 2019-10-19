import {Component, OnInit} from '@angular/core';
import {Store, Select} from '@ngxs/store';
import {Observable} from 'rxjs';
import {PageMovieDto} from 'src/api/models';
import {LoadMovieAction} from '../movie.state';
import {first, take} from 'rxjs/operators';
import {subscribe} from 'graphql';
import {CreateReservationAction} from '../reservation.state';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'title', 'genre', 'price'];
  @Select(state => state.user.jwtToken)
  token$: Observable<string>;

  @Select(state => state.movie.moviePageDto)
  moviesPage$: Observable<PageMovieDto>;

  constructor(public store: Store) {
  }

  ngOnInit() {
    this.store.dispatch(new LoadMovieAction(0, 5));
    let snapshotToken = null;
    this.token$.pipe(first()).subscribe(s => snapshotToken = s).unsubscribe();
    console.log(snapshotToken);
    this.token$.subscribe(r => {
      console.log(r);

      if (r) {
        this.displayedColumns.push('reservation');
      }
    }).unsubscribe();
  }

  changePage(event) {
    console.log(event);
    this.store.dispatch(new LoadMovieAction(event.pageIndex, event.pageSize));
  }

  reserve(element) {
    this.store.dispatch(new CreateReservationAction({
      movieId : element.id
    }));

    console.log(element);
  }

}
