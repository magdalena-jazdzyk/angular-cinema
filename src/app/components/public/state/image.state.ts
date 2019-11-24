import {State, Action, StateContext} from '@ngxs/store';
import {ImageDto, PageImageDto} from '../../../../api/models';
import {ImageControllerService} from '../../../../api/services';
import {tap} from 'rxjs/operators';

export class LoadImageAction {
  static readonly type = '[image] loadpage';

  constructor(public movieId: number) {

  }
}

export class LoadImageInMovieIdsAction {
  static readonly type = '[image] loadImageInMovieIds';

  constructor(public movieIds: number[]) {

  }
}

export class LoadImagePageAction {
  static readonly type = '[image] loadImagePageAction';

  constructor(public page: number, public size: number) {

  }
}

export class ImageStateModel {
  public images: ImageDto[];
  public imagesByMovieIds: ImageDto[];
  public imagePageAction: PageImageDto;
}

@State<ImageStateModel>({
  name: 'image', // nzazwa state
  defaults: {
    images: [],
    imagesByMovieIds: [],
    imagePageAction: null
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

  @Action(LoadImageInMovieIdsAction)
  loadImageInMovieIdsAction(ctx: StateContext<ImageStateModel>, {movieIds}: LoadImageInMovieIdsAction) {
    console.log('MovieIds' + movieIds);
    return this.imageControllerService.findImagesByMovieIdInUsingGET(movieIds).pipe(
      tap(value => {
        ctx.patchState({
          imagesByMovieIds: value
        });
      })
    );
  }

  @Action(LoadImagePageAction)
  loadImagePageAction(ctx: StateContext<ImageStateModel>, {page, size}: LoadImagePageAction) {
    return this.imageControllerService.findAllUsingGET({size, page}).pipe(
      tap(value => {
        ctx.patchState({
          imagePageAction: value
        });
      })
    );
  }


}
