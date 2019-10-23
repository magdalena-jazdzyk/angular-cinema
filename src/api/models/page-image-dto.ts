/* tslint:disable */
import { ImageDto } from './image-dto';
import { Pageable } from './pageable';
import { Sort } from './sort';
export interface PageImageDto {
  numberOfElements?: number;
  content?: Array<ImageDto>;
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
