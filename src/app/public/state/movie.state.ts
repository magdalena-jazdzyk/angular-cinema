import { State, Action, StateContext } from '@ngxs/store';
import { LoadMovieAction } from './movie.actions';
import { MovieControllerService } from 'src/app/api/services';
import { PageMovieDto } from 'src/app/api/models';
import { tap } from 'rxjs/operators';

export class MovieStateModel {
  public moviePageDto: PageMovieDto
}

@State<MovieStateModel>({
  name: 'movie',
  defaults: {
    moviePageDto : {}
  }
})
export class MovieState {

  constructor(public movieService:MovieControllerService){
     
  }



  @Action(LoadMovieAction)
  loadMovie(ctx: StateContext<MovieStateModel>, {page,size}: LoadMovieAction) {
   return this.movieService.findAllUsingGET({page,size}).pipe(
    tap(value=>{
      ctx.patchState({ // pagestate - zmiana state wartosc moviepagedto
        moviePageDto : value
      })
    })
   )
  }


}
