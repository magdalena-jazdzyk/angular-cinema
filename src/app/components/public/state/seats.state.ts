import {State, Action, StateContext} from '@ngxs/store';
import {tap} from 'rxjs/operators';
import {SeatControllerService} from '../../../../api/services';
import {SeatDto} from '../../../../api/models/seat-dto';

export class LoadSeatsActions {
  static readonly type = '[seats] loadpage';

  constructor(public movieId: number, public date: string, public time: string) {

  }
}

export class ReserveSeatActions {
  static readonly type = '[seats] reserveSeatActions';

  constructor(public movieId: number, public raw: number, public column: number, public repertoireId: number) {

  }
}

export class ClearSeatsActions {
  static readonly type = '[seats] clearSeatsActions';

  constructor() {

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
  loadSeats(ctx: StateContext<SeatsStateModel>, {movieId, date, time}: LoadSeatsActions) {
    return this.seatControllerService.findAllSeatsUsingGET({movieId, date, time}).pipe(
      tap(value => {
        ctx.patchState({
          seats: value
        });
      })
    );

  }


  @Action(ReserveSeatActions)
  reserve(ctx: StateContext<SeatsStateModel>, {movieId, raw, column, repertoireId}: ReserveSeatActions) {
    return this.seatControllerService.reserveSeatUsingPOST({
      repertoireDto: {movieId, id: repertoireId}, columnNumber: column, rowNumber: raw
    }).pipe(
      tap(value => {
        console.log(value);
        // pobieramy ze stanuy wartosc seat
        const seats: SeatDto[] = ctx.getState().seats;
        if (seats) {
          seats.push(value);
          ctx.patchState({
            seats: seats
          });
        }
      })
    );

  }

  @Action(ClearSeatsActions)
  clearSeats(ctx: StateContext<SeatsStateModel>, {}: ClearSeatsActions) {
    ctx.patchState({
      seats: null
    });
  }

}
