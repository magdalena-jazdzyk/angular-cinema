/* tslint:disable */
import { MovieDto } from './movie-dto';
import { Pageable } from './pageable';
import { Sort } from './sort';
export interface PageMovieDto {
  numberOfElements?: number;
  content?: Array<MovieDto>;
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
