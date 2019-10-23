import {State, Action, StateContext} from '@ngxs/store';
import {tap} from 'rxjs/operators';
import {RepertoireControllerService} from '../../../../api/services/repertoire-controller.service';
import {SeatControllerService} from '../../../../api/services';
import {Observable as __Observable} from 'rxjs';
import {SeatDto} from '../../../../api/models/seat-dto';

export class LoadSeatsActions {
  static readonly type = '[seats] loadpage';

  constructor(public movieId: number, public date: string, public time: string) {

  }
}

export class SeatsStateModel {
  public seats: SeatDto[];
}

@State<SeatsStateModel>({
  name: 'seats',
  defaults: {
    seats: null
  }
})
export class SeatsState {

  constructor(public seatControllerService: SeatControllerService) {
  }


  @Action(LoadSeatsActions)
  add(ctx: StateContext<SeatsStateModel>, {movieId, date, time}: LoadSeatsActions) {
    return this.seatControllerService.findAllMovieUsingGET1({movieId, date, time}).pipe(
      tap(value => {
        ctx.patchState({
          seats: value
        });
      })
    );

  }
}
