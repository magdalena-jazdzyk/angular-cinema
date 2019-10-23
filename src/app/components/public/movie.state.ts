import {State, Action, StateContext} from '@ngxs/store';

import {tap} from 'rxjs/operators';
import {PageMovieDto} from 'src/api/models';
import {MovieControllerService} from 'src/api/services';

export class LoadMovieAction {
  static readonly type = '[movie] loadpage';

  constructor(public page: number, public size: number) {

  }


}

export class MovieStateModel {
  public moviePageDto: PageMovieDto;
}


@State<MovieStateModel>({
  name: 'movie',
  defaults: {
    moviePageDto: {}
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


}
