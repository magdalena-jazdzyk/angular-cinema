import {State, Action, StateContext, Store} from '@ngxs/store';
import {VideoControllerService} from '../../../../api/services';
import {tap} from 'rxjs/operators';
import {VideoDto} from '../../../../api/models/video-dto';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

export class LoadVideoAction {
  static readonly type = '[video] loadpage';

  constructor(public movieId: number) {

  }
}

export class MovieVideoStateModel {
  public videos: SafeResourceUrl[];
}

@State<MovieVideoStateModel>({
  name: 'movieVideo',
  defaults: {
    videos: []
  }
})
export class MovieVideoState {
  constructor(public videoControllerService: VideoControllerService, private sanitizer: DomSanitizer) {
  }

  @Action(LoadVideoAction)
  add(ctx: StateContext<MovieVideoStateModel>, movieId: LoadVideoAction) {
    const state = ctx.getState();
    return this.videoControllerService.findVideoByMovieUsingGET(movieId.movieId).pipe(
      tap(value => {
        const urls: SafeResourceUrl[] = [];
        value.forEach(s => {
          urls.push(this.sanitizer.bypassSecurityTrustResourceUrl(s.keyHash.replace('watch?v=', 'embed/')));
        });
        ctx.patchState({
          videos: urls
        });
      })
    );
  }
}
