import { State, Action, StateContext } from '@ngxs/store';
import { GetReservationByMovieAction } from './reservation.actions';

export class ReservationStateModel {

}

@State<ReservationStateModel>({
  name: 'reservation',
  defaults: {
  }
})
export class ReservationState {

}
