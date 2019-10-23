/* tslint:disable */
import { SeatDto } from './seat-dto';
import { LocalTime } from './local-time';
export interface ReservationDto {
  date?: string;
  id?: number;
  movieId?: number;
  seat?: SeatDto;
  time?: LocalTime;
}
