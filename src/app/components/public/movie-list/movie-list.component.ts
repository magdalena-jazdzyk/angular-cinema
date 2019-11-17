import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store, Select} from '@ngxs/store';
import {Observable} from 'rxjs';
import {ImageDto, PageMovieDto, RepertoireDto, UserDto} from 'src/api/models';
import {FindTheFirstPageAction, LoadMovieAction, RemoveMovieAction} from '../movie.state';
import {MatDialog} from '@angular/material';
import {ReservationComponent} from '../reservation/reservation.component';
import {RepertoireCreateComponent} from '../../private/repertoire-create/repertoire-create.component';
import {EditMovieComponent} from '../edit-movie/edit-movie.component';
import {LoadImageAction, LoadImageInMovieIdsAction} from '../state/image.state';
import {CleanRepertoireAction, LoadRepertoiresAction} from '../state/repertoire.state';
import {Router} from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit, OnDestroy {

  displayedColumns: string[] = ['title', 'hours', 'films'];
  subscription;

  // displayedColumns: string[] = ['id', 'title', 'genre', 'price', 'films'];
  @Select(state => state.user.jwtToken)
  token$: Observable<string>;

  @Select(state => state.movie.moviePageDto)
  moviesPage$: Observable<PageMovieDto>;

  @Select(state => state.user.currentUser)
  currentUser$: Observable<UserDto>;

  // @Select(state => state.image.images)
  // images$: Observable<ImageDto[]>;

  @Select(state => state.image.imagesByMovieIds)
  imagesByMovieIds$: Observable<ImageDto[]>;

  // DODANE
  @Select(state => state.repertoire.repertoiresList)
  repertoiresList$: Observable<RepertoireDto[]>;

  constructor(public store: Store, public matDialog: MatDialog, public router: Router) {
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

      if (r.roles) {
        if (r.roles.includes('ROLE_ADMIN')) {
          this.displayedColumns.push('remove');
          this.displayedColumns.push('dodaj');
          this.displayedColumns.push('edytuj');
        }
      }
    }).unsubscribe();
    this.store.dispatch(new FindTheFirstPageAction());


    this.subscription = this.moviesPage$.subscribe(p => {
      console.log('wartosc p ' + p.content);
      if (p.content !== undefined) {
        const numbers = p.content.map(s => s.id);
        console.log('number' + numbers);
        this.store.dispatch(new LoadImageInMovieIdsAction(numbers));
        this.store.dispatch(new LoadRepertoiresAction(new Date().toLocaleDateString(), numbers));
      }
    });
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.store.dispatch(new CleanRepertoireAction());
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

  edit(element: any) {
    this.matDialog.open(EditMovieComponent, {
      width: '80%', data: element, height: '100%'
    });
  }

  // dodane


  // loadRepertoire(element: string) {
  //   console.log(element);
  //   this.store.dispatch(new LoadRepertoireByMovieIdAction(element, this.data.id));
  //   console.log('laduje repertuar');
  //   this.store.dispatch(new ClearSeatsActions());
  // }
}
