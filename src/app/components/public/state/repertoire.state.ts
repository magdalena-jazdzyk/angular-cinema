import {State, Action, StateContext} from '@ngxs/store';
import {RepertoireControllerService} from '../../../../api/services';
import {tap} from 'rxjs/operators';
import {RepertoireDto} from '../../../../api/models/repertoire-dto';
import {replaceNgsp} from '@angular/compiler/src/ml_parser/html_whitespaces';
import {ClearSeatsActions, SeatsStateModel} from './seats.state';

export class LoadRepertoireByMovieIdAction {
  static readonly type = '[repertoire] loadpage';

  constructor(public date: string, public movieId: number) {

  }
}

export class AddRepertoireAction {
  static readonly type = '[repertoire] addRepertoireAction';

  constructor(public repertoireDto: RepertoireDto) {

  }
}

export class LoadRepertoiresAction {
  static readonly type = '[repertoire] loadRepertoires';

  constructor(public date: string, public movieIds: number[]) {

  }
}

export class CleanRepertoireAction {
  static readonly type = '[repertoire] cleanRepertoire';

  constructor() {

  }
}

export class RepertoireStateModel {
  public repertoireList: RepertoireDto[];
  public repertoiresList: RepertoireDto[];

}

@State<RepertoireStateModel>({
  name: 'repertoire', // nazwa state
  defaults: {
    repertoireList: [],
    repertoiresList: []

  }
})

export class RepertoireState {

  constructor(public repertoireControllerService: RepertoireControllerService) {
  }

  @Action(LoadRepertoireByMovieIdAction)
  load(ctx: StateContext<RepertoireStateModel>, {date, movieId}: LoadRepertoireByMovieIdAction) {
    const dateForSend = date.split('.').join('-');
    return this.repertoireControllerService.findByMovieIdAndDateUsingGET({movieId, date: dateForSend}).pipe(
      tap(value => {
        ctx.patchState({
          repertoireList: value
        });
      })
    );
  }

  @Action(LoadRepertoiresAction)
  loadRepertoires(ctx: StateContext<RepertoireStateModel>, {date, movieIds}: LoadRepertoiresAction) {
    const dateForSend = date.split('.').join('-');
    return this.repertoireControllerService.findByMovieIdsAndDateUsingGET({movieIds, date: dateForSend}).pipe(
      tap(value => {
        ctx.patchState({
          repertoiresList: value
        });
      })
    );
  }

  @Action(AddRepertoireAction)
  addRepertoire(ctx: StateContext<RepertoireStateModel>, {repertoireDto}: AddRepertoireAction) {
    return this.repertoireControllerService.addRepertoireUsingPOST(repertoireDto).pipe(
      tap(value => {
      })
    );
  }

  @Action(CleanRepertoireAction)
  cleanRepertoire(ctx: StateContext<RepertoireStateModel>, {}: CleanRepertoireAction) {
    ctx.patchState({
      repertoireList: [],
    });
  }
}


