export class GetReservationByMovieAction {
  static readonly type = '[Reservation] GetReservationByMovie';
  constructor(public id: number, public date: string) {

   }
}
