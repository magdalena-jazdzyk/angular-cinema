/* tslint:disable */
import { VideoDto } from './video-dto';
import { Pageable } from './pageable';
import { Sort } from './sort';
export interface PageVideoDto {
  numberOfElements?: number;
  content?: Array<VideoDto>;
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
