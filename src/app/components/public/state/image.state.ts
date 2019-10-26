import {State, Action, StateContext} from '@ngxs/store';
import {ImageDto} from '../../../../api/models';
import {ImageControllerService} from '../../../../api/services';
import {tap} from 'rxjs/operators';

export class LoadImageAction {
  static readonly type = '[image] loadpage';

  constructor(public movieId: number) {

  }
}

export class ImageStateModel {
  public images: ImageDto[];
}

@State<ImageStateModel>({
  name: 'image', // nzazwa state
  defaults: {
    images: []
  }
})
export class ImageState {

  public constructor(public imageControllerService: ImageControllerService) {
  }

  @Action(LoadImageAction)
  add(ctx: StateContext<ImageStateModel>, movieId: LoadImageAction) {

    return this.imageControllerService.findImageByMovieUsingGET(movieId.movieId).pipe(
      tap(value => {
        ctx.patchState({
          images: value
        });
      })
    );
  }
}
