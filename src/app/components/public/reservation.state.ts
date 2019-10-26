import {State, Action, StateContext, Selector} from '@ngxs/store';
// import {ReservationControllerService} from 'src/api/services';
import {tap} from 'rxjs/operators';
// import {ReservationDto} from '../../../api/models/reservation-dto';

export class CreateReservationAction {
  static readonly type = '[reservation] createReservationAction';

  // constructor(public reservationDto: ReservationDto) {
  //
  // }
}

export class ReservationStateModel {
}

@State<ReservationStateModel>({
  name: 'reservation',
  defaults: {}
})
export class ReservationState {
  // constructor(public reservationControllerService: ReservationControllerService) {
  // }
  //
  // @Action(CreateReservationAction)
  // addReservation(ctx: StateContext<ReservationStateModel>, {reservationDto}: CreateReservationAction) {
  //   return this.reservationControllerService.addReservationUsingPOST(reservationDto).pipe(
  //     tap(value => {
  //       console.log(value);
  //     })
  //   );
  // }

}
