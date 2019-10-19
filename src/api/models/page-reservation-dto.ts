/* tslint:disable */
import { ReservationDto } from './reservation-dto';
import { Pageable } from './pageable';
import { Sort } from './sort';
export interface PageReservationDto {
  numberOfElements?: number;
  content?: Array<ReservationDto>;
  first?: boolean;
  last?: boolean;
  number?: number;
  empty?: boolean;
  pageable?: Pageable;
  size?: number;
  sort?: Sort;
  totalElements?: number;
  totalPages?: number;
}
