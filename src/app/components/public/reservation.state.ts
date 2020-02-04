import {State, Action, StateContext, Selector} from '@ngxs/store';


export class CreateReservationAction {
  static readonly type = '[reservation] createReservationAction';


}

export class ReservationStateModel {
}

@State<ReservationStateModel>({
  name: 'reservation',
  defaults: {}
})
export class ReservationState {

}
