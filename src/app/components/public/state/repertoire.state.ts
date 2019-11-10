import {State, Action, StateContext} from '@ngxs/store';
import {RepertoireControllerService} from '../../../../api/services';
import {tap} from 'rxjs/operators';
import {RepertoireDto} from '../../../../api/models/repertoire-dto';
import {replaceNgsp} from '@angular/compiler/src/ml_parser/html_whitespaces';

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


export class RepertoireStateModel {
  public repertoireList: RepertoireDto[];
}

@State<RepertoireStateModel>({
  name: 'repertoire', // nazwa state
  defaults: {
    repertoireList: []
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

  @Action(AddRepertoireAction)
  addRepertoire(ctx: StateContext<RepertoireStateModel>, {repertoireDto}: AddRepertoireAction) {
    // const dateForSend = date.split('.').join('-');
    return this.repertoireControllerService.addRepertoireUsingPOST(repertoireDto).pipe(
      tap(value => {
      })
    );
  }
}


