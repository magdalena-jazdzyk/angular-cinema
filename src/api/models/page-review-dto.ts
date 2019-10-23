/* tslint:disable */
import { ReviewDto } from './review-dto';
import { Pageable } from './pageable';
import { Sort } from './sort';
export interface PageReviewDto {
  numberOfElements?: number;
  content?: Array<ReviewDto>;
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
