/* tslint:disable */
import { ReservationDto } from './reservation-dto';
import { LocalTime } from './local-time';
export interface SeatDto {
  columnNumber?: number;
  date?: string;
  id?: number;
  movieId?: number;
  reservation?: ReservationDto;
  rowNumber?: number;
  time?: LocalTime;
}
