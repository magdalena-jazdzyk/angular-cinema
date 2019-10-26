import {State, Action, StateContext} from '@ngxs/store';

import {tap} from 'rxjs/operators';
import {MovieDto, PageMovieDto} from 'src/api/models';
import {MovieControllerService} from 'src/api/services';

export class LoadMovieAction {
  static readonly type = '[movie] loadpage';

  constructor(public page: number, public size: number) {

  }


}

export class LoadMovieByIdAction {
  static readonly type = '[movie] movieId';

  constructor(public movieId: number) {

  }


}

export class MovieStateModel {
  public moviePageDto: PageMovieDto;
  public movie: MovieDto;  // w steie che przetrzymac cały opis obiketu
}


@State<MovieStateModel>({
  name: 'movie',
  defaults: {
    moviePageDto: {},
    movie: {}
  }
})
export class MovieState {

  constructor(public movieService: MovieControllerService) {

  }


  @Action(LoadMovieAction)
  loadMovie(ctx: StateContext<MovieStateModel>, {page, size}: LoadMovieAction) {
    return this.movieService.findAllMovieUsingGET({page, size}).pipe(
      tap(value => {
        ctx.patchState({ // pagestate - zmiana state wartosc moviepagedto
          moviePageDto: value
        });
      })
    );
  }

  @Action(LoadMovieByIdAction)
  loadMovieById(ctx: StateContext<MovieStateModel>, {movieId}: LoadMovieByIdAction) {
    return this.movieService.findOneUsingGET(movieId).pipe(
      tap(value => {
        ctx.patchState({ // pagestate - zmiana state wartosc moviepagedto
          movie: value
        });
      })
    );
  }


}
