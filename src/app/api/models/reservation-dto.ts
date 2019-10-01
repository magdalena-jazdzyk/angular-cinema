/* tslint:disable */
import { MovieDto } from './movie-dto';
import { UserDto } from './user-dto';
export interface ReservationDto {
  id?: number;
  movie?: MovieDto;
  user?: UserDto;
}
