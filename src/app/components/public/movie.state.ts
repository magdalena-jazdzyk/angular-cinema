import {State, Action, StateContext} from '@ngxs/store';

import {tap} from 'rxjs/operators';
import {MovieDto, PageMovieDto} from 'src/api/models';
import {MovieControllerService} from 'src/api/services';

export class LoadMovieAction {
  static readonly type = '[movie] loadpage';

  constructor(public page: number, public size: number, public title ?: string) {

  }

}

export class LoadMovieByIdAction {
  static readonly type = '[movie] movieId';

  constructor(public movieId: number) {

  }
}

export class RemoveMovieAction {
  static readonly type = '[movie] removeMovieAction';

  constructor(public movieId: number) {

  }
}

export class AddMovieAction {
  static readonly type = '[movie] addMovieAction';

  constructor(public movieDto: MovieDto) {

  }

}

export class EditMovieAction {
  static readonly type = '[movie] editMovieAction';

  constructor(public id: number, public movieDto: MovieDto) {

  }
}

export class SearchMovieAction {
  static readonly type = '[movie] searchMovie';

  constructor(public title: string) {

  }
}


export class FindTheFirstPageAction {
  static readonly type = '[movie] findTheFirstPage';

  constructor() {
  }
}


export class MovieStateModel {
  public moviePageDto: PageMovieDto;
  public movie: MovieDto;  // w steie che przetrzymac cały opis obiketu
  public page: number;
  public size: number;
  public title: string;
}


@State<MovieStateModel>({
  name: 'movie',
  defaults: {
    moviePageDto: {},
    movie: {},
    page: 0,
    size: 5,
    title: null
  }
})
export class MovieState {

  constructor(public movieService: MovieControllerService) {

  }


  @Action(LoadMovieAction)
  loadMovie(ctx: StateContext<MovieStateModel>, {page, size, title}: LoadMovieAction) {

    if (size == null) {
      size = ctx.getState().size;
    }

    if (title == null) {
      title = ctx.getState().title;
    }
    return this.movieService.findAllMovieUsingGET({page, size, movieTitle: title}).pipe(
      tap(value => {
        ctx.patchState({ // pagestate - zmiana state wartosc moviepagedto
          moviePageDto: value,
          page,
          size,
          title
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

  @Action(RemoveMovieAction)
  removeMovieAction(ctx: StateContext<MovieStateModel>, {movieId}: RemoveMovieAction) {
    return this.movieService.deleteUsingDELETE(movieId).pipe(
      tap(value => {
        ctx.dispatch(new LoadMovieAction(ctx.getState().page, ctx.getState().size));
      })
    );
  }

  @Action(AddMovieAction)
  addMovie(ctx: StateContext<MovieStateModel>, {movieDto}: AddMovieAction) {
    return this.movieService.addMovieUsingPOST(movieDto).pipe(
      tap(value => {
        console.log(value);
      })
    );
  }

  @Action(EditMovieAction)
  editMovie(ctx: StateContext<MovieStateModel>, {id, movieDto}: EditMovieAction) {
    return this.movieService.updateUsingPUT({id, movieDto}).pipe(
      tap(value => {
        ctx.dispatch(new LoadMovieAction(ctx.getState().page, ctx.getState().size)); // przelaowanie strony
      })
    );
  }

  @Action(FindTheFirstPageAction)
  findTheFirstPage(ctx: StateContext<MovieStateModel>, {}: FindTheFirstPageAction) {
    return this.movieService.findAllMovieUsingGET({page: 0, size: 12}).pipe(
      tap(value => {
        ctx.patchState({
          moviePageDto: value,
        });
      })
    );
  }
}
